import { Link, Slot, Stack, Tabs } from "expo-router";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function RootLayout() {
  return (
  <View style={{ flex: 1 }} >
  <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }}>



    <Tabs.Screen
      name="index"
      options={{
        title: 'For You',
        tabBarIcon: ({color})=> <FontAwesome size={28} name="home" color={color} />
      }} />


    <Tabs.Screen
      name="explore"
      options={{
        title: 'Explore',
        tabBarIcon: ({color})=> <FontAwesome size={28} name="compass" color={color} />
      }} />

    <Tabs.Screen
      name="account"
      options={{
        title: 'Account',
        tabBarIcon: ({color})=> <FontAwesome size={28} name="user" color={color} />
      }} />




  </Tabs>
  </View>
  
  )
}
