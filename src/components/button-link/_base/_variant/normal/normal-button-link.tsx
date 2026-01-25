import type { LinkProps } from 'next/link';
import Link from 'next/link';
import type { ComponentProps } from 'react';

import { cva, cx } from '../../../../../../styled-system/css';
import type { SystemStyleObject } from '../../../../../../styled-system/types';

export type NormalButtonLinkProps<R> = LinkProps<R> &
  ComponentProps<'a'> & {
    disabled?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  };

export const NormalButtonLink = <R,>({
  children,
  className: NormalButtonLink,
  disabled = false,
  size = 'md',
  ...rest
}: NormalButtonLinkProps<R>) => {
  return (
    <Link
      aria-disabled={disabled}
      className={cx(style({ disabled, size }), NormalButtonLink)}
      tabIndex={disabled ? -1 : 0}
      {...rest}
    >
      {children}
    </Link>
  );
};

const style = cva({
  // @keep-sorted-css
  base: {
    display: 'inline-grid',
    alignItems: 'center',
    gridAutoFlow: 'column',
    border: '1px solid',
    borderColor: 'muted/20',
    borderRadius: 'md',
    textBox: 'trim-both cap alphabetic',
    backgroundColor: 'surface',
    transitionProperty: 'color, background-color, border-color, box-shadow',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
    cursor: 'pointer',
    '--size-base': 'var(--spacing-1)',
    _hover: {
      backgroundColor:
        'color-mix(in oklab, var(--colors-base), var(--color-mix-base) var(--color-mix-ratio))',
    },
  },
  variants: {
    disabled: {
      true: {
        pointerEvents: 'none',
        opacity: '0.5',
      },
    },
    size: {
      xs: {
        height: 'calc(var(--size-base) * 6)',
        paddingInline: '2',
      },
      sm: {
        height: 'calc(var(--size-base) * 8)',
        paddingInline: '4',
      },
      md: {
        height: 'calc(var(--size-base) * 10)',
        paddingInline: '6',
      },
      lg: {
        height: 'calc(var(--size-base) * 12)',
        paddingInline: '8',
      },
      xl: {
        height: 'calc(var(--size-base) * 14)',
        paddingInline: '10',
      },
    } satisfies Record<Required<NormalButtonLinkProps<unknown>>['size'], SystemStyleObject>,
  },
});
