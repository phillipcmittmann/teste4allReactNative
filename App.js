import React from 'react';
import { 
    View, 
    StyleSheet, 
    Text 
} from 'react-native';

import Button from './components/Button';

const App = () => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.text }>
                Go 4all
            </Text>

            <Button />
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
        fontSize: 20,
        marginBottom: 20
    }
});

export default App;