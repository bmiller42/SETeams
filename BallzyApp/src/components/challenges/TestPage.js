import React from 'react';


import {
   View,
   Text,
   StyleSheet,
   ScrollView
} from 'react-native'

export default PrintChallengesClass = (props) => {
   const createChallenge= (challenge) => (
      <Text
         key={challenge.id}
         style={styles.challenge}>
         {challenge.name}
      </Text>
   )

   return (
      <View style={styles.container}>
         <ScrollView>
            {props.listChalls.map(createChallenge)}
         </ScrollView>
      </View>
   )
}

const styles = StyleSheet.create ({
   container: {


   },
   challenge: {
      margin: 10,
      padding: 10,
      height: 30,
      borderColor: 'red',
      borderWidth: 1
   }
})
