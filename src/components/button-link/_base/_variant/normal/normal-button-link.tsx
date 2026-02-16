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
    '--_button-height': 'var(--button-height)',
    '--_button-padding-inline': 'var(--button-padding-inline)',
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
        height: 'var(--_button-height,var(--spacing-6))',
        paddingInline: 'var(--_button-padding-inline, var(--spacing-2))',
      },
      sm: {
        height: 'var(--_button-height,var(--spacing-8))',
        paddingInline: 'var(--_button-padding-inline, var(--spacing-4))',
      },
      md: {
        height: 'var(--_button-height,var(--spacing-10))',
        paddingInline: 'var(--_button-padding-inline, var(--spacing-6))',
      },
      lg: {
        height: 'var(--_button-height,var(--spacing-12))',
        paddingInline: 'var(--_button-padding-inline, var(--spacing-8))',
      },
      xl: {
        height: 'var(--_button-height,var(--spacing-14))',
        paddingInline: 'var(--_button-padding-inline, var(--spacing-10))',
      },
    } satisfies Record<Required<NormalButtonLinkProps<unknown>>['size'], SystemStyleObject>,
  },
});
