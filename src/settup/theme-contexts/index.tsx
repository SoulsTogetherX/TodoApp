// ThemeContext.js
import React, { ReactNode, createContext, useState } from "react"
import { getTheme, defaultPreset, ColorSchemePreset } from "./theme"

export const ThemeContext = createContext({
  theme: getTheme(defaultPreset),
  toggleTheme: () => {},
})

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [colorScheme, setColorScheme] =
    useState<ColorSchemePreset>(defaultPreset)
  const theme = getTheme(colorScheme)

  const toggleTheme = () => {
    setColorScheme((prevScheme) => (prevScheme === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export interface ThemeProviderProps {
  children?: ReactNode
}
