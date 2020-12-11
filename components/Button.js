import React from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity 
            style={ styles.container }
            onPress={() => props.onPress()}
        >
            <Text style={ styles.text }>
                Me aperte!
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 5,
    },
    text: {
        fontSize: 20,
        margin: 10
    }
});

export default Button;