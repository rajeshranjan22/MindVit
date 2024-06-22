import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const ProgressTracker = ({ submittedPlans }) => {
  // Check if submittedPlans is defined and not empty
  if (!submittedPlans || submittedPlans.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Progress Tracker</Text>
        <Text>No plans submitted yet.</Text>
      </View>
    );
  }

  // Calculate progress based on submittedPlans
  const calculateProgress = () => {
    const totalPlans = submittedPlans.length;
    const completedPlans = submittedPlans.filter(plan =>
      plan.goal.checked && plan.steps.checked && plan.deadline.checked && plan.obstacles.checked
    ).length;
    return totalPlans > 0 ? (completedPlans / totalPlans) * 100 : 0;
  };

  // Example data for LineChart (replace with dynamic data as needed)
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43], // Example data for illustration
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progress Tracker</Text>
      <LineChart
        data={data}
        width={350}
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
      />
      <Text style={styles.progressText}>Progress: {calculateProgress()}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  progressText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProgressTracker;
