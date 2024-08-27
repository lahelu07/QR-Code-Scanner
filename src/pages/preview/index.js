import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import {Type} from '../../../assets/data';

function Preview({navigation, route}) {
  const dataPreview = route.params;

  return (
    <View style={styles.videoContainer}>
      {dataPreview.dataType == Type.VIDEO ? (
        <VideoPlayer
          source={dataPreview.component}
          navigator={navigation}
          paused={true}
        />
      ) : (
        <>
          <Image source={dataPreview.component} style={styles.image} />
        </>
      )}
    </View>
  );
}


var styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },

  videoContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Preview;
