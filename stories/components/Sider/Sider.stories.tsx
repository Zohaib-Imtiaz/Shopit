import { Meta, StoryObj } from "@storybook/react";
import { Sider } from "./Sider";

const meta = {
    title: 'Layout/Sider',
    component: Sider,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    }
} satisfies Meta<typeof Sider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSider: Story = {
    args: {
        collapsible: false,
        children: null
    }
}

export const CollapsibleZeroSider: Story = {
    args: {
        collapsible: true,
        collapsedWidth: 0,
        style: {
            backgroundColor: 'grey'
        },
        children: (
            <ol>
                <li>Option 1</li>
                <li>Option 2</li>
            </ol>
        )
    }
}