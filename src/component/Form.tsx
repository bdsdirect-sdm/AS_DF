import React from "react";
import { useFormik } from "formik";
import Fields from "./Fields";
import { DataInterface } from "../interface/FieldInterface";

interface FormProps {
  formfield: any;
  FormSubmit: (values: DataInterface) => void;
}

const Form: React.FC<FormProps> = ({ formfield, FormSubmit }) => {
  const formik = useFormik<DataInterface>({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      phoneNumber: "",
      dob: null,
      weight_in: "",
      gender: "",
      subscribe: false,
    },
    validate: (values) => {
      const errors: Partial<DataInterface> = {};

      if (!values.fullName) errors.fullName = "Full name is required";
      else if (!values.email) errors.email = "Email is required";
      else if (!values.password) errors.password = "Password is required";
      else if (!values.phoneNumber) errors.phoneNumber = "Phone number is required";
      else if (!values.dob) errors.dob = "Date of birth is required";
      else if (!values.weight_in) errors.weight_in = "Weight is required";
      else if (!values.gender) errors.gender = "Gender is required";

      return errors;
    },
    onSubmit: (values) => {
      FormSubmit(values);
      console.log("Default submit handler:=====>", values);
    },
  });

  return (
    <form
      className="mx-auto w-50 mt-5"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        formik.handleSubmit(); // Call handleSubmit properly
      }}
    >
      <Fields fields={formfield} formikCalls={formik} />
      <button className="btn btn-outline-dark mt-4 w-25" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
