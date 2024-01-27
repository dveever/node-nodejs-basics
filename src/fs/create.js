import fs from 'node:fs';

const create = async () => {
    const fileName = 'src/fs/files/fresh.txt';
    if (fs.existsSync(fileName)) {
        throw 'FS operation failed';
    }
    const content = 'I am fresh and young';
    fs.writeFile(fileName, content, err => {
        if (err) {
            console.error(err);
        }
    });
};

await create();