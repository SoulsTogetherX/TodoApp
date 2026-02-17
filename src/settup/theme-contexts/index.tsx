// ThemeContext.js
import React, { ReactNode, createContext, useContext, useState } from "react"
import { getTheme, defaultPreset, ColorSchemePreset } from "./theme"

export const ThemeContext = createContext({
  theme: getTheme(defaultPreset),
  changeTheme: (scheme: ColorSchemePreset) => {},
})

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [colorScheme, setColorScheme] =
    useState<ColorSchemePreset>(defaultPreset)
  const theme = getTheme(colorScheme)
  const changeTheme = (scheme: ColorSchemePreset) => {
    setColorScheme(scheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

export interface ThemeProviderProps {
  children?: ReactNode
}
