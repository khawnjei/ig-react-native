import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import NewPost from '../../screens/NewPost';

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../../assets/header-logo.png')}
        />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => navigation.push('NewPost')}>
          <Image
            style={styles.icon}
            source={require('../../assets/add-icon.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require('../../assets/heart-icon.png')}
          />
        </TouchableOpacity>
        <View style={styles.unreadBadge}>
          <Text style={styles.unreadBadgeText}>11</Text>
        </View>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require('../../assets/chat-icon.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 8,
    resizeMode: 'contain',
  },
  unreadBadge: {
    backgroundColor: '#FF3250',
    position: 'absolute',
    left: 95,
    bottom: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
    width: 20,
    height: 18,
  },
  unreadBadgeText: {
    color: '#ffffff',
    fontWeight: '600',
  },
});
