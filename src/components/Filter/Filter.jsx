import { Field, Form, Formik } from "formik";
import css from "./Filter.module.css";
import { useId } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import {
  resetFilters,
  setLanguage,
  setPrice,
  setLevel,
} from "../../redux/filters/filtersSlice.js";
import {
  selectLanguage,
  selectLevel,
  selectPrice,
} from "../../redux/filters/selectors.js";

export default function Filter() {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);
  const level = useSelector(selectLevel);
  const price = useSelector(selectPrice);

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
      { value: "spanish", label: "Spanish" },
      { value: "italian", label: "Italian" },
      { value: "korean", label: "Korean" },
      { value: "mandarin chinese", label: "Mandarin Chinese" },
      { value: "vietnamese", label: "Vietnamese" },
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

  return (
    <div className={css.container}>
      <div className={css.form}>
        {/* languages */}
        <div className={css.filter_languages}>
          <label htmlFor={languagesFieldId} className={css.label}>
            Languages
          </label>
          <Select
            unstyled //обнулили стилі
            isSearchable={false} // вимикаємо інпут повністю
            options={options.languages}
            value={
              options.languages.find((opt) => opt.value === language) || null
            }
            name="languages"
            onChange={(opt) => dispatch(setLanguage(opt?.value || ""))}
            placeholder="Choose a language"
            classNamePrefix="custom-select"
            isClearable
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
            value={options.levels.find((opt) => opt.value === level) || null}
            onChange={(opt) => dispatch(setLevel(opt?.value || ""))}
            placeholder="Choose a level"
            classNamePrefix="custom-select"
            isClearable
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
            value={options.price.find((opt) => opt.value === price) || null}
            onChange={(opt) => dispatch(setPrice(opt?.value || ""))}
            placeholder="Choose"
            classNamePrefix="custom-select"
            isClearable
          />
        </div>

        <button
          type="submit"
          className={css.btn}
          onClick={() => dispatch(resetFilters())}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
