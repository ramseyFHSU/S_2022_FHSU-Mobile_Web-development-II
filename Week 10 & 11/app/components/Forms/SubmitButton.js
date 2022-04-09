import React from "react";
import { useFormikContext } from "formik";
import AppButton from "../shared/AppButton";

export default function SubmitButton({ title }) {
  const { handelSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handelSubmit} />;
}
