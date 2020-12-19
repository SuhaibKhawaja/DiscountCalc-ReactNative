import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { color, set } from 'react-native-reanimated';
const Stack = createStackNavigator();

function HistoryScreen({ route, navigation }) {
  const {col} = route.params;
  const[list,setList]=useState(col);
  return (
    <View style={styles.container}>
      <View style={styles.header}><Text style={styles.buttonText}>History</Text></View>
      <View style={styles.table}>
      <Text style={[styles.column,{fontWeight:"bold"}]}>Final Price</Text>
      <Text style={[styles.column,{fontWeight:"bold"}]}>Discount</Text>
        <Text style={[styles.column,{fontWeight:"bold"}]}>PRICE</Text>
      </View>
      {
        list.map((element,key) => (
          <View style={styles.table} key={key}>
            <Text style={styles.column}>{element.Orignalprice}</Text>
            <Text style={styles.column}>{element.DiscountPercentage}</Text>
            <Text style={styles.column}>{element.DiscountedPrice}</Text>
          </View>
        ))
      }
      <View style={{marginTop:10}}>
        <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate("Home") }} >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => {setList([])}} >
          <Text style={styles.buttonText}>CLEAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
function HomeScreen({ navigation }) {
  const [ActualPrice, SetActualPrice] = useState('');
  const [Discount, SetDiscount] = useState('');
  const [save, setSave] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [History, setHistory] = useState([]);
  // const Orignalprice=[];
  // const DiscountPercentage=[];
  // const DiscountedPrice=[];

  const saveCalculation = () => {
    setHistory([...History, {
      key: Math.random(),
      Orignalprice: ActualPrice,
      DiscountPercentage: Discount,
      DiscountedPrice: finalPrice,
    }]);
    // console.log(History);
  }

  const GoToHistory=()=>{
    SetActualPrice('')
    SetDiscount('')
    setFinalPrice('')
    navigation.navigate('History',{col:History});
   
  }
  useEffect(() => {
    if (Discount > 100) {
      alert("Invalid Discount");
      SetDiscount('');
      setFinalPrice(0);
    }
    else {
      const a = ((ActualPrice * Discount) / 100);
      setSave(a.toFixed(2));
      setFinalPrice((ActualPrice - a).toFixed(2));
    }
  }, [Discount]);
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
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.detailsText}>You Save : {save}</Text>
        <Text style={styles.detailsText}>Final Price : {finalPrice}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: Discount === '' ? 'gray' : 'black' }]} onPress={saveCalculation} disabled={Discount === '' ? true : false}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={GoToHistory} >
          <Text style={styles.buttonText}>History</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="History" options={{ headerShown: false }} component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    // alignItems:'center',
  },
  inputFields: {
    height: 40, borderColor: 'black', borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  textView: {
    // borderWidth:1,
    alignItems: 'center',
    padding: 5,
    marginBottom: 15,
  },
  text: {
    fontSize: 25,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    padding: 10,
  },
  details: {
    // borderWidth:1,
    alignItems: 'center',
    paddingHorizontal: 50
  },
  detailsText: {
    // borderWidth:1,
    padding: 10,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'monospace'

  },
  buttonContainer: {
    // borderWidth:1,
    // flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 50,
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    width: '40%',
    alignItems: 'center',
    borderRadius: 30,
    margin: 10
  },
  buttonText: {
    color: 'whitesmoke',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'monospace'
  },
  header:{
    // fontSize:20,
    alignItems:'center',
    backgroundColor:"black",
    borderRadius: 30,
    margin:10,
    padding:15
    // borderWidth:1,
    // fontWeight:"bold"
  },
  table:{
    // borderWidth:1,
    flexDirection:"row",
    // marginVertical:20,
    padding:10,
    justifyContent:"center"
  },
  column:{
    borderWidth:1,
    width:"30%",
    textAlign:'center',
    fontSize:15,
    borderTopWidth:0,
    borderBottomWidth:0,
  },
  btn:{
    backgroundColor: 'black',
    padding: 15,
    // width: '40%',
    alignItems: 'center',
    borderRadius: 30,
    marginHorizontal:10,
    marginVertical:5
  }
});
export default App;
