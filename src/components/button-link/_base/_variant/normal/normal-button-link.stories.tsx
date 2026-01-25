import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { css } from '../../../../../../styled-system/css';
import { NormalButtonLink } from './normal-button-link';

const meta = {
  component: NormalButtonLink,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div
        className={css({
          display: 'grid',
          padding: '4',
          placeContent: 'center',
        })}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof NormalButtonLink>;

export default meta;
type Story = StoryObj<typeof meta>;

const EXAMPLE_HREF = 'https://example.com';

export const Default: Story = {
  args: {
    children: 'Normal Button',
    href: EXAMPLE_HREF,
  },
};

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    children: 'Extra Small',
    href: EXAMPLE_HREF,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small',
    href: EXAMPLE_HREF,
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium',
    href: EXAMPLE_HREF,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large',
    href: EXAMPLE_HREF,
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    children: 'Extra Large',
    href: EXAMPLE_HREF,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
    href: EXAMPLE_HREF,
  },
};
