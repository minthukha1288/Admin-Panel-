import './App.css'
import { useState,createContext } from 'react'
import Login from './page/login/index'
import Dashboard from './layout/dashboard'

export const LoginContext = createContext();

function App() {
  const [isLogin, setisLogin] = useState(true);

  return (
    <>
      <LoginContext.Provider value={{isLogin,setisLogin}}>
       {isLogin ? <Login/>: <Dashboard/>}
      </LoginContext.Provider>
    </>
  )
}

export default App