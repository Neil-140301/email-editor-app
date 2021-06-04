import {Component} from 'react'
import EmailEditor from "react-email-editor"
import './index.css'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser } from '@fortawesome/free-solid-svg-icons'

class NewTemplate extends Component {
  appearance = { theme: "dark", panels: {tools: {dock: "left"}}}

  onClickSave = () => {
    const {match} = this.props
    const {id} = match.params
    this.editor.saveDesign(design => {
      const newTemplate = {templateId: id, templateJson: JSON.stringify(design)}
      console.log(design)
      axios.post('/template',newTemplate)
    })
    alert('saved data')
  }

  onClickHome = () => {
    const {history} = this.props
    history.replace('/')
  }  

  render() {
    return (
      <div className="nt-container">
        <EmailEditor
          ref={(editor) => (this.editor = editor)}
          minHeight="85vh"
          appearance={this.appearance}
        />
        <div className="save-section-container d-flex justify-content-center">
          <div className="w-85 d-flex align-items-center">
            <div className="mx-2 d-flex flex-grow-1">
              <input type="text" className="form-control w-50 mr-2" placeholder="type your message" />
              <button className="btn btn-secondary save-btn mx-3" onClick={this.onClickSave}>Save</button>
              <button className="btn home-btn" onClick={this.onClickHome} >
                <FontAwesomeIcon icon={faHouseUser} />
              </button>
            </div>
            <div className="ml-auto">
              <a className="link" href="https://unlayer.com/?utm_medium=web-editor&utm_campaign=editor-referral">
                by Unlayer...
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewTemplate