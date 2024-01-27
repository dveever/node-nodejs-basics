import fs from 'node:fs';

const remove = async () => {
    const fileName = 'src/fs/files/fileToRemove.txt';
    if (!fs.existsSync(fileName)) {
        throw 'FS operation failed';
    }
    fs.rmSync(fileName);
};

await remove();