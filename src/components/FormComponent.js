import React from "react";
import useForm from "./useForm";
import HeaderComponent from "./HeaderComponent";
import "../styles/Contact.scss";

const validate = values => {
  let errors = {};
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.subject) {
    errors.subject = "Subject is required";
  }
  if (!values.message) {
    errors.message = "Subject is required";
  }
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  return errors;
};

const Form = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    showValues,
    validate
  );
  function showValues() {
    alert(JSON.stringify(values));
  }
  return (
    <div>
      <HeaderComponent />
      <div className="container">
        <div className="contact">
          <aside className="contact__submenu">
            <h2>Submenu</h2>
            <ul>
              <li className="submenu__item">
                <a href="" className="link">
                  <span className="item__text bold">Direct naar</span>
                </a>
              </li>
              <li className="submenu__item">
                <a href="" className="link">
                  <span className="item__text bold">Mijn links</span>
                </a>
              </li>
              <li className="submenu__item ">
                <a href="" className="link">
                  <span className="item__text bold">Peilingen</span>
                </a>
              </li>
            </ul>
          </aside>
          <div className="contact__form">
            <h2>Contact pagina</h2>
            <p className="contact__intro">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              convallis, magna nec ecitur tempor, dui eros fringilla tellus,
              vitae consequat augue dolor at mauris. Nunc tempor rutrum dolor,
              sit amet scelerisque lacus feugiat non. Maecenas a tincidunt
              justo, ac blandit arcu. Sed nec congue ex. Nullam pulvinar libero
              eu dolor congue commodo. Nam sed pharetra orci. Nunc ultrices sit
              amet magna non vestibulum. Morbi ut dignissim quam. Etiam eget
              pellentesque nisi.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">Naam:</label>
                <div className="control">
                  <input
                    className={`input ${errors.name ? "wrong" : ""}`}
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={values.name || ""}
                  />
                  {errors.name && (
                    <p className="message-wrong">{errors.name}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Email:</label>
                <div className="control">
                  <input
                    className={`input ${errors.email ? "wrong" : ""}`}
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={values.email || ""}
                  />
                  {errors.email && (
                    <p className="message-wrong">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Onderwerp:</label>
                <div className="control">
                  <input
                    className={`input ${errors.subject ? "wrong" : ""}`}
                    type="text"
                    name="subject"
                    onChange={handleChange}
                    value={values.subject || ""}
                  />
                  {errors.subject && (
                    <p className="message-wrong">{errors.subject}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Bericht:</label>
                <div className="control">
                  <textarea
                    className={`${errors.message ? "wrong" : ""}`}
                    name="message"
                    value={values.message || ""}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <p className="message-wrong">{errors.message}</p>
                  )}
                </div>
              </div>
              <button type="submit" className="contact__button">
                Verstuur
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
