import React from 'react'
import { InfoToast } from 'react-native-toast-message'

export const toastConfig = {
  /*
      TODO: just for testing
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
  info: (props) => (
    <InfoToast
      {...props}
      style={{
        border: 'none',
        padding: 0,
        borderLeftWidth: 0,
        borderRadius: 100,
        paddingVertical: 10,
        height: 'auto',
        boxShadow: 'none'
      }}
      text1Style={{
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center'
      }}
    />
  )
}
