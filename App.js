import React from "react";
import {NavigationContainer} from "@react-navigation/native" ;
import {createStackNavigator} from  "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import FacultyList from "./src/screens/FacultyList";
import Profile from "./src/screens/Profile";
import Semester from "./src/screens/Semester";
import Semester_one from "./src/screens/Semester_one";
import Semester_two from "./src/screens/Semester_two"
import Semester_three from "./src/screens/Semester_three"

const stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name= "Home" component={HomeScreen} />
        <stack.Screen name = "Faculty List" component={FacultyList} />
        <stack.Screen name ="Profile" component={Profile} />
        <stack.Screen name ="Semester" component={Semester} />
        <stack.Screen name ="1st Semester"component={Semester_one}/>
        <stack.Screen name ="2nd Semester"component={Semester_two}/>
        <stack.Screen name ="3rd Semester"component={Semester_three}/>
      </stack.Navigator>
    </NavigationContainer>

  );
}

export default App;