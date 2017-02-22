module.exports = {
    entry: './app.js',
    output: {
        filename: './static/bundle.js'       
    },
    resolve: {
        extensions: ['', '.js', '.jsx', 'index.js', 'index.jsx', '.json', 'index.json']
    }, 
    module: {
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
    },
};
