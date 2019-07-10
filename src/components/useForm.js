import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrors(validate(values));
  };

  const handleChange = event => {
    event.persist();
    setIsSubmitting(false);
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [callback, errors, isSubmitting]);
  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};

export default useForm;
