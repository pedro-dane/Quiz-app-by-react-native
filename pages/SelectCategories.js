import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { colorsArray } from '../utils/colors'
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux'
import { getQuizCategories, addTopicToUser } from '../actions/Quiz/Quiz'
class SelectCategories extends Component {
  state = {
    tabs: [
      {
        id: 'popular',
        displayName: 'Popular'
      },
      {
        id: 'suggestions',
        displayName: 'Suggestions'
      },
      {
        id: 'aroundYou',
        displayName: 'Around You'
      }
    ],
    activeTab: 'popular',
    selectedCategories: [],
    categoryList: [
      {
        id: 'books',
        displayName: 'Books'
      },
      {
        id: 'sports',
        displayName: 'Sports'
      },
      {
        id: 'porn',
        displayName: 'Porn'
      },
      {
        id: 'comic',
        displayName: 'Comic'
      },
      {
        id: 'pubg',
        displayName: 'PUBG'
      },
      {
        id: 'fashion',
        displayName: 'Fashion'
      },
      {
        id: 'art',
        displayName: 'Art'
      },
      {
        id: 'news',
        displayName: 'News'
      },
      {
        id: 'hollywood',
        displayName: 'Hollywodd'
      },
      {
        id: 'bollywood',
        displayName: 'Bollywood'
      },
      {
        id: 'books1',
        displayName: 'Books'
      },
      {
        id: 'sports1',
        displayName: 'Sports'
      },
      {
        id: 'porn1',
        displayName: 'Porn'
      },
      {
        id: 'comic1',
        displayName: 'Comic'
      },
      {
        id: 'pubg1',
        displayName: 'PUBG'
      },
      {
        id: 'fashion1',
        displayName: 'Fashion'
      },
      {
        id: 'art1',
        displayName: 'Art'
      },
      {
        id: 'news1',
        displayName: 'News'
      },
      {
        id: 'hollywood1',
        displayName: 'Hollywodd'
      },
      {
        id: 'bollywood1',
        displayName: 'Bollywood'
      },
      {
        id: 'books2',
        displayName: 'Books'
      },
      {
        id: 'sports2',
        displayName: 'Sports'
      },
      {
        id: 'porn2',
        displayName: 'Porn'
      },
      {
        id: 'comic2',
        displayName: 'Comic'
      },
      {
        id: 'pubg2',
        displayName: 'PUBG'
      },
      {
        id: 'fashion2',
        displayName: 'Fashion'
      },
      {
        id: 'art2',
        displayName: 'Art'
      },
      {
        id: 'news2',
        displayName: 'News'
      },
      {
        id: 'hollywood2',
        displayName: 'Hollywodd'
      },
      {
        id: 'bollywood2',
        displayName: 'Bollywood'
      },
      {
        id: 'books11',
        displayName: 'Books'
      },
      {
        id: 'sports11',
        displayName: 'Sports'
      },
      {
        id: 'porn11',
        displayName: 'Porn'
      },
      {
        id: 'comic11',
        displayName: 'Comic'
      },
      {
        id: 'pubg11',
        displayName: 'PUBG'
      },
      {
        id: 'fashion11',
        displayName: 'Fashion'
      },
      {
        id: 'art11',
        displayName: 'Art'
      },
      {
        id: 'news11',
        displayName: 'News'
      },
      {
        id: 'hollywood11',
        displayName: 'Hollywodd'
      },
      {
        id: 'bollywood11',
        displayName: 'Bollywood'
      },
    ]
  }
  colorsIndex = -1
  tabChangeHandler = (id) => {
    this.setState({
      activeTab: id
    })
  }
  categorySelected = (id) => {
    const newList = this.state.selectedCategories.includes(id) ? this.state.selectedCategories.filter(categoryId => categoryId !== id) : [...this.state.selectedCategories, id]
    this.setState({
      selectedCategories: newList
    })
  }
  nextClickHandler = () => {
    this.props.dispatch(addTopicToUser(this.state.selectedCategories))
  }
  addFriend = () => {
    this.props.navigation.navigate('AddFriend')
  }
  componentDidMount() {
    this.props.dispatch(getQuizCategories())
  }
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, margin: 10, marginRight: 0, marginTop: 30 }}>
        <LinearGradient
          start={[0, 1]} end={[0, 0]}
          colors={['#F67220', '#F77D28', '#F88F33', '#F9A340', '#F9B54A', '#F9B54A']}
          style={{ width: 110, height: 32, borderRadius: 30, position: 'absolute', right: 15, top: 10 }}
        >
          <TouchableOpacity onPress={this.addFriend} style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: '#fff', }}>Add friends</Text></TouchableOpacity>
        </LinearGradient >
        <View style={{ lineHeight: 6, marginTop: 60, marginLeft: 10, flexDirection: 'row' }}>
          <Text style={{ opacity: 0.9, width: '80%', fontSize: 32, color: '#FEFEFE' }}>Choose topics that you like</Text>
        </View>
        <View style={{ marginLeft: 10, flexDirection: 'row', marginTop: 30 }}>
          {
            this.state.tabs.map((tab) => (
              <TouchableOpacity onPress={() => this.tabChangeHandler(tab.id)} key={tab.id} style={{ marginRight: 20 }}>
                <Text style={[{ opacity: 0.9, fontSize: 18 }, tab.id === this.state.activeTab ? styles.active : styles.inactive]}>{tab.displayName}</Text>
              </TouchableOpacity>
            ))
          }
        </View>
        <View style={{ marginTop: 38, flex: 1, flexWrap: 'wrap', flexDirection: 'row' }}>
          {
            this.props.categories && this.props.categories.map((category, index) => (
              <TouchableOpacity onPress={() => this.categorySelected(category.id)} key={category.id} style={{ margin: 4, paddingLeft: 20, paddingRight: 20, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 20, backgroundColor: this.state.selectedCategories.includes(category.id) ? index < colorsArray.length ? colorsArray[index] : colorsArray[index - colorsArray.length] : '#1B1A28' }}>
                <Text style={{ color: '#FFFFFD' }}>{category.displayName}</Text>
              </TouchableOpacity>
            ))
          }
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 20, marginBottom: 20, }}>
          <TouchableOpacity onPress={this.nextClickHandler} style={{ width: '90%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#01CD98', opacity: 0.9, height: 55, borderRadius: 45 }}>
            <Text style={{ fontSize: 16, color: '#fff' }}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  active: {
    color: '#FEFEFE'
  },
  inactive: {
    color: '#9C9DAF'
  }
})
const mapStateToProps = (state) => {
  console.log(state.quiz.categories, "category")
  return {
    categories: state.quiz.categories
  }
}
export default connect(mapStateToProps)(SelectCategories)