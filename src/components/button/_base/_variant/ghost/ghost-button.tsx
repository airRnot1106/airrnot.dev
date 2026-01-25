import { Button, type ButtonProps } from '@headlessui/react';
import type { FC } from 'react';

import { cva, cx } from '../../../../../../styled-system/css';
import type { SystemStyleObject } from '../../../../../../styled-system/types';

export type GhostButtonProps = ButtonProps & {
  className?: string | undefined;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export const GhostButton: FC<GhostButtonProps> = ({
  children,
  className,
  size = 'md',
  ...rest
}) => {
  return (
    <Button className={cx(style({ size }), className)} {...rest}>
      {children}
    </Button>
  );
};

const style = cva({
  // @keep-sorted-css
  base: {
    display: 'inline-grid',
    alignItems: 'center',
    gridAutoFlow: 'column',
    borderRadius: 'md',
    textBox: 'trim-both cap alphabetic',
    transitionProperty: 'color, background-color, border-color, box-shadow',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
    cursor: 'pointer',
    '--size-base': 'var(--spacing-1)',
    _disabled: {
      cursor: 'not-allowed',
      opacity: '0.5',
    },
    _hover: {
      backgroundColor:
        'color-mix(in oklab, var(--colors-base), var(--color-mix-base) var(--color-mix-ratio))',
    },
  },
  variants: {
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
    } satisfies Record<Required<GhostButtonProps>['size'], SystemStyleObject>,
  },
});
