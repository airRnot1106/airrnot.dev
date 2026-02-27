import { expect, screen, userEvent, within } from 'storybook/test';

import preview from '../../../../../.storybook/preview';
import { SiteDrawer } from './site-drawer';

const meta = preview.meta({
  component: SiteDrawer,
  parameters: {
    layout: 'fullscreen',
  },
});

export const Default = meta.story({
  globals: {
    viewport: { value: 'xs' },
  },
});

export const Open = meta.story({
  globals: {
    viewport: { value: 'xs' },
  },
  async play({ canvasElement }) {
    const canvas = within(canvasElement);

    // トリガーボタン（Menu アイコン）をクリック
    const trigger = canvas.getByRole('button');
    await userEvent.click(trigger);

    // ドロワーが開いていることを確認
    const popup = await screen.findByRole('dialog');
    await expect(popup).toBeInTheDocument();
  },
});

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
