const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuariosSchema =new Schema({
  nombre: String,
  password: String
});

const usuariosModel=mongoose.model('usuarios',usuariosSchema);

module.exports={
  find: (req,res,next) => {
    usuariosModel.find()
      .select('_id nombre password')
      .exec()
      .then(docs =>{
        const response = {
          count: docs.length,
          data: docs.map(doc=>{
            return{
              //...doc
            };
          })
        };
        res.status(200).json(response);
      })
      .catch(err=>{
        console.log(err);
        res.estatus(500).json({
          error:err
        });
      });
  }
};
