const fs = require('fs')

fs.readdir(process.argv[2], (err, files) => {
    files = files.filter(name => name.endsWith('\.' + process.argv[3]))
    for (file in files) {
        console.log(files[file])
    }
})