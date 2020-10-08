import React from 'react';
import {Text , View, StyleSheet,FlatList} from 'react-native';


const CourseList_SemesterTwo = ()=>{
    const course_name =[
        { name: "CSE 4203", key: '1'},
        { name: "SWE 4201", key: '2'},
        { name: "CSE 4205", key: '3'},
        { name: "Math 4241",key: '4'},
        { name: "Hum 4247" , key:'5'},
        { name: "Hum 4249", key: '6'},
  
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

export default CourseList_SemesterTwo; 