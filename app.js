// npm run start-dev

//postman post and get works
//need to add vue

const express = require('express');
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const app = express();
const body_parser = require('body-parser'); 
const parameter_controller = require('./parameter_controller'); 

app.use(body_parser.json()); //req.body.name
app.use(body_parser.urlencoded({
    extended: true
})); 

app.use((req, res, next) => {
    console.log(req.method, ' ', req.path);
    next();
}); 


app.use("/", express.static("public"));

//CREATE

app.post("/api/parameter", parameter_controller.api_post_vessel_parameter_set); 



// READ

app.get("/api/parameters", parameter_controller.api_get_vessel_parameter_sets);

//READ by ID

app.get("/api/parameter/:id", parameter_controller.api_get_vessel_parameter_set_id);
// UPDATE

app.put("/api/parameter/:id", parameter_controller.api_put_vessel_parameter_set_id);


// DELETE

app.delete("/api/parameter/:id", parameter_controller.api_delete_vessel_parameter_set_id); 

//DATA BASE connection


const database_url = "mongodb+srv://project_ver2:RMhj0yxb7kBdDAMk@cluster0.lhik3.mongodb.net/project_ver2db?retryWrites=true&w=majority"
mongoose.connect(database_url,{
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify:true,


}).then( ()=> {
    console.log('database connected');
    app.listen(port);

} ).catch(err=>{
console.log(err);

});