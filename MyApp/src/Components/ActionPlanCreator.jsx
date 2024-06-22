import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';

const ActionPlanCreator = () => {
    const [goal, setGoal] = useState('');
    const [steps, setSteps] = useState('');
    const [deadline, setDeadline] = useState('');
    const [obstacles, setObstacles] = useState('');
    const [submittedPlans, setSubmittedPlans] = useState([]);

    const handleSubmission = () => {
        const newPlan = { goal, steps, deadline, obstacles };
        setSubmittedPlans([...submittedPlans, newPlan]);
        setGoal('');
        setSteps('');
        setDeadline('');
        setObstacles('');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your goal"
                    value={goal}
                    onChangeText={setGoal}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Break down steps"
                    value={steps}
                    onChangeText={setSteps}
                    multiline
                />
                <TextInput
                    style={styles.input}
                    placeholder="Set deadline"
                    value={deadline}
                    onChangeText={setDeadline}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Identify obstacles"
                    value={obstacles}
                    onChangeText={setObstacles}
                    multiline
                />
                <Button title="Review and Submit" onPress={handleSubmission} />

                {submittedPlans.length > 0 && (
                    <View style={styles.resultsContainer}>
                        <Text style={styles.resultTitle}>Review Your Plans:</Text>
                        {submittedPlans.map((plan, index) => (
                            <View key={index} style={styles.resultItem}>
                                <Text style={styles.resultText}>
                                    <Text style={styles.resultLabel}>Goal: </Text>{plan.goal}
                                </Text>
                                <Text style={styles.resultText}>
                                    <Text style={styles.resultLabel}>Steps: </Text>{plan.steps}
                                </Text>
                                <Text style={styles.resultText}>
                                    <Text style={styles.resultLabel}>Deadline: </Text>{plan.deadline}
                                </Text>
                                <Text style={styles.resultText}>
                                    <Text style={styles.resultLabel}>Obstacles: </Text>{plan.obstacles}
                                </Text>
                            </View>
                        ))}
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
        padding:30
    },
    container: {
        flexGrow: 1,
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    resultsContainer: {
        marginTop: 20,
    },
    resultTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    resultItem: {
        marginBottom: 15,
    },
    resultText: {
        fontSize: 16,
        marginBottom: 5,
    },
    resultLabel: {
        fontWeight: 'bold',
    },
});

export default ActionPlanCreator;
