const Path = require("path");

module.exports = {
    plugins: {
        options: {
            myTemplates: [Path.resolve(__dirname, "../../templates")]
        }
    }
};
