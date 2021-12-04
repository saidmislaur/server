const FolklorModel = require('../models/Folklor.model');
const path = require('path');

module.exports.FolklorCtrl = {
    addFloklor: async(req, res) => {
        const {title, text, image, category} = req.body;
        try {
            const folklor = await FolklorModel.create({
                title,
                text,
                pathImages: image,
                category
            });
            res.json(folklor)
        } catch (error) {
            console.log("ошибка добавления")
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
            const folklor = await FolklorModel.findById(req.params.id);
            folklor.pathImages = fileName;
            await folklor.save()
            console.log(fileName)
            res.json('картинка добавлена')
          }
        })
      } catch (error) {
        res.json(error)
      }
    },

    getFolklor: async(req, res) => {
        try {
          const Folklor = await FolklorModel.find();
          res.json(Folklor);
        } catch (error) {
          console.log('ошибка вывода')
        }
    },

    delFolklor: async(req, res) => {
        try {
          await FolklorModel.findByIdAndDelete(req.params.id);
          res.json("удалено");
        } catch (error) {
          console.log('ошибка удаления')
        }
    },

      editFolklorId: async(req, res) => {
        try {
          await FolklorModel.findByIdAndUpdate(req.params.id, req.body);
          res.json("отредактировано");
        } catch (error) {
          console.log('ошибка редактирования книги')
        }
      },

    getFolklorId: async(req, res) => {
        try {
            const folklor = await FolklorModel.findById(req.params.id);
            res.json(folklor);
        } catch (error) {
            console.log('ошибка вывода')
        }
    },
}
