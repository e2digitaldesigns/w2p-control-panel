import React from "react";
import { useField, Form, FormikProps, Formik } from "formik";

import { IntPage } from "../../../../types";
import * as Forms from "../../../../paper/forms/block/forms.styles";
import { useTemplate } from "./../../../../hooks";

import {
  SelectField,
  Textarea,
  TextField
} from "../../../../paper/forms/block/blockFormFields";

import { schema } from "./validationSchema";

interface IntPageManagementProfileForm {
  pageData: IntPage;
}

const PageManagementProfileForm: React.FC<IntPageManagementProfileForm> = ({
  pageData
}) => {
  const { templateState } = useTemplate();
  const mediaQuery = templateState.contentMediaQuery as string;

  if (!pageData._id) {
    return null;
  }

  return (
    <Forms.Container>
      <Formik
        initialValues={{
          ...pageData
        }}
        onSubmit={(values, actions) => {
          console.log(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
        validationSchema={schema}
      >
        {() => (
          <Form>
            <Forms.Row>
              <SelectField label="Status" name="isActive" optionType="active" />
            </Forms.Row>

            <Forms.Row>
              <TextField label="Url" name="url" />
            </Forms.Row>

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
              <Textarea label="" name="text" />
            </Forms.Row>

            <Forms.Row>
              <SelectField
                label="Account Menu"
                name="placement.isAccountMenu"
                optionType="active"
              />
            </Forms.Row>

            <Forms.Row>
              <SelectField
                label="Info Menu"
                name="placement.isInformationMenu"
                optionType="active"
              />
            </Forms.Row>

            <Forms.Row>
              <SelectField
                label="Page Menu"
                name="placement.isPageMenu"
                optionType="active"
              />
            </Forms.Row>

            <Forms.Row>
              <SelectField
                label="Primary Menu"
                name="placement.isPrimaryMenu"
                optionType="active"
              />
            </Forms.Row>

            <Forms.Row>
              <SelectField
                label="Resource Menu"
                name="placement.isResourceMenu"
                optionType="active"
              />
            </Forms.Row>

            <Forms.Row>
              <Forms.ButtonSubmit type="submit" value="Submit" />
            </Forms.Row>
          </Form>
        )}
      </Formik>
    </Forms.Container>
  );
};

export default PageManagementProfileForm;
