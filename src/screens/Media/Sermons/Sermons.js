import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useNavigation, useTheme } from '@react-navigation/native';
import { createStyles } from './styles';
import { Image } from 'expo-image';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

const Sermons = () => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const styles = createStyles(colors)

    const sermons = [
        {title: 'Trusting the word of God', preacher: 'Pst. John Doe', date: '12-09-2024', id:1 , imgUrl: require('../../../Assets/pray.jpg'), desc:"When we walk with the lord we learn to trust his word. When we walk with the lord we learn to trust his word.When we walk with the lord we learn to trust his word.When we walk with the lord we learn to trust his word."},
        {title: 'Trusting the word of God', preacher: 'Pst. John Doe', date: '12-09-2024', id:2 , imgUrl: require('../../../Assets/sermon.jpg'), desc:"When we walk with the lord we learn to trust his word. When we walk with the lord we learn to trust his word.When we walk with the lord we learn to trust his word.When we walk with the lord we learn to trust his word."},
        {title: 'Trusting the word of God', preacher: 'Pst. John Doe', date: '12-09-2024', id:3 , imgUrl: require('../../../Assets/abstract-1.jpg'), desc:"When we walk with the lord we learn to trust his word. When we walk with the lord we learn to trust his word.When we walk with the lord we learn to trust his word.When we walk with the lord we learn to trust his word."},

    ]
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.sermon} onPress={()=>{
                navigation.navigate('SermonDetail', { sermon: item, title: item.title })
            }}>
                <View style={[styles.overlay]}></View>
                <Image
                    source={item.imgUrl}
                    resizeMethod='scale'
                    style={styles.imageBackground}
                />

                <View style={styles.sermonContentInner}>
                    <Text style={styles.sermonTitle}>{item.title.slice(0, 45)}{item.title.length > 45 && '...'}</Text>
                    <Text style={styles.sermonPreacher}>{item.preacher}</Text>
                    <Text style={styles.sermonDate}>{item.date}</Text>

                    <View style={{ marginTop: "auto", marginBottom: 5 }}>
                        <AntDesign name="playcircleo" size={32} color="white" />
                        <Text style={{ color: 'white', fontSize: 16, marginTop: 5 }}>Watch Here</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList 
            style={styles.list}
                data={sermons}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                />
        </View>
    )
}

export default Sermons