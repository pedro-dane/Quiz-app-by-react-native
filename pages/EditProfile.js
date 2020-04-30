import React, { Component } from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import { MediaTypeOptions, launchImageLibraryAsync } from 'expo-image-picker';
import Constants from 'expo-constants';
import { askAsync, CAMERA_ROLL } from 'expo-permissions';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux'
import { editUserProfile, uploadProfileImage } from '../actions/Profile/Profile'
class ProfileEdit extends Component {
  state = {
    userData: {}
  };
  handleSubmit = () => {
    this.props.dispatch(uploadProfileImage(this.state.userData.image))
    this.props.dispatch(editUserProfile({
      userName: this.state.userData.name,
      email: this.state.userData.email,
      phone: this.state.userData.phone,
      gender: this.state.userData.gender,
      dateOfBirth: this.state.userData.dateOfBirth
    }))

    this.props.navigation.navigate('Profile')
  }
  render() {
    let { image } = this.state;

    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1, marginTop: 60, marginLeft: 20, marginRight: 10, justifyContent: 'flex-end' }}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1, marginTop: 20 }} keyboardShouldPersistTaps="always">

          <View style={{ flex: 1 }}>
            <Text style={{ color: '#fff', fontSize: 30 }}>Edit Profile</Text>
            <TouchableOpacity onPress={this.handleSubmit} style={{ position: "absolute", top: 0, right: 20 }}>
              <Text style={{ color: 'red', fontSize: 14 }}>Done</Text>
            </TouchableOpacity>
            <Image style={{ marginTop: 10, marginLeft: 100, width: 120, height: 120, borderRadius: 60 }} source={{ uri: this.state.userData.url }} />
            <TouchableOpacity style={{ flex: 0.5, marginLeft: 95, marginTop: 10 }} onPress={this._pickImage}>
              <Text style={{ color: 'red', fontSize: 16 }}>Change profile photo</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1.5, backgroundColor: '#20242F', height: '100%', marginBottom: 20 }}>
            <View style={styles.mainContent}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                ref="nameField"
                style={[styles.input, styles.detail]}
                placeholder="Name"
                value={this.state.userData.name}
                onChangeText={(text) => {
                  this.setState({
                    userData: { ...this.state.userData, name: text }
                  })
                }}
              />
            </View>
            <View style={styles.mainContent}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                ref="emailField"
                style={[styles.input, styles.detail]}
                placeholder="Email"
                value={this.state.userData.email}
                onChangeText={(text) => {
                  this.setState({
                    userData: { ...this.state.userData, email: text }
                  })
                }}
              />
            </View>
            <View style={styles.mainContent}>
              <Text style={styles.label}>Phone</Text>
              <TextInput
                ref="phoneField"
                style={[styles.input, styles.detail]}
                placeholder="Phone"
                value={this.state.userData.phone}
                onChangeText={(text) => {
                  this.setState({
                    userData: { ...this.state.userData, phone: text }
                  })
                }}
              />
            </View>
            <View style={styles.mainContent}>
              <Text style={styles.label}>Gender</Text>
              <TextInput
                ref="genderField"
                style={[styles.input, styles.detail]}
                placeholder="Gender"
                value={this.state.userData.gender}
                onChangeText={(text) => {
                  this.setState({
                    userData: { ...this.state.userData, gender: text }
                  })
                }}
              />
            </View>
            <View style={styles.mainContent}>
              <Text style={styles.label}>Date of birth</Text>
              <TextInput
                ref="dobField"
                style={[styles.input, styles.detail]}
                placeholder="Date of birth"
                value={this.state.userData.dateOfBirth}
                onChangeText={(text) => {
                  this.setState({
                    userData: { ...this.state.userData, dateOfBirth: text }
                  })
                }}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
    this.setState({
      userData: {
        name: this.props.userData.name,
        url: this.props.userData.url,
        email: this.props.userData.email,
        phone: this.props.userData.phone,
        gender: this.props.userData.gender,
        dateOfBirth: this.props.userData.dateOfBirth
      }
    })
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await askAsync(CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      base64: true,
      aspect: [4, 3],
    });
    this.setState({
      userData: {
        ...this.state.userData,
        url: result.uri
      }
    })
    if (!result.cancelled) {
      const uri = result.uri
      const uriParts = uri.split('.');
      const fileType = uriParts[uriParts.length - 1];
      const formData = new FormData();
      formData.append('img', {
        uri,
        name: `photo.${fileType}`,
        type: `image/${fileType}`,
      });
      this.setState({
        userData: {
          ...this.state.userData,
          image: formData
        }
      })
    }
  };
}
const styles = StyleSheet.create({
  mainContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 20,
    flex: 1,
    marginRight: 10
  },
  label: {
    color: '#fff',
    fontSize: 15,
    opacity: 0.6
  },
  detail: {
    color: '#fff',
    fontSize: 16
  }
})
const mapStateToProps = (state) => (
  {
    userData: state.profile.userProfile.userData
  }
)
export default connect(mapStateToProps)(ProfileEdit)