import React, { Component, Fragment } from 'react';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, Image, SafeAreaView, Platform, TouchableOpacity } from 'react-native';


var items = [
    {
        id: 1,
        name: 'JavaScript',
    },
    {
        id: 2,
        name: 'Java',
    },
    {
        id: 3,
        name: 'Ruby',
    },
    {
        id: 4,
        name: 'React Native',
    },
    {
        id: 5,
        name: 'PHP',
    },
    {
        id: 6,
        name: 'Python',
    },
    {
        id: 7,
        name: 'Go',
    },
    {
        id: 8,
        name: 'Swift',
    },
];
export default class RedeemPoints extends React.Component {
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
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>

                    <View style={styles.header1} >
                        
                        <Text style={styles.text1}>Redeem Points</Text>
                        <Image source={require('../assets/images/paper.png')} style={styles.image1} />
                    </View>
                    <View style={styles.text2} ><Text style={styles.text2content} >Select Pub</Text></View>
                    <View style={{ ...styles.headers, zIndex: 1000 }} >


                        <Fragment>
                            <SearchableDropdown
                                color={'white'}
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
                                    backgroundColor: '#ddd',
                                    borderColor: '#bbb',
                                    borderWidth: 1,
                                    borderRadius: 5,
                                }}
                                itemTextStyle={{ color: '#222' }}
                                itemsContainerStyle={{ maxHeight: 140 }}
                                items={items}
                                defaultIndex={2}
                                resetValue={false}
                                textInputProps={
                                    {
                                        placeholder: "placeholder",
                                        underlineColorAndroid: "transparent",
                                        style: {
                                            padding: 12,
                                            borderWidth: 1,
                                            borderColor: '#bbb',
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
                    <View style={{...styles.text2, marginTop: 100}} ><Text style={styles.text2content} >Select City</Text></View>
                    <View style={{ ...styles.headers, backgroundColor: "black" }} ></View>
                    <View style={styles.text2} ><Text style={styles.text2content} >XP</Text></View>
                    <View style={{ ...styles.headers, flexDirection: 'row' }} >
                        <View style={styles.headerbottom1} >
                            <View style={styles.headerbottomContent}></View>
                        </View>
                        <TouchableOpacity style={styles.headerbottom2}>
                            <Text style={styles.headerbottomText}>ADD POINTS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.body} >
                    <TouchableOpacity style={styles.bodyheader} >
                        <Text style={styles.bodymainText1} >REDEEM</Text>
                    </TouchableOpacity>
                    <View style={styles.bodymain} >
                        <View style={styles.bottombodyheader} >
                            <Text style={styles.text3} >Conversion Ratio</Text>
                        </View>
                        <View style={styles.bottombodymain}>
                            <Image source={require('../assets/images/iconp1.png')} style={styles.image2} />
                            <Text style={{ color: 'white' }} >=</Text>
                            <Image source={require('../assets/images/iconp2.png')} style={styles.image2} />
                        </View>
                        <View style={styles.bottombodybottom} >
                            <Text style={{ color: 'white' }}>Terms : Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</Text>
                            <Text style={{ color: 'white' }}>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</Text>
                            <Text style={{ color: 'white' }}>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
            //     <Fragment>
            //       <SearchableDropdown
            //         multi={true}
            //         selectedItems={this.state.selectedItems}
            //         onItemSelect={(item) => {
            //           const items = this.state.selectedItems;
            //           items.push(item)
            //           this.setState({ selectedItems: items });
            //         }}
            //         containerStyle={{ padding: 5 }}

            //         itemStyle={{
            //           padding: 10,
            //           marginTop: 2,
            //           backgroundColor: '#ddd',
            //           borderColor: '#bbb',
            //           borderWidth: 1,
            //           borderRadius: 5,
            //         }}
            //         itemTextStyle={{ color: '#222' }}
            //         itemsContainerStyle={{ maxHeight: 140 }}
            //         items={items}
            //         defaultIndex={2}

            //         resetValue={false}
            //         textInputProps={
            //           {
            //             placeholder: "placeholder",
            //             underlineColorAndroid: "transparent",
            //             style: {
            //                 padding: 12,
            //                 borderWidth: 1,
            //                 borderColor: '#ccc',
            //                 borderRadius: 5,
            //             },

            //           }
            //         }
            //         listProps={
            //           {
            //             nestedScrollEnabled: true,
            //           }
            //         }
            //       />

            //       {/* <SearchableDropdown
            //         onItemSelect={(item) => {
            //           const items = this.state.selectedItems;
            //           items.push(item)
            //           this.setState({ selectedItems: items });
            //         }}
            //         containerStyle={{ padding: 5 }}
            //         onRemoveItem={(item, index) => {
            //           const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
            //           this.setState({ selectedItems: items });
            //         }}
            //         itemStyle={{
            //           padding: 10,
            //           marginTop: 2,
            //           backgroundColor: '#ddd',
            //           borderColor: '#bbb',
            //           borderWidth: 1,
            //           borderRadius: 5,
            //         }}
            //         itemTextStyle={{ color: '#222' }}
            //         itemsContainerStyle={{ maxHeight: 140 }}
            //         items={items}
            //         defaultIndex={2}
            //         resetValue={false}
            //         textInputProps={
            //           {
            //             placeholder: "placeholder",
            //             underlineColorAndroid: "transparent",
            //             style: {
            //                 padding: 12,
            //                 borderWidth: 1,
            //                 borderColor: '#ccc',
            //                 borderRadius: 5,
            //             },
            //             onTextChange: text => alert(text)
            //           }
            //         }
            //         listProps={
            //           {
            //             nestedScrollEnabled: true,
            //           }
            //         }
            //     /> */}
            //   </Fragment>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 20 : 0,
        alignContent: "center",
        paddingHorizontal: '3%'
    },
    header1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'black',
        alignItems: 'center',
        alignContent: 'center'
    },
    header: {
        flex: 1,
        marginTop: 10,
    },
    headers: {
        flex: 1,

    },
    body: {
        flex: 1,
        marginVertical: '2%',
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
    text2: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        flex: 1
    },
    text2content: {
        fontSize: 20,
        color: 'white',
    },
    headerbottom1: {
        width: '50%',
        backgroundColor: 'black',
        padding: '5%'
    },
    headerbottom2: {
        width: '30%',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 50,
        marginLeft: 40,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerbottomText: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold'
    },
    headerbottomContent: {
        borderBottomColor: "white",
        borderBottomWidth: 1,
        width: '100%',
        height: '60%',
        marginHorizontal: '2%'
    },
    bodyheader: {
        flex: 1,
        backgroundColor: '#F55765',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    bodymain: {
        flex: 5,
        backgroundColor: 'black',
        marginTop: 20,
        borderRadius: 5
    },
    bodymainText1: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    bottombodyheader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottombodymain: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottombodybottom: {
        flex: 2,
        padding: 20
    },
    image2: {
        width: 60,
        height: 60,
        marginHorizontal: '10%'
    },
    text3: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    }
});