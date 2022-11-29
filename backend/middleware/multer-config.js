const multer = require("multer");

// const imageFilter = (req, file, callback) => {
//   if (file.mimtype.startsWith("image")) {
//     callback(null, true);
//   } else {
//     callback("Veuillez envoyer un image uniquement.", false);
//   }
// };

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, __basedir + "/images");
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}_${file.originalname}`);
  },
});

module.exports = multer({ storage }).single("image");
