import fs from 'node:fs';

const read = async () => {
    const fileName = 'src/fs/files/fileToRead.txt';
    if (!fs.existsSync(fileName)) {
        throw 'FS operation failed';
    }
    const data = fs.readFileSync(fileName, 'utf8');
    console.log(data);
};

await read();