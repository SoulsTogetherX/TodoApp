import { StyleSheet } from "react-native"
import { ColorScheme } from "settup/theme-contexts/theme"

export default (theme: ColorScheme) =>
  StyleSheet.create({
    buttonContainer: {
      alignItems: "center",
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: "#7f7f7f",
      fontSize: 16,
      fontWeight: "bold",
    },
  })
