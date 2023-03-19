import { BuildOptions } from './types/config';
import MiniCssExtractPlugin  from 'mini-css-extract-plugin';
import  webpack  from "webpack";



export function buildLoaders ({isDev}: BuildOptions): webpack.RuleSetRule[] {

    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
          //создает отдельные css файлы для каждого js
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: (resourcePath: string) => resourcePath.includes('.module.'),
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
              }
              
            }
          },
          // Compiles Sass to CSS
          "sass-loader",
        ],
      }

    //если не используем ts, нужен babel 
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typescriptLoader,
        cssLoaders
    ]
}