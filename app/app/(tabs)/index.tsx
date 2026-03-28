import { Link } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Suggested from "../(ForYouPages)/suggested";
import Liked from "../(ForYouPages)/liked";
import Library from "../(ForYouPages)/library";
const Tab = createMaterialTopTabNavigator();

export default function ForYou() {

    return (
       
            <SafeAreaView  style={{flex: 1}} >
            <Tab.Navigator>
                <Tab.Screen name="suggested" component={Suggested} />
                <Tab.Screen name="liked" component={Liked} />
                <Tab.Screen name="library" component={Library} />
            </Tab.Navigator>
        </SafeAreaView>
    )

}