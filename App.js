import { StyleSheet, TextInput, View, Button, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import Lista from './Lista';


export default function App() {

  const [keyword, setKeyword] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(repositories);

  const handleFetch = () => {
    setLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${keyword}`)
      .then(response => {
        if (!response.ok)
          throw new Error("Error in fetch:" + response.statusText);

        return response.json()
      })
      .then(data => setRepositories(data.meals))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        placeholder='keyword'
        value={keyword}
        onChangeText={text => setKeyword(text)}
      />
      <View style={styles.button}>
        <Button title="Find" onPress={handleFetch} />
      </View>
      {loading && <ActivityIndicator size="large" />}

      <Lista repositories={repositories} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    width: 200
  },
  button: {
    width: 200
  }
});
