// Button.stories.ts|tsx

import React from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Spinner } from './Spinner'

const meta: Meta<typeof Spinner> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Spinner',
  component: Spinner
}

export default meta
type Story = StoryObj<typeof Spinner>

export const SpinnerItem: Story = {
  name: 'Spinner',
  render: () => <Spinner />
}
