import React from 'react'
import InputMask from 'react-input-mask';
import TextField from 'ui/components/inputs/TextField/TextField'
import { OutlinedTextFieldProps } from '@material-ui/core'

export interface TextFieldMaskProps extends OutlinedTextFieldProps {
  mask: string;
}

export const TextFieldMask: React.FC<TextFieldMaskProps> = ({ mask, ...props }) => {
  return (
    <InputMask mask={'99.999-999'}>
      {() => {
        return <TextField {...props} />
      }}
    </InputMask>
  )
}
