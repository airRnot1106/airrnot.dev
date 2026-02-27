'use client';

import type { DrawerRootProps } from '@base-ui/react';
import { DrawerPreview as Drawer } from '@base-ui/react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { Menu } from 'lucide-react';
import type { FC } from 'react';

import { css } from '../../../../../styled-system/css';
import { Button } from '../../../../components/button';
import { ButtonLink } from '../../../../components/button-link';
import { SiteThemeSwitchDropdown } from '../../../site-theme/components/site-theme-switch-dropdown';

export type SiteDrawerProps = DrawerRootProps;

export const SiteDrawer: FC<SiteDrawerProps> = (props) => {
  return (
    <Drawer.Root {...props}>
      <Drawer.Trigger
        render={(props) => (
          <Button
            // @keep-sorted-css
            className={css({
              display: { base: 'block', '@/md': 'none' },
              '--button-padding-inline': 'var(--spacing-2)',
            })}
            type="button"
            variant="ghost"
            {...props}
          >
            <Menu />
          </Button>
        )}
      />
      <Drawer.Portal>
        <Drawer.Backdrop
          // @keep-sorted-css
          className={css({
            position: 'fixed',
            inset: 0,
            minHeight: '100dvh',
            backgroundColor: 'var(--color-mix-base)',
            opacity: 'calc(var(--backdrop-opacity) * (1 - var(--drawer-swipe-progress)))',
            transitionProperty: 'opacity',
            transitionDuration: '450ms',
            transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)',
            '--backdrop-opacity': '0.2',
            '@supports (-webkit-touch-callout: none)': {
              position: 'absolute',
            },
            _osDark: {
              '--backdrop-opacity': '0.7',
            },
            '&[data-starting-style], &[data-ending-style]': {
              opacity: 0,
            },
            '&[data-swiping]': {
              transitionDuration: '0ms',
            },
            '&[data-ending-style]': {
              transitionDuration: 'calc(var(--drawer-swipe-strength) * 400ms)',
            },
          })}
        />
        <Drawer.Viewport
          // @keep-sorted-css
          className={css({
            position: 'fixed',
            inset: 0,
            display: 'flex',
            justifyContent: 'flex-end',
            padding: 'var(--viewport-padding)',
            '--viewport-padding': 'var(--spacing-2)',
            '@supports (-webkit-touch-callout: none)': {
              '--viewport-padding': '0.625rem',
            },
          })}
        >
          <Drawer.Popup
            // @keep-sorted-css
            className={css({
              boxSizing: 'border-box',
              width: 'min(70vw, var(--spacing-96))',
              height: '100%',
              marginRight: 'calc(-1 * var(--bleed))',
              padding: '6',
              paddingRight: 'calc(var(--spacing-3) + var(--bleed))',
              overflowY: 'auto',
              overscrollBehavior: 'contain',
              borderRadius: 'md',
              outline: '1px solid var(--colors-muted)',
              color: 'text',
              backgroundColor: 'base',
              transition: 'transform 450ms cubic-bezier(0.32, 0.72, 0, 1)',
              transform: 'translateX(var(--drawer-swipe-movement-x))',
              willChange: 'transform',
              touchAction: 'auto',
              '--bleed': 'var(--spacing-12)',
              '&[data-swiping]': {
                userSelect: 'none',
              },
              _osDark: {
                outline: '1px solid var(--colors-muted)',
              },
              '&[data-starting-style], &[data-ending-style]': {
                transform: 'translateX(calc(100% - var(--bleed) + var(--viewport-padding)))',
              },
              '&[data-ending-style]': {
                transitionDuration: 'calc(var(--drawer-swipe-strength) * 400ms)',
              },
              '@supports (-webkit-touch-callout: none)': {
                '--bleed': '0px',
                marginRight: '0',
                borderRadius: 'var(--spacing-3)',
              },
            })}
          >
            <Drawer.Content
              // @keep-sorted-css
              className={css({
                width: 'min(100%, var(--spacing-96))',
              })}
            >
              <div
                // @keep-sorted-css
                className={css({
                  display: 'grid',
                  alignItems: 'center',
                  gap: '2',
                  gridAutoFlow: 'column',
                  maxWidth: '48',
                  marginInline: 'auto',
                })}
              >
                <SiteThemeSwitchDropdown />
                <ButtonLink
                  aria-label="GitHub"
                  href="https://github.com/airRnot1106/airrnot.dev"
                  target="_blank"
                  variant="ghost"
                >
                  <SiGithub
                    aria-hidden
                    // @keep-sorted-css
                    className={css({
                      fill: 'currentColor',
                    })}
                    height="28"
                    width="28"
                  />
                </ButtonLink>
              </div>
            </Drawer.Content>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
