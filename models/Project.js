var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/vsologin");

var schemaOptions = {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  };
  
  var projectSchema = new mongoose.Schema({
    projectname: String,
    userid: String,
    description: String,
    developerid: String,
  }, schemaOptions);
  
  var Project = mongoose.model('Project', projectSchema);
  
  module.exports = Project;
  