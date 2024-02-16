import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Button, ButtonSize, ButtonTheme } from './Button'

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
  theme: ButtonTheme.CLEAR,
}

export const ClearInverted = Template.bind({})
ClearInverted.args = {
  children: 'TEXT',
  theme: ButtonTheme.CLEAR_INVERTED,
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'TEXT',
  theme: ButtonTheme.OUTLINE,
}

export const OutlineSizeL = Template.bind({})
OutlineSizeL.args = {
  children: 'TEXT',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
}

export const OutlineSizeXL = Template.bind({})
OutlineSizeXL.args = {
  children: 'TEXT',
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
}

export const OutlineLight = Template.bind({})
OutlineLight.args = {
  children: 'TEXT',
  theme: ButtonTheme.OUTLINE,
}
OutlineLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const BackgroundTheme = Template.bind({})
BackgroundTheme.args = {
  children: 'TEXT',
  theme: ButtonTheme.BACKGROUND,
}
BackgroundTheme.decorators = [ThemeDecorator(Theme.LIGHT)]

export const BackgroundInvertedTheme = Template.bind({})
BackgroundInvertedTheme.args = {
  children: 'TEXT',
  theme: ButtonTheme.BACKGROUND_INVERTED,
}

export const Square = Template.bind({})
Square.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
}

export const SquareL = Template.bind({})
SquareL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L,
}

export const SquareXL = Template.bind({})
SquareXL.args = {
  children: '>',
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL,
}
