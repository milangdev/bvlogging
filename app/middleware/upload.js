const multer = require("multer");

const imageFilter = (req, file, cb) => {
    console.info('file----',file)
    if(file.mimetype.startsWith("image")) {
        cb(null, true)
    } else {
        cb('please uploads only images', false)
    }
}

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + "/../../resources/static/assets/uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-bvloggig-${file.originalname}`);
    },
});

let uploadFile = multer({ storage: storage, fileFilter: imageFilter})
module.exports = uploadFile