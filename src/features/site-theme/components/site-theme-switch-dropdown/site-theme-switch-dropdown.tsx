'use client';

import { Menu } from '@base-ui/react/menu';
import { Sun, Moon, Check } from 'lucide-react';
import { useTheme } from 'next-themes';
import type { FC } from 'react';
import { useSyncExternalStore } from 'react';
import { match } from 'ts-pattern';

import { sva } from '../../../../../styled-system/css';
import { Button } from '../../../../components/button';
import { SiteTheme } from '../../schemas';

export type SiteThemeSwitchDropdownProps = Menu.Root.Props;

const ICON_SIZE = 32;

export const SiteThemeSwitchDropdown: FC<SiteThemeSwitchDropdownProps> = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (!mounted) {
    return null;
  }

  const handleClick = (theme: SiteTheme) => () => {
    setTheme(theme);
  };

  const { items, item, check } = style();

  return (
    <Menu.Root>
      <Menu.Trigger
        nativeButton
        render={(props) => (
          <Button aria-label="テーマを変更する" variant="ghost" {...props}>
            {match(resolvedTheme)
              .with(SiteTheme.enum.light, () => <Sun size={ICON_SIZE} />)
              .with(SiteTheme.enum.dark, () => <Moon size={ICON_SIZE} />)
              .otherwise(() => (
                <Sun size={ICON_SIZE} />
              ))}
          </Button>
        )}
      />
      <Menu.Portal>
        <Menu.Positioner>
          <Menu.Popup className={items}>
            <Menu.Item
              nativeButton
              render={(props) => (
                <button
                  className={item}
                  type="button"
                  onClick={handleClick(SiteTheme.enum.light)}
                  {...props}
                >
                  ライトテーマ
                  {theme === SiteTheme.enum.light && <Check className={check} />}
                </button>
              )}
            />
            <Menu.Item
              nativeButton
              render={(props) => (
                <button
                  className={item}
                  type="button"
                  onClick={handleClick(SiteTheme.enum.dark)}
                  {...props}
                >
                  ダークテーマ
                  {theme === SiteTheme.enum.dark && <Check className={check} />}
                </button>
              )}
            />
            <Menu.Item
              nativeButton
              render={(props) => (
                <button
                  className={item}
                  type="button"
                  onClick={handleClick(SiteTheme.enum.system)}
                  {...props}
                >
                  システムテーマ
                  {theme === SiteTheme.enum.system && <Check className={check} />}
                </button>
              )}
            />
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
};

const style = sva({
  slots: ['items', 'item', 'check'],
  base: {
    // @keep-sorted-css
    items: {
      display: 'grid',
      columnGap: '2',
      gridTemplateColumns: 'auto 1fr',
      border: '1px solid',
      borderColor: 'muted/20',
      borderRadius: 'sm',
      backgroundColor: 'surface',
      boxShadow: 'md',
    },
    // @keep-sorted-css
    item: {
      display: 'grid',
      gridTemplateColumns: 'subgrid',
      gridColumn: 'span 2',
      width: 'full',
      paddingBlock: '2',
      paddingInline: '3',
      textAlign: 'left',
      color: 'text',
      transitionProperty: 'color, background-color, border-color, box-shadow',
      transitionDuration: '0.2s',
      transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
      cursor: 'pointer',
      _focus: {
        backgroundColor:
          'color-mix(in oklab, var(--colors-base), var(--color-mix-base) var(--color-mix-ratio))',
      },
      _hover: {
        backgroundColor:
          'color-mix(in oklab, var(--colors-base), var(--color-mix-base) var(--color-mix-ratio))',
      },
    },
    check: {
      color: 'pine',
    },
  },
});
