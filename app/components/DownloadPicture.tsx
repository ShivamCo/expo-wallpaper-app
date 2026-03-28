import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

const DownloadPicture = ({ onClose }: {
  onClose: () => void;

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
      handleIndicatorStyle={{height: 0}}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Text>Awesome 🎉</Text>
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
    flex: 1,

    alignItems: 'center',
  },
});

export default DownloadPicture