import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Wallpaper } from '@/hooks/useWallpapers';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
// import { Button } from '@react-navigation/elements';

const DownloadPicture = ({ onClose, wallpaper }: {
  onClose: () => void;
  wallpaper: Wallpaper



}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (

    <BottomSheet
      onClose={onClose}
      snapPoints={["90%"]}
      ref={bottomSheetRef}
      enablePanDownToClose={true}
      onChange={handleSheetChanges}
      enableDynamicSizing={false}
      handleIndicatorStyle={{ height: 0 }}
      handleStyle={{ display: "none" }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Image source={{ uri: wallpaper.url }} style={styles.image} />

        <View style={styles.topbar} >


          <Ionicons
            name={'close'}
            size={24}
            style={{ backgroundColor: "white", borderRadius: 50 }}
          // color={ theme === 'light' ? Colors.light.icon : Colors.dark.icon }
          />

          <View style={styles.topbarInner} >


            <Ionicons
              name={'share'}
              size={24}
              color={"white"}
            // color={ theme === 'light' ? Colors.light.icon : Colors.dark.icon }
            />

            <Ionicons
              name={'heart'}
              size={24}
              color={"white"}
            // color={ theme === 'light' ? Colors.light.icon : Colors.dark.icon }
            />

          </View>


        </View>

        <Text>{wallpaper.name}</Text>
        <Button title='Download' ></Button>
      </BottomSheetView>
    </BottomSheet>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  contentContainer: {
    // flex: 1,
    height: '100%'


  },

  topbar: {

    position: "absolute",
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: 'row',
    width: "100%"

  },

  image: {

    height: "70%",
    borderRadius: 15


  },

  topbarInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '20%'
  }



});

export default DownloadPicture