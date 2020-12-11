import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const App = () => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.text }>
                Go 4all
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20
    }
});

export default App;