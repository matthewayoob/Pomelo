import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarPosition: 'left',
        tabBarStyle: {
          width: "-5%", // Make the entire tab bar narrower
          borderRightWidth: 1,
          borderRightColor: '#e0e0e0',
          paddingVertical: 0, // Remove vertical padding
        },
        tabBarItemStyle: {
          marginHorizontal: 0, // Remove horizontal margins for items
          paddingHorizontal: 0, // Remove horizontal padding for items
          justifyContent: 'center', // Center text/icon vertically
          width: "100%",
        },
        tabBarLabelStyle: {
          fontSize: 14, // Smaller font size for labels
          textAlign: 'center', // Ensure text remains centered
          //width: 
        },
        tabBarIconStyle: {
          margin: 0, // Remove default margin around icons
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Dashboard',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="search/index"
        options={{
          tabBarLabel: 'Discover',
          headerShown: true,
        }}
      />
      <Tabs.Screen
        name="workspace/index"
        options={{
          tabBarLabel: 'Workspace',
          headerShown: true,
        }}
      />
    </Tabs>
  );
}
