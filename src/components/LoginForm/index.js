import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: '',
      passWord: '',
      showErrorMessage: false,
      errorMsg: '',
    }
  }

  handleUsernameChange = event => {
    this.setState({userName: event.target.value})
  }

  handlePasswordChange = event => {
    this.setState({passWord: event.target.value})
  }

  handleLoginSuccess = () => {
    const {history} = this.props
    history.replace('/') // Assuming '/' is your Home Route
  }

  loginFailure = errorMsg => {
    this.setState({showErrorMessage: true, errorMsg})
  }

  handleSubmit = async event => {
    event.preventDefault()

    const {userName, passWord} = this.state
    const userDetails = {username: userName, password: passWord}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    try {
      const response = await fetch(url, options)
      const data = await response.json()

      if (response.ok) {
        this.handleLoginSuccess()
      } else {
        this.loginFailure(data.error_msg)
      }
    } catch (error) {
      console.error('Error during login:', error)
    }
  }

  render() {
    const {userName, passWord, showErrorMessage, errorMsg} = this.state

    return (
      <div className="bg-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image"
        />
        <div className="short-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <form onSubmit={this.handleSubmit}>
            <div className="label-input">
              <label htmlFor="username">USERNAME</label>
              <br />
              <input
                type="text"
                placeholder="Username"
                id="username"
                onChange={this.handleUsernameChange}
                value={userName}
              />
            </div>

            <div className="label-input">
              <label htmlFor="password">PASSWORD</label>
              <br />
              <input
                type="password"
                placeholder="Password"
                id="password"
                onChange={this.handlePasswordChange}
                value={passWord}
              />
            </div>

            <div>
              <button type="submit" className="login-button">
                Login
              </button>
            </div>

            {showErrorMessage && <p className="error-msg">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
