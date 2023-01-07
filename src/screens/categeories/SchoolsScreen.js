import {
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {useAppDispatch, useAppSlector} from '../../redux/Store';
import SearchBar from '../../components/SearchBar';
import styles from './styles';
import SearchResult from '../../components/SearchResult';
import {ScrollView} from 'react-native';
import COLORS from '../../values/colors';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import courses, {selectCourses} from '../../redux/courses/CourseSlice';
import {setCourses} from '../../redux/courses/CourseSlice';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {MarginsAndPaddings} from '../../values/dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';

/*
 */
const SchoolsScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [Courses, setCourses] = useState([]);
  const getCourses = () =>
    axios
      .get('https://b3elm.com/api/main/schools-search')
      .then(responce => {
        const res = responce.data.data;
        setCourses(res);
      })
      .catch(err => {
        console.log(err);
      });

  useEffect(() => {
    getCourses();
    dispatch(courses.setCourses(Courses));
  }, []);
  // console.log(Courses);
  return (
    <View style={styles.SchoolContainer}>
      <View style={{backgroundColor: COLORS.white}}>
        {/* <SearchBar /> */}
        <View style={styles.backgroundStyle}>
          <AntDesign name="search1" size={15} />
          <TouchableOpacity>
            <TextInput
              style={styles.inputStyle}
              placeholder="بحث"
              autoCapitalize="none"
              autoCorrect={false}
              //value={term}
              // onChangeText={onChangeTerm}
              // onEndEditing={onTermSubmit}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row-reverse',
            marginHorizontal: MarginsAndPaddings.m,
            marginVertical: MarginsAndPaddings.xxl,
            paddingTop: MarginsAndPaddings.m,
            backgroundColor: COLORS.white,
            marginTop: -4,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity style={styles.Button}>
            <Icon name="sort" size={24} color={COLORS.blue} />
            <Text
              style={{
                fontFamily: 'Cairo-Bold',
                fontWeight: '100',
                fontSize: 15,
                color: COLORS.blue,
                marginRight: -5,
              }}>
              الترتيب
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Icon name="filter-outline" size={24} color={COLORS.blue} />
            <Text
              style={{
                fontFamily: 'Cairo-Bold',
                fontWeight: '100',
                fontSize: 15,
                color: COLORS.blue,
                marginRight: -5,
              }}>
              التصفيه
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Icon name="map-marker-outline" size={24} color={COLORS.blue} />
            <Text
              style={{
                fontFamily: 'Cairo-Bold',
                fontWeight: '100',
                fontSize: 15,
                color: COLORS.blue,
                marginRight: -5,
              }}>
              الخريطة
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={Courses}
        renderItem={course => (
          <View>
            {/* <>{console.log(course.item)}</> */}
            <SearchResult
              id={course.item.id}
              name={course.item.name}
              description={course.item.description}
              rating={course.item.rating}
              image={course.item.image}
              price={course.item.price}
              type={course.item.type}
            />
          </View>
        )}
        // key={Courses.id}
      />

      {/* <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult /> */}
    </View>
  );
};

export default SchoolsScreen;
