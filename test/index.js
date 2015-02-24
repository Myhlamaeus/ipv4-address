"use strict";

require("babel/register");
["no-args"].map(function(file) {
    return "./" + file;
}).forEach(require);
