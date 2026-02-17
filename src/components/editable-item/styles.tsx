import { StyleSheet } from "react-native"
import { ColorScheme } from "settup/theme-contexts/theme"

export default (theme: ColorScheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: "#7f7f7f",
      width: "40%",
      margin: "5%",
      aspectRatio: 1,
    },
  })
