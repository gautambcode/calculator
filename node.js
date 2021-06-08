var fs = require("fs");
read_file = function(path){
     return fs.readFileSync(path, 'utf8');
}

document.txt = function(path, output){
    fs.writeFileSync(path, output);
}
