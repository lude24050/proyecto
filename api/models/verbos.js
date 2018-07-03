const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const verbSchema = new Schema({
    palabra: String,
    significado: String,
    caracteres: Number,
    n_dificultad:String,
    sinonimos:String,
    antonimos:String
});
const verbModel = mongoose.model('verbos',verbSchema);
module.exports = {
  create:(req,res,next)=>{
    const verb = new verbModel({
      _id: new mongoose.Types.ObjectId(),
      palabra: req.body.palabra,
      significado: req.body.significado,
      caracteres: req.body.caracteres,
      n_dificultad: req.body.n_dificultad,
      sinonimos: req.body.sinonimos,
      antonimos: req.body.antonimos
    });
    verb
        .save()
        .then(result =>{
          res.status(200).json({
            message: 'Palabra creada con exito',
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
    verbModel.find()
    .select('_id palabra significado caracteres n_dificultad sinonimos antonimos')
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
    verbModel.update({_id: id},{$set: updateParams})
    .exec()
    .then(result => {
      res.status(200).json({
        message: 'Palabra actualizada'
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
    .select('_id palabra significado caracteres n_dificultad sinonimos antonimos')
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
    verbModel.remove({_id: id})
    .exec()
    .then(result =>{
      res.status(200).json({
        message: 'palabra eliminado'
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
