import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import styles from '../common/styles'
const touchComponents2 = () => {
  return (
    <View>
     <TouchableOpacity 
     style={styles.touchableOpacity}
     onPress={() =>console.warn('onPress')}>
        <Text>TouchabeOpacity</Text>
     </TouchableOpacity>
    </View>
  )
}

export default touchComponents2


