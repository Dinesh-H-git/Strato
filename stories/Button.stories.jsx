import React from 'react';
import { Button, NotifyButton } from '@dynatrace/strato-components';

export default {
  title: 'Components/Buttons',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'emphasized', 'accent'],
    },
    color: {
      control: 'select',
      options: ['primary', 'neutral', 'success', 'critical', 'warning'],
    },
    size: {
      control: 'select',
      options: ['default', 'condensed'],
    },
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export const Standard = (args) => <Button {...args}>Click me</Button>;
Standard.args = {
  variant: 'default',
  color: 'primary',
  size: 'default',
  loading: false,
  disabled: false,
};

export const Variants = () => (
  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
    <Button variant="default">Default</Button>
    <Button variant="emphasized">Emphasized</Button>
    <Button variant="accent">Accent</Button>
  </div>
);

export const Colors = () => (
  <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
    <Button color="primary">Primary</Button>
    <Button color="neutral">Neutral</Button>
    <Button color="success">Success</Button>
    <Button color="warning">Warning</Button>
    <Button color="critical">Critical</Button>
  </div>
);

export const Sizes = () => (
  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
    <Button size="default">Default size</Button>
    <Button size="condensed">Condensed size</Button>
  </div>
);

export const Loading = () => <Button loading>Loading...</Button>;

export const WithIcons = () => (
  <Button>
    <Button.Prefix>⭐</Button.Prefix>
    <Button.Label>Starred Button</Button.Label>
    <Button.Suffix>➡️</Button.Suffix>
  </Button>
);

export const Notification = () => (
  <div style={{ display: 'flex', gap: '12px' }}>
    <NotifyButton count={0} label="Notifications" />
    <NotifyButton count={5} label="Notifications" />
    <NotifyButton count={99} label="Notifications" />
  </div>
);
