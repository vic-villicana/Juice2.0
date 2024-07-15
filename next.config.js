/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns: [
      {
        protocol:"https",
        hostname: "juize.s3.us-west-2.amazonaws.com"
      }
    ]
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: {
        displayName: true,
        ssr:true,
        fileName:true,
        topLevelImportPaths: [],
        meaninglessFileNames: ["index"],
        cssProp:true,
        namespace: "",
        minify: false,
        transpileTemplateLiterals: false,
        pure: false

    },
},
}

module.exports = nextConfig
