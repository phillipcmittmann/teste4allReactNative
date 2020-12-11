import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const Button = () => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.text }>
                Me aperte!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 5,
    },
    text: {
        fontSize: 20
    }
});

export default Button;