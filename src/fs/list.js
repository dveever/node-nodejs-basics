import fs from 'node:fs';

const list = async () => {
    const folderPath = 'src/fs/files';
    if (!fs.existsSync(folderPath)) {
        throw 'FS operation failed';
    }
    fs.readdirSync(folderPath).forEach(fileName => {
        console.log(fileName);
    });
};

await list();