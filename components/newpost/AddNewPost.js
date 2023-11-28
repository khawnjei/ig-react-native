import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FormikPost from './FormikPost';

const AddNewPost = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <FormikPost navigation={navigation} />
    </View>
  );
};

const Header = ({navigation}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={{width: 30, height: 30}}
          source={require('../../assets/back-icon.png')}
        />
      </TouchableOpacity>

      <Text style={styles.headerText}>New Post</Text>
      <Text></Text>
    </View>
  );
};

export default AddNewPost;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
    marginRight: 15,
  },
});
