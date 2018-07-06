const path = require('path');

module.exports = {
    entry:{
        app:['./src/index.js','./src/a.js','./src/b.js']
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    }
}