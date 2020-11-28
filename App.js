import React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet, TextInput,TouchableOpacity} from 'react-native';
function App() {
  const [ActualPrice, SetActualPrice] = useState(0);
  const [Discount, SetDiscount] = useState(0);
  const [save,setSave]=useState(0);
  const [finalPrice,setFinalPrice]=useState(0);
  const Orignalprice=[];
  const DiscountPercentage=[];
  const DiscountedPrice=[];
  // const calculateDiscount=(text)=>{
  //   SetDiscount(text);
  //   const a=((ActualPrice*Discount)/100).toFixed(2);
  //   setSave(a);
  //   setFinalPrice(ActualPrice-a);
  // }
  const saveCalculation=()=>{
    Orignalprice.push(ActualPrice);
    DiscountPercentage.push(Discount);
    DiscountedPrice.push(finalPrice);
    alert(Orignalprice[0]);
  }
  useEffect(()=>{
    const a=((ActualPrice*Discount)/100);
    setSave(a);
    setFinalPrice(ActualPrice-a);
  },[Discount]);
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.text}>Discount Calculator</Text>
      </View>
      <View >
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
          // maxLength='2'
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.detailsText}>You Save : {save}</Text>
        <Text style={styles.detailsText}>Final Price : {finalPrice}</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={saveCalculation}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
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
    fontSize:25,
    fontFamily:'monospace',
    fontWeight:'bold',
    padding:10,
  },
  details:{
    // borderWidth:1,
    alignItems:'center',
    paddingHorizontal:50
  },
  detailsText:{
    // borderWidth:1,
    padding:10,
    fontSize:15,
    fontWeight:'bold',
    fontFamily:'monospace'

  },
  buttonContainer:{
    // borderWidth:1,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  button:{
     backgroundColor:'black',
    padding:15,
    width:'30%',
    alignItems:'center',
    borderRadius:30,
    margin:10
  },
  buttonText:{
    color:'whitesmoke',
    fontSize:15,
    fontWeight:'bold',
    fontFamily:'monospace'
  }
});
export default App;
