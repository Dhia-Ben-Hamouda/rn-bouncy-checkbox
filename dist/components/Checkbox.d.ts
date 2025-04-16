import React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
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
export default function Checkbox({ isChecked, onChange, size, label, color, checkColor, containerStyle, boxStyle, labelStyle, }: ICheckbox): React.JSX.Element;
export {};
