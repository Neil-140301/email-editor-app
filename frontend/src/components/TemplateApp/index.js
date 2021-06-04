import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

class TemplateApp extends Component {
  state = {myTemplates: []}

  componentDidMount() {
    this.getTemplatesFromDb()
  }

  getTemplatesFromDb = async () => {
    const response = await fetch('/templates')
    const templateArray = await response.json()
    this.setState({myTemplates: templateArray})
  }

  addNewTemplate = () => {
    const {myTemplates} =  this.state
    const id = myTemplates.length + 1
    const {history} = this.props
    history.push(`/template/${id}`)
    console.log("redirected")
  }

  renderTemplate = id => {
    return (
      <div key={id} className="col-12 mx-auto my-3">
        <div className="d-flex justify-content-between">
          <h2>Template-{id}</h2>
          <Link to={`/edit-template/${id}`}>
            <button className="btn edit-btn">
              Edit{"   "}
              {<FontAwesomeIcon icon={faEdit} />}
            </button>
          </Link>
        </div>
        <hr/>
      </div>
    )
  }

  render() {
    const {myTemplates} = this.state
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-12 mb-4">
            <div className="d-flex align-items-center">
              <h1 className="text-secondary mb-4">EMAIL EDITOR</h1>
            </div>
            <button className="btn btn-primary" onClick={this.addNewTemplate}>Create Template</button>
          </div>
          {myTemplates.map(item => (
            this.renderTemplate(item)
          ))}
        </div>
      </div>
    )
  }
}

export default TemplateApp

