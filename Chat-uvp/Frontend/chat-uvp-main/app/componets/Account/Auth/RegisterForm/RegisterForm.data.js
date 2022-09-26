import * as Yup from "yup";
export function initialValues() {
  return {
    email: "",
    password: "",
    repeatPassword: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string().email("Correo no valido").required("Campo requerido"),
    password: Yup.string().required("Campo requerido"),
    repeatPassword: Yup.string()
      .required("Campo requerido")
      .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
  });
}
