import * as yup from "yup";

export const schema = yup.object().shape({
  _id: yup.string().required(),
  isActive: yup.boolean().required(),
  name: yup
    .string()
    .min(3, "Page name must be at least 3 characters long")
    .required(),
  storefrontId: yup.string().required(),
  text: yup.string().required(),
  url: yup
    .string()
    .min(3, "Page url must be at least 3 characters long")
    .lowercase()
    .trim()
    .required()
});
