import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Toast from "react-native-toast-message";
import { Input, Icon, Button } from "react-native-elements";
import { useFormik } from "formik";
import Loading from "../Loading";
import { initialValues, validationSchema } from "./Login/LoginForm.data";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formvalues) => {
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(
          auth,
          formvalues.email,
          formvalues.password
        );
        navigation.goBack();
      } catch (error) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Usuario o contraseña incorrectos",
        });
      }
    },
  });

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.inputForm}
        onChangeText={(text) => formik.setFieldValue("email", text)}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
          />
        }
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Contraseña"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={showPassword ? false : true}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        errorMessage={formik.errors.password}
      />
      <Button
        title="Iniciar sesion"
        containerStyle={styles.btonContainerLogin}
        buttonStyle={styles.btnLogin}
        onPress={formik.handleSubmit}
      />
      <Loading isVisible={formik.isSubmitting} text="Iniciando sesion" />
    </View>
  );
}
function defaultFormValue() {
  return {
    email: "",
    password: "",
  };
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  btonContainerLogin: {
    marginTop: 20,
    width: "95%",
  },
  btnLogin: {
    backgroundColor: "#222438",
  },
  iconRight: {
    color: "#c1c1c1",
  },
});
