import React, { useContext, useState } from 'react'
import {Text, TextInput, View, StyleSheet, Button} from 'react-native'
import UserContext from '../context/UserContext'

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const { dispetch} = useContext(UserContext)

    return (
        <View style={style.form}>
            <Text>Name</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setUser({...user, name})}
                placeholder="Name"
                value={user.name}
                />
            <Text>E-mail</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setUser({...user, email})}
                placeholder="E-mail"
                value={user.name}
                />
                <Button>
                    title="Save"
                    onPress={() => {
                        dispetch({
                            type: user.id ? 'updateUser' : 'createUser', 
                            payload: user, 
                        })
                        navigation.goBack()
                    }}
                </Button>
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 12,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
    },
})