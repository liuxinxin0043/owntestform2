module.exports = function(grunt) {
    grunt.initConfig({

        htmlmin: {
            options: {
                collapseWhitespace: true
            },
            files: {
                src: "dist/index.html",
                dest: "dist/index.html"
            }
        },
        cssmin: {
            "dist/index.css": "dist/index.css"
        },
        uglify: {
            release: {
                files: {
                    "dist/index.js": "dist/index.js"
                }
            }
        },
        copy: { 
            html: {
                src: "./index.html", 
                dest: "./dist/index.html"
            },
            css: {
                src: "./index.css",
                dest: "./dist/index.css"
            },
            js: {
                src: "./index.js",
                dest: "./dist/index.js"
            }
        }
    })


    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("release", ['copy', 'htmlmin', 'cssmin', 'uglify']);
} 