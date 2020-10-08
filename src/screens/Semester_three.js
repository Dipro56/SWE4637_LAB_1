import React from 'react';
import {Text , View, StyleSheet,FlatList} from 'react-native';


const CourseList_SemesterThree = ()=>{
    const course_name =[
        { name: "CSE 4303", key: '1'},
        { name: "SWE 4301", key: '2'},
        { name: "CSE 4305", key: '3'},
        { name: "Math 4341",key: '4'},
        { name: "CSE 4307" , key:'5'},
        { name: "CSE 4309", key: '6'},
  
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

export default CourseList_SemesterThree; 