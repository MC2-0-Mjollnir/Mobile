import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions,Text, Image } from 'react-native';

const Active = ({route}) => {
    const windowHeight = Dimensions.get('window').height;
    const { projectName, projectDescription } = route.params;

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../Images/Bg.png')}
                style={[styles.background, { height: windowHeight }]}
            >
                <View style={styles.content}> 
                    <Text style={styles.titre}>{projectName} </Text>
                    <Text style={styles.paragraph}>{projectDescription} </Text>
                    <View style={styles.imageContainer}> 
                        <Image
                            source={require('../Images/icon.png')}
                            style={styles.image}
                        />
                    </View>
                    <Text style={styles.titre}> Active </Text>
                </View>
                
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        width: Dimensions.get('window').width,
        height: '100%',
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 100,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
        backgroundColor: '#26344F',
        marginTop: 50,
    },
    image: {
        width: 50,
        height: 50,
    },
    titre: {
        fontSize: 30,
        color: '#26344F',
        marginBottom: 10,
        textAlign: 'center',
    },
    paragraph: {
        color: '#8A8A8A',
    },
});

export default Active;
