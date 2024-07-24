import React from "react";
import { useFormikContext } from "formik";

type SubmitButtonProps = {
  text: string;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => {
  const { isValid, dirty } = useFormikContext();
  const shouldDisable = !isValid || !dirty;

  return (
    <button
      type="submit"
      className={`mb-4 w-full rounded py-2 text-white hover:bg-blue-700 ${shouldDisable ? "bg-gray-400" : "bg-blue-600"} `}
      disabled={shouldDisable}
    >
      {text}
    </button>
  );
};
export default SubmitButton;
