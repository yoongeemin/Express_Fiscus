import path from "path";
import development from "./env/development";
import qa from "./env/qa";
import production from "./env/production";
import _ from "lodash";

// const path = require("path");
// const development = require("./env/development");
// const qa = require("./env/qa");
// const production = require("./env/production");

const defaults = {
	root: path.join(__dirname, "..")
};

var env = process.env.NODE_ENV || "development";
switch (env) {
	case "development":
		// export default _.extend(development, defaults);
		module.exports = _.extend(development, defaults);
		break;
	case "qa":
		// export default _.extend(qa, defaults);
		module.exports = _.extend(qa, defaults);
		break;
	case "production":
		// export default _.extend(production, defaults);
		module.exports = _.extend(production, defaults);
		break;
}
