import { SiGithub } from '@icons-pack/react-simple-icons';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

import { css, cx } from '../../../../../styled-system/css';
import { cq } from '../../../../../styled-system/patterns';
import { ButtonLink } from '../../../../components/button-link';
import { SiteThemeSwitchDropdown } from '../../../site-theme/components/site-theme-switch-dropdown';
import { SiteDrawer } from '../site-drawer';

export type SiteHeaderProps = ComponentProps<'header'>;

export const SiteHeader: FC<SiteHeaderProps> = ({ className, ...rest }) => {
  return (
    <header
      className={cx(
        cq(),
        // @keep-sorted-css
        css({
          display: 'grid',
          justifyContent: 'space-between',
          alignItems: 'center',
          gridAutoFlow: 'column',
          paddingBlock: '2',
          paddingInline: '4',
        }),
        className,
      )}
      {...rest}
    >
      <h1>
        <Link
          // @keep-sorted-css
          className={css({
            fontSize: 'clamp(var(--font-sizes-2xl), 1.236rem + 1.13vw, var(--font-sizes-4xl))',
            fontWeight: 'bold',
          })}
          href="/"
        >
          airRnot.dev
        </Link>
      </h1>
      <SiteDrawer />
      <div
        // @keep-sorted-css
        className={css({
          display: { base: 'none', '@/md': 'grid' },
          alignItems: 'center',
          gap: '2',
          gridAutoFlow: 'column',
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
    </header>
  );
};
