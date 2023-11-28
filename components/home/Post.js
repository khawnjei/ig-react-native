import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-elements';
import {Image} from 'react-native-elements/dist/image/Image';

const postFooterIcon = [
  {
    name: 'Like',
    icon: require('../../assets/heart-icon.png'),
    iconURL: require('../../assets/heart-icon.png'),
  },
  {
    name: 'Comment',
    icon: require('../../assets/comment-icon.png'),
  },
  {
    name: 'Share',
    icon: require('../../assets/share-icon.png'),
  },
  {
    name: 'Save',
    icon: require('../../assets/ssave-icon.png'),
  },
];

const Post = ({post}) => {
  return (
    <View style={{marginBottom: 30, marginTop: 10}}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{marginHorizontal: 3, marginTop: 10}}>
        <PostFooter post={post} />
        <Likes post={post} />
        <Caption post={post} />
        <Comments post={post} />
        <CommentsSection post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({post}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image style={styles.story} source={post.profile_picture} />
        <Text style={{color: '#FFFFFF', paddingLeft: 4}}>{post.user}</Text>
      </View>
      <Text style={{color: 'white', fontWeight: '900'}}>...</Text>
    </View>
  );
};

const PostImage = ({post}) => {
  return (
    <View style={{width: '100%', height: 450}}>
      <Image
        source={post.image}
        style={{height: '100%', resizeMode: 'cover'}}
      />
    </View>
  );
};

const PostFooter = ({post}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={styles.leftFooterIconsContainer}>
        <Icon imgStyle={styles.footerIcon} image={postFooterIcon[0].icon} />
        <Icon imgStyle={styles.footerIcon} image={postFooterIcon[1].icon} />
        <Icon imgStyle={styles.footerIcon} image={postFooterIcon[2].icon} />
      </View>
      <Icon imgStyle={styles.footerIcon} image={postFooterIcon[3].icon} />
    </View>
  );
};

const Icon = ({imgStyle, image}) => {
  return (
    <TouchableOpacity>
      <Image style={imgStyle} source={image} />
    </TouchableOpacity>
  );
};

const Likes = ({post}) => {
  return (
    <View style={{flexDirection: 'row', marginTop: 4, marginLeft: 2}}>
      <Text style={{color: 'white', fontWeight: '600'}}>
        {post.likes} likes
      </Text>
    </View>
  );
};

const Caption = ({post}) => {
  return (
    <View style={{flexDirection: 'row', marginTop: 4, marginLeft: 2}}>
      <Text style={{color: 'white'}}>
        <Text style={{fontWeight: '600'}}>{post.user}</Text>
        <Text style={{fontWeight: '300'}}> {post.caption}</Text>
      </Text>
    </View>
  );
};

const Comments = ({post}) => {
  return (
    <View style={{flexDirection: 'row', marginTop: 4, marginLeft: 2}}>
      {post.comments.length > 0 && (
        <Text style={{color: 'gray'}}>
          View {post.comments.length > 1 ? 'all' : ''} {''}
          {post.comments.length} {''}
          {post.comments.length > 1 ? 'comments' : 'comment'}
        </Text>
      )}
    </View>
  );
};

const CommentsSection = ({post}) => {
  return (
    <>
      {post.comments.map((comment, index) => (
        <View
          key={index}
          style={{flexDirection: 'row', marginTop: 4, marginLeft: 2}}>
          <Text style={{color: 'white'}}>
            <Text style={{fontWeight: '600'}}>{comment.user}</Text>
            {''} {comment.comment}
          </Text>
        </View>
      ))}
    </>
  );
};

export default Post;

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: '#ff8501',
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
  leftFooterIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '32%',
  },
});
