const GalleryModel = require('../models/Gallery.model')
const path = require('path');

module.exports.GalleryCtrl = {
  addImg: async(req, res) => {
    const { image } = req.files;
    const {desc} = req.body;
    try {
      const fileName =  `./image/${
        Math.random() * 10000
      }${path.extname(image.name)}`;
      image.mv(fileName, async (err) => {
        if(err) {
          console.log(err)
        } else {
          const img = await GalleryModel.create({
            desc,
            pathImages: fileName,
          });
          res.json(img)
        }
      })

    } catch (error) {
      console.log(error);
    }
  },

  updateImg: async (req, res) => {
    try {
      const { image } = req.files;
      const fileName =  `./image/${
        Math.random() * 10000
      }${path.extname(image.name)}`;
      image.mv(fileName, async (err) => {
        if(err) {
          console.log(err)
        } else {
          const img = await GalleryModel.findById(req.params.id);
          img.pathImages = fileName;
          await post.save()
          res.json('картинка добавлена')
        }
      })
    } catch (error) {
      res.json(error)
      console.log('ошибка добавления картинки')
    }
  },

  getImg: async(req, res) => {
    try {
      const img = await GalleryModel.find();
      res.json(img);
    } catch (error) {
      console.log('ошибка вывода галереи')
    }
  },

  delImg: async(req, res) => {
    try {
      await GalleryModel.findByIdAndDelete(req.params.id);
      res.json("картинка удалена");
    } catch (error) {
      console.log('ошибка удаления картинки')
    }
  },

  editImg: async(req, res) => {
    try {
      await GalleryModel.findByIdAndUpdate(req.params.id, req.body);
      res.json("картинка отредактирована");
    } catch (error) {
      console.log('ошибка редактирования картинки')
    }
  },

  getImgId: async(req, res) => {
    try {
      const img = await GalleryModel.findById(req.params.id);
      res.json(img);
    } catch (error) {
      console.log('ошибка вывода галереи')
    }
  },
}
