import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput, Picker,  TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import CloseButton from '../components/close'
import Constants from 'expo-constants';
import InputBox from '../components/InputBox'
import { FontAwesome, AntDesign} from '@expo/vector-icons'
class Filter extends Component{
  state = {
    selectedItems: {
        location: '',
        genre: '',
        sort: ''
      },
    data: {
      genreData: [
        {
          id: 'bollywood',
          name: 'Bollywood'
        },
        {
          id: 'sport',
          name: 'Sport'
        },
        {
          id: 'music',
          name: 'Music'
        },
        {
          id: 'fitness',
          name: 'Fitness'
        }
      ],
      sortData: [
        {
          id: 'trending',
          name: 'Trending'
        },
        {
          id: 'popular',
          name: 'Popular'
        },
        {
          id: 'latest',
          name: 'Latest'
        },
        {
          id: 'nearest',
          name: 'Nearest'
        }
      ]
    }
  }
  currentLocationHandler = () => {
    alert('fetching current location')
  }
  doneHandler = () => {
    alert(JSON.stringify(this.state.selectedItems))
  }
  close = () => {
    this.props.navigation.goBack()
  }
  render(){
    return (
      <View>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.close}>
            <CloseButton />
          </TouchableOpacity>
          <Text style={styles.headingText}>Filters</Text>
          <TouchableOpacity style={styles.doneButton} onPress={this.doneHandler}>
            <Text style={styles.doneText}>Done</Text>
          </TouchableOpacity>
        </View>
        <KeyboardAvoidingView behavior="padding" style={{ justifyContent: "center", alignItems: 'center'}}>
           <View style={[styles.box,styles.loactionContainer]}>
            <Text style = {{color: '#fff', alignSelf: 'flex-start', fontSize: 20, marginBottom: 10}}>Location</Text>
            <View style={{width: '100%', flexDirection: 'row', backgroundColor: '#2F3541',}}>
              <TextInput
              ref="locationInput"
              style={styles.field}
              placeholder="Enter city"
              value={this.state.comment}
              onChangeText={(text) => {
                this.setState({
                  selectedItems: {
                    ...this.state.selectedItems,
                    location: text
                  }
                })
              }}
            />
            <TouchableOpacity style={{marginLeft: 12, marginTop: 7, zIndex:10}} onPress={this.currentLocationHandler}>
              <FontAwesome name="location-arrow" color="#898D98" size={34}/>
            </TouchableOpacity>
            </View>
           </View>
           <View style={{width: '100%', alignItems: 'center'}}>
           <Text style = {styles.filterName}>Genre</Text>
           <View style={[styles.box,styles.genreContainer]}>
              <Picker
                mode="dropdown"
                selectedValue={this.state.selectedItems.genre}
                style={{width: "100%",height: 44, backgroundColor: 'transparent',color: '#fff', opacity:0.8, paddingTop: 20}}
                onValueChange={(itemValue) =>
                  this.setState({
                    selectedItems: {
                      ...this.state.selectedItems,
                      genre: itemValue
                    }
                  })
                }>
                {
                  this.state.data.genreData.map(data => (
                    <Picker.Item label={data.name} value={data.id} key={data.id}/>
                  ))
                }
              </Picker>
              <AntDesign style={{position:'relative', left: -30, top: 8}} name="right" color="#898D98" size={26}/>
           </View>
           </View>
           <View style={{width: '100%', alignItems: 'center'}}>
           <Text style = {styles.filterName}>Sort</Text>
              <View style={[styles.box,styles.sortContainer]}>
              <Picker
                mode="dropdown"
                selectedValue={this.state.selectedItems.genre}
                style={{width: "100%",height: 44,backgroundColor: 'transparent', color: '#fff', opacity:0.8}}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({
                    selectedItems: {
                      ...this.state.selectedItems,
                      sort: itemValue
                    }
                  })
                }>
                {
                  this.state.data.sortData.map(data => (
                    <Picker.Item label={data.name} value={data.id} key={data.id}/>
                  ))
                }
              </Picker>
              <AntDesign style={{position:'relative', left: -30, top: 8}} name="right" color="#898D98" size={26}/>
           </View>
           </View>
        </KeyboardAvoidingView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  filterName: {
    color: '#fff',
    opacity: 0.8,
    marginLeft: 20,
    alignSelf: 'flex-start',
    fontSize: 20,
    marginBottom: 10
  },
  field:{
    height: 45,
    width: '85%',
    color: '#fff',
    fontSize: 18,
    paddingLeft: 10,
  },
  genreContainer: {
    backgroundColor: '#2F3541',
    height: 45,
    flexDirection: "row",
    zIndex: 0,
    width: '90%',
  },
  box: {
    width: '90%',
    marginBottom: 40
  },
  loactionContainer: {
    marginTop: 40
  },
  sortContainer: {
    flexDirection: "row",
    backgroundColor: '#2F3541',
    height: 45,
    width: '90%',
  },
  headingText:{
    color: '#fff',
    fontSize: 22,
  },
  doneText: {
    color: 'red',
    fontSize:16,
    opacity:0.9,
  },
  doneButton:{
    marginRight: 18,
  },
  header:{
    marginTop: Constants.statusBarHeight,
    height: 55,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2F3541',
  }
})
export default Filter