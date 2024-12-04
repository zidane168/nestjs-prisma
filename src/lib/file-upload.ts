export type FileType = Express.Multer.File;
export const uploadPath = 'public/upload';
import fs from 'fs';
import moment from 'moment';
import { extname } from 'path';

export const fileDestination = (req: Request, file: FileType, callback, destination = '') => {
    let uploadedUrl = uploadPath;
    switch (file.mimetype) {
        case 'application/pdf':
            uploadedUrl += '/pdf';
            break;
        case 'image/png':
        case 'image/jpeg':
        case 'image/png':
        case 'image/gif':
            uploadedUrl += '/image';
            break;
        default:
    }
    if (destination) {
        uploadedUrl = destination;
    }
    const date = moment().format('YYYY-MM-DD');
    const path = `./${uploadedUrl}/${date}`;
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true });
    }
    callback(null, path);
};

export const editFileName = (req: Request, file: FileType, callback) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = extname(file.originalname);
    const randomName = Array(4)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
    callback(null, `${name}-${randomName}${fileExtName}`);
};

export const imageOrPDFFileFilter = (req: Request, file: FileType, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|pdf|xlsx|xls)$/)) {
        return callback(new Error('Only image or pdf file are allowed!'), false);
    }
    callback(null, true);
};