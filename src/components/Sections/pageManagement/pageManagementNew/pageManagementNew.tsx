import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { usePages, useSystem } from "../../../../hooks";
import { ApplicationRoutes } from "../../../../types";
import * as Forms from "../../../../paper/forms/block/forms.styles";

import {
  SelectField,
  TextField
} from "../../../../paper/forms/block/blockFormFields";
interface IPageState {
  name: string;
  storefrontId: string;
}

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Page name must be at least 3 characters long")
    .required(),
  storefrontId: yup.string().required()
});

const PageManagementNew: React.FC<{}> = () => {
  const navigate = useNavigate();
  const { useCreateNewPage } = usePages();
  const { systemState } = useSystem();
  const [state, setState] = useState<IPageState>({
    name: "",
    storefrontId: ""
  });

  const { data, isLoading, isSuccess, mutate } = useCreateNewPage();

  useEffect(() => {
    const storefrontId = systemState.storefronts?.[0]?._id;
    storefrontId && setState({ name: "", storefrontId });
  }, [systemState.storefronts]);

  useEffect(() => {
    if (!isLoading && isSuccess) {
      navigate(ApplicationRoutes.PageMgtProfileLink + data);
    }
  }, [data, isLoading, isSuccess, navigate]);

  if (!state.storefrontId) {
    return null;
  }

  return (
    <>
      <Forms.Container>
        <Formik
          initialValues={{
            name: "ddd",
            storefrontId: state.storefrontId
          }}
          onSubmit={(values: IPageState) => mutate(values)}
          validationSchema={schema}
        >
          {() => (
            <Form>
              <Forms.Row>
                <TextField label="Name" name="name" />
              </Forms.Row>

              <Forms.Row>
                <SelectField
                  label="Store"
                  name="storefrontId"
                  optionType="storefronts"
                />
              </Forms.Row>

              <Forms.Row>
                <Forms.ButtonSubmit value="Submit" />
              </Forms.Row>
            </Form>
          )}
        </Formik>
      </Forms.Container>
    </>
  );
};

export default PageManagementNew;
