import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView, SafeAreaView } from 'react-native';
import styles from "./Style"
import { Checkbox, ProgressBar } from 'react-native-paper';

const ActionPlanCreator = () => {
  const [goal, setGoal] = useState('');
  const [steps, setSteps] = useState('');
  const [deadline, setDeadline] = useState('');
  const [obstacles, setObstacles] = useState('');
  const [submittedPlans, setSubmittedPlans] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmission = () => {
    const newPlan = {
      goal: { text: goal, checked: false },
      steps: { text: steps, checked: false },
      deadline: { text: deadline, checked: false },
      obstacles: { text: obstacles, checked: false },
    };
    setSubmittedPlans([...submittedPlans, newPlan]);
    setGoal('');
    setSteps('');
    setDeadline('');
    setObstacles('');
    setIsSubmitted(true);
  };

  const toggleCheckbox = (planIndex, field) => {
    const updatedPlans = submittedPlans.map((plan, index) => {
      if (index === planIndex) {
        return {
          ...plan,
          [field]: {
            ...plan[field],
            checked: !plan[field].checked,
          },
        };
      }
      return plan;
    });
    setSubmittedPlans(updatedPlans);
  };

  const calculateProgress = (plan) => {
    const totalChecks =
      (plan.goal.checked ? 1 : 0) +
      (plan.steps.checked ? 1 : 0) +
      (plan.deadline.checked ? 1 : 0) +
      (plan.obstacles.checked ? 1 : 0);

    return totalChecks / 4;
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

        {isSubmitted && submittedPlans.length > 0 && (
          <View style={styles.resultsContainer}>
            <Text style={styles.resultTitle}>Review Your Plans:</Text>
            {submittedPlans.map((plan, planIndex) => (
              <View key={planIndex} style={styles.resultItem}>
                <View style={styles.resultField}>
                  <Checkbox
                    status={plan.goal.checked ? 'checked' : 'unchecked'}
                    onPress={() => toggleCheckbox(planIndex, 'goal')}
                  />
                  <Text style={styles.resultText}>
                    <Text style={styles.resultLabel}>Goal: </Text>{plan.goal.text}
                  </Text>
                </View>
                <View style={styles.resultField}>
                  <Checkbox
                    status={plan.steps.checked ? 'checked' : 'unchecked'}
                    onPress={() => toggleCheckbox(planIndex, 'steps')}
                  />
                  <Text style={styles.resultText}>
                    <Text style={styles.resultLabel}>Steps: </Text>{plan.steps.text}
                  </Text>
                </View>
                <View style={styles.resultField}>
                  <Checkbox
                    status={plan.deadline.checked ? 'checked' : 'unchecked'}
                    onPress={() => toggleCheckbox(planIndex, 'deadline')}
                  />
                  <Text style={styles.resultText}>
                    <Text style={styles.resultLabel}>Deadline: </Text>{plan.deadline.text}
                  </Text>
                </View>
                <View style={styles.resultField}>
                  <Checkbox
                    status={plan.obstacles.checked ? 'checked' : 'unchecked'}
                    onPress={() => toggleCheckbox(planIndex, 'obstacles')}
                  />
                  <Text style={styles.resultText}>
                    <Text style={styles.resultLabel}>Obstacles: </Text>{plan.obstacles.text}
                  </Text>
                </View>
                <ProgressBar progress={calculateProgress(plan)} color="#0163d2" style={styles.progressBar} />
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ActionPlanCreator;
