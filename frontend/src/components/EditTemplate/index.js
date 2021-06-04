import {Component} from 'react'
import EmailEditor from "react-email-editor"
import axios from 'axios'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser } from '@fortawesome/free-solid-svg-icons'

class EditTemplate extends Component {
  appearance = { theme: "dark", panels: {tools: {dock: "left"}}}

  onClickSave = () => {
    const {match} = this.props
    const {id} = match.params
    this.editor.exportHtml(data => {
      const {design} = data
      const updatedTemplate = {templateJson: JSON.stringify(design)}
      console.log(design)
      axios.put(`/template/${id}`,updatedTemplate)
      console.log(updatedTemplate)
    })
    alert('saved data')
  }

  getJsonTemplate = async () => {
    const {match} = this.props
    const {id} = match.params
    const url = `/template/${id}`
    const response = await fetch(url)
    const templateArray = await response.json()
    const template = templateArray[0]
    this.editor.loadDesign(JSON.parse(template.templateJson))
    console.log(template)
  }

  onClickHome = () => {
    const {history} = this.props
    history.push('/')
  }

  render() {
    return (
      <div className="et-container">
        <EmailEditor
          ref={(editor) => (this.editor = editor)}
          minHeight="85vh"
          onLoad={this.getJsonTemplate}
          appearance={this.appearance}
        />
        <div className="save-section-container d-flex justify-content-center">
          <div className="w-85 d-flex align-items-center">
            <div className="mx-2 d-flex flex-grow-1">
              <input type="text" className="form-control w-50 mr-2" placeholder="type your message" />
              <button className="btn btn-secondary save-btn mx-3" onClick={this.onClickSave}>Save</button>
              <button className="btn home-btn" onClick={this.onClickHome}>
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

export default EditTemplate
