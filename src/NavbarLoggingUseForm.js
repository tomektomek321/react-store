import { useState, useEffect } from "react";

const validate = values => {
  const errors = [];
  console.log(12);

  if (!values.login) {
    errors.push("Please provide login");
  }

  if (values.password && values.password.length < 3) {
    errors.push("login is to short");
  }

  return errors;
};

const NavbarLoggingUseForm = initial => {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    setErrors(validate(values));
  }, [values]);

  const updateValue = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();

    if (errors.length === 0) {
      console.log("Sending...", values);
    }
  };

  return [updateValue, submitHandler, errors];
};

export default NavbarLoggingUseForm;
