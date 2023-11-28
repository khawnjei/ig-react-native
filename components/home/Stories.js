import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import users from '../../data/users';

const Stories = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {users.map((story, index) => (
          <View key={index} style={{alignItems: 'center', marginHorizontal: 3}}>
            <Image source={story.imageURL} style={styles.story} />
            <Text style={{color: '#ffffff'}}>{story.user}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: '#ff8501',
  },
});
