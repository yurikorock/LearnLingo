import { Field, Form, Formik } from "formik";
import css from "./Filter.module.css";
import { useId } from "react";

export default function Filter() {
  const languagesFieldId = useId();

  const initialValues = {
    languages: "french",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <div className={css.filter_languages}>
            <label htmlFor={languagesFieldId} className={css.label}>
              Languages
            </label>
            <Field
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
            </Field>
          </div>

          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
}
