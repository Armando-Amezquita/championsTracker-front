import React from "react";
import { Image, ImageStyle, StyleProp } from "react-native";

// const logoSource = require("@/assets/icons/logotipo/Winnixisotipo.png");
// const logoSource = require("@/assets/icons/logotipo/logo.png");
const logoSource = require("@/assets/icons/logotipo/logo2.png");

interface Props {
  size?: number;
  style?: StyleProp<ImageStyle>;
}

export const MyLogoImage = ({ size = 50, style }: Props) => {
  const imageStyle: ImageStyle = {
    width: size,
    height: size,
    resizeMode: "contain",
  };

  return <Image source={logoSource} style={[imageStyle, style]} />;
};
