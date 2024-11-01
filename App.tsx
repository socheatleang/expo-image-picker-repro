import React, { useEffect } from 'react';
import { Button, View, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const App: React.FC = () => {
  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Required', 'Sorry, we need camera permissions to make this work!');
      }
    })();
  }, []);

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        console.log(result.uri);
      }
    } catch (error) {
      console.error("Error while picking image: ", error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Pick Image" onPress={pickImage} />
    </View>
  );
};

export default App;
