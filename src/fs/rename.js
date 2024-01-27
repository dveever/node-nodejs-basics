import fs from 'node:fs';

const rename = async () => {
    const fileName = 'src/fs/files/properFilename.md';
    const wrongFileName = 'src/fs/files/wrongFilename.txt';
    if (!fs.existsSync(wrongFileName)) {
        throw 'FS operation failed';
    }
    fs.renameSync(wrongFileName, fileName);
};

await rename();