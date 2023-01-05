import {Text, View, Button, FlatList, TouchableOpacity} from 'react-native';
import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  memo,
  useMemo,
} from 'react';
import {useAppDispatch, useAppSlector} from '../../redux/Store';
import SearchBar from '../../components/SearchBar';
import styles from './styles';
import SearchResult from '../../components/SearchResult';
// import {ScrollView} from 'react-native';
import COLORS from '../../values/colors';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
// import courses, {selectCourses} from '../../redux/courses/CourseSlice';
// import {setCourses} from '../../redux/courses/CourseSlice';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {MarginsAndPaddings} from '../../values/dimensions';
import {Modalize} from 'react-native-modalize';
import {
  SelectList,
  MultipleSelectList,
} from 'react-native-dropdown-select-list';

/*
 */
const CoursesScreen = () => {
  const modalizeRef = useRef(null);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [selected, setSelected] = useState(''); //get the selected district from filter
  const [multiselected, setMultiSelected] = useState(''); //get the selected tags from filter
  const [Courses, setCourses] = useState([]); //store the retreived courses
  const [districts, setDistricts] = useState([]); //store the retreived District
  const [tags, setTags] = useState([]); //store the retreived tags
  var [formatedDistricts, setFormatedDistricts] = useState([]); //reformat district in an object
  var [formatedTags, setFormatedTags] = useState([]); //reformat district in an object
  // for mdoal open and close
  //get the api responce developed tojkdnfl] cause it doesnot work
  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const onClose = () => {
    modalizeRef.current?.close();
  };
  //retrive courses
  //**** */
  const getCourses = async () => {
    var data = {
      type: null,
      gove: selected,
      cent: null,
      tags: multiselected,
      page: 1,
      nom_pages: 15,
    };
    var config = {
      method: 'post',
      url: 'https://b3elm.com/api/main/courses-search',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
    try {
      const responce = await axios(config);

      const res = responce.data.data;
      setCourses(res);
    } catch (error) {
      console.log(error);
    }

    // console.log(Courses);
    return null;
  };

  //retrive the districts

  const getDistricts = async () => {
    try {
      const responce = await axios.get(
        `https://b3elm.com/api/main/districts?q=`,
      );

      const res = responce.data.data;

      setDistricts(res);
    } catch (error) {
      console.log(error);
    }
    // console.log(districts);

    return null;
  };
  //retrive the courses tags
  const getTags = async () => {
    try {
      const responce = await axios.get(`https://b3elm.com/api/main/tags?q=`);

      const res = responce.data.data;
      setTags(res);
    } catch (error) {
      console.log(error);
    }
    //console.log(tags);
    return null;
  };
  useEffect(() => {
    //let d = 'جيزة';
    getCourses();
    getDistricts();
    getTags();
    // dispatch(courses.setCourses(Courses));

    // console.log(formatedDistricts);
  }, []);
  useMemo(() => {
    setFormatedDistricts(
      districts.map(item => ({value: item.name, key: item.id})),
    );
    setFormatedTags(tags.map(item => ({value: item.name, key: item.id})));
  }, [districts, tags]);

  // console.log(Courses);
  return (
    <View style={styles.SchoolContainer}>
      <View style={{backgroundColor: COLORS.white}}>
        <SearchBar />
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
          <TouchableOpacity style={styles.Button} onPress={() => onOpen()}>
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
            <TouchableOpacity
              onPress={() => navigation.navigate('CourseDetails')}>
              <SearchResult
                id={course.item.id}
                name={course.item.name}
                description={course.item.description}
                rating={course.item.rating}
                image={course.item.image}
                price={course.item.price}
                type={course.item.type}
              />
            </TouchableOpacity>
          </View>
        )}
        key={Courses.id}
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
      <Modalize ref={modalizeRef} modalHeight={600}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
          }}>
          <View style={{marginVertical: 15}}>
            <SelectList
              data={formatedDistricts}
              setSelected={val => setSelected(val)}
              save="key"
              dropdownItemStyles={{
                marginHorizontal: 10,
              }}
            />
          </View>
          <View style={{marginVertical: 15, marginHorizontal: 5}}>
            <MultipleSelectList
              setSelected={val => setMultiSelected(val)}
              data={formatedTags}
              save="key"
              //onSelect={() => alert(selected)}
              label="Categories"
              dropdownItemStyles={{
                marginHorizontal: 10,
              }}
            />
          </View>
          <Button
            title="Search"
            onPress={() => {
              onClose();
              console.log(multiselected);
              getCourses();
            }}
          />
        </View>
      </Modalize>
    </View>
  );
};

export default memo(CoursesScreen);
