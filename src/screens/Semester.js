import React from "react";
import {Text, StyleSheet,Button, View,Image,TouchableOpacity} from "react-native";

const Semester = (props) => {
    console.log(props);
    return( 
     <View> 
      
      <Text style ={styles.textStyle}>       </Text>

      <Button 
        title ="1st Semester"
        onPress ={function(){
         props.navigation.navigate("1st Semester");
        }}
      />

       <Text style ={styles.textStyle}>       </Text>

      <Button 
        title ="2nd Semester"
        onPress ={function(){
         props.navigation.navigate("2nd Semester");
        }}
      />

      <Text style ={styles.textStyle}>       </Text>

      <Button 
        title ="3rd Semester"
        onPress ={function(){
         props.navigation.navigate("3rd Semester");
        }}
      />

    </View>
    );
};

const styles =StyleSheet.create({
    textStyle: {
        fontSize : 25,
        color: "blue",
        textAlign: "center",
        
    },
    imageStyle: {
        height : 200,
        width : 120,
    },
    viewStyle: {
        justifyContent : 'center',
        alignItems: 'center',
    }
   

});


export default Semester;