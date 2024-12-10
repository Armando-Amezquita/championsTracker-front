import { View, Text } from "react-native";
import React from "react";
import { MainContainerView } from "@/presentation/components/theme/MainContainerView";

const Dashboard = () => {
  return (
    <MainContainerView>
      <Text style={{ color: "white" }}>Dashboard</Text>
    </MainContainerView>
  );
};

export default Dashboard;
