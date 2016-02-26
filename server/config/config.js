import path from "path";
import development from "./env/development";
import qa from "./env/qa";
import production from "./env/production";

const defaults = { 
	root: path.resolve(__dirname, "..", ".."),
	sessionSecret: "fiscus",
	smtpUser: "yoongeemin@gmail.com",
	smtpPassword: "jywzaiwblxbqfvug",
};

var env = process.env.NODE_ENV || "development";
var config;
switch (env) {
	case "development":
		config = development;
		break;
	case "qa":
		config = qa;
		break;
	case "production":
		config = production;
		break;
}

export default _.extend(defaults, config);

