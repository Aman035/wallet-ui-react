import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import Container from '../src/components/container';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import { addParameters } from '@storybook/react'

addDecorator((story) => <Container>{story()}</Container>);

function loadStories() {
  const context = require.context('../src/stories', true, /.stories\.js?$/);
  context.keys().forEach(context);
}

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  }
})

configure(loadStories, module);
