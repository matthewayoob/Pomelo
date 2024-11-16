import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Discover',
          headerShown: true,
        }}
      />

      <Tabs.Screen
        name="workspace"
        options={{
          title: 'Workspace',
          headerShown: true,
        }}
      />
      
    </Tabs>
  );
}