import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { Modal } from './Modal'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'TEXT lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
  isOpen: true,
}

export const Light = Template.bind({})
Light.args = {
  children: 'TEXT lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
  isOpen: true,
}
Light.decorators = [ThemeDecorator(Theme.LIGHT)]
