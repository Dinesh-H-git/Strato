import React, { useState } from 'react';
import { FormField, Label, Hint, Checkbox, Switch, Radio, RadioGroup } from '@dynatrace/strato-components';

export default {
  title: 'Components/Forms/Toggles & Selection',
  component: Checkbox,
};

export const CheckboxGroup = () => {
  const [apple, setApple] = useState(false);
  const [banana, setBanana] = useState(false);
  const [cherry, setCherry] = useState(false);

  return (
    <FormField>
      <Label>Select fruits you like</Label>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
        <Checkbox value={apple} onChange={setApple}>Apple 🍎</Checkbox>
        <Checkbox value={banana} onChange={setBanana}>Banana 🍌</Checkbox>
        <Checkbox value={cherry} onChange={setCherry}>Cherry 🍒</Checkbox>
      </div>
      <Hint>Checkboxes support multiple selections.</Hint>
    </FormField>
  );
};

export const Switches = () => {
  const [enableLogs, setEnableLogs] = useState(true);
  const [enableMetrics, setEnableMetrics] = useState(false);

  return (
    <FormField>
      <Label>Monitoring Settings</Label>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
        <Switch value={enableLogs} onChange={setEnableLogs}>Enable Logs Monitoring</Switch>
        <Switch value={enableMetrics} onChange={setEnableMetrics}>Enable Metrics Monitoring</Switch>
      </div>
      <Hint>Switches are ideal for instant on/off toggles.</Hint>
    </FormField>
  );
};

export const RadioButtons = () => {
  const [selectedValue, setSelectedValue] = useState('one');

  return (
    <FormField>
      <Label>Select an option</Label>
      <RadioGroup value={selectedValue} onChange={setSelectedValue} name="options-group">
        <Radio value="one">Option One</Radio>
        <Radio value="two">Option Two</Radio>
        <Radio value="three">Option Three (Disabled)</Radio>
      </RadioGroup>
      {selectedValue && <Hint>Selected: {selectedValue}</Hint>}
    </FormField>
  );
};
