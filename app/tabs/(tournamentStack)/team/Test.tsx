import { useState, useRef, useEffect, ComponentProps } from "react";
import { View, Pressable, StyleSheet, Animated } from "react-native";
import { ChampionIcon } from "@/presentation/plugins/Icon";
import { Colors } from "@/presentation/styles/global-styles";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  items: Item[];
  handleChangeValue: (id: string) => void;
}

interface Item {
  id: string;
  label: string;
  icon: ComponentProps<typeof Ionicons>["name"];
}

export const Test = ({ items, handleChangeValue }: Props) => {
  const [selected, setSelected] = useState(items[0].id);

  const animations = useRef(items.map(() => new Animated.Value(0))).current;

  const handlePress = (id: string) => {
    if (id === selected) return;
    items.forEach((item, index) => {
      Animated.timing(animations[index], {
        toValue: item.id === id ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    });
    setSelected(id);
    handleChangeValue(id);
  };

  useEffect(() => {
    Animated.timing(animations[0], {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      {items.map((item, index) => {
        const animation = animations[index];
        const textOpacity = animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        });
        const textWidth = animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 115],
        });

        return (
          <Pressable
            key={item.id}
            onPress={() => handlePress(item.id)}
            style={[
              styles.menuItem,
              {
                borderColor:
                  selected === item.id ? Colors.primary : Colors.gray,
              },
            ]}>
            <ChampionIcon
              name={item.icon}
              size={30}
              color={selected === item.id ? Colors.primary : Colors.gray}
            />

            {item.id === selected && (
              <Animated.Text
                style={[
                  styles.menuText,
                  {
                    opacity: textOpacity,
                    width: textWidth,
                    color: Colors.primary,
                  },
                ]}
                numberOfLines={1}>
                {item.label}
              </Animated.Text>
            )}
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    top: -50,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderWidth: 1,
    padding: 4,
    borderRadius: 20,
    height: 50,
  },
  menuText: {
    fontSize: 20,
    paddingRight: 10,
    overflow: "hidden",
    lineHeight: 18,
  },
});
