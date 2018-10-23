module.exports = {
    entry: './src/app.js',
    output: {
        filename: './static/bundle.js'       
    },
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
		/*
        preLoaders: [
            { test: /\.json$/, loader: "json-loader" }
            ],
            loaders: [
            { test: /\.css$/, loader: "style!css" },
            { 
                test: /\.js$/,         // Match both .js and .jsx files
                exclude: /node_modules/, 
                loader: "babel-loader", 
                query:
                {   
                    plugins: ['lodash'],
                    presets:['react','es2015','stage-1']

                }
            },
            {
                test: /\.html$/,
                loader: "html"
            }
        ]
		*/
    },
};
