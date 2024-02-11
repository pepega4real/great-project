import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Button, ThemeButton } from './Button'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'TEXT',
}

export const Clear = Template.bind({})

Clear.args = {
  children: 'TEXT',
  theme: ThemeButton.CLEAR,
}

export const Outline = Template.bind({})

Outline.args = {
  children: 'TEXT',
  theme: ThemeButton.OUTLINE,
}

export const OutlineLight = Template.bind({})

OutlineLight.args = {
  children: 'TEXT',
  theme: ThemeButton.OUTLINE,
}
OutlineLight.decorators = [ThemeDecorator(Theme.LIGHT)]
