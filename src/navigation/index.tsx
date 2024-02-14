import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootBottomTabParamsList} from './types';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../constants/Theme/Colors';

const Tab = createBottomTabNavigator<RootBottomTabParamsList>();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.grey,
          tabBarStyle: {
            alignSelf: 'center',
            width: '76%',
            position: 'absolute',
            bottom: 16,
            right: '12%',
            left: '12%',
            borderRadius: 8,
            elevation: 2,
            backgroundColor: colors.white,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={() => ({
            title: 'Home',
            tabBarShowLabel: false,
            tabBarIcon: ({focused, color}) => (
              <Icon
                name={focused ? 'home-sharp' : 'home-outline'}
                size={24}
                color={color}
              />
            ),
          })}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={() => ({
            title: 'Profile',
            tabBarShowLabel: false,
            tabBarIcon: ({focused, color}) => (
              <Icon
                name={focused ? 'person' : 'person-outline'}
                size={24}
                color={color}
              />
            ),
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
