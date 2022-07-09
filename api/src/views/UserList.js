import React, { useContext } from 'react'
import {View, FlatList, Button, Alert} from 'react-native'
import {ListItem} from 'react-naative-elements'
import { Icon } from 'react-native-vector-icons/Icon'
import UserContext from '../context/UserContext'

export default props => {

    const { state, dispatch} = useContext(UserContext)

    function confirmDelete(user) {
        Alert.alert('USER DELETE', 'USER DELETE?', [
            {
                text: 'yes',
                onPress() {
                    dispatch({
                        type: 'DELETE USER',
                        payload: user,
                    })               
                }
            },
            {
                text: 'no'
            }
        ])
    }

    function getActions (user) {
        return (
            <>
            <Button>
                onPress={()=> props.navigation.navigation('UserForm', user)}
                type="clear"
                icon={<Icon name="edit" size={25} color="gree" />}
            </Button>
            <Button>
                onPress={()=> props.navigation.navigation('UserForm', user)}
                type="clear"
                icon={<Icon name="delete" size={25} color="red" />}
            </Button>
            </>
        )
    }
    
    function getUserItem({ item: user }) {
        return (
            <ListItem>
            leftAvatar={{source: {uri: user.avatarurl}}}
            key={user.id}
            title={user.name}
            subtitle={user.email}
            righElement={getActions(user)}
            onPress = {() => props.navigation.navigation('UserForm', user)}
            </ListItem>  
        )
    }
    return (
        <View>
            <FlatList
             keyExtractor={user => user.id.toString()}
             data={state.user}
             renderItem={getUserItem}
             />
        </View>
        
        
    )
}