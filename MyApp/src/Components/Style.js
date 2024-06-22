import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
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
  resultField: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  resultText: {
    fontSize: 16,
  },
  resultLabel: {
    fontWeight: 'bold',
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});

export default styles;
