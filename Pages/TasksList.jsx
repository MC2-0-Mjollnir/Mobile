import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, Text, ScrollView, Checkbox } from 'react-native';

const TasksList = () => {
    const [isChecked, setIsChecked] = useState(false);

    const tasks = [
        { name: 'Task1', date: '2021-10-10', hour: '10:00' },
        { name: 'Task2', date: '2021-10-10', hour: '10:00' },
        { name: 'Task3', date: '2021-10-10', hour: '10:00' },
        { name: 'Task4', date: '2021-10-10', hour: '10:00' },
        { name: 'Task5', date: '2021-10-10', hour: '10:00' },
        { name: 'Task6', date: '2021-10-10', hour: '10:00' },
        { name: 'Task7', date: '2021-10-10', hour: '10:00' },
        { name: 'Task8', date: '2021-10-10', hour: '10:00' },
    ]

    const windowHeight = Dimensions.get('window').height;

    return (
        <ImageBackground
            source={require('../Images/Bg.png')}
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.title}> Projet </Text>

                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    {tasks.map((task, index) => (
                        <View key={index} style={styles.task}>
                            <View>
                                <Text> {task.name} </Text>
                                <Text> {task.date} <Text> {task.hour} </Text> </Text>
                            </View>

                            {/* <Checkbox
                                value={isChecked}
                                onValueChange={setIsChecked}
                            /> */}
                        </View>
                    ))}
                </ScrollView>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        width: Dimensions.get('window').width,
        height: '100%',
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 50,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#26344F',
    },
    scrollViewContent: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    task: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 300,
        padding: 20,
        borderWidth: 1,
        borderColor: '#26344F',
        marginTop: 20,
    },
});

export default TasksList;
