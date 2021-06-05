# email-editor-app
### [Live Demo](https://email-editor-neil.herokuapp.com/)

<br/>
<div style="text-align: center;">
    <img src="https://res.cloudinary.com/dl3nzdely/image/upload/c_scale,w_670/v1622907346/email-editor-app_gudh8i.gif" alt="emoji-game-output" style="max-width:85%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

#### App Functionality

The app has the following functionalities:
- The homepage has a `new template` button which can be used to create templates.
- On loading, the page displays all templates present in the database.
- Each template card has an edit button which can be used to edit the template.
- The `new template` button will direct the user to the `/template/{id}` route.
  - The page will load an empty editor.
  - You can make your changes and press `save` to send the JSON to the database.
- The `edit` button will direct the user to the `/edit-template/{id}` route.
  - The page will load the editor with the template JSON saved in the database.
  - You can make your changes and `save` them for next time.
- Every template has a `download` button to download the html. 
  - `Note` You should save the file before downloading.
