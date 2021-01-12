import { useState, useEffect } from "react";

const validate = (values, hideNow) => {
  if(hideNow) return [];
  const errors = [];
  //console.log(12);

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
  //let [hideNow, hideInfo] = useState(false);
 // const [hovered, setHover] = useState(false);

 //const changeStateHide = () => hideInfo(hideNow = false)

  useEffect(() => {
    setErrors(validate(values));

      //let id = setTimeout(changeStateHide, 2000);
      //return () => clearTimeout(id);

  }, [values/*, hideNow, changeStateHide*/]);
  /*
  const setHover = e => {
    hovered = !hovered;
  }*/



  const updateValue = e => {
    console.log("update value");
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
