import {StyleSheet, Text, View, Image, Button, FlatList} from 'react-native';
import React, {useEffect, useState, useMemo} from 'react';
import axios from 'axios';
import {MarginsAndPaddings} from '../../values/dimensions';
import {SelectList} from 'react-native-dropdown-select-list';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CourseDetailsScreen = ({route}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [groups, setGroups] = useState([]);
  const [formatedGroups, setFormatedGroups] = useState([]);
  const [selected, setSelected] = useState(''); //get the selected group from filter
  const id = route.params;
  useEffect(async () => {
    try {
      const response = await axios.get(
        `https://b3elm.com/api/main/courses/${id}`,
      );
      setName(response.data.name);
      setPrice(response.data.price);
      setGroups(response.data.course_group);
      console.log(response.data);

      //console.log(response.data.course_group);
    } catch (error) {}
    return () => {
      console.log('This will be logged on unmount');
    };
  }, []);
  useMemo(() => {
    setFormatedGroups(
      groups.map(item => ({
        value: item.group_name,
        key: item.id,
        price: item.price,
        start_date: item.start_date,
        end_date: item.end_date,
        start_time: item.start_time,
        end_time: item.end_time,
        nom_days: item.nom_days,
        scheduele: JSON.parse(JSON.stringify(item.meta)),
      })),
    );
  }, [groups]);
  const BookCourse = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      var data = JSON.stringify({
        token: token,
      });

      var config = {
        method: 'post',
        url: `https://b3elm.com/api/main/book-course/${selected}`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      };
      const res = await axios(config);
      console.log(selected);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Image
        source={{
          uri: 'http://www.greenstechnologys.com/images/fullstack-training-in-chennai.jpg',
        }}
        style={styles.Image}
      />
      <Text>{id}</Text>
      <Text> name : {name}</Text>
      <Text> price : {price}</Text>
      {/* <Text>{formatedGroups}</Text> */}
      {/* <Text>{response.data}</Text> */}
      {/* <Text>{response.data}</Text> */}
      {/* <Text>{response.data}</Text> */}
      {/* <Text>{response.data}</Text> */}
      {/* <Text>{response.data}</Text> */}
      <Text
        style={{
          marginHorizontal: 10,
          marginVertical: 15,
          fontSize: 20,
          fontWeight: '700',
        }}>
        Groups :{' '}
      </Text>

      <FlatList
        data={formatedGroups}
        //key={formatedGroups.indexOf}
        renderItem={group => (
          <View>
            <Text> Group Name : {group.item.value}</Text>
            <Text>Group Price : {group.item.price}</Text>
            <Text>Group Start Date : {group.item.start_date}</Text>
            <Text>Group End Date : {group.item.end_date}</Text>
            <Text>Group Start Time : {group.item.start_time}</Text>
            <Text>Group End Time : {group.item.end_time}</Text>
            <Text> Number of days : {group.item.nom_days}</Text>
            <Text> Scheduele : {group.item.scheduele}</Text>
          </View>
        )}
      />
      <View style={{marginVertical: 15}}>
        <Text>Choose a group to book</Text>
        <SelectList
          placeholder="groups"
          data={formatedGroups}
          setSelected={val => setSelected(val)}
          save="key"
          dropdownItemStyles={{
            marginHorizontal: 10,
          }}
        />
        <Button title="Book Course" onPress={() => BookCourse()} />
      </View>
    </View>
  );
};

export default CourseDetailsScreen;

const styles = StyleSheet.create({
  Image: {
    marginVertical: MarginsAndPaddings.l,
    width: 80,
    height: 80,
    borderRadius: 80,
    resizeMode: 'contain',
  },
});
