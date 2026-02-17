import { StyleSheet } from "react-native"
import { ColorScheme } from "settup/theme-contexts/theme"

export default (theme: ColorScheme) =>
  StyleSheet.create({
    container: { backgroundColor: theme.background },
    addIconContainer: {
      backgroundColor: theme.primary,
      position: "absolute",
      bottom: 20,
      right: 20,
      zIndex: 1,
      width: 30,
      height: 30,
      borderRadius: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    addIcon: {
      fontSize: 30,
      color: theme.text,
      textAlignVertical: "center",
      textAlign: "center",
    },
  })
