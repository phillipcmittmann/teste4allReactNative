import React, { useState } from 'react';
import { 
    View, 
    StyleSheet, 
    Text 
} from 'react-native';

import Button from './components/Button';

const App = () => {
    const [timestamp, setTimestamp] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('white');

    const changeBackgroundColor = () => {
        setTimestamp(Date.now().toString());

        setBackgroundColor(getColor(timestamp[timestamp.length-1]));
    }

    const getColor = (digit) => {
        switch (digit) {
            case '0':
                return 'white';

            case '1':
                return 'black';

            case '2':
                return 'blue';

            case '3':
                return 'green';

            case '4':
                return 'pink';

            case '5':
                return 'red';

            case '6':
                return 'purple';

            case '7':
                return 'yellow';

            case '8':
                return 'gray';

            case '9':
                return '#c8a2c8';

            default: 
                return 'white';
        }
    }

    return (
        <View style={[ styles.container, { backgroundColor: backgroundColor } ]}>
            <Text style={ styles.text }>
                Go 4all
            </Text>

            <Button
                onPress={() => changeBackgroundColor()}
            />
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