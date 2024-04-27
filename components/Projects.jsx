import { View, StyleSheet, ImageBackground, Dimensions, TextInput, TouchableOpacity, Text, ScrollView, Alert } from 'react-native';
import Project from './Project';
import { Circle } from 'react-native-progress';
import API from '../utils/api-client';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Projects = ({ projects, isLoading }) => {
    const windowHeight = Dimensions.get('window').height;

    const [projectCode, setProjectCode] = useState('');
    const navigation = useNavigation();

    const joinProject = async () => {
        if (!projectCode) {
            Alert.alert('Error', 'Please enter a project code');
            return;
        }
        try {
            await API.post('projects/join/'+projectCode+'/', { code: projectCode })
            Alert.alert('Success', 'Project joined!');
            navigation.navigate('Projects');
        } catch (error) {
            Alert.alert('Error', error?.response?.data?.message ?? 'Something went wrong');         
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../Images/Bg.png')}
                style={[styles.background, { height: windowHeight }]}
            >
                <View style={styles.content}>
                    <View>                     
                        <Text style={styles.text}>Projects list</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter the project code...'
                        onChangeText={text => setProjectCode(text)}
                        value={projectCode}
                    />
                    <TouchableOpacity onPress={joinProject} style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Join</Text>
                    </TouchableOpacity>
                    <ScrollView style={styles.liste}>
                        {
                            (isLoading)
                            ? <View style={styles.spinner}><Circle size={30} indeterminate={true} /><Text style={styles.loaderText}>Loading</Text></View>
                            :
                            (!projects.length)
                            ?
                            <Text style={styles.notFoundText}>No Projects founded!</Text>
                            : projects.map((project, index) => (
                                <Project key={index} name={project.name} description={project.description} />
                            ))
                        }
                    </ScrollView>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        width: '100%',
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        paddingHorizontal: 30
    },
    content: {
        paddingTop: 20,
        flex: 1,
    },
    text: {
        fontSize: 40,
        color: '#26344F',
        marginBottom: 10,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#26344F',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    liste: {
        marginTop: 10, 
        marginBottom: 75, 
    },
    spinner: {
        flex: 1,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    input: {
        height: 40,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
    },
    loaderText: {
        fontSize: 30
    },
    notFoundText: {
        textAlign: 'center',
        fontSize: 30,
        color: 'red',
        marginTop: 20,
    }
});

export default Projects;
