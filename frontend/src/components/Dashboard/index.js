import {Component} from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faDownload, faStar, faCog, faInfoCircle, faEdit } from '@fortawesome/free-solid-svg-icons'
import './index.css'

class Dashboard extends Component {
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
    const randomNumber = Math.floor(Math.random()*5 + 1)
    return (
      <div key={id} className={`template-card shadow-sm card-${randomNumber}`}>
        <div className="template-details">
          <h1 className="template-title">Template-{id}</h1>
            <Link to={`/edit-template/${id}`}>
              <button className="btn edit-btn">
                <FontAwesomeIcon icon={faEdit} />
                </button>
            </Link>
        </div>
      </div>
    )
  }

  renderSideBar = () => (
    <div className="side-bar">
          <h1 className="side-bar-title mb-3">Email Editor</h1>
          <div className="options-container">
            <div className="options-section">
              <div className="option-container active-option">
                <FontAwesomeIcon icon={faHome} className="option-icon" />
                <p className="option-text">Home</p>
              </div>
              <div className="option-container">
                <FontAwesomeIcon icon={faDownload} className="option-icon" />
                <h1 className="option-text">Downloads</h1>
              </div>
              <div className="option-container">
                <FontAwesomeIcon icon={faStar} className="option-icon" />
                <p className="option-text">Favorites</p>
              </div>
              <div className="option-container">
                <FontAwesomeIcon icon={faCog} className="option-icon" />
                <p className="option-text">Settings</p>
              </div>
            </div>
          </div>
          <div className="info-container">
            <div className="info-details">
              <FontAwesomeIcon icon={faInfoCircle} className="info-icon" />
              <p className="about-text">About</p>
            </div>
            <hr className="info-hr" />
            <p className="info">
              A user-friendly Email Editor. Just drag-n-drop and you get beautiful styles in minutes.              
            </p>
          </div>
          <div className="profile-container">
            <img 
              src="https://res.cloudinary.com/dl3nzdely/image/upload/v1622794226/avatar_f5onvo.png" 
              className="profile-image" 
              alt="profile"
            />
            <p className="profile-name">Hello there!</p>
          </div>
        </div>
  )

  render() {
    const {myTemplates} = this.state
    return (
      <div className="bg-container">
        {this.renderSideBar()}
        <div className="content">
          <div className="d-flex justify-content-between">
            <h1 className="section-title">Templates</h1>
            <button className="btn-primary new-btn" onClick={this.addNewTemplate}>New Template</button>
          </div>
          <hr className="hr-line" />
          <div className="templates-container">
            {myTemplates.map(item => (
              this.renderTemplate(item)
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
