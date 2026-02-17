import React from "react"
import { TouchableOpacity, Text, ColorValue } from "react-native"
import styles from "./styles"

export const Button = ({ onPress, title, color, textColor }: ButtonProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.buttonContainer, { backgroundColor: color }]}
  >
    <Text style={{ ...styles.buttonText }}>{title}</Text>
  </TouchableOpacity>
)

export interface ButtonProps {
  onPress?: () => void
  title?: string
  color?: ColorValue
  textColor?: ColorValue
}
