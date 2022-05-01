import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../shared/AppTextInput";
import ErrorMessage from "./ErrorMessage";

export default function AppFormInput({ name, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
