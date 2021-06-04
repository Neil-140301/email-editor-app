const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

//mongoose
mongoose.connect("mongodb+srv://neil:UK3X7CRK-yvt9f8@cluster0.g5a3e.mongodb.net/emailDb");

//data schema and model
const templateSchema = {
  templateId: Number,
  templateJson: String
}

const Template = mongoose.model("Template",templateSchema);

//Api routes
app.get('/templates', async (request,response) => {
  const results = await Template.find();
  const templates = results.map(item => item.templateId)
  response.send(templates);
});

app.get('/template/:id', async (request,response) => {
  const {id} = request.params;
  const template = await Template.find({templateId: id});
  response.send(template);
});

app.post('/template', (request, response) => {
  const {templateId, templateJson} = request.body;
  console.log('hi');
  const newTemplate = new Template({templateId,templateJson});
  newTemplate.save();
});

app.put('/template/:id', async (request,response) => {
  const {id} = request.params;
  const {templateJson} = request.body;
  console.log(templateJson)
  const result = await Template.updateOne({templateId: id},{$set: {templateJson}})
  response.send("updated");
});

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('*', (request,response) => {
    response.sendFile(path.resolve(__dirname,'frontend','build','index.html'));
  });
}

// server start
app.listen(port, () => {
  console.log("express is running");
});

