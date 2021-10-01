import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import { Dialog } from '@reach/dialog'
import { Logo } from './components/logo'
import "@reach/dialog/styles.css"

const LoginForm = ({onSubmit, buttonText}) => {

  const handleSubmit = event => {
    event.preventDefault()
    const { username, password } = event.target.elements
    onSubmit({
      username: username.value,
      password: password.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input id="password" type="text"></input>
      </div>
      <div>
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  )
}

const App = () => {
  const [openModal, setOpenModal] = useState('none')

  const login = formData => {
    console.log('')
  }

  const register = formData => {
    console.log('')
  }

  const Button = ({children}) => {
    return (
      <button>
        {children}
      </button>
    )
  }

  return (
    <>
      <Logo width="80" height="80" />
        <h1>Bookshelf</h1>
      <div>
        <Button onClick={() => setOpenModal('login')} children={'Login'} />
      </div>
      <div>
        <Button onClick={() => setOpenModal('register')} children={'Register'} />
      </div>
      <Dialog aria-label="Login form" isOpen={openModal === 'login'}>
        <div>
          <Button onClick={() => setOpenModal('none')} children={'Close'} />
        </div>
        <h3>Login</h3>
        <LoginForm onSubmit={login} buttonText="Login" />
      </Dialog>
      <Dialog aria-label="Registration form" isOpen={openModal === 'register'}>
        <div>
          <Button onClick={() => setOpenModal('none')} children={'Close'} />
        </div>
        <h3>Register</h3>
        <LoginForm onSubmit={register} buttonText="Register" />
      </Dialog>
    </>
  )
}

ReactDOM.render(<App /> ,document.getElementById('root'))
