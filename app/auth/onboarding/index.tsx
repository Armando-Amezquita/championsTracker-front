import { useEffect, useRef, useState } from "react";
import { View, Text, FlatList, useWindowDimensions, Animated, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { MainContainerView } from "@/presentation/components/theme/MainContainerView";
import { CustomButton } from "@/presentation/components/theme/CustomButton";
import { FrontSlide } from "@/presentation/components/getAdditionalInformationUser/FrontSlide";
import { StepOne } from "@/presentation/components/onboarding/StepOne";
import { StepTwo } from "@/presentation/components/onboarding/StepTwo";
import { useCustomForm } from "@/hooks/useCustomForm";
import { onboardingSchema, OnboardingForm } from "@/presentation/schemas/onBoarding";

const getAllInformationUserItems = [
  { id: "1", name: "Slide 1" },
  { id: "2", name: "Slide 2" },
  { id: "3", name: "Slide 3" },
];

const OnBoarding = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const navigate = useRouter();
  const { width } = useWindowDimensions();
  const opacity = useRef(new Animated.Value(1)).current;

  const { control, handleSubmit, errors, isSubmitting, isDisabled, watch, trigger } = useCustomForm<OnboardingForm>(onboardingSchema);

  const [isStepOneValid, setIsStepOneValid] = useState(false);

  const scrollToSlide = (index: number) => {
    if (!flatListRef.current) return;
    flatListRef.current.scrollToIndex({ index, animated: true });
    setTimeout(() => setCurrentSlideIndex(index), 300);
  };

  const handleStepOneValidation = (isValid: boolean) => {
    setIsStepOneValid(isValid);
  };

  const handleNextStep = async () => {
    if (currentSlideIndex === 1) {
      const isValid = await trigger(["stepOne.documentType", "stepOne.documentNumber", "stepOne.birthDate"]);
      console.log("isValid :>> ", isValid);
      if (!isValid) return;
    }
    scrollToSlide(currentSlideIndex + 1);
  };

  const renderItem = ({ index }: { index: number }) => (
    <Animated.View style={{ width, opacity }}>
      {index === 0 && <FrontSlide />}
      {index === 1 && <StepOne control={control} errors={errors} onValid={handleStepOneValidation} />}
      {index === 2 && <StepTwo control={control} errors={errors} onValid={handleStepOneValidation} />}
    </Animated.View>
  );

  const selectedDocumentType = watch("stepOne.documentType");

  const onSubmit = (data: OnboardingForm) => {
    console.log("Valores del formulario:", data);
  };

  const watchedValues = watch();

  useEffect(() => {
    console.log("Valores actuales del formulario:", watchedValues);
  }, [watchedValues]);

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

      <View style={style.onBoarding}>
        {currentSlideIndex === getAllInformationUserItems.length - 1 ? (
          <>
            <CustomButton label='Anterior' onPress={() => scrollToSlide(currentSlideIndex - 1)} stylePressable={style.back} />
            <CustomButton label='Finalizar' onPress={() => navigate.replace("/tabs/dashboard")} stylePressable={style.next} />
          </>
        ) : (
          <>
            {currentSlideIndex >= 1 && (
              <CustomButton label='Anterior' onPress={() => scrollToSlide(currentSlideIndex - 1)} stylePressable={style.back} />
            )}
            <CustomButton
              label='Siguiente'
              onPress={handleNextStep}
              // onPress={() => scrollToSlide(currentSlideIndex + 1)}
              stylePressable={style.next}
            />
          </>
        )}
      </View>
    </MainContainerView>
  );
};

export default OnBoarding;

const style = StyleSheet.create({
  onBoarding: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    width: "80%",
  },
  back: {
    position: "absolute",
    bottom: 30,
    left: 0,
    width: 150,
  },
  next: {
    position: "absolute",
    bottom: 30,
    right: 0,
    width: 150,
  },
});
