import  webpack  from "webpack";

export function buildResolves (): webpack.ResolveOptions {
    return {
        //задаем расширения, которые в импорте могут не указываться
        extensions: ['.tsx','.ts','.js']
    }
}