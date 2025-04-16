import React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Svg, { Path } from "react-native-svg";

function Check({ size = 20, color }: { size: number; color: string }) {
  return (
    <Svg width={size * 0.5} height={size * 0.5} viewBox="0 0 512 512">
      <Path
        fill={color}
        d="M173.9 439.4l-166.4-166.4c-10-10-10-26.2 0-36.2l36.2-36.2c10-10 26.2-10 36.2 0L192 312.7 432.1 72.6c10-10 26.2-10 36.2 0l36.2 36.2c10 10 10 26.2 0 36.2l-294.4 294.4c-10 10-26.2 10-36.2 0z"
      />
    </Svg>
  );
}

interface ICheckbox {
  isChecked: boolean;
  onChange: (value: boolean) => void;
  size?: number;
  label?: string;
  color?: string;
  checkColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  boxStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

export default function Checkbox({
  isChecked,
  onChange,
  size = 20,
  label,
  color = "#555",
  checkColor = "#fff",
  containerStyle,
  boxStyle,
  labelStyle,
}: ICheckbox) {
  const scale = useSharedValue(1);
  const backgroundColor = useSharedValue(isChecked ? color : "transparent");
  const iconOpacity = useSharedValue(isChecked ? 1 : 0);

  const toggle = () => {
    scale.value = 1.2;
    scale.value = withSpring(1, { damping: 4 });

    iconOpacity.value = withTiming(isChecked ? 0 : 1, { duration: 200 });
    backgroundColor.value = withTiming(isChecked ? "transparent" : color, {
      duration: 200,
    });

    onChange(!isChecked);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    backgroundColor: backgroundColor.value,
    width: size,
    height: size,
    borderColor: color,
  }));

  const iconStyle = useAnimatedStyle(() => ({
    opacity: iconOpacity.value,
  }));

  return (
    <Pressable
      hitSlop={{ top: 15, left: 15, right: 15, bottom: 15 }}
      style={styles.pressable}
      onPress={toggle}
    >
      <View style={[styles.container, containerStyle]}>
        <Animated.View style={[styles.checkbox, boxStyle, animatedStyle]}>
          <Animated.View style={iconStyle}>
            <Check color={checkColor} size={size} />
          </Animated.View>
        </Animated.View>
        {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  checkbox: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 4,
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
    color: "#555",
  },
  pressable: {
    alignSelf: "flex-start",
  },
});
