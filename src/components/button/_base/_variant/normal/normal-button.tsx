import type { ButtonProps } from '@base-ui/react/button';
import { Button } from '@base-ui/react/button';
import type { FC } from 'react';

import { cva, cx } from '../../../../../../styled-system/css';
import type { SystemStyleObject } from '../../../../../../styled-system/types';

export type NormalButtonProps = ButtonProps & {
  className?: string | undefined;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export const NormalButton: FC<NormalButtonProps> = ({
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
    } satisfies Record<Required<NormalButtonProps>['size'], SystemStyleObject>,
  },
});
