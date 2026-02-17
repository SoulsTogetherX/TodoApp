import { ColorValue } from "react-native"

export type ColorSchemePreset = "light" | "dark"
export interface ColorScheme {
  presetname: ColorSchemePreset
  text: ColorValue
  background: ColorValue
  primary: ColorValue
  secondary: ColorValue
  accent: ColorValue
}

export const lightTheme: ColorScheme = {
  presetname: "light",
  text: "#050e0d",
  background: "#f5fbfb",
  primary: "#519ab3",
  secondary: "#a895d1",
  accent: "#b27fc7",
}

export const darkTheme: ColorScheme = {
  presetname: "dark",
  text: "#ebe9fc",
  background: "#292929",
  primary: "#00014d",
  secondary: "#1b1485",
  accent: "#4942ff",
}

export const getTheme = (scheme: ColorSchemePreset) => {
  switch (scheme) {
    case "light":
      return lightTheme
    case "dark":
      return darkTheme
  }

  return lightTheme
}
export const defaultPreset: ColorSchemePreset = "light"
