import users from './users';

export default Posts = [
  {
    image: require('../assets/post-img.jpg'),
    user: users[0].user,
    likes: 7576,
    caption: 'Train to hogwarts.',
    profile_picture: users[0].imageURL,
    comments: [
      {
        user: 'Moiz',
        comment: 'WOW! amazing',
      },
      {
        user: 'Hassan',
        comment: 'WOW! amazing view',
      },
    ],
  },
  {
    image: require('../assets/post-img.jpg'),
    user: users[1].user,
    likes: 7576,
    caption: 'Train to hogwarts.',
    profile_picture: users[1].imageURL,
    comments: [
      {
        user: 'Moiz',
        comment: 'WOW! amazing',
      },
      {
        user: 'Hassan',
        comment: 'WOW! amazing view',
      },
    ],
  },
];
