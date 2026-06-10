import React, { useState } from 'react';
import { FormField, Label, Hint, TextInput, TextArea, PasswordInput, SearchInput } from '@dynatrace/strato-components';

export default {
  title: 'Components/Forms/Text Inputs',
  component: TextInput,
};

export const Standard = () => {
  const [value, setValue] = useState('');
  return (
    <FormField>
      <Label>Standard Text Input</Label>
      <TextInput value={value} onChange={setValue} placeholder="Type something..." />
      <Hint>This is a helper hint text.</Hint>
    </FormField>
  );
};

export const WithPrefixAndSuffix = () => {
  const [value, setValue] = useState('');
  return (
    <FormField>
      <Label>Input with Prefix/Suffix</Label>
      <TextInput value={value} onChange={setValue} placeholder="Enter domain...">
        <TextInput.Prefix>https://</TextInput.Prefix>
        <TextInput.Suffix>.com</TextInput.Suffix>
      </TextInput>
    </FormField>
  );
};

export const TextAreaInput = () => {
  const [value, setValue] = useState('');
  return (
    <FormField>
      <Label>Text Area</Label>
      <TextArea value={value} onChange={setValue} placeholder="Type multi-line text..." />
      <Hint>A larger text input area.</Hint>
    </FormField>
  );
};

export const Password = () => {
  const [value, setValue] = useState('');
  return (
    <FormField>
      <Label>Password Input</Label>
      <PasswordInput value={value} onChange={setValue} placeholder="Enter password" />
    </FormField>
  );
};

export const Search = () => {
  const [value, setValue] = useState('');
  return (
    <FormField>
      <Label>Search Input</Label>
      <SearchInput value={value} onChange={setValue} placeholder="Search..." />
    </FormField>
  );
};

export const DisabledAndReadOnly = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <FormField disabled>
      <Label>Disabled Input</Label>
      <TextInput value="Locked content" disabled readOnly />
      <Hint>You cannot edit this.</Hint>
    </FormField>
    
    <FormField>
      <Label>Read Only Input</Label>
      <TextInput value="Read-only text content" readOnly />
      <Hint>This is read-only.</Hint>
    </FormField>
  </div>
);
