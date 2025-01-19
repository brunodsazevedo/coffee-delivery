import { ToastConfig } from 'react-native-toast-message'

import { CartToast } from '@/components/CartToast'

export const toastConfig: ToastConfig = {
  cartToast: ({ props }) => <CartToast data={props.data} />,
}
