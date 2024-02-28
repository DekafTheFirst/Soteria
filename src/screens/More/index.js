import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { createStyles } from './styles'
import { useNavigation, useTheme } from '@react-navigation/native'
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useFonts, RobotoSlab_700Bold } from '@expo-google-fonts/roboto-slab';
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { useAuth } from '../../context/AuthContext';
import Option from '../../components/Option';



const More = () => {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const { currentUser, logout } = useAuth()
  const navigation = useNavigation()


  const options = [
    { name: 'notifications', icon: <FontAwesome name="bell-o" size={20} style={styles.icon} /> },
    { name: 'darkMode', icon: <MaterialIcons name="dark-mode" size={20} style={styles.icon} /> },

  ]

  const onLogout = () => {
    logout().then(() => navigation.navigate('Home')
    );
  }
  return (
    <View style={styles.moreContiner}>
      <View style={styles.content}>

        {currentUser && (
          <>
            <View>
              <Image source={require('../../Assets/person.jpg')} style={styles.profileImage} />
            </View>
            <Text style={styles.name}>Jane Doe</Text>
            <Text style={styles.email}>{currentUser.email}</Text>
            <TouchableOpacity style={styles.editProfileBtn}><Text style={styles.editProfileBtnText}>Edit Profile</Text></TouchableOpacity>
          </>
        )}

        <View style={styles.settings}>
          <View style={styles.options}>
            <Text style={{ color: colors.toggleIcon, fontWeight: '700' }}>OPTIONS</Text>
            {options.map((option, index) => <Option key={index} name={option.name} icon={option.icon} />)}

            {/* <View style={styles.option}>
              <View style={styles.optionIconWrapper}>
                <MaterialIcons name="dark-mode" size={24} color="black" />
              </View>
              <Text style={styles.optionTitle}>Dark Mode</Text>
              <FontAwesome6 name={false ? "toggle-on" : "toggle-off"} size={30} style={styles.optionToggle} color={colors.green} />
            </View> */}
          </View>

          <View style={styles.support}>
            <Text style={{ color: colors.toggleIcon, fontWeight: '700' }}>SUPPORT</Text>
            <TouchableOpacity style={styles.item}>
              <View style={styles.iconWrapper}>
                <MaterialIcons name="question-answer" size={20} style={styles.icon} />
              </View>
              <Text style={styles.title}>FAQ</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
              <View style={styles.iconWrapper}>
                <MaterialIcons name="support-agent" size={20} style={styles.icon} />
              </View>
              <Text style={styles.title}>Help</Text>
            </TouchableOpacity>
          </View>

          {currentUser ? (
            <View style={styles.logout}>
              <TouchableOpacity onPress={onLogout} style={styles.logoutBtn}>
                <View style={styles.iconWrapper}>
                  <MaterialCommunityIcons name="logout" size={20} color={colors.settingsIcon} />
                </View>
                <Text style={styles.title}>Logout</Text>
              </TouchableOpacity>
            </View>
          ): (
            <View style={styles.logout}>
              <TouchableOpacity onPress={()=> navigation.navigate('Login')} style={styles.logoutBtn}>
                <View style={styles.iconWrapper}>
                  <MaterialCommunityIcons name="logout" size={20} color={colors.settingsIcon} />
                </View>
                <Text style={styles.title}>Sign In</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> navigation.navigate('Register')} style={styles.logoutBtn}>
                <View style={styles.iconWrapper}>
                  <MaterialCommunityIcons name="logout" size={20} color={colors.settingsIcon} />
                </View>
                <Text style={styles.title}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          )}

        </View>


      </View>


    </View>
  )
}

export default More