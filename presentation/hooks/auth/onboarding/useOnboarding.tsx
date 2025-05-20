import { useState, useRef } from "react";
import { FlatList, Animated, useWindowDimensions } from "react-native";
import { useRouter } from "expo-router";

import { useCustomForm } from "@/hooks/useCustomForm";
import { authFetcher } from "@/services/auth.adapter";
import { OnboardingForm, onboardingSchema } from "@/presentation/schemas/onBoarding";

const getAllInformationUserItems = [
  { id: "1", name: "Slide 1" },
  { id: "2", name: "Slide 2" },
  { id: "3", name: "Slide 3" },
];

export const useOnboarding = () => {
  const navigate = useRouter();
  const { width } = useWindowDimensions();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const opacity = useRef(new Animated.Value(1)).current;

  const { control, handleSubmit, errors, isSubmitting, isDisabled, watch, trigger } = useCustomForm<OnboardingForm>(onboardingSchema);

  const scrollToSlide = (index: number) => {
    if (!flatListRef.current) return;
    flatListRef.current.scrollToIndex({ index, animated: true });
    setTimeout(() => setCurrentSlideIndex(index), 300);
  };

  const handleNextStep = async () => {
    if (currentSlideIndex === 1) {
      const isValid = await trigger(["stepOne.documentType", "stepOne.documentNumber", "stepOne.birthDate"]);
      if (!isValid) return;
    }
    if (currentSlideIndex === 2) {
      const isValid = await trigger(["stepTwo.role"]);
      if (!isValid) return;
    }
    scrollToSlide(currentSlideIndex + 1);
  };

  const handleSendInformation = async (payload: OnboardingForm) => {
    try {
      const payloadMap = {
        idNumber: payload.stepOne.documentNumber,
        documentType: payload.stepOne.documentType,
        birthDate: payload.stepOne.birthDate,
      };
      const response = await authFetcher.put<any>(`/user/${"67e222be84e06e7ebbd7611b"}`, payloadMap);

      if (response.statusCode === 200) navigate.replace("/tabs/dashboard");
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  return {
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
    watch,
  };
};
