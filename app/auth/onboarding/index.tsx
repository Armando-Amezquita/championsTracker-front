import { View, FlatList, Animated, StyleSheet } from "react-native";

import { MainContainerView } from "@/presentation/components/theme/MainContainerView";
import { CustomButton } from "@/presentation/components/theme/CustomButton";
import { FrontSlide } from "@/presentation/components/getAdditionalInformationUser/FrontSlide";
import { StepOne } from "@/presentation/components/onboarding/StepOne";
import { StepTwo } from "@/presentation/components/onboarding/StepTwo";
import { useOnboarding } from "@/presentation/hooks/auth/onboarding/useOnboarding";

const OnBoarding = () => {
  const {
    //Properties
    getAllInformationUserItems,
    currentSlideIndex,
    flatListRef,
    opacity,
    width,

    //Methods
    handleNextStep,
    scrollToSlide,
    handleSendInformation,
    control,
    handleSubmit,
    errors,
    isSubmitting,
    isDisabled,
  } = useOnboarding();

  const renderItem = ({ index }: { index: number }) => (
    <Animated.View style={{ width, opacity }}>
      {index === 0 && <FrontSlide />}
      {index === 1 && <StepOne control={control} errors={errors} />}
      {index === 2 && <StepTwo control={control} errors={errors} />}
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

      <View style={style.onBoarding}>
        {currentSlideIndex === getAllInformationUserItems.length - 1 ? (
          <>
            <CustomButton label='Anterior' onPress={() => scrollToSlide(currentSlideIndex - 1)} stylePressable={style.back} />
            <CustomButton
              label={isSubmitting ? "Cargado.." : "Finalizar"}
              onPress={handleSubmit(handleSendInformation)}
              stylePressable={style.next}
              disabled={isDisabled || isSubmitting}
            />
          </>
        ) : (
          <>
            {currentSlideIndex >= 1 && <CustomButton label='Anterior' onPress={() => scrollToSlide(currentSlideIndex - 1)} stylePressable={style.back} />}
            <CustomButton label='Siguiente' onPress={handleNextStep} stylePressable={style.next} />
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
