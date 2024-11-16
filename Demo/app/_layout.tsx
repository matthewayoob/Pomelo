import { Tabs } from "expo-router";
import CustomTabBar from '../components/CustomTabBar';
import { View, StyleSheet } from 'react-native';

export default function RootLayout() {
  return (
    <View style={styles.mainContainer}>
      <CustomTabBar />
      <View style={styles.contentContainer}>
        <Tabs
          tabBar={() => null}
          screenOptions={{
            headerShown: false,
          }}
          sceneContainerStyle={styles.scene}
        >
          <Tabs.Screen name="index" />
          <Tabs.Screen name="search/index" />
          <Tabs.Screen name="workspace/index" />
        </Tabs>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 1,
    marginLeft: 200,
    width: 'calc(100% - 200px)',
  },
  scene: {
    padding: 20,
  },
});