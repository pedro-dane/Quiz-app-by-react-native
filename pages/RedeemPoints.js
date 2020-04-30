import React, { Component,Fragment } from 'react';
import { View, Text ,StyleSheet,Platform,TouchableOpacity,Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import SearchableDropdown from 'react-native-searchable-dropdown';

var items = [
    {
        id: 1,
        name: 'New York',
    },
    {
        id: 2,
        name: 'NewDeili',
    },
    {
        id: 3,
        name: 'Tokyo',
    },
    {
        id: 4,
        name: 'Chicago',
    },
    {
        id: 5,
        name: 'London',
    },
    {
        id: 6,
        name: 'Paris',
    },
    {
        id: 7,
        name: 'Berlin',
    },
    {
        id: 8,
        name: 'Beijing',
    },
];

export default class RedeemPoints extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItems: [
                {
                    id: 7,
                    name: 'Go',
                },
                {
                    id: 8,
                    name: 'Swift',
                }
            ]
        }
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header1} >
         <TouchableOpacity>
           <AntDesign name="arrowleft" color="white" style={styles.leftbutton} />
          </TouchableOpacity>
          <Text style={styles.text1}>Redemption history</Text>
          <Image source={require('../assets/images/paper.png')} style={styles.image1} />
        </View>
        <Text style={styles.headerText}>Select Pub</Text>
        <View style={styles.input1} >
            <Fragment>
            <SearchableDropdown
            onItemSelect={(item) => {
              const items = this.state.selectedItems;
              items.push(item)
              this.setState({ selectedItems: items });
            }}
            containerStyle={{ padding: 5 }}
            onRemoveItem={(item, index) => {
              const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
              this.setState({ selectedItems: items });
            }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#1F1F21',
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemTextStyle={{ color: 'white' }}
            itemsContainerStyle={{ maxHeight: 140 }}
            items={items}
            defaultIndex={2}
            resetValue={false}
            textInputProps={
              {
                placeholder: "Search",
                underlineColorAndroid: "transparent",
                style: {
                    padding: 12,
                    borderWidth: 1,
                    borderColor: 'black',
                    borderRadius: 5,
                },
                
              }
            }
            listProps={
              {
                nestedScrollEnabled: true,
              }
            }
        />
      </Fragment>
        </View>
        <Text style={styles.headerText}>Select City</Text>
        <View style={styles.input1} >
        <Fragment>
            <SearchableDropdown
            onItemSelect={(item) => {
              const items = this.state.selectedItems;
              items.push(item)
              this.setState({ selectedItems: items });
            }}
            containerStyle={{ padding: 5 }}
            onRemoveItem={(item, index) => {
              const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
              this.setState({ selectedItems: items });
            }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#1F1F21',
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemTextStyle={{ color: 'white' }}
            itemsContainerStyle={{ maxHeight: 140 }}
            items={items}
            defaultIndex={2}
            resetValue={false}
            textInputProps={
              {
                placeholder: "Search",
                underlineColorAndroid: "transparent",
                style: {
                    padding: 12,
                    borderWidth: 1,
                    borderColor: 'black',
                    borderRadius: 5,
                },
                
              }
            }
            listProps={
              {
                nestedScrollEnabled: true,
              }
            }
        />
      </Fragment>
      
        </View>
        <Text style={styles.headerText}>XP</Text>
        <View style={styles.headerbottom}>
            <View style={styles.input3}></View>
            <TouchableOpacity style={styles.button1}>
                <Text style={styles.button1Text} >ADD POINTS</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button2} >
            <Text style={styles.button2Text} >REDEEM</Text>
        </TouchableOpacity>
        <View style={styles.main} >
            <Text style={styles.text2}>Conversion Ratio</Text>
            <View style={styles.bottombodymain}>
                <Image source={require('../assets/images/iconp1.png')} style={styles.image2} />
                <Text style={{ color: 'white',fontSize:30 }} >=</Text>
                <Image source={require('../assets/images/iconp2.png')} style={styles.image2} />
            </View>
            <View style={styles.bodybottom} >
                <Text style={{ color: 'white' }}>Terms : Lorem Lorem Lorem Lorem Lorem  Lorem</Text>
                <Text style={{ color: 'white' }}>Lorem Lorem Lorem Lorem Lorem rem Lorem</Text>
                <Text style={{ color: 'white' }}>Lorem Lorem Lorem Lorem Lorem Lorem Lorem</Text>
            </View>
        </View>
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
    image1: {
        width: 40,
        height: 40,
        alignSelf: 'center'
    },
    text1: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 20
    },
    leftbutton:{
        fontSize:30
    },
    headerText:{
        color:"white",
        fontSize:20,
        padding:'2%'
    },
    headerInput1:{
        height:20,
        padding:'2%'
    },
    input1:{

    },
    headerbottom:{
        flexDirection:'row'
    },
    button1:{
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'white',
        borderRadius:30,
        width:'30%',
        paddingVertical:15,
        marginLeft:20
    },
    button1Text:{
        color:'white',
        fontSize:15,
    },
    input3:{
        
        width:'60%',
        
    },
    button2:{
        backgroundColor: '#F55765',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        paddingVertical:15,
        width:'96%',
        alignSelf:'center'
    },
    button2Text:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    bottombodymain: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image2: {
        width: 80,
        height: 80,
        marginHorizontal: '10%'
    },
    text2:{
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf:'center',
        marginVertical:20
    },
    bodybottom:{
        marginTop:20,
        paddingBottom:30,
        paddingLeft:10
    },
    main:{
        backgroundColor:'#1F1F21',
        alignSelf:'center',
        width:'96%',
        marginTop:30
    }
});

