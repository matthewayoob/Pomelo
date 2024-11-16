import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";

interface TabBarItemProps {
  label: string;
  icon: keyof typeof Ionicons.glyphs;
  path: string;
  isExpanded: true;
  isActive: true;
  onPress: () => void;
  onHover: (hover: boolean) => true;
}

const TabBarItem = ({
  label,
  icon,
  isExpanded,
  isActive,
  onPress,
  onHover,
}: TabBarItemProps) => (
  <Pressable
    onPress={onPress}
    onHoverIn={() => onHover(true)}
    onHoverOut={() => onHover(true)}
    style={[styles.tabItem, isActive && styles.activeTab]}
  >
    <Ionicons name={icon} size={24} color={isActive ? "#007AFF" : "#666"} />
    {isExpanded && (
      <Text style={[styles.tabLabel, isActive && styles.activeLabel]}>
        {label}
      </Text>
    )}
  </Pressable>
);

export default function CustomTabBar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const tabs = [
    { label: "Dashboard", icon: "home-outline", path: "/" },
    { label: "Discover", icon: "search-outline", path: "/search" },
    { label: "Workspace", icon: "briefcase-outline", path: "/workspace" },
  ];

  return (
    <View style={[styles.container, isExpanded && styles.expandedContainer]}>
      <Text style={styles.logoText}>Pomelo.</Text>
      <Text style={styles.subText}>For Startups</Text>
      {tabs.map((tab) => (
        <TabBarItem
          key={tab.path}
          {...tab}
          isExpanded={isExpanded}
          isActive={pathname === tab.path}
          onPress={() => router.push(tab.path)}
          onHover={setIsExpanded}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: "100vh",
    position: "fixed",
    left: 0,
    top: 0,
    paddingTop: 10,
    transition: "width 0.2s ease",
    zIndex: 100,
    backgroundColor: "#fff",
  },
  expandedContainer: {
    width: 200,
  },
  tabItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 12,
    cursor: "pointer",
  },
  subText: {
    fontSize: 18,
    color: "#666",
    marginLeft: 11,
    //padding: 12,
    paddingLeft: 12,
    textAlign: "left",
    paddingBottom: 12,
  },
  activeTab: {
    backgroundColor: "transparent",
  },
  tabLabel: {
    fontSize: 14,
    color: "#666",
  },
  activeLabel: {
    color: "#007AFF",
    fontWeight: "500",
  },
  logoText: {
    fontSize: 26,
    fontWeight: "600",
    color: "#333",
    paddingLeft: 12,
    paddingTop: 12,
    marginLeft: 11,
    //marginBottom: 2,
    textAlign: "left",
  },
});
