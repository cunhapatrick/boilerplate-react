const path = require('path');

module.exports = function override(config) {
	config.resolve = {
		...config.resolve,
		alias: {
			...config.alias,
			'~': path.resolve(__dirname, 'src'),
			components: path.resolve(__dirname, 'src/components'),
			config: path.resolve(__dirname, 'src/config'),
			hocs: path.resolve(__dirname, 'src/hocs'),
			pages: path.resolve(__dirname, 'src/pages'),
			store: path.resolve(__dirname, 'src/store'),
			styles: path.resolve(__dirname, 'src/styles'),
			services: path.resolve(__dirname, 'src/services'),
			utils: path.resolve(__dirname, 'src/utils'),
		},
	};

	return config;
};
