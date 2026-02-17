import { StyleSheet } from "react-native"
import { ColorScheme } from "settup/theme-contexts/theme"

export default (theme: ColorScheme) =>
  StyleSheet.create({
    button: {
      color: "#00007f",
    },
    text: {
      color: "#7f7f7f",
    },
  })
