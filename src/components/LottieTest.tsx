import { Layout } from '@ui-kitten/components'
import AnimatedLottieView from 'lottie-react-native'
import React from 'react'

export const LottieTest = () => {
  return (
    <Layout>
      <AnimatedLottieView
        autoPlay
        loop={false}
        style={{
          width: 300,
          height: 300
        }}
        source={require('../assets/succesfull-payment.json')}
      />
    </Layout>
  )
}
