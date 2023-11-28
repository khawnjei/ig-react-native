import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import AddNewPost from '../components/newpost/AddNewPost';

const NewPost = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <AddNewPost navigation={navigation} />
    </SafeAreaView>
  );
};

export default NewPost;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
});
