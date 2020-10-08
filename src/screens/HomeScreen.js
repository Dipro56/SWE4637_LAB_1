import React from "react";
import {Text, StyleSheet,Button, View,Image,TouchableOpacity} from "react-native";

const HomeScreen = (props) => {
    console.log(props);
    return( 
     <View> 
        <View style={styles.viewStyle}>
        <Text style ={styles.textStyle}>       </Text>
        <Text style ={styles.textStyle}>       </Text>
         <Image source ={require("./../../assets/IUT_logo.png")} style={styles.imageStyle}/>

         </View>
    

      <Text style ={styles.textStyle}>Deparment of CSE</Text>
      <Text style ={styles.textStyle}>Programme SWE</Text>
      <Text style ={styles.textStyle}>       </Text>
      <Text style ={styles.textStyle}>       </Text>

     <View style = {styles.viewStyle}>
       <TouchableOpacity onPress={function(){
         props.navigation.navigate("Profile");
          }}>
            <Text style={styles.textStyle}>My Profile</Text>
       </TouchableOpacity>
     </View>

      <Text style ={styles.textStyle}>       </Text>
      
      <Button 
        title ="Semester Wise Course List"
        onPress ={function(){
         props.navigation.navigate("Semester");
        }}
      />

      
      <Text style ={styles.textStyle}>       </Text>
      <Button 
        title ="List of Faculty Members"
        onPress ={function(){
         props.navigation.navigate("Faculty List");
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


export default HomeScreen;