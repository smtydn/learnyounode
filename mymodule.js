const fs = require('fs')

module.exports = function(dir, ext, callBack) {
    fs.readdir(dir, (err, files) => {
        if (err) { return callBack(err, files) }
        files = files.filter(x => x.endsWith('\.' + ext))
        callBack(null, files)
    })
}