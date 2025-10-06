import { Field, Form, Formik } from "formik";
import css from "./Filter.module.css";
import { useId } from "react";
import Select from "react-select";

export default function Filter() {
  const languagesFieldId = useId();

  const options = [
    { value: "french", label: "French" },
    { value: "english", label: "English" },
    { value: "german", label: "German" },
    { value: "ukrainian", label: "Ukrainian" },
    { value: "polish", label: "Polish" },
  ];

  const initialValues = {
    languages: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values.languages.value);
    actions.resetForm();
  };
  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {({ setFieldValue, values }) => (
          <Form>
            <div className={css.filter_languages}>
              <label htmlFor={languagesFieldId} className={css.label}>
                Languages
              </label>
              <Select
                inputId={languagesFieldId}
                name="languages"
                options={options}
                value={values.languages}
                onChange={(selectedOption) =>
                  setFieldValue("languages", selectedOption)
                }
                placeholder="Choose a language"
                classNamePrefix="react-select"
              />
            </div>

            <button type="submit">Search</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

{
  /* <Field
              as="select"
              name="languages"
              id={languagesFieldId}
              className={css.select_control}
            >
              <option value="french" className={css.option}>French</option>
              <option value="english" className={css.option}>English</option>
              <option value="german" className={css.option}>German</option>
              <option value="ukrainian" className={css.option}>Ukrainian</option>
              <option value="polish" className={css.option}>Polish</option>
            </Field> */
}
