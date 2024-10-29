import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    cb(null, "uploads/");
  },
  filename: (req: any, file: any, cb: any) => {
    const extension = path.extname(file.originalname);
    cb(null, `${Date.now()}${extension}`);
  },
});

const fileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    console.error("File is not an image.");
    cb(
      new Error(
        "Chỉ cho phép upload file ảnh với định dạng JPEG, PNG hoặc GIF"
      ),
      false
    );
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

const oldFilePath = (filePath: string) =>
  path.join(__dirname, "../..", filePath);

export { upload, oldFilePath };
