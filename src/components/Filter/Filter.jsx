import { Field, Form, Formik } from "formik";
import css from "./Filter.module.css";
import { useId } from "react";
import Select from "react-select";

export default function Filter() {
  const languagesFieldId = useId();
  const levelFieldId = useId();
  const priceFieldId = useId();

  const options = {
    languages: [
      { value: "french", label: "French" },
      { value: "english", label: "English" },
      { value: "german", label: "German" },
      { value: "ukrainian", label: "Ukrainian" },
      { value: "polish", label: "Polish" },
    ],
    levels: [
      { value: "beginner", label: "A1 Beginner" },
      { value: "elementary", label: "A2 Elementary" },
      { value: "intermediate", label: "B1 Intermediate" },
      { value: "upper-Intermediate", label: "B2 Upper-Intermediate" },
    ],
    price: [
      { value: 10, label: "10" },
      { value: 20, label: "20" },
      { value: 30, label: "30" },
      { value: 40, label: "40" },
    ],
  };

  const initialValues = {
    languages: "",
    levels: "",
    price: null,
  };

  const handleSubmit = (values, actions) => {
    console.log(values.languages.value);
    console.log(values.levels.value);
    console.log(values.price.value);

    actions.resetForm();
  };
  return (
    <div className={css.container}>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {({ setFieldValue, values }) => (
          <Form className={css.form}>
            {/* languages */}
            <div className={css.filter_languages}>
              <label htmlFor={languagesFieldId} className={css.label}>
                Languages
              </label>
              <Select
                unstyled //обнулили стилі
                isSearchable={false} // вимикаємо інпут повністю
                inputId={languagesFieldId}
                name="languages"
                options={options.languages}
                value={values.languages}
                onChange={(selectedOption) =>
                  setFieldValue("languages", selectedOption)
                }
                placeholder="Choose a language"
                classNamePrefix="custom-select"
              />
            </div>
            {/* levels */}
            <div className={css.filter_levels}>
              <label htmlFor={levelFieldId} className={css.label}>
                Level of knowledge
              </label>
              <Select
                unstyled //обнулили стилі
                isSearchable={false} // вимикаємо інпут повністю
                inputId={levelFieldId}
                name="levels"
                options={options.levels}
                value={values.levels}
                onChange={(selectedOption) =>
                  setFieldValue("levels", selectedOption)
                }
                placeholder="Choose a level"
                classNamePrefix="custom-select"
              />
            </div>
            {/* price */}
            <div className={css.filter_price}>
              <label htmlFor={priceFieldId} className={css.label}>
                Price
              </label>
              <Select
                unstyled //обнулили стилі
                isSearchable={false} // вимикаємо інпут повністю
                inputId={priceFieldId}
                name="price"
                options={options.price}
                value={values.price}
                onChange={(selectedOption) =>
                  setFieldValue("price", selectedOption)
                }
                placeholder="Choose"
                classNamePrefix="custom-select"
              />
            </div>

            <button type="submit" className={css.btn}>
              Search
            </button>
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
