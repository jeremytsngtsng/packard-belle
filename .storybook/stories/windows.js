import React from 'react';
import { storiesOf } from '@storybook/react';
import WindowFrame from '../../src/components/Frame';
import AbstractWindow from '../../src/components/Window';
import ExplorerWindow from '../../src/components/WindowExplorer';
import AlertWindow from '../../src/components/WindowAlert';
import WindowProgram from '../../src/components/WindowProgram';
import DetailsSection from '../../src/components/DetailsSection';

import img from './directory_closed.png';
import WindowAction from '../../src/components/WindowAction';

const optionsSample = [
  {
    onClick: noop,
    title: 'New',
  },
  {
    onClick: noop,
    title: 'Disabled',
    disabled: true,
  },
  [
    {
      onClick: noop,
      title: 'Open',
      options: [
        {
          onClick: noop,
          title: 'open file?',
        },
        {
          onClick: noop,
          title: 'open drv file?',
        },
        {
          onClick: noop,
          title: 'spin it',
          options: [
            {
              onClick: noop,
              title: 'twist it?',
            },
            {
              onClick: noop,
              title: 'fly it',
            },
          ],
        },
      ],
    },
  ],
  {
    onClick: noop,
    title: 'quit',
  },
];

const noop = () => {};

storiesOf('Windows', module)
  .add('Generic window', () => <WindowFrame>Window</WindowFrame>)
  .add('Static window', () => (
    <AbstractWindow
      title="Title"
      icon={img}
      onClose={noop}
      onMinimize={noop}
      onMaximize={noop}
    >
      Windows
    </AbstractWindow>
  ))
  .add('Window with DetailsSection', () => (
    <AbstractWindow
      title="Settings w/Sections"
      icon={img}
      onClose={noop}
      onMinimize={noop}
      onMaximize={noop}
    >
      <DetailsSection title="First Detail">
        <p>Here's a load of stuff</p>
      </DetailsSection>
      <DetailsSection title="Second Detail">
        <p>Here's a load of stuff</p>
      </DetailsSection>
    </AbstractWindow>
  ))
  .add('Window Program', () => (
    <WindowProgram
      title="Window with MenuBar"
      icon={img}
      onClose={noop}
      onMinimize={noop}
      onMaximize={noop}
      maximizeOnOpen
      menuOptions={[
        {
          title: 'File',
          options: optionsSample,
        },
        {
          title: 'Edit',
          options: optionsSample,
        },
      ]}
      resizable
    >
      Windows
    </WindowProgram>
  ))
  .add(
    'ExplorerWindow',
    () => (
      <ExplorerWindow
        title="ExplorerWindow"
        menuOptions={[
          {
            title: 'File',
            options: optionsSample,
          },
          {
            title: 'Edit',
            options: optionsSample,
          },
        ]}
        icon={img}
        onClose={noop}
        onMinimize={noop}
        onMaximize={noop}
        onRestore={noop}
        explorerOptions={[
          {
            icon: img,
            title: 'Back',
            onClick: noop,
          },
          {
            icon: img,
            title: 'Forward',
            onClick: noop,
          },
          [
            {
              icon: img,
              title: 'Forward',
              onClick: noop,
            },
            {
              icon: img,
              title: 'Forward',
              onClick: noop,
            },
          ],
          {
            icon: img,
            title: 'View',
          },
          {
            icon: img,
            title: 'Forward',
            onClick: noop,
          },
        ]}
        footer={[<div>Test</div>, <div>Oh</div>]}
        resizable
      />
    ),
    { notes: 'WIP' }
  )
  .add('AlertWindow', () => (
    <AlertWindow
      title="AlertWindow"
      icon={img}
      onClose={noop}
      onOK={noop}
      onCancel={noop}
    >
      This is an error message.
    </AlertWindow>
  ))
  .add('WindowAction', () => (
    <WindowAction
      icon={img}
      action="save"
      onClose={noop}
      onOK={noop}
      onCancel={noop}
      content={[{ title: 'Blah', icon: img }, { title: 'Blah2', icon: img }]}
    />
  ));
