import React, { Component } from 'react';
import { Text, View } from 'react-native';
import * as UserActions from '../../redux/actions/UserActions';
import * as PostsActions from '../../redux/actions/PostsActions';
import * as TasksActions from '../../redux/actions/TasksActions';
import {Tag} from '../../components';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as theme from '../../utils/Theme';

export default class Detail extends Component {
  componentWillMount() {
    // Redux store action sample
  }
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.getParam('title', '')}`,
  })
  render() {
    const {navigation} = this.props
    const id = navigation.getParam('id', '')
    const type = navigation.getParam('type', '')
    const name = navigation.getParam('title', '')
    var detail = {}
    var tags = []
    var description = ''
    if(type == 'Tasks'){
      detail = TasksActions.getTask(id)
      tags = detail.tags
      description = detail.description
    } else {
      detail = PostsActions.getPost(id)
      description = detail.content
    }
    
    return (
      <View style={styles.container}>
        <Text style={styles.mainTitle}>{name}</Text>

          <View style={styles.tagsView}>
        { tags.map((tag, index) => (
            <Tag key={index+''} text={tag} 
            color={index==1? theme.colors.pink : theme.colors.blue} />
        ))
        }
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: '20rem',
  },
  avatar: {
    padding: '5rem', 
    paddingLeft: '25rem'
  },
  tagsView: {
    paddingBottom: '10rem', 
    flexDirection: 'row',
    paddingHorizontal: '25rem',
  },
  mainTitle: {
    ...theme.MainTitleStyle,
    padding: '5rem', 
    paddingHorizontal: '25rem'
  },
  description: {
    padding: '10rem', 
    paddingHorizontal: '25rem',
    fontSize: theme.fontSize.smaller,
    fontWeight: '600'
  },
  list: {
    padding: '15rem',
  },
  text: {
    fontSize: '12rem'
  },
});

