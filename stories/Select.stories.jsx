import React, { useState } from 'react';
import { FormField, Label, Hint, Select } from '@dynatrace/strato-components';

export default {
  title: 'Components/Forms/Select',
  component: Select,
};

export const SingleSelect = () => {
  const [value, setValue] = useState(null);
  return (
    <FormField>
      <Label>Select a fruit</Label>
      <Select value={value} onChange={setValue}>
        <Select.Trigger placeholder="Choose a fruit..." />
        <Select.Content>
          <Select.Option value="apple">Apple 🍎</Select.Option>
          <Select.Option value="banana">Banana 🍌</Select.Option>
          <Select.Option value="cherry">Cherry 🍒</Select.Option>
          <Select.Option value="grape">Grape 🍇</Select.Option>
        </Select.Content>
      </Select>
      {value && <Hint>You selected: {value}</Hint>}
    </FormField>
  );
};

export const MultiSelect = () => {
  const [value, setValue] = useState([]);
  return (
    <FormField>
      <Label>Select multiple fruits</Label>
      <Select value={value} onChange={setValue} multiple>
        <Select.Trigger placeholder="Choose fruits..." />
        <Select.Content>
          <Select.Option value="apple">Apple 🍎</Select.Option>
          <Select.Option value="banana">Banana 🍌</Select.Option>
          <Select.Option value="cherry">Cherry 🍒</Select.Option>
          <Select.Option value="grape">Grape 🍇</Select.Option>
        </Select.Content>
      </Select>
      {value.length > 0 && <Hint>You selected: {value.join(', ')}</Hint>}
    </FormField>
  );
};

export const WithFilter = () => {
  const [value, setValue] = useState(null);
  return (
    <FormField>
      <Label>Select with Search Filter</Label>
      <Select value={value} onChange={setValue}>
        <Select.Trigger placeholder="Search & choose..." />
        <Select.Content>
          <Select.Filter placeholder="Filter options..." />
          <Select.Option value="apple">Apple 🍎</Select.Option>
          <Select.Option value="banana">Banana 🍌</Select.Option>
          <Select.Option value="cherry">Cherry 🍒</Select.Option>
          <Select.Option value="grape">Grape 🍇</Select.Option>
        </Select.Content>
      </Select>
    </FormField>
  );
};

export const WithGroups = () => {
  const [value, setValue] = useState(null);
  return (
    <FormField>
      <Label>Select with Groups</Label>
      <Select value={value} onChange={setValue}>
        <Select.Trigger placeholder="Select item..." />
        <Select.Content>
          <Select.Group>
            <Select.GroupLabel>Fruits</Select.GroupLabel>
            <Select.Option value="apple">Apple 🍎</Select.Option>
            <Select.Option value="banana">Banana 🍌</Select.Option>
          </Select.Group>
          <Select.Group>
            <Select.GroupLabel>Vegetables</Select.GroupLabel>
            <Select.Option value="carrot">Carrot 🥕</Select.Option>
            <Select.Option value="broccoli">Broccoli 🥦</Select.Option>
          </Select.Group>
        </Select.Content>
      </Select>
    </FormField>
  );
};
