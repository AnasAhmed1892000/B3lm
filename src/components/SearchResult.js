import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {memo} from 'react';
import COLORS from '../values/colors';
import {Rating, AirbnbRating} from 'react-native-elements';
import {MarginsAndPaddings} from '../values/dimensions';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const SearchResult = ({id, name, description, rating, type, price, image}) => {
  return (
    <View style={styles.mainContainer}>
      {/* top container */}
      <View style={styles.TopContainer}>
        <View style={{flexDirection: 'row-reverse', justifyContent: 'center'}}>
          <Image
            source={{
              uri: 'http://www.greenstechnologys.com/images/fullstack-training-in-chennai.jpg',
            }}
            style={styles.Image}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-around',
            marginHorizontal: MarginsAndPaddings.xl,
            alignItems: 'flex-end',
          }}>
          <Text>{name}</Text>
          <Text>{description}</Text>

          <Rating
            style={{backgroundColor: COLORS.XlightGrey}}
            imageSize={20}
            isDisabled={true}
          />
        </View>
      </View>
      {/* */}
      <View style={styles.BottomContainer}>
        <Text>{rating}</Text>
        <Text>{price}</Text>
        <Text>{type}</Text>
      </View>
    </View>
  );
};

export default memo(SearchResult);

const styles = StyleSheet.create({
  TopContainer: {
    backgroundColor: COLORS.XlightGrey,

    flexDirection: 'row-reverse',
    marginBottom: MarginsAndPaddings.xs,
    paddingHorizontal: MarginsAndPaddings.xl,
  },
  BottomContainer: {
    backgroundColor: COLORS.white,
    alignItems: 'flex-end',
    paddingVertical: MarginsAndPaddings.m,
    paddingHorizontal: MarginsAndPaddings.xl,
  },
  Image: {
    marginVertical: MarginsAndPaddings.l,
    width: 80,
    height: 80,
    borderRadius: 80,
    resizeMode: 'contain',
  },
  mainContainer: {
    backgroundColor: COLORS.white,
    marginBottom: MarginsAndPaddings.s,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 3,
  },
});
