import {
  View,
  Text,
  FlatList,
  useWindowDimensions,
  Animated,
} from "react-native";
import { useRef, useState } from "react";
import { useNavigation } from "expo-router";
import { MainContainerView } from "@/presentation/components/theme/MainContainerView";
import { CustomButton } from "@/presentation/components/theme/CustomButton";
import { FrontSlide } from "@/presentation/components/getAdditionalInformationUser/FrontSlide";
import { StepOne } from "@/presentation/components/welcome/StepOne";

const getAllInformationUserItems = [
  { id: "1", name: "Slide 1" },
  { id: "2", name: "Slide 2" },
  { id: "3", name: "Slide 3" },
];

const WelcomeForm = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const navigate = useNavigation();
  const { width } = useWindowDimensions();
  const opacity = useRef(new Animated.Value(1)).current;

  const scrollToSlide = (index: number) => {
    if (!flatListRef.current) return;
    flatListRef.current.scrollToIndex({ index, animated: true });
    setTimeout(() => setCurrentSlideIndex(index), 300);
  };

  const renderItem = ({ index }: { index: number }) => (
    <Animated.View style={{ width, opacity }}>
      {index === 0 && <FrontSlide />}
      {index === 1 && <StepOne />}
      {index === 2 && <Text>Tercer Slide</Text>}
    </Animated.View>
  );

  return (
    <MainContainerView>
      <FlatList
        ref={flatListRef}
        data={getAllInformationUserItems}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        scrollEnabled={false}
      />

      <View
        style={{
          position: "absolute",
          bottom: 20,
          alignSelf: "center",
          width: "80%",
        }}>
        {currentSlideIndex === getAllInformationUserItems.length - 1 ? (
          <>
            <CustomButton
              label='Anterior'
              onPress={() => scrollToSlide(currentSlideIndex - 1)}
              styleProp={{
                position: "absolute",
                bottom: 30,
                left: 0,
                width: 150,
              }}
            />
            <CustomButton
              label='Finalizar'
              onPress={() => navigate.goBack()}
              styleProp={{
                position: "absolute",
                bottom: 30,
                right: 0,
                width: 150,
              }}
            />
          </>
        ) : (
          <>
            {currentSlideIndex >= 1 && (
              <CustomButton
                label='Anterior'
                onPress={() => scrollToSlide(currentSlideIndex - 1)}
                styleProp={{
                  position: "absolute",
                  bottom: 30,
                  left: 0,
                  width: 150,
                }}
              />
            )}
            <CustomButton
              label='Siguiente'
              onPress={() => scrollToSlide(currentSlideIndex + 1)}
              styleProp={{
                position: "absolute",
                bottom: 30,
                right: 0,
                width: 150,
              }}
            />
          </>
        )}
      </View>
    </MainContainerView>
  );
};

export default WelcomeForm;
