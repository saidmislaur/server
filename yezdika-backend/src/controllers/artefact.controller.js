const ArtefactModel = require('../models/Artefact.model')
const path = require('path');

module.exports.ArtefactCtrl = {
  addArtefact: async(req, res) => {
    const {title, text, image} = req.body;
    try {
      const artefact = await ArtefactModel.create({
        title,
        text,
        pathImages: image,
      });
      res.json(artefact)
    } catch (error) {
      console.log(error);
    }
  },

  addImage: async (req, res) => {
    try {
      const { image } = req.files;
      const fileName = `./image/${
        Math.random() * 10000
      }${path.extname(image.name)}`;

      image.mv(fileName, async (err) => {
        if(err) {
          console.log(err)
        } else {
          const artefact = await ArtefactModel.findById(req.params.id);
          artefact.pathImages = fileName;
          await artefact.save()
          console.log(fileName)
          res.json('картинка добавлена')
        }
      })
    } catch (error) {
      res.json(error)
    }
  },

//   addImage: async (req, res) => {
//   try {
//     const image = req.files.image;
//     const newFileName = `./image/${
//       Math.random() * 10000
//     }${path.extname(image.name)}`;
//
//     image.mv(newFileName, async (err) => {
//       if(err) {
//         console.log(err)
//       } else {
//         res.json({
//           success: 'file uploaded',
//           image: newFileName
//         })
//       }
//     })
//     } catch (error) {
//       res.json(error)
//       console.log('ошибка добавления')
//   }
// },

  getArtefact: async(req, res) => {
    try {
      const artefact = await ArtefactModel.find();
      res.json(artefact);
    } catch (error) {
      console.log('ошибка вывода')
    }
  },

  delArtefact: async(req, res) => {
    try {
      await ArtefactModel.findByIdAndDelete(req.params.id);
      res.json("книга удалена");
    } catch (error) {
      console.log('ошибка удаления книги')
    }
  },

  editArtefact: async(req, res) => {
    try {
      await ArtefactModel.findByIdAndUpdate(req.params.id, req.body);
      res.json("отредактировано");
    } catch (error) {
      console.log('ошибка редактирования')
    }
  },

  getArtefactId: async(req, res) => {
    try {
      const artefact = await ArtefactModel.findById(req.params.id);
      res.json(artefact);
    } catch (error) {
      console.log('ошибка вывода')
    }
  },
}
