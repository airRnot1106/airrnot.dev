import type { ComponentProps, FC } from 'react';

import { css, cx } from '../../../../../styled-system/css';

export type SiteFooterProps = ComponentProps<'footer'>;

export const SiteFooter: FC<SiteFooterProps> = ({ className, ...rest }) => {
  return (
    <footer className={cx(style, className)} {...rest}>
      <span>© 2025 - Copyright airRnot, All Rights Reserved.</span>
    </footer>
  );
};

const style = css({
  display: 'grid',
  placeContent: 'center',
  borderTop: '1px solid',
  borderTopColor: 'muted/20',
  fontSize: 'clamp(var(--font-sizes-xs), 0.662rem + 0.38vw, var(--font-sizes-md))',
  paddingBlock: '1',
});
