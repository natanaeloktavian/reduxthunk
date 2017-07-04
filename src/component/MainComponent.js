import React, { Component } from 'react'
import { TouchableHighlight, View, Text, StyleSheet,ScrollView } from 'react-native'

// @flow
function square(n: number): number {
  return n * n;
}

class MainComponent extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Redux Examples {square("3")}</Text>
        <TouchableHighlight style={styles.button} onPress={() => this.props.fetchData()}>
          <Text style={styles.buttonText}>Load Data</Text>
        </TouchableHighlight>
        <View style={styles.mainContent}>
        {
            this.props.appData!=null && this.props.appData.isFetching && <Text>Loading</Text>
        }
        {
          (this.props.appData!=null && this.props.appData.data.length) ? (
            this.props.appData.data.map((person, i) => {
              return <View key={i} >
                <Text>Title: {person.title}</Text>
                <Text>Summary: {person.summary}</Text>
              </View>
            })
          ) : null
        }
        </View>
      </ScrollView>
    );
  }
}

styles = StyleSheet.create({
  container: {
    paddingTop: 10
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  },
  mainContent: {
    margin: 10,
  }
})

export default MainComponent
