import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import HomeScreen from './Home';
import HouseScreen from './HouseScreen';
import ApartmentScreen from './ApartmentScreen';
import BottomNavigation from "./BottomNavigation";
function MyStack(navigation){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="BottomNavigation"
                component={BottomNavigation}
                options={{headerShown:false}}
            />
            <Stack.Screen
            name="HouseScreen"
            component={HouseScreen}/>
            <Stack.Screen
            name="ApartmentScreen"
            component={ApartmentScreen}/>
        </Stack.Navigator>
    )
}

export default MyStack;