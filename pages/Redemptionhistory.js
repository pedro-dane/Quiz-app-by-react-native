import React, { Component } from 'react';
import { View, Text,StyleSheet,Image,Platform,TouchableOpacity,FlatList} from 'react-native';
import CloseButton from '../components/close'

class Redemptionhistory extends Component {
    state = {
       
        achievements: [
          {
            id: '-1',
            url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
            Text:'TUF'
          },
          {
            id: '0',
            url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
            Text:'Name'
          },
          {
            id: '1',
            url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
            Text:'Name'
          },
          {
            id: '2',
            url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
            Text:'Name'
          },
          {
            id: '21',
            url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
            Text:'Name'
          },
          {
            id: '27',
            url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
            Text:'Name'
          },
          {
            id: '29',
            url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
            Text:'Name'
          },
          {
            id: '21',
            url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
            Text:'Name'
          },
          {
            id: '27',
            url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
            Text:'Name'
          },
          {
            id: '29',
            url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
            Text:'Name'
          },
        ],
      }
    _returnItem=({item})=>{
        return  <View style={styles.itemmain}>
        <Image key={item.id} style={styles.itemImage1} source={{ uri: item.url }} />
        <View style={styles.itemtext}>
            <Text style={styles.itemText1}>{item.Text}</Text>
            <Text style={styles.itemText2}>Address</Text>
        </View>
        <Image source={require('../assets/images/history.png')} style={styles.itemImage2} />
    </View>
    };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header1} >
           <TouchableOpacity>
            <CloseButton />
          </TouchableOpacity>
          <Text style={styles.text1}>Redemption history</Text>
          <Image source={require('../assets/images/paper.png')} style={styles.image1} />
        </View>
        <FlatList
          style={{ display: 'flex', height: '19%' }}
          initialNumToRender={5}
          pagingEnabled={true}
          legacyImplementation={false}
          data={this.state.achievements}
          showsHorizontalScrollIndicator={false}
          renderItem={
              this._returnItem
          }
          
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 20 : 0,
        backgroundColor:'#262628'
    },
    header1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#1F1F21',
        alignItems: 'center',
        alignContent: 'center',
        paddingVertical:20
    },
    text1: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 20
    },
    itemmain:{
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        marginLeft:'2%',
        borderBottomWidth:1,
        borderColor:'black'
    },
    itemtext:{
        
    },
    itemText1:{
        color:'white',
        fontSize:15
    },
    itemText2:{
        color:'#4E586E',
        fontSize:15
    },
    image1: {
        width: 40,
        height: 40,
        alignSelf: 'center'
    },
    itemImage1: {
        width: 70,
        height: 70,
        alignSelf: 'center',
        borderRadius:70,
        marginRight:20
    },
    itemImage2:{
        width: 70,
        height: 70,
        alignSelf: 'center',
        marginLeft:'45%'
    }
});

export default Redemptionhistory;
