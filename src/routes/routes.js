import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import tw from '../styles/tailwind';
import LanguageSelection from '../screens/LanguageSelection/LanguageSelection';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import LeagueSelection from '../screens/LeagueSelection/leagueSelection';

import Home from '../screens/Home/home';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Image, TouchableOpacity} from 'react-native';
import CalendarScreen from '../screens/Calendar/calendar';
import {useState} from 'react';
import LeagueModal from '../components/league-modal/league-modal';
import Profile from '../screens/Profile/profile';
import Highlights from '../screens/Highlights/highlights';
import HighlightDetail from '../screens/Highlights/modules/highlight-detail';
import Trivia from '../screens/trivia/trivia';
import Poll from '../screens/poll/poll';
import LeagueScreen from '../screens/league/leagueList';
import TriviaQuestions from '../screens/triviaQuestions/triviaQuestions';

// Bottom Tab Navigation
const Tab = createBottomTabNavigator();
function BottomTabScreens() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaProvider>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {height: Platform.OS == 'ios' ? 55 : 55},
        }}
        tabBarOptions={{
          showIcon: true,
          showLabel: true,
          activeTintColor: '#937323',
          inactiveTintColor: '#9756',
          tabStyle: {backgroundColor: '#303649', paddingBottom: 7},
          labelStyle: {fontSize: 12, color: '#fff'},
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) =>
              focused ? (
                <Feather
                  name={'home'}
                  color={'#fff'}
                  size={22}
                  style={tw`mt-2`}
                />
              ) : (
                <Feather
                  name={'home'}
                  color={'#8D8E90'}
                  size={22}
                  style={tw`mt-2`}
                />
              ),
          }}
        />

        <Tab.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{
            tabBarLabel: 'Calendar',
            tabBarIcon: ({focused}) =>
              focused ? (
                <AntDesign
                  name={'calendar'}
                  color={'#fff'}
                  size={22}
                  style={tw`mt-2`}
                />
              ) : (
                <AntDesign
                  name={'calendar'}
                  color={'#8D8E90'}
                  size={22}
                  style={tw`mt-2`}
                />
              ),
          }}
        />

        <Tab.Screen
          name="League"
          component={EmptyScreen} // Any valid screen or use the main one
          options={{
            tabBarLabel: 'More',
            tabBarIcon: ({focused}) => (
              <TouchableOpacity onPress={toggleModal}>
                <Image
                  source={
                    focused
                      ? require('../assets/icons/white_grid.png')
                      : require('../assets/icons/grid.png')
                  }
                  style={[tw`w-5 h-5 mt-2`, {resizeMode: 'contain'}]}
                />
              </TouchableOpacity>
            ),
          }}
          listeners={{
            tabPress: e => {
              e.preventDefault(); // Prevent navigation on tab press
              toggleModal(); // Open the modal instead
            },
          }}
        />
      </Tab.Navigator>
      <LeagueModal isVisible={isModalVisible} toggleModal={toggleModal} />
    </SafeAreaProvider>
  );
}

const EmptyScreen = () => {
  return null;
};

const Stack = createNativeStackNavigator();

export const StackScreen = () => {
  // const token = useSelector(state => state.auth_store.token);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <>
        <Stack.Screen name="Home" component={BottomTabScreens} />
        <Stack.Screen name="LanguageSelection" component={LanguageSelection} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LeagueSelection" component={LeagueSelection} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Highlights" component={Highlights} />
        <Stack.Screen name="HighlightDetail" component={HighlightDetail} />
        <Stack.Screen name="Trivia" component={Trivia} />
        <Stack.Screen name="Poll" component={Poll} />
        <Stack.Screen name="LeagueScreen" component={LeagueScreen} />
        <Stack.Screen name="TriviaQuestions" component={TriviaQuestions} />
      </>
    </Stack.Navigator>
  );
};

export default function Routes() {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
}
