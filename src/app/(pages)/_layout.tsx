import { SafeAreaProvider } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"
import { Stack } from "expo-router"
import { ThemeProvider } from "settup/theme-contexts"

export default function RootLayout() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="task-info-display/index"
            options={{ headerShown: true }}
          />
          <Stack.Screen name="task-page/index" />
        </Stack>
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
