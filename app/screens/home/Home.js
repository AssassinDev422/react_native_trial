import React, { Component } from 'react';
import { Text, View, StatusBar, FlatList, Button, ActivityIndicator, ScrollView, RefreshControl } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import { ImageCard, Avatar, SimpleCard } from '../../components';
import * as theme from '../../utils/Theme';

import { connect } from 'react-redux';
import { setUser } from '../../redux/actions/UserActions'
import { setPosts } from '../../redux/actions/PostsActions'
import { setTasks } from '../../redux/actions/TasksActions'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount = () => {
    this.onRefresh()
  }

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.getParam('title', 'Franklin&')}`,
  })

  onRefresh = () => {
    setUser()
    setPosts()
    setTasks()
  }

  renderSimpleItem = ({ item, index }) => (
    <SimpleCard title={item.name} subtitle={item.subtitle} tags={item.tags} onPress={() => {
      this.props.navigation.navigate('Detail', {
        id: item.id,
        type: 'Tasks',
        title: item.name
      });
    }} />
  )

  renderImageItem = ({ item, index }) => (
    <ImageCard title={item.name} subtitle={item.subtitle} src={item.image} onPress={() => {
      this.props.navigation.navigate('Detail', {
        id: item.id,
        type: 'Posts',
        title: item.name
      });
    }} />
  )



  renderFlatList = (text, item, data) => (
    <View>
      <Text style={styles.listHeading}>{text}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        data={data}
        renderItem={item}
        keyExtractor={(item, index) => item.id}
        horizontal={true}
      />
    </View>
  )

  render() {

    var loading = false
    var error = null
    if (!this.props.posts.loaded) {
      if (this.props.posts.error) {
        error = this.props.posts.error
      } else {
        loading = true
      }
    }

    return (

      <ScrollView contentContainerStyle={{flex: 1}}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={this.onRefresh}
          />
        }
        
      >
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        {console.log(loading, error)}
        {
          error && <Text style={styles.errorText}>Please check your connection!</Text>
        }
        {
          loading == false && error == null && <View>
            <View style={styles.avatar}>
              <Avatar />
            </View>
            <Text style={styles.mainTitle}>{'Hi ' + this.props.user.first_name + ','}</Text>
            {this.renderFlatList('You have ' + this.props.tasks.data.length + ' requests to catch up on today.',
              this.renderSimpleItem, this.props.tasks.data)}
            {this.renderFlatList('Here are some blog posts you may like to read.',
              this.renderImageItem, this.props.posts.data)}
          </View>
        }



      </View>
      </ScrollView>
      
    );
  }
}

const mapStateToProps = (state) => {
  const { user, tasks, posts } = state
  return { user, tasks, posts }
};

const mapDispatchToProps = {
  setUser,
  setPosts,
  setTasks
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: '25rem'
  },
  avatar: {
    padding: '5rem',
    paddingLeft: '25rem'
  },
  mainTitle: {
    ...theme.MainTitleStyle,
    paddingLeft: '25rem'
  },
  listHeading: {
    paddingTop: '5rem',
    paddingBottom: '20rem',
    paddingLeft: '25rem',
    fontSize: theme.fontSize.smaller,
    fontWeight: '600'
  },
  list: {
    paddingBottom: '25rem',
    paddingLeft: '15rem',
  },
  errorText: {
    fontSize: '12rem',
    color: theme.colors.purple,
    textAlign: 'center'
  },
});
