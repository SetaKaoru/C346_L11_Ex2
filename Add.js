import React,{useState} from 'react';
import {StatusBar, View, Button, Text, TextInput, Alert, Image, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    title:{
        alignItems: 'center',
    },
    input:{
        margin:15,
    },
    submit:{
        alignItems:'center',
        fontWeight:'600',
        backgroundColor:'crimson',
        borderWidth:1,
    }
})

const Add = ({navigation, route}) => {
  const[name,setName] = useState("");
  const[email, setEmail] = useState("");
  const[phoneNumber, setPhoneNumber] = useState("");

  return (
    <View>
        <StatusBar/>
        <View style={styles.title}>
            <Image style={{ width: 330, height: 135 }} source={require('./images/logo_header.png')}/>
            <Text style={{fontWeight:'700', fontSize: 29,}}>REGISTRATION</Text>
        </View>
        <View style={styles.input}>
            <Text>Band Name:</Text>
            <TextInput style={{borderWidth:1, marginBottom: 7}} onChangeText={(text)=>setName(text)}/>
            <Text>Email:</Text>
            <TextInput style={{borderWidth:1, marginBottom: 7}} onChangeText={(text)=>setEmail(text)}/>
            <Text>Phone Number:</Text>
            <TextInput style={{borderWidth:1, marginBottom: 7}} onChangeText={(text)=>setPhoneNumber(text)}/>
        </View>
        <TouchableOpacity style={styles.submit} onPress={()=> {
            let mydata = JSON.parse(route.params.datastr)
            let item = {bandname: name, email: email, phone: phoneNumber};
            mydata.push(item);
            fetch("https://78330e8e8ab8492b934291f7dc0c3676.api.mockbin.io/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "erfeafrgrewrferdgsfarefasadssdfs"
                    },
                    body: JSON.stringify(mydata)
                }
            )}}>
            <Text style={{fontSize: 23,fontWeight:'bold', color:'white'}}>SUBMIT</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Add;
