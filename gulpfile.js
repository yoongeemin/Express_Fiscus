var gulp = require("gulp");
var tasks = require("./gulp/index");

gulp.task("clean",             tasks.clean);

gulp.task("build:server:dev",  tasks.build(require("./webpack/server/server.dev")));
gulp.task("build:server:prod", tasks.build(require("./webpack/server/server.prod")));
gulp.task("build:app:dev",     tasks.build(require("./webpack/app/app.dev")));
gulp.task("build:app:prod",    tasks.build(require("./webpack/app/app.prod")));

//gulp.task("build:dev",         ["clean", "build:server:dev", "build:app:dev"]);
gulp.task("build:dev",         ["clean", "build:server:dev"]);
gulp.task("build:prod",        ["clean", "build:server:prod", "build:app:prod"]);

gulp.task("run:dev",           ["build:dev"], tasks.rundev);
