import React from "react"
import { TouchableOpacity, Text, ColorValue } from "react-native"

import { ColorScheme, lightTheme } from "settup/theme-contexts/theme"
import createStyle from "./styles"
import createGlobalStyle from "app/styles"

export const Button = ({
  scheme = lightTheme,
  title,
  onPress,
}: ButtonProps) => {
  const styles = createStyle(scheme)
  const globalStyles = createGlobalStyle(scheme)

  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonContainer]}>
      <Text style={{ ...styles.buttonText }}>{title}</Text>
    </TouchableOpacity>
  )
}

export interface ButtonProps {
  scheme?: ColorScheme
  onPress?: () => void
  title?: string
  color?: ColorValue
  textColor?: ColorValue
}
