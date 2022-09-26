import React from "react";
import { View, Text } from "react-native";
import { styles } from "./RegisterScreen.styles";
import { Image } from "react-native-elements";
import { RegisterForm } from "../../componets/Account/Auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function RegisterScreen() {
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../../assets/img/logo_black.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        <RegisterForm />
      </View>
    </KeyboardAwareScrollView>
  );
}
