import { expect, screen, userEvent, within } from 'storybook/test';

import preview from '../../../../../.storybook/preview';
import { SiteThemeSwitchDropdown } from './site-theme-switch-dropdown';

const meta = preview.meta({
  component: SiteThemeSwitchDropdown,
  parameters: {
    layout: 'centered',
  },
});

export const Default = meta.story({
  async play({ canvasElement }) {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /テーマを変更する/i });
    await expect(button).toBeInTheDocument();

    // ドロップダウンを開く
    await userEvent.click(button);

    const lightThemeOption = await screen.findByText('ライトテーマ');
    const darkThemeOption = screen.getByText('ダークテーマ');
    const systemThemeOption = screen.getByText('システムテーマ');

    await expect(lightThemeOption).toBeInTheDocument();
    await expect(darkThemeOption).toBeInTheDocument();
    await expect(systemThemeOption).toBeInTheDocument();
  },
});
