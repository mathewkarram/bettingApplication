import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    Button,
    ScrollView,
    TouchableOpacity,
    Image,
  } from 'react-native';
  
  const images = [
    { source: { uri: 'https://tse2.mm.bing.net/th?id=OIP.IVBeTVP_FOMWO3ycXX1FJQHaEo&pid=Api&P=0&h=180' }, link: 'Soccer' },
    { source: { uri: 'https://hdqwalls.com/download/1/basketball-hd-2560x1440.jpg' }, link: 'Basketball' },
    { source: { uri: 'https://tse1.mm.bing.net/th?id=OIP.mkHtTxFpmA2uXeg1_Q6TLQHaE7&pid=Api&P=0&h=180' }, link: 'Racing' },
  ];
  
  const Home = ({ navigation }) => {
    const handleImageClick = (link) => {
      navigation.navigate(link);
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Bet400</Text>
        <ScrollView horizontal>
          {images.map((image, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleImageClick(image.link)}>
              <Image source={image.source} style={styles.image} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#DCDCDC',
      paddingTop: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 15,
      marginTop: 10,
      color: '#2E8B57',
    },
    image: {
      width: 400,
      height: 400,
      margin: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: 'green',
    },
  });
  export default Home;