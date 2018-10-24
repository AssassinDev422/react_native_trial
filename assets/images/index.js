import { Asset } from 'expo';

export const images = {
  menu: require('./menu.png'),
  home: require('./home.png'),
  user: require('./user.png'),
  avatar: require('./avatar.jpg'),
  dummy: require('./dummy1.png'),
};

var imgs = [];
Object.keys(images).forEach(key => imgs.push(images[key]));
export const imageAssets = imgs.map(img => Asset.fromModule(img).downloadAsync());
