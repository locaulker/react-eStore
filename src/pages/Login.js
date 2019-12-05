import React from 'react'

// strapi functions
import loginUser from '../strapi/loginUser'
import registerUser from '../strapi/registerUser'

// user handling
import {useHistory} from 'react-router-dom'
import {UserContext} from '../context/user'


const Login = () => {
  const history = useHistory()

  // setup user context
  const {userLogin, alert, showAlert} = React.useContext(UserContext)
  
  

  // state values
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [username, setUsername] = React.useState('default')
  const [isMember, setIsMember] = React.useState(true)

  // empty variables
  let isEmpty = !email || !password || !username || alert.show

  const toggleMember = () => {
    setIsMember( (prevMember) => {
      let isMember = !prevMember
      isMember ? setUsername('default') : setUsername('')
      return isMember
    })
  }

  const handleSubmit = async e => {
    showAlert({
      msg: 'accessing user details. please wait...'
    })
    // alert
    e.preventDefault()
    let response

    if (isMember) {
      response = await loginUser({
        email,
        password
      })
    } else {
      response = await registerUser({
        email, password, username
      })
    }

    if (response) {
      const {jwt: token, user:{username}} = response.data
      const newUser = {token, username}
      userLogin(newUser)
      showAlert({
        msg: `logged in: happy shopping ${username}`
      })
      history.push("/products")
    } else {
      // show alert
      showAlert({
        msg: 'error! please try again',
        type: 'danger'
      })
    }
  }

  return (
    <section className="form section">
      <h2 className="section-title">{isMember ? "sign in" : "register"}</h2>
      <form className="login-form">

        {/* email input */}
        <div className="form-control">
          <label htmlFor="email">email</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={ (e) => {
              setEmail(e.target.value)
            }}
          />
        </div>

        {/* password input */}
        <div className="form-control">
          <label htmlFor="password">password</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={ (e) => {
              setPassword(e.target.value)
            }}
          />
        </div>

        {/* username input */}
        {!isMember && (
          <div className="form-control">
            <label htmlFor="username">username</label>
            <input 
              type="text" 
              id="username" 
              value={username} 
              onChange={ (e) => {
                setUsername(e.target.value)
              }}
            />
          </div>
        )}

        {/* empty form text */}
        {isEmpty && <p className="form-empty">all form fields required</p>}

        {/* submit button */}
        {!isEmpty && 
          <button 
            type="submit" 
            className="btn btn-block btn-primary"
            onClick={handleSubmit}
          >submit</button>}
        
        {/* link to register */}
        <p className="register-link">
          {!isMember ? "already a member?" : "need to register?"}
          <button 
            type="button" 
            onClick={toggleMember}
          >Click here</button>
        </p>

      </form>
    </section>
  )
}

export default Login
