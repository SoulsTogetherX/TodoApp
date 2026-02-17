import { useTheme } from "settup/theme-contexts"

import createStyle from "./styles"
import createGlobalStyle from "app/styles"

export default function Page() {
  const { theme } = useTheme()
  const styles = createStyle(theme)
  const globalStyles = createGlobalStyle(theme)

  return <></>
}
