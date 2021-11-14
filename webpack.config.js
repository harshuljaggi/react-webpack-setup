path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        // Inside current directory export output inside "/dist" folder
        path: path.join(__dirname, "/dist"),
        // file name of the bundle
        filename: "index.bundle.js",
    },
    devServer: {
        open: {
            app: {
              name: 'chrome',
            },
          },
    },
    // Takes source file and compiles them into browser ready code
    module: {
        rules: [
            // Rule 1: Scan for all files ending with ".js" or ".jsx" excluding "/node_modules" folder and load them using "babel-loader"
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            
            // Rule 2: Scan for all ".css" files inside project and load them using "style-loader", "css-loader"
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            // html file on which "index.bundle.js" will be injected
            template: 'src/index.html'
        })
    ]
};