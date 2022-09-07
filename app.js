//deklarasi fs
const fs = require('fs');
//deklarasi readline
const readline = require('readline');

//untuk sign in data dan output ke terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//deklarasi nama folder & file
const folder = './data'
const filepath = "./data/contacts.json";

//pengkondisian apabila folder tidak ada atau file tidak ada, akan dibuat folder & baru
if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder)
}
if (!fs.existsSync(filepath)) {
    fs.writeFileSync(filepath, '[]')
}
//memasukan pertanyaan dan jawaban & menambahkan data ke array di folder data/contacts.json
rl.question('what is your name?', (name) => {
    rl.question('what your number ?', (number) => {
        rl.question('what your email ?', (email) => {
            const contact = [name, number, email];
            const file = fs.readFileSync(filepath, 'utf8');
            const contacts = JSON.parse(file);
            contacts.push(contact);
            fs.writeFileSync(filepath, JSON.stringify(contacts));
            console.log("Terimakasih sudah memasukkan data!");
            rl.close()
        });

    })

})


// var fs = require('fs');

// // Change the content of the file as you want
// // or either set fileContent to null to create an empty file
// var fileContent = "Hello World!";

// // The absolute path of the new file with its name
// var filepath = "mynewfile.txt";

// fs.writeFile(filepath, fileContent, (err) => {
//     if (err) throw err;

//     console.log("The file was succesfully saved!");
// }); 
