import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Project = ({ name, description }) => {
    const navigation = useNavigation(); // Initialisez la navigation

    const navigateToActive = () => {
        navigation.navigate('active', { projectName: name, projectDescription: description });
    };

    return (
        <TouchableOpacity onPress={navigateToActive} style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.titre}> {name} </Text>
                <Text style={styles.description}> {description} </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    content: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
        marginTop: 20,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        borderColor: 'black',
    },

    titre: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    paragraph: {
        color: '#8A8A8A',
    },
});

export default Project;
