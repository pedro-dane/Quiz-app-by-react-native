import React from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, View } from 'react-native'
import User from './User'

export default class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props);
        AsyncStorage.removeItem('userToken')
    }

    componentWillMount() {
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        
        User.data= await AsyncStorage.getItem('userToken');
        console.log('********************',User.data)
        await this.props.navigation.navigate(User.data==null ? 'Auth' : 'App');
    };

    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        )
    }
}