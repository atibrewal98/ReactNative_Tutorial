import React from 'react';
import { StyleSheet, Text, View, ToolbarAndroid } from 'react-native';
import Calculator from "./Screens/Calculator"
import { Container, Content, Header, Body, Title } from "native-base";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Body>
            <Text>Calculator</Text>
          </Body>
        </Header>
        <Content>
          <Calculator/>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 30,
    backgroundColor: '#fff'
  }
});
