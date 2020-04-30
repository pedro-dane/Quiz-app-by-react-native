//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, Platform, TouchableOpacity, Image, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;




// create a component
class MyClass extends Component {

  state = {

    achievements: [
      {
        id: '0',
        url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
        Text1: 'Tilak Shah',
        Text2: 'Founder',
        Text3: 'Ace of Pubs hosts live quizzes and fun events in bars, pubs and restaurants across India. Our events are ideal for spending time with your friends, family and coworkers.Ace of Pubs hosts live quizzes and fun events in bars, pubs and restaurants across India. Our events are ideal for spending time with your friends, family and coworkers.'
      },
      {
        id: '1',
        url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
        Text1: 'Tilak Shah',
        Text2: 'Founder',
        Text3: 'Ace of Pubs hosts live quizzes and fun events in bars, pubs and restaurants across India. Our events are ideal for spending time with your friends, family and coworkers.Ace of Pubs hosts live quizzes and fun events in bars, pubs and restaurants across India. Our events are ideal for spending time with your friends, family and coworkers.'

      },
      {
        id: '2',
        url: 'https://d1qp59yxlq7zhd.cloudfront.net/media/pubs-in-noida-1.jpg',
        Text1: 'Tilak Shah',
        Text2: 'Founder',
        Text3: 'Ace of Pubs hosts live quizzes and fun events in bars, pubs and restaurants across India. Our events are ideal for spending time with your friends, family and coworkers.Ace of Pubs hosts live quizzes and fun events in bars, pubs and restaurants across India. Our events are ideal for spending time with your friends, family and coworkers.'

      },

    ],
  }

  _returnItem = ({ item }) => {
    return <View style={styles.itemmain}>
      <View style={{ flexDirection: 'row' }}>
        <Image source={{ uri: item.url }} style={styles.itemimage} />
        <View style={styles.itembody}>
          <Text style={styles.itemText1}>{item.Text1}</Text>
          <Text style={styles.itemText2}>{item.Text2}</Text>
        </View>

      </View>
      <Text style={styles.itemText3}>{item.Text3}</Text>
    </View>
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.intro}>
            <View style={styles.close}>
              <TouchableOpacity style={styles.iconClose} activeOpacity={0.6}>
                <Ionicons
                  name={Platform.OS === "android" ? "md-close" : "ios-close"}
                  size={24}
                  color={'#242a37'}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.logoContent}>
              <View style={styles.logoArea}>
                <Image source={require('../assets/images/aceofpubs.png')} style={styles.logo} />
              </View>
              <View style={styles.aboutUsContent}>
                <Text style={styles.aboutUsTxt}> About Us </Text>
                <View style={styles.socialImageGroup}>
                  <TouchableOpacity onPress={() => alert('instagram')}>
                    <Ionicons
                      name={"logo-instagram"}
                      size={30}
                      color={'#fff'}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => alert('twitter')}>
                    <Ionicons
                      name={"logo-twitter"}
                      size={30}
                      color={'#fff'}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => alert('facebook')}>
                    <Ionicons
                      name={"logo-facebook"}
                      size={30}
                      color={'#fff'}
                      style={{ borderRadius: 50 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View>
              <Text style={styles.description}> Ace of Pubs hosts live quizzes and fun events in bars, pubs and restaurants across India. Our events are ideal for spending time with your friends, family and coworkers. {'\n'}{'\n'} Is fun, joy and happiness not enough for ya? Fine! There’s FREE BEER, Merchandise, Sunglasses, Movie tickets. We will bring back your childish sense of excitement and competition for a few hours to help you unwind! </Text>
            </View>
          </View>
          <View>
            <View style={{ height: '60%', marginTop: 90 }}>
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
          </View>
        </View>
      </View>
    );
  }
}
export default MyClass;

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242a37"
  },
  content: {
    flex: 1,
    width: "90%",
    marginLeft: "5%"
  },
  intro: {
    height: HEIGHT * 0.4,
  },
  close: {
    marginTop: 40,
    alignItems: 'flex-end',
  },
  iconClose: {
    width: 35,
    height: 35,
    backgroundColor: '#fff',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: "center",
  },
  logoContent: {
    flexDirection: "row",
    marginBottom: 20,
    marginTop: -8
  },
  logo: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },
  logoArea: {
    width: 93,
    height: 93,
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: "center"
  },
  aboutUsContent: {
    marginHorizontal: 10,
    marginTop: 5
  },
  aboutUsTxt: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '700',
    marginVertical: 5,
    letterSpacing: 1.5
  },
  socialImageGroup: {
    flexDirection: "row",
    justifyContent: 'space-around'
  },
  description: {
    color: '#fff',
    fontSize: 15
  },
  itemmain: {
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 20,
    elevation: 18,
    borderWidth: 0.5,
    marginVertical: 30,
    marginHorizontal: 20,
    padding: 10, 
    backgroundColor: '#242A37',
    borderRadius: 20,
    borderColor: '#000',
  },
  itemimage: {
    width: 70,
    height: 70,
    borderRadius: 70,
    marginBottom: 10
  },
  itembody: {
    width: '60%',
    marginLeft: 20
  },
  itemText1: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10
  },
  itemText2: {
    color: '#4E586E',
    fontSize: 10
  },
  itemText3: {
    color: 'white',
    fontSize: 15
  }
})