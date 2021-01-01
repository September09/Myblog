/**
 * Created by september on 2018/5/27.
 */

const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
// const fs = require('fs')
// const directory = []
// const entry = {}
// const filePath = path.resolve(__dirname, '..') + '/src/containers/'
// console.log('filePath', filePath)
// if (directory.length === 0) {
//   fs.readdirSync(filePath).reduce( (entries, dir) => {
//     if (fs.statSync(path.join(filePath, dir)).isDirectory())
//       entries[dir] = path.join(filePath, dir, 'index.js')
//     return entries
//   }, entry)
//   // 遍历根目录第一层所有文件夹下的index.js文件
// }
// else {
//   fs.readdirSync(filePath).reduce((entries, dir) => {
//     if (directory.indexOf(dir) > -1 && fs.statSync(path.join(filePath, dir)).isDirectory())
//       entries[dir] = path.join(filePath, dir, 'index.js');
//     return entries
//   }, entry)
//   // 遍历根目录第一层所有文件夹下的index.js文件
// }
const postcssConfig = {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: () => [
          autoprefixer({browsers: ['> 1%', 'last 4 versions']}),
          pxtorem({
              rootValue: 100,
              propWhiteList: [],
          })
        ]
      }
    }
};

module.exports = {
  entry: {
    app: ['babel-polyfill', path.resolve(__dirname, '../src/index.js')],
    vendor: ['react', 'react-dom', 'babel-polyfill'],
    'Home': [path.resolve(__dirname, '../src/containers/Home.js')]
  }, // 指定入口文件，程序从这里开始编译,__dirname当前目录, ../表示上一级目录, ./同级目录
  resolve: { // 指定第三方库目录，减少webpack寻找时间
    modules: [path.resolve(__dirname, '../node_modules')],
  },
  output: {
    path: path.resolve(__dirname, '../dist/myBlog'), // 输出的路径
    filename: '[name]_[hash:8].js', // 打包后文件
    chunkFilename: '[name].[hash:8].chunk.js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader', // 加载器
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'less-loader',
          options: {
            sourceMap: true,
          },
        }],
      },
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                postcssConfig,
                {
                    loader: 'sass-loader',
                    options: {
                        sassOptions: {
                            includePaths: [
                                path.resolve(__dirname, "src/style"),
                                path.resolve(__dirname, "src/components")
                            ]
                        }
                    }
                }
            ],
        },
        {
            test: /\.(png|jpg|jpeg|gif|ico)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        name:'[path][name].[ext]',
                        limit: 25000
                    }
                }
            ]
        }
    ],
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks: Infinity,
    // }),
  ],
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial',
      minChunks: Infinity
    },
  },
};
