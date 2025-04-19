# rn-bouncy-checkbox

A customizable and animated checkbox component for React Native, built with **React Native Reanimated** and **React Native SVG**.

## ![Alt text](https://github.com/Dhia-Ben-Hamouda/rn-bouncy-checkbox/blob/main/src/assets/preview.gif)

## ✨ Features

- ✅ Smooth spring animation
- 🎨 Fully customizable (size, color, label, etc.)
- ⚙️ Built with `react-native-reanimated` and `react-native-svg`
- 📱 Supports accessibility hitSlop
- 🪶 Lightweight and easy to use

---

## 📦 Installation

```bash
npm install rn-bouncy-checkbox
# or
yarn add rn-bouncy-checkbox
```

Then install the required peer dependencies:

```bash
npm install react-native-reanimated react-native-svg
```

---

## 🚀 Usage

```tsx
import React, { useState } from "react";
import { View } from "react-native";
import Checkbox from "rn-bouncy-checkbox";

export default function App() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View>
      <Checkbox
        isChecked={isChecked}
        onChange={setIsChecked}
        label="I have read the terms and conditions"
      />
    </View>
  );
}
```

---

## 🔧 Props

| Prop              | Type                       | Default      | Description                                             |
| ----------------- | -------------------------- | ------------ | ------------------------------------------------------- |
| `isChecked`       | `boolean`                  | **required** | Whether the checkbox is currently checked               |
| `onChange`        | `(value: boolean) => void` | **required** | Callback when the checkbox is toggled                   |
| `size`            | `number`                   | `20`         | Size of the checkbox (width and height)                 |
| `label`           | `string`                   | `undefined`  | Optional label text displayed next to the checkbox      |
| `color`           | `string`                   | `#555`       | Checkbox background and border color                    |
| `checkColor`      | `string`                   | `#fff`       | Color of the checkmark icon                             |
| `containerStyle`  | `StyleProp<ViewStyle>`     | `undefined`  | Custom style for the outer container (checkbox + label) |
| `boxStyle`        | `StyleProp<ViewStyle>`     | `undefined`  | Custom style for the checkbox box                       |
| `labelStyle`      | `StyleProp<TextStyle>`     | `undefined`  | Custom style for the label text                         |
| `customCheckIcon` | `ReactNode`                | `undefined`  | Custom checkbox check icon                              |

---

## 📚 Contributing

Issues and pull requests are welcome! Please open an issue first to discuss major changes.

Made with ❤️ by Dhia Ben Hamouda
