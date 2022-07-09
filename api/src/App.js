import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import UserForm from './views/UserForm'
import UserForm from './views/UserList'
import { Button } from 'react-native'
import { Icon } from 'react-native-vector-icons/Icon'
import { UserProvider } from './context/UserContext'

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <UserProvider>
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName='UserList'
            screenOptions={screenOptions}
            >
                <Stack.Screen
                name = "UserList"
                component={UserList}
                options={() => {
                    return {
                        title: "List User",
                        headerRight: () =>  (
                            <Button
                            onPress={() => navigation.navigation("UserForm")}
                                type="Outline"
                                icon={
                                <Icon name="add" 
                                            size={25} 
                                            color='white'
                                            />
                                        }
                                />
                        )
                     }
                }}
                />
                <Stack.Screen
                name="UserForm"
                component={UserForm}
                options={{
                    title: "Form User"
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
        </UserProvider>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '000'
    },

    headerTintColor: 'fff',
    headerTitleStyle: {
        fontWeght: 'bold'
    }
}