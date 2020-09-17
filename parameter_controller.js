const parameter_model = require('./parameter_model');


// LEt for data

const parameter_data = (req) => {
    let data = {
        //tool_name: req.body.tool_name,
        vessel_name: req.body.vessel_name,
        vessel_mms: req.body.vessel_mms,
       
    };
    return data;
};



// CREATE 

const api_post_vessel_parameter_set = (req, res, next) => {
    console.log('api_post_vessel_parameter_set');
    let data = parameter_data(req);

    let new_parameter= parameter_model(data);

    new_parameter.save().then(() => {
        console.log(new_parameter);
        res.send(JSON.stringify(new_parameter));
    }).catch(err => {
        res.status(500);
        res.send(err.errmsg);
        console.log(err);
    });

};

// READ 

const api_get_vessel_parameter_sets = (req, res, next) => {
    console.log('api_get_vessel_parameter_sets');

    parameter_model.find({})
        .lean()
        .then(parameters => {
            res.send(JSON.stringify(parameters));
        }).catch(err => {
            res.status(500);
            res.send(err.errmsg);
            console.log(err);
        });
};


// READ BY ID
//Postman GET localhost:8080/api/parameter/5eb655f8cc119b3488a007b4
const api_get_vessel_parameter_set_id = (req, res, next) => {
    let id = req.params.id;
    
    console.log('api_get_vessel_parameter_set_id');
    parameter_model.findById(id)
        .lean()
            .then(parameters => {
                res.send(JSON.stringify(parameters));
            }).catch(err => {
                res.status(500);
                res.send(err.errmsg);
                console.log(err);
            });
};           

// READ SAMPLE FROM INTERNET
const api_get_posts = (req, res, next) => {
    
    
    console.log('testing sample get posts');
    res.send(
        [{
          title: "Hello World!",
          description: "Hi there! How are you?"
        }]
      )
    
}; 
// UPDATE 

//PUT /api/parameter/5eb655f8cc119b3488a007b4

const api_put_vessel_parameter_set_id = (req, res, next) => {
    let id = req.params.id;
    let data = parameter_data(req);

    parameter_model.findByIdAndUpdate(id, data, {
        new: true
    }).then((parameter) => {
        res.send(parameter);
    }).catch(err => {
        res.status(500);
        res.send(err.errmsg);
        console.log(err);
    });

};

// DELETE 


const api_delete_vessel_parameter_set_id = (req, res, next) => {
    let id = req.params.id;
    parameter_model.findByIdAndRemove(id).then(() => {
        res.send();
    }).catch(err => { 
        res.status(500);
        res.send(err.errmsg);
        console.log(err);
    });
};


// EXPORTS
module.exports.api_post_vessel_parameter_set=api_post_vessel_parameter_set;

module.exports.api_get_vessel_parameter_sets=api_get_vessel_parameter_sets;

module.exports.api_get_vessel_parameter_set_id =api_get_vessel_parameter_set_id ;

module.exports.api_put_vessel_parameter_set_id=api_put_vessel_parameter_set_id;

module.exports.api_delete_vessel_parameter_set_id=api_delete_vessel_parameter_set_id;

module.exports.api_get_posts=api_get_posts;//need to delete