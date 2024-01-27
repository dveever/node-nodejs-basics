import fs from 'node:fs';

const copy = async () => {
    const folderPath = 'src/fs/files';
    const copyFolderPath = 'src/fs/files_copy';
    const errorMessage = 'FS operation failed';
    if (!fs.existsSync(folderPath)) {
        throw errorMessage;
    }
    if (fs.existsSync(copyFolderPath)) {
        throw errorMessage;
    } else {
        fs.mkdirSync(copyFolderPath);
    }
    fs.readdirSync(folderPath).forEach(fileName => {
        fs.copyFileSync(`${folderPath}/${fileName}`, `${copyFolderPath}/${fileName}`);
    });
};

await copy();
