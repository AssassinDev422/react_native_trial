import { combineReducers } from 'redux';
import User from './User';
import Posts from './Posts';
import Tasks from './Tasks';
export default combineReducers({
  user: User,
  posts: Posts,
  tasks: Tasks
});
