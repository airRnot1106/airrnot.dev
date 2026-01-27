import preview from '../../../../../.storybook/preview';
import { SiteFooter } from '../site-footer';

const meta = preview.meta({
  component: SiteFooter,
  parameters: {
    layout: 'fullscreen',
  },
});

export const Default = meta.story({});

export const XSmall = meta.story({
  globals: {
    viewport: { value: 'xs' },
  },
});

export const Small = meta.story({
  globals: {
    viewport: { value: 'sm' },
  },
});

export const Medium = meta.story({
  globals: {
    viewport: { value: 'md' },
  },
});

export const Large = meta.story({
  globals: {
    viewport: { value: 'lg' },
  },
});

export const XLarge = meta.story({
  globals: {
    viewport: { value: 'xl' },
  },
});
