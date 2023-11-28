import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Divider} from 'react-native-elements';

export const tabIcons = [
  {
    name: 'Home',
    imageTab: require('../../assets/home-icon.png'),
  },
  {
    name: 'Search',
    imageTab: require('../../assets/search-icon.png'),
  },
  {
    name: 'Reels',
    imageTab: require('../../assets/reels-icon.png'),
  },
  {
    name: 'Shop',
    imageTab: require('../../assets/shop-icon.png'),
  },
  {
    name: 'Profile',
    imageTab: require('../../assets/user.jpg'),
  },
];

const BottomIcons = ({icons}) => {
  const [activeTab, setActiveTab] = useState('Home');

  const Icon = ({icon}) => {
    return (
      <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
        <Image
          style={[
            styles.icon,
            icon.name === 'Profile' ? styles.profilePic : null,
          ]}
          source={icon?.imageTab}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          height: 50,
          paddingTop: 10,
        }}>
        {icons.map((item, index) => {
          return <Icon key={index} icon={item} />;
        })}
      </View>
    </View>
  );
};

export default BottomIcons;

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
  wrappe: {
    position: 'absolute',
    width: '100%',
    zIndex: 999,
    backgroundColor: '#000',
    bottom: '3%',
  },
  profilePic: {
    borderRadius: 50,
    borderColor: '#ffffff',
    width: 30,
    height: 30,
  },
});
