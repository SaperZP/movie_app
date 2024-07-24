import { ErrorMessage, Field } from "formik";
import React from "react";

type FormikInputProps = {
  inputId: string;
  inputType: "text" | "password" | "email";
  labelText: string;
  placeholderText?: string;
};

const CustomFormikInput: React.FC<FormikInputProps> = ({
  inputId,
  inputType,
  labelText,
  placeholderText,
}) => (
  <div className="mb-4">
    <label htmlFor={inputId} className="block text-white">
      {labelText}
    </label>

    <Field
      type={inputType}
      id={inputId}
      name={inputId}
      className="formik_custom-field"
      placeholder={placeholderText}
    />

    <ErrorMessage
      name={inputId}
      component="div"
      className="mt-1 text-xs text-red-500"
    />
  </div>
);

export default CustomFormikInput;
