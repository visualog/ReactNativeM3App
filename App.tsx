import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
  Appbar,
  Button,
  Card,
  Text,
  Avatar,
} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="M3 App" />
          <Appbar.Action icon="magnify" onPress={() => {}} />
          <Appbar.Action icon="dots-vertical" onPress={() => {}} />
        </Appbar.Header>
        <View style={styles.content}>
          <Card style={styles.card}>
            <Card.Title
              title="Material Design 3"
              subtitle="in React Native"
              left={(props) => <Avatar.Icon {...props} icon="folder" />}
            />
            <Card.Content>
              <Text variant="bodyMedium">
                This is a simple demonstration of react-native-paper with
                Material You (M3) design.
              </Text>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>

          <View style={styles.buttonContainer}>
            <Button
              icon="camera"
              mode="contained"
              onPress={() => console.log('Pressed')}>
              Contained Button
            </Button>
            <Button
              icon="creation"
              mode="outlined"
              style={styles.button}
              onPress={() => console.log('Pressed')}>
              Outlined Button
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  button: {
    marginTop: 8,
  },
});

export default App;