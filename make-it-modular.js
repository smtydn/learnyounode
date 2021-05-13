const mymodule = require('./mymodule')

mymodule(process.argv[2], process.argv[3], (err, data) => {
    for (file of  data) {
        console.log(file)
    }
})