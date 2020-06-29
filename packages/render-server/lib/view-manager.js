const Path = require("path");
const Nunjucks = require("nunjucks");

module.exports = (server, options) => {
  const templatePaths = [].concat(options.myTemplates || [], "../templates");

  return {
    relativeTo: __dirname,
    path: templatePaths,
    defaultExtension: "njk",

    engines: {
      njk: {
        compile: (src, options) => {
          const template = Nunjucks.compile(src, options.environment);

          return (context) => {
            return new Promise((resolve, reject) => {
              template.render(context, (err, res) => {
                if (err) {
                  reject(err);
                }

                resolve(res);
              });
            });
          };
        },

        prepare: (options, next) => {
          options.compileOptions.environment = Nunjucks.configure(
            options.path,
            {
              watch: false,
            }
          );

          return next();
        },
      },
    },
    context: {
      options,
      baseURI: server.realm.modifiers.route.prefix || "",
    },
  };
};
