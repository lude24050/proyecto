const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const mascotasSchema = new Schema({
    nombre: String,
    tipo: String,
    edad: Number
});

const mascotasModel = mongoose.model('mascotas', mascotasSchema);

module.exports = {
  create:(req,res,next)=>{
    const mascota = new mascotasModel({
      _id: new mongoose.Types.ObjectId(),
      nombre: req.body.nombre,
      tipo: req.body.tipo,
      edad: req.body.edad
    });
    mascota
        .save()
        .then(result =>{
          res.status(200).json({
            message: 'Mascota creada con exito',
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
    mascotasModel.find()
    .select('_id nombre tipo edad')
    .exec()
    .then(docs =>{
      const response = {
        count: docs.length,
        data: docs.map(doc=>{
          return{
            ...doc
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
    mascotasModel.update({_id: id},{$set: updateParams})
    .exec()
    .then(result => {
      res.status(200).json({
        message: 'Mascota actualizada'
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
    mascotasModel.findById(id)
    .select('_id nombre tipo edad')
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
    mascotasModel.remove({_id: id})
    .exec()
    .then(result =>{
      res.status(200).json({
        message: 'Mascota eliminada'
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
