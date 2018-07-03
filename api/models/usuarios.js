const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
    nombre: String,
    password: String
});
const userModel = mongoose.model('usuarios', userSchema);

module.exports = {
  create:(req,res,next)=>{
    const user = new userModel({
      _id: new mongoose.Types.ObjectId(),
      nombre: req.body.nombre,
      password: req.body.password
    });
    user
        .save()
        .then(result =>{
          res.status(200).json({
            message: 'Usuario creado con exito',
            data: {
              ...result
            }
          });
        })
        .catch(err=>{
          console.log(err);
          res.status(500).json({
            error:err
          });
        });
  },
  find: (req,res,next) => {
    userModel.find()
    .select('_id nombre password')
    .exec()
    .then(docs =>{
      const response = {
        count: docs.length,
        data: docs.map(doc=>{
          return{
            ...doc['_doc']
          };
        })
      };
      res.status(200).json(response);
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({
        error:err
      });
    });
  },
  update: (req,res,next)=>{
    const id = req.params.id;
    let updateParams ={
      ...req.body
    };
    userModel.update({_id: id},{$set: updateParams})
    .exec()
    .then(result => {
      res.status(200).json({
        message: 'Usuario actualizado'
      });
    })
    .catch(err =>{
      console.log (err);
      res.status(500).json({
        error:err
      });
    });
  },
  findOne: (req,res,next)=>{
    const id = req.params.id;
    userModel.findById(id)
    .select('_id nombre password')
    .exec()
    .then(doc => {
      if(doc){
        res.status(200).json({
          data: doc,
        });
      }else{
        res.status(404).json({message: 'No valid entry found for provided ID'});
      }
    })
    .catch(err =>{
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
  },
  delete: (req,res,next)=>{
    const id= req.params.id;
    userModel.remove({_id: id})
    .exec()
    .then(result =>{
      res.status(200).json({
        message: 'Usuario eliminado'
      });
    })
    .catch(err =>{
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
  }
};
