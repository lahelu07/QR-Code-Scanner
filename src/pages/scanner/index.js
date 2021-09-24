import React from 'react';
import {Text, StyleSheet} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {Data} from '../../../assets/data';

const Scanner = ({navigation}) => {
  const onSuccess = e => {
    const search = Data.find(el => el.rawNumber == e.rawData);
    if (search) {
      navigation.navigate('Preview', search);
    }
  };

  return (
    <QRCodeScanner
      cameraStyle={styles.camera}
      containerStyle={styles.cameraContainer}
      onRead={onSuccess}
      showMarker={true}
      reactivate={true}
      reactivateTimeout={5000}
      markerStyle={styles.cameraMarker}
      bottomContent={
        <Text style={styles.centerText}>
          Arahkan kamera ke kode QR yang tersedia.
        </Text>
      }
    />
  );
};

export default Scanner;

const styles = StyleSheet.create({
  cameraMarker: {
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
  },
  cameraContainer: {
    backgroundColor: '#fff',
  },
  camera: {
    width: 200,
    transform: [
      {
        translateX: 50,
      },
    ],
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
});
