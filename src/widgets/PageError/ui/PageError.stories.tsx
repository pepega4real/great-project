import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { PageError } from './PageError'

export default {
  title: 'widgets/PageError',
  component: PageError,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PageError>

const Template: ComponentStory<typeof PageError> = () => <PageError />

export const Dark = Template.bind({})
Dark.args = {}

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [ThemeDecorator(Theme.LIGHT)]
