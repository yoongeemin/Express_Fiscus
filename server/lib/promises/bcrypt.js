import bcrypt from "bcrypt-nodejs";
import Promise from "bluebird";

export function genSalt(rounds) {
	return new Promise(function(resolve, reject) {
		bcrypt.genSalt(rounds, function(err, salt) {
			if (err) return reject(err);
			return resolve(salt);
		});
	})
}

export function hash(value, salt) {
	return new Promise(function(resolve, reject) {
		bcrypt.hash(value, salt, function(err, hash) {
			if (err) return reject(err);
			return resolve(hash);
		})
	});
};

export function compare(value, hash) {
	return new Promise(function(resolve, reject) {
		bcrypt.compare(value, hash, function(err, match) {
			if (err) return reject(err);
			return resolve(match);
		});
	});
}
