import React, {Component } from "react";
import { TextInput, View, StyleSheet, Text} from "react-native";
import {Button} from 'native-base';

class Calculator extends Component {
    state = {
        num1: 0,
        num2: 0,
        result: 0
    }

    add = () => {
        this.setState({
            result: parseFloat(this.state.num1) + parseFloat(this.state.num2)
        });
    }

    subtract = () => {
        this.setState({
            result: parseFloat(this.state.num1) - parseFloat(this.state.num2)
        })
    }
    
    multiply = () => {
        this.setState({
            result: parseFloat(this.state.num1) * parseFloat(this.state.num2)
        })
    }

    divide = () => {
        this.setState({
            result: parseFloat(this.state.num1) / parseFloat(this.state.num2)
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>First:</Text>
                <TextInput
                    style={styles.text}
                    keyboardType="numeric"
                    onChangeText={(text) => this.setState({num1: text})}
                    value={this.state.num1.toString()}
                />
                <Text style={styles.text}>Second:</Text>
                <TextInput
                    style={styles.text}
                    keyboardType="numeric"
                    onChangeText={(text) => this.setState({num2: text})}
                    value={this.state.num2.toString()}
                />
                <Text
                    style={styles.text}
                >Result: {this.state.result}</Text>
                <View style={styles.operationButtonsContainer}>
                    <Button light
                        style={styles.operationButton}
                        onPress={this.add}
                    >
                    <Text>+</Text>
                    </Button>
                    <Button light
                        style={styles.operationButton}
                        onPress={this.subtract}
                    >
                    <Text>-</Text>
                    </Button>
                    <Button light
                        style={styles.operationButton}
                        onPress={this.multiply}
                    >
                    <Text>x</Text>
                    </Button>
                    <Button light
                        style={styles.operationButton}
                        onPress={this.divide}
                    >
                    <Text>/</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    operationButtonsContainer: {
        flexDirection: 'row',
    },
    operationButton: {
        flex: 1,
        justifyContent: 'center',
        margin: 10
    },
    text: {
        paddingLeft: 10
    }
});

export default Calculator;