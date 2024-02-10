const {readFile, writeFile} = require('node:fs/promises');

async function main () {
    const fileName = './file.txt';
    const content  = await readFile(fileName, 'utf-8');

    const newContent = content.replace(/\s+/g, ' ');
    await writeFile(fileName, newContent);
}   

main();