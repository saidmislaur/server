const PostModel = require('../models/PostsModels')
const path = require('path');


module.exports.PostCtrl = {
  addPost: async(req, res) => {
    const {title, text, image, link, quote} = req.body;
    try {
      const post = await PostModel.create({
        title,
        text,
        pathImages: image,
        link,
        quote
      });
      res.json(post)
    } catch (error) {
      console.log('ошибка добавления');
    }
  },

  addImage: async (req, res) => {
  try {
    const image = req.files.image;
    const newFileName = `./image/${
      Math.random() * 10000
    }${path.extname(image.name)}`;

    image.mv(newFileName, async (err) => {
      if(err) {
        console.log(err)
      } else {
        res.json({
          success: 'file uploaded',
          image: newFileName
        })
        console.log(err);
      }
    })
    } catch (error) {
      res.json(error)
      console.log('ошибка добавления')
  }
},

  getPost: async(req, res) => {
    try {
      const post = await PostModel.find();
      res.json(post);
    } catch (error) {
      console.log('ошибка вывода')
    }
  },

  delPost: async(req, res) => {
    try {
      await PostModel.findByIdAndDelete(req.params.id);
      res.json("статья удалена");
    } catch (error) {
      console.log('ошибка удаления')
    }
  },

  editPost: async(req, res) => {
    try {
      await PostModel.findByIdAndUpdate(req.params.id, req.body);
      res.json("статья отредактирована");
    } catch (error) {
      console.log('ошибка редактирования')
    }
  },

  getPostId: async(req, res) => {
    try {
      const post = await PostModel.findById(req.params.id);
      res.json(post);
    } catch (error) {
      console.log('ошибка вывода')
    }
  },
}

// addImage: async (req, res) => {
//   try {
//     const { image } = req.files;
//     const fileName =  `./image/${
//       Math.random() * 10000
//     }${path.extname(image.name)}`;
//     image.mv(fileName, async (err) => {
//       if(err) {
//         console.log(err)
//       } else {
//         const post = await PostModel.findById(req.params.id);
//         post.pathImages = fileName;
//         await post.save()
//         res.json('картинка добавлена')
//       }
//     })
//   } catch (error) {
//     res.json(error)
//     console.log('ошибка добавления картинки')
//   }
// },
