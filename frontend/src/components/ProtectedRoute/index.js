import {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'

class ProtectedRoute extends Component {
  state = {windowWidth: window.innerWidth}

  onResize = event => {
    this.setState({windowWidth: window.innerWidth})
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize)
  }
  componentWillUnmount() {
    window.addEventListener("resize",this.onResize)
  }

  render() {
    const {windowWidth} = this.state

    if(windowWidth <= 1100) {
      return <Redirect to="/size-error" />
    }
    return <Route {...this.props} />
  }
}

export default ProtectedRoute