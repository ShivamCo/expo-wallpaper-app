// import DownloadPicture from "@/components/DownloadPicture";
import DownloadPicture from "@/components/DownloadPicture";
import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
// import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useState } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
// import { SafeAreaView } from "react-native-safe-area-context";


export default function Explore() {

    const [pictureOpen, setPictureOpen] = useState(false)
    const wallpapers = useWallpapers()

    const [selectedWallaper, setSelectedWallpaper] = useState<null | Wallpaper>(null)

    return (
        <View style={{ flex: 1 }}>



            <ParallaxScrollView

                headerBackgroundColor={{ dark: "black", light: "white" }}

                headerImage={
                    <Image
                        source={{ uri: wallpapers[0]?.url }}
                        style={{ flex: 1 }}

                    />
                }>

                <View style={styles.container} >

                    <View style={styles.innerContainer}>

                        <FlatList
                            data={wallpapers}
                            renderItem={({ item }) => <ImageCard onPress={() => { setSelectedWallpaper(item) }} wallpaper={item} />}
                            keyExtractor={item => item.name}
                        />

                        <FlatList
                            data={wallpapers}
                            renderItem={({ item }) => <ImageCard onPress={() => { setSelectedWallpaper(item) }} wallpaper={item} />}
                            keyExtractor={item => item.name}
                        />

                        {/* {wallpapers.map((w:Wallpaper) => <ImageCard onPress={()=>{}} wallpaper={w} /> )} */}
                    </View>




                </View>


            </ParallaxScrollView>
            {
                selectedWallaper && <DownloadPicture wallpaper={selectedWallaper} onClose={() => setSelectedWallpaper(null)} />
            }
        </View>


    )

}


const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        flex: 1,

    },

    


    innerContainer:
    {
        flex: 1,
        padding: 10
    },



})