import { Link } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Account() {


    return (
        <View>
            <Text>Account</Text>
            <Link href={"/accountinfo"}>
            <Text>Account Info</Text>
            </Link>
            
        </View>
    )

}