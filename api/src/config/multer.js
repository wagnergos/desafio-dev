import multer from 'multer';

export default multer({
  fileFilter: (req, file, callback) => {
    if (!['text/plain'].includes(file.mimetype)) {
      // callback(new InvalidCnabFileError());
      return callback(new Error('Invalid file'));
    }
    callback(null, true);
  },
});
