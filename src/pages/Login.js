import React from 'react'

// strapi functions

// user handling
import {useHistory} from 'react-router-dom'



const Login = () => {
  const history = useHistory()

  // setup user context

  // state values
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [username, setUsername] = React.useState('default')
  const [isMember, setIsMember] = React.useState(true)

  // empty variables
  let isEmpty = false

  const toggleMember = () => {

  }

  const handleSubmit = async (e) => {

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
          <label htmlFor="email">password</label>
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
          {!isMember ? "need to register" : "already a member?"}
          <button 
            type="button" 
            onClick={toggleMember}
          >login</button>
        </p>

      </form>
    </section>
  )
}

export default Login
