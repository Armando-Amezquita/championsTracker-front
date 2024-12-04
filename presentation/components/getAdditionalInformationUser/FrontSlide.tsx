import {
  View,
  Text,
  Image,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import { Colors, Fonts } from "../../styles/global-styles";

export const FrontSlide = () => {
  const image = require("../../../assets/icons/undraw_opened_tabs_re_s5ur (1).png");
  //   const image = require("../../../assets/icons/undraw_Personal_info_re_ur1n-removebg-preview.png");
  //   const image = require("../../../assets/icons/undraw_Male_avatar_g98d-removebg-preview.png");

  const { width } = useWindowDimensions();

  return (
    <View style={[styles.frontSlideContainer, { width }]}>
      <Text style={styles.frontSlideTitle}>
        ¡Hola! Nos alegra que estés aquí.
      </Text>
      <View style={styles.frontSlideContent}>
        <Image source={image} style={[styles.frontSlidePicture, { width }]} />
        <Text style={styles.frontSlideDescription}>
          Queremos ofrecerte una experiencia personalizada y adaptada a tus
          necesidades. Para eso, necesitamos algunos datos adicionales. 📝 ¡Será
          rápido y fácil! 😊
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frontSlideContainer: {
    alignItems: "center",
    padding: 10,
  },
  frontSlideTitle: {
    marginTop: 20,
    textAlign: "center",
    fontSize: Fonts.extraLarge,
    fontWeight: "bold",
    color: Colors.primary,
  },
  frontSlideContent: {
    marginTop: 60,
    gap: 20,
  },
  frontSlidePicture: {
    height: 320,
  },
  frontSlideDescription: {
    color: Colors.light,
    fontSize: Fonts.normal,
    textAlign: "center",
    paddingHorizontal: 12,
  },
});
