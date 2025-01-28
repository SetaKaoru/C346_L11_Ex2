import React,{useState, useEffect} from 'react';
import {StatusBar, Button, FlatList, StyleSheet, Text, View} from 'react-native';

let originalData = []

const styles = StyleSheet.create({
   listStyle: {
      borderWidth: 1,
   },
});

const Home = ({navigation}) => {
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        fetch("https://78330e8e8ab8492b934291f7dc0c3676.api.mockbin.io/").then((response) => {
            return response.json();
        }).then((myJson)=>{
            if(originalData.length < 1){
                setMyData(myJson);
                originalData = myJson;
            }
            setMyData(myJson);
        })
    }, []);


  const renderItem = ({item, index, section}) => {
    return (
    <View style={styles.listStyle}>
    <Text>{item.bandname}</Text>
    </View>
    );
  };

   return (
    <View>
      <StatusBar/>
	  <Button title='Add Item' onPress={
      ()=>{navigation.navigate("Add",{datastr:JSON.stringify(myData)})}}/>
      <FlatList data={myData} renderItem={renderItem}/>
    </View>
  );
};

export default Home;
