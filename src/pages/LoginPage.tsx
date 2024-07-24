import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, googleSignInHandler } from "../auth/fierbase.ts";
import CustomFormBody from "../components/CustomForm/CustomFormBody.tsx";
import CustomFormikInput from "../components/CustomForm/CustomFormikInput.tsx";
import SubmitButton from "../components/CustomForm/SubmitButton.tsx";

const LoginPage: React.FC = () => {
  const initialValues = { email: "", password: "" };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Required")
      .min(3),
    password: Yup.string().required("Required").min(8),
  });
  const navigate = useNavigate();

  const onSubmit = (values: typeof initialValues) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <CustomFormBody title={"Login"}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <CustomFormikInput
            inputId="email"
            labelText="Email"
            inputType="email"
            placeholderText="Enter your Email"
          />

          <CustomFormikInput
            inputId="password"
            labelText="Password"
            inputType="password"
            placeholderText="Enter your Password"
          />

          <div className="mb-4 text-right">
            <a href="#" className="text-sm text-yellow-500">
              Forget Password?
            </a>
          </div>

          <SubmitButton text={"Login"} />

          <button
            onClick={() => googleSignInHandler(navigate("/"))}
            type="button"
            className="mb-4 w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700"
          >
            Continue with Google
          </button>

          <div className="text-center text-white">
            <span> Don't have an account? </span>

            <Link to={"/register"} className="text-yellow-500">
              Sign up
            </Link>
          </div>
        </Form>
      </Formik>
    </CustomFormBody>
  );
};

export default LoginPage;
