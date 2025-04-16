"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Checkbox;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
const react_native_svg_1 = __importStar(require("react-native-svg"));
function Check({ size = 20, color }) {
    return (<react_native_svg_1.default width={size * 0.5} height={size * 0.5} viewBox="0 0 512 512">
      <react_native_svg_1.Path fill={color} d="M173.9 439.4l-166.4-166.4c-10-10-10-26.2 0-36.2l36.2-36.2c10-10 26.2-10 36.2 0L192 312.7 432.1 72.6c10-10 26.2-10 36.2 0l36.2 36.2c10 10 10 26.2 0 36.2l-294.4 294.4c-10 10-26.2 10-36.2 0z"/>
    </react_native_svg_1.default>);
}
function Checkbox({ isChecked, onChange, size = 20, label, color = "#555", checkColor = "#fff", containerStyle, boxStyle, labelStyle, }) {
    const scale = (0, react_native_reanimated_1.useSharedValue)(1);
    const backgroundColor = (0, react_native_reanimated_1.useSharedValue)(isChecked ? color : "transparent");
    const iconOpacity = (0, react_native_reanimated_1.useSharedValue)(isChecked ? 1 : 0);
    const toggle = () => {
        scale.value = 1.2;
        scale.value = (0, react_native_reanimated_1.withSpring)(1, { damping: 4 });
        iconOpacity.value = (0, react_native_reanimated_1.withTiming)(isChecked ? 0 : 1, { duration: 200 });
        backgroundColor.value = (0, react_native_reanimated_1.withTiming)(isChecked ? "transparent" : color, {
            duration: 200,
        });
        onChange(!isChecked);
    };
    const animatedStyle = (0, react_native_reanimated_1.useAnimatedStyle)(() => ({
        transform: [{ scale: scale.value }],
        backgroundColor: backgroundColor.value,
        width: size,
        height: size,
        borderColor: color,
    }));
    const iconStyle = (0, react_native_reanimated_1.useAnimatedStyle)(() => ({
        opacity: iconOpacity.value,
    }));
    return (<react_native_1.Pressable hitSlop={{ top: 15, left: 15, right: 15, bottom: 15 }} style={styles.pressable} onPress={toggle}>
      <react_native_1.View style={[styles.container, containerStyle]}>
        <react_native_reanimated_1.default.View style={[styles.checkbox, boxStyle, animatedStyle]}>
          <react_native_reanimated_1.default.View style={iconStyle}>
            <Check color={checkColor} size={size}/>
          </react_native_reanimated_1.default.View>
        </react_native_reanimated_1.default.View>
        {label && <react_native_1.Text style={[styles.label, labelStyle]}>{label}</react_native_1.Text>}
      </react_native_1.View>
    </react_native_1.Pressable>);
}
const styles = react_native_1.StyleSheet.create({
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
