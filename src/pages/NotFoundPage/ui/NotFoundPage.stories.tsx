import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import NotFoundPage from './NotFoundPage'

export default {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotFoundPage>

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />

export const MainDark = Template.bind({})
MainDark.args = {}

export const MainLight = Template.bind({})
MainLight.args = {}
MainLight.decorators = [ThemeDecorator(Theme.LIGHT)]
