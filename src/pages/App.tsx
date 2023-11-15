import Home from './home/Home'
import DefaultPage from '../templates/DefaultPage/DefaultPage'
import { Flip, ToastContainer } from 'react-toastify'

export default function App() {
  return (
    <DefaultPage >
      <Home />

      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
        transition={Flip}
      />
    </DefaultPage>
  )
}
