module.exports = {
    entry: './src/app.js',
    output: {
        filename: './static/bundle.js'       
    },
	devtool: 'sourcemaps',
	mode:"development",
    module: {
		rules: [
		  {
			test: /\.js$/,
			exclude: /node_modules/,
			use: [{
			  loader: "babel-loader",
			  options: {
				  presets: [
					['@babel/preset-env']
				  ]
              }
			}]
		  }
		]
    },
};
