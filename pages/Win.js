import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import Bg_dark from '../assets/images/bg_dark.png'
import PointsIcon from '../assets/icons/pointsIcon.png'
import LevelIcon from '../assets/icons/levelIcon.png'
import ExperienceIcon from '../assets/icons/experienceIcon.png'
import { connect } from 'react-redux'
class Win extends Component {
    state = {
    }
    render() {
        let resultData = this.props.result
        console.log('resultData-------->', resultData)
        return (
            <ScrollView>
                <View style={styles.header}>
                    <View style={styles.youWinTextCon}>
                        <Text style={styles.youWinText}>You {resultData.result}</Text>
                    </View>
                    <View style={styles.imageCon}>
                        <Image style={styles.profileImg}
                            source={{ uri: resultData.url }} />
                        <Text style={styles.profileNameText}>{resultData.name}</Text>
                        <Text style={styles.youWinText}>{resultData.points}</Text>
                    </View>
                    <View style={styles.ratingIconCon}>
                        <View style={styles.ratingIconView}>
                            <Image style={styles.ratingImage}
                                source={ExperienceIcon} />
                            <Text style={styles.ratingText}>300/500</Text>
                        </View>
                        <View style={styles.ratingIconView}>
                            <Image style={styles.ratingImage}
                                source={PointsIcon} />
                            <Text style={styles.ratingText}>{resultData.experience}</Text>
                        </View>
                        <View style={styles.ratingIconView}>
                            <Image style={styles.ratingImage}
                                source={LevelIcon} />
                            <Text style={styles.ratingText}>Level - {resultData.level}</Text>
                        </View>
                    </View>
                    <View style={styles.buttonCon}>
                        <TouchableOpacity style={styles.rateUsBtn}>
                            <Text style={styles.btnText}>RATE US</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Home')}
                            style={styles.takeQuizBtn}>
                            <Text style={styles.btnText}>TAKE A NEW QUIZ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.shareBtn}>
                            <Text style={styles.btnText}>SHARE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>



        )
    }
}
const styles = StyleSheet.create({
    header: {
        marginTop: 60,
        flex: 1,
    },
    youWinTextCon: {
        marginTop: 50,
        alignItems: 'center'
    },
    youWinText: {
        color: '#F6B900',
        fontSize: 22,
        fontWeight: 'bold'
    },
    imageCon: {
        marginTop: 25,
        alignItems: 'center'
    },
    profileImg: {
        height: 80,
        width: 80,
        borderRadius: 40
    },
    profileNameText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 20,
        marginBottom: 10
    },
    ratingIconCon: {
        flexDirection: 'row', marginVertical: 25
    },
    ratingIconView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ratingImage: {
        height: 50,
        width: 50,
        marginBottom: 10
    },
    ratingText: {
        fontSize: 15,
        color: '#FFF'
    },
    buttonCon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    rateUsBtn: {
        height: 60,
        width: '50%',
        backgroundColor: '#FC6F82',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    takeQuizBtn: {
        height: 60,
        width: '50%',
        backgroundColor: '#FC6F82',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15
    },
    shareBtn: {
        height: 60,
        width: '50%',
        backgroundColor: '#a0a0a0',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        fontSize: 18, color: '#FFF', fontWeight: 'bold'
    },

})
const mapStateToProps = (state) => (
    {
        result: state.quiz.result,
        questions: state.quiz.quizData && state.quiz.quizData.questions,
        metaInfo: state.quiz.quizData && state.quiz.quizData.metaInfo,
        notifications: state.notification.notifications
    }
)
export default connect(mapStateToProps)(Win)