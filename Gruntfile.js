/*jshint node:true*/

// Generated on <%= (new Date).toISOString().split("T")[0] %> using
// <%= pkg.name %> <%= pkg.version %>
"use strict";

// # Globbing
// for performance reasons we"re only matching one level down:
// "test/spec/{,*/}*.js"
// If you want to recursively match all subfolders, use:
// "test/spec/**/*.js"

module.exports = function (grunt) {

    // Time how long tasks take. Can help when optimizing build times
    require("time-grunt")(grunt);

    // Load grunt tasks automatically
    require("load-grunt-tasks")(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({
        "watch": {
            "js": {
                "files": [
                    "utf-8.js"
                ],
                "tasks": ["jshint"]
            },
            "jstest": {
                "files": ["test/{,*/}*.js"],
                "tasks": ["jshint", "mocha"]
            }
        },
        "jshint": {
            "options": {
                "jshintrc": ".jshintrc",
                "reporter": require("jshint-stylish")
            },
            "all": [
                "Gruntfile.js",
                "utf-8.js",
                "index.js"
            ],
            "test": {
                "files": {
                    "src": ["test/{,*/}*.js"]
                }
            }
        },
        "mochaTest": {
            "test": {
                "options": {
                    "reporter": "spec",
                    "captureFile": "errors.txt"
                },
                "src": ["test/index.js"]
            }
        },
        "babel": {
            "options": {
                "sourceMap": true
            },
            "dist": {
                "files": {
                    "dist/cjs.js": "ipv4-address.js"
                }
            }
        },
        "browserify": {
            "dist": {
                "options": {
                    "browserifyOptions": {
                        "standalone": "Ipv4Address"
                    }
                },
                "files": {
                    "dist/browser.js": "dist/cjs.js"
                }
            }
        },
        "uglify": {
            "dist": {
                "options": {
                    "screwIE8": true
                },
                "files": {
                    "dist/ipv4-address.min.js": "ipv4-address.js"
                }
            },
            "distCjs": {
                "files": {
                    "dist/cjs.min.js": "dist/cjs.js"
                }
            },
            "distBrowser": {
                "files": {
                    "dist/browser.min.js": "dist/browser.js"
                }
            }
        }
    });

    grunt.task.registerTask("test", ["jshint:all", "jshint:test", "mochaTest"]);

    grunt.task.registerTask("build:es6", ["uglify:dist"]);
    grunt.task.registerTask("build:cjs", ["babel:dist", "uglify:distCjs"]);
    grunt.task.registerTask("build:browser", ["babel:dist", "browserify:dist", "uglify:distBrowser"]);
};
