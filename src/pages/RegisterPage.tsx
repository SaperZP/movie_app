import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, googleSignInHandler } from "../auth/fierbase.ts";
import CustomFormBody from "../components/CustomForm/CustomFormBody.tsx";
import CustomFormikInput from "../components/CustomForm/CustomFormikInput.tsx";
import SubmitButton from "../components/CustomForm/SubmitButton.tsx";

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const initialValues = { name: "", email: "", password: "" };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required").min(3),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required").min(8),
  });

  const onSubmit = (values: typeof initialValues) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        updateProfile(userCredential.user, { displayName: values.name }).then(
          () => {
            navigate("/");
          },
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <CustomFormBody title={"Register"}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <CustomFormikInput
            inputId="name"
            labelText="Name"
            inputType="text"
            placeholderText="Enter your Name"
          />

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

          <SubmitButton text={"Register"} />

          <button
            onClick={() => googleSignInHandler(navigate("/"))}
            type="button"
            className="mb-4 w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700"
          >
            Continue with Google
          </button>

          <div className="text-center text-white">
            <span> Have an account? </span>

            <Link to={"/login"} className="text-yellow-500">
              LogIn
            </Link>
          </div>
        </Form>
      </Formik>
    </CustomFormBody>
  );
};

export default RegisterPage;
