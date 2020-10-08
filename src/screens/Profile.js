import React from "react";
import {Text, StyleSheet , View,Image} from "react-native";

const Profile = (props) => {
    console.log(props);
    return( 
     <View> 
         <View style={styles.viewStyle}>
         <Text style ={styles.textStyle}>       </Text>
         <Image source ={require("./../../assets/my_photo.jpg")} style={styles.imageStyle}/>

         </View>
      
      <Text style ={styles.textStyle}>       </Text>
      <Text style ={styles.textStyle}>Name : Sadat Shahriar Bari Dipro</Text>
      <Text style ={styles.textStyle}>       </Text>
      <Text style ={styles.textStyle}>Student ID : 170042056</Text>
      <Text style ={styles.textStyle}>       </Text>
      <Text style ={styles.textStyle}>Room no : 404, South Hall of Residance</Text>
      <Text style ={styles.textStyle}>       </Text>
      <Text style ={styles.textStyle}>Email : shahriardipro@gmail.com</Text>

    </View>
    );
};

const styles =StyleSheet.create({
    textStyle: {
        fontSize : 25,
        color: "blue",
    },
    imageStyle: {
        height : 200,
        width : 200,
    },
    viewStyle: {
        justifyContent : 'center',
        alignItems: 'center',
    }

});


export default Profile;