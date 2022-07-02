import React from "react";
import { Formik, Form, Field, useField, ErrorMessage } from "formik";
import _map from "lodash/map";
import { useFormHelpers } from "../../hooks";
import * as Styled from "./formField.style";

export enum FormFieldTypes {
  Switch = "switch",
  Select = "select",
  Text = "text",
  TextField = "textfield",
  StorefrontOptons = "storefrontOptons"
}

export interface ITextBox {
  disabled?: boolean;
  field: any;
}

export interface ISelectOption {
  value: string;
  text: string;
}

export type TSelectOption = ISelectOption[];

export interface IFormField {
  disabled?: boolean;
  fieldName: string;
  hidden?: boolean;
  label: string;
  selectOption?: TSelectOption;
  type?: FormFieldTypes;
  variant?: string;
}

const FormField: React.FC<IFormField> = ({
  disabled,
  fieldName,
  hidden,
  label,
  selectOption,
  type = FormFieldTypes.Text
}) => {
  const [booleanState, setBooleanState] = React.useState<boolean>(true);
  const [field, meta, helpers] = useField({
    name: fieldName,
    type: "checkbox"
  });
  const { getStorefrontOptions } = useFormHelpers();
  const storefrontOptions = getStorefrontOptions();
  let theInput: any;
  let options;

  let value = true;
  const { setValue } = helpers;

  const handleBoolenToggle = () => {
    setBooleanState(!booleanState);
  };

  const inputRef = React.useRef<any>(null);

  const handleTest = () => {
    console.log({ booleanState }, field.value);
    field.value = false;
    console.log(69, field.value);

    // field.onChange(fieldName);
    // setBooleanState(!field.value);
    setBooleanState(!booleanState);
  };

  React.useEffect(() => {
    console.log(75, field);
    field.onChange(fieldName);
  }, [booleanState]);

  switch (type) {
    case FormFieldTypes.Switch:
      // console.clear();
      // console.log(field);
      theInput = (
        <Styled.SwitchWrapper onClick={handleTest}>
          <Styled.Switch ref={inputRef} {...field} type="checkbox" />
          <Styled.Slider></Styled.Slider>
        </Styled.SwitchWrapper>
      );
      break;

    case FormFieldTypes.Select:
      options = _map(selectOption, (m: any, index: number) => (
        <option key={index} value={m.value}>
          {m.text}
        </option>
      ));

      theInput = <select {...field}> {options} </select>;
      break;

    case FormFieldTypes.StorefrontOptons:
      options = getStorefrontOptions();
      theInput = <select {...field}> {options} </select>;
      break;

    default:
    case FormFieldTypes.Text:
      theInput = <input type="text" {...field} />;
      break;
  }

  return (
    <div>
      <label>{label}</label>
      {theInput}
      {meta.touched && meta.error && <div>{meta.error}</div>}
    </div>
  );
};

export default FormField;
