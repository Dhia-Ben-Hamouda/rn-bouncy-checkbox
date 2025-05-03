import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface CheckboxProps {
  isChecked: boolean;
  onChange: (value: boolean) => void;
  size?: number;
  label?: string;
  color?: string;
  checkColor?: string;
  customCheckIcon?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  boxStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}
