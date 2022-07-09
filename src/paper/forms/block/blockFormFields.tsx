import React from "react";
import { useField, Form, FormikProps, Formik, FieldMetaProps } from "formik";
import _map from "lodash/map";
import { useFormHelpers, useTemplate } from "./../../../hooks";
import * as Forms from "./forms.styles";

interface IntErrorMessage {
  meta: FieldMetaProps<any>;
}

const ErrorMessage: React.FC<IntErrorMessage> = ({ meta }) => {
  const isVisible = meta.touched && meta.error;
  return <>{isVisible && <Forms.ErrorDiv>{meta.error}</Forms.ErrorDiv>}</>;
};

interface IntBaseFormField {
  cols?: number[];
  label: string;
  name: string;
}

interface IntTextField extends IntBaseFormField {
  placeholder?: string;
  type?: string;
}

export interface ISelectOption {
  value: string;
  text: string;
}

export type TSelectOptions = ISelectOption[];

const TextField: React.FC<IntTextField> = ({
  cols = [25, 75],
  label,
  name,
  placeholder = ""
}) => {
  const [field, meta, helpers] = useField(name);
  const { templateState } = useTemplate();
  const mediaQuery = templateState.contentMediaQuery as string;

  return (
    <>
      <Forms.Column spacing={cols[0]}>
        <Forms.Label htmlFor={name}>{label}</Forms.Label>
      </Forms.Column>
      <Forms.Column spacing={cols[1]}>
        <Forms.TextField {...field} placeholder={placeholder} />
        <ErrorMessage meta={meta} />
      </Forms.Column>
    </>
  );
};

interface IntSelectField extends IntBaseFormField {
  options?: TSelectOptions;
  optionType?: "active" | "boolean" | "custom" | "storefronts";
}

const SelectField: React.FC<IntSelectField> = ({
  cols = [25, 75],
  label,
  name,
  options,
  optionType = "custom"
}) => {
  const [field, meta, helpers] = useField(name);
  const { templateState } = useTemplate();
  const { getStorefrontOptions } = useFormHelpers();
  const storefrontOptions = getStorefrontOptions();
  const mediaQuery = templateState.contentMediaQuery as string;
  let parsedOptions: any;

  switch (optionType) {
    case "active":
      const activeOptions = [
        {
          value: "true",
          text: "Active"
        },
        {
          value: "false",
          text: "Inactive"
        }
      ];
      parsedOptions = _map(
        activeOptions,
        (opt: ISelectOption, index: number) => (
          <option key={index} value={opt.value}>
            {opt.text}
          </option>
        )
      );
      break;

    case "boolean":
      break;

    case "custom":
      parsedOptions = _map(options, (opt: ISelectOption, index: number) => (
        <option key={index} value={opt.value}>
          {opt.text}
        </option>
      ));
      break;

    case "storefronts":
      parsedOptions = getStorefrontOptions();
      break;
  }

  return (
    <>
      <Forms.Column spacing={cols[0]}>
        <Forms.Label htmlFor={name}>{label}</Forms.Label>
      </Forms.Column>

      <Forms.Column spacing={cols[1]}>
        <Forms.Select {...field} name={name}>
          {parsedOptions}
        </Forms.Select>
      </Forms.Column>
    </>
  );
};

interface IntTextarea extends IntBaseFormField {}

const Textarea: React.FC<IntTextarea> = ({ cols = [25, 75], label, name }) => {
  const [field, meta, helpers] = useField(name);
  const { templateState } = useTemplate();
  const mediaQuery = templateState.contentMediaQuery as string;

  return (
    <>
      <Forms.Column spacing={cols[0]}>
        <Forms.Label htmlFor={name}>{label}</Forms.Label>
      </Forms.Column>

      <Forms.Column spacing={cols[1]}>
        <Forms.Textarea {...field} name={name} style={{ height: "200px" }} />
        <ErrorMessage meta={meta} />
      </Forms.Column>
    </>
  );
};

interface IntCheckBox extends IntBaseFormField {}

export { SelectField, Textarea, TextField };
