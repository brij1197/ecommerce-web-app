import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

type Props = {}

const ProductDetails = (props: Props) => {
  const {id}=useLocalSearchParams();
  return (
    <View>
      <Text>ProductDetails - {id}</Text>
    </View>
  )
}


export default ProductDetails