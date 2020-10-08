import React from 'react';
import {Text , View, StyleSheet,FlatList} from 'react-native';


const CourseList_SemesterOne = ()=>{
    const course_name =[
        { name: "CSE 4104", key: '1'},
        { name: "SWE 4101", key: '2'},
        { name: "Phy 4143", key: '3'},
        { name: "Math 4141",key: '4'},
        { name: "Hum 4147" , key:'5'},
        { name: "Hum 4147", key: '6'},
  
    ];
    return(
        <View style={styles.viewStyle}>
           <FlatList
           data={course_name}
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

export default CourseList_SemesterOne; 