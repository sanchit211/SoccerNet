import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import tw from '../../styles/tailwind';
import {Calendar, LocaleConfig} from 'react-native-calendars';

const CalendarScreen = () => {
  return (
    <View style={tw`bg-[#12122A] flex-1 `}>
      <Text
        style={tw`text-white text-[18px] font-401 leading-tight  my-3 mx-3 `}>
        Today
      </Text>
      <Calendar
        style={{
          borderWidth: 1,
          borderTopColor: 'gray',
          borderBottomColor: 'gray',
          height: 350,
        }}
        theme={{
          backgroundColor: '#fff',
          calendarBackground: '#05102E',
          textSectionTitleColor: '#fff',
          selectedDayBackgroundColor: '#00adf5',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#fff',
          textDisabledColor: '#a9a9a9',
          arrowColor: 'white',
          indicatorColor: 'white',
          monthTextColor: 'white',
        }}
      />

      <View style={tw`bg-[#464646] w-90 h-40 mt-5 self-center rounded-lg`}>
        <View style={tw`flex-row mt-3`}>
          <Image
            source={require('../../assets/league_icons/league-1.png')}
            style={tw`w-9 h-9 self-center ml-3`}
          />
          <Text
            style={tw`text-white text-[20px] font-401 leading-tight self-center mx-3 `}>
            Premier League
          </Text>
        </View>

        <View style={tw`flex-row mt-3`}>
          <Image
            source={require('../../assets/league_icons/league-1.png')}
            style={tw`w-6 h-6 self-center ml-5`}
          />
          <Text
            style={tw`text-white text-[18px] font-400 leading-tight self-center mx-3 `}>
            Aston Villa
          </Text>

          <Text
            style={tw`text-white text-[18px] font-400 leading-tight self-center mx-3 `}>
            V/S
          </Text>

          <Image
            source={require('../../assets/league_icons/league-1.png')}
            style={tw`w-6 h-6 self-center ml-5`}
          />
          <Text
            style={tw`text-white text-[18px] font-400 leading-tight self-center mx-3 `}>
            Aston Villa
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({});
