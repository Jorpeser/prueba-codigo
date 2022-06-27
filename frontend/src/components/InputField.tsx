// Componente InputField generico

import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
} from "@chakra-ui/react";


type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  textarea?: boolean;
};
// Con esto ^^^ le decimos que el tipo de props es cualquier tipo de props que pueda tener un input

export const InputField: React.FC<InputFieldProps> = ({
  label,
  textarea,
  size: _,
  ...props
}) => {
//   let InputOrTextarea = Input;
//   if (textarea) {
//     InputOrTextarea = Textarea;
//   }
  const [field, { error }] = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      {textarea ? (
        <Textarea {...field} id={field.name}></Textarea>
        ) : (
            <Input {...field} {...props} id={field.name}></Input> 
            
      )}
      {/* <InputOrTextarea {...field} {...props} id={field.name} /> */}
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};

// !!string -> hace cast a boolean
// !!'' => false
// !!'mensaje de error' => true