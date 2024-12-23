import { Text, SafeAreaView, StyleSheet } from 'react-native';

// or any files within the Snack
import CustomImage from './components/CustomImage';

import imagemLocal from './assets/coldplay-albums.jpg';
const ImagemRemotaURI = 'https://upload.wikimedia.org/wikipedia/en/f/fd/Coldplay_-_Parachutes.png';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.tituloView}>Três formas de inserir uma imagem:</Text>
      <CustomImage
        fromWeb={false}
        image={require('./assets/snack-icon.png')}
        title={'Imagem Local com "require"'}
        width={213}
        height={213}
      />
      <CustomImage
        fromWeb={false}
        image={imagemLocal}
        title={'Imagem Local com "import"'}
        width={213}
        height={213}
      />
      <CustomImage
        fromWeb={true}
        image={ImagemRemotaURI}
        title={'Imagem Local com "uri"'}
        width={213}
        height={213}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
  },
  tituloView: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
