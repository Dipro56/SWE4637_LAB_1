import React from 'react';
import {Text , View, StyleSheet,FlatList} from 'react-native';


const FacultyList = ()=>{
    const faculty_name =[
        { name: "Md.Mahbub Alam", key: '1'},
        { name: "Hasanul Kabir", key: '2'},
        { name: "Abu Raihan Mostofa Kamal", key: '3'},
        { name: "Mohaymenul Islam",key: '4'},
        { name: "Tazkia Rahman Toma" , key: '5'},
        { name: "Ridwan Kabir", key: '6'},
        { name: "Bakhtiar Hasan" , key: '7'},
        { name: "Tasnim Ahmed" , key: '8'},
        { name: "Fardin Saad" , key: '9'},
        { name: "S.M.Sabit Bananee " , key: '10'},
        { name: "Sadia Sharmin" , key: '11'},

    ];
    return(
        <View style={styles.viewStyle}>
           <FlatList
           data={faculty_name}
           renderItem={function({ item}){
              return <Text style={styles.textStyle}>{item.name}</Text>; 
           }}
           />
        </View>

    );

};

const styles =StyleSheet.create(
    {
        textStyle: {
            fontSize: 30,
            color: 'blue',
            marginVertical: 30,
        },
        viewStyle: {
            borderColor :'red',
            borderWidth : 5,
        }
    }
);

export default FacultyList; 