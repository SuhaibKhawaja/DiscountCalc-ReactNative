import React,{useState} from 'react';
import { Text, View, StyleSheet, TextInput} from 'react-native';
function App() {
  const [ActualPrice, SetActualPrice] = useState(0);
  const [Discount, SetDiscount] = useState(0);

  return (
    <View style={styles.container}>
    <View style={styles.textView}>
      <Text style={styles.text}>Discount Calculator</Text>
    </View>
    <View>
      <TextInput
        style={styles.inputFields}
        onChangeText={text => SetActualPrice(text)}
        value={ActualPrice}
        keyboardType="number-pad"
        placeholder="Actual Price"
      />
      <TextInput
        style={styles.inputFields}
        onChangeText={text => SetDiscount(text)}
        value={Discount}
        keyboardType="number-pad"
        placeholder="Discount Percentage"
      />
    </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  inputFields:{
    height: 40, borderColor: 'black', borderWidth: 1,
    marginBottom:20,
    padding:10,
  },
  textView:{
    // borderWidth:1,
    alignItems:'center',
    padding:5,
    marginBottom:15,
  },
  text:{
    fontSize:20,
    fontFamily:'monospace',
    padding:10,
  }

});
export default App;
