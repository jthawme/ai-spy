// module.exports = ({ config }) => {
//   config.module.rules.push({
//     test: /\.(ts|tsx)$/,
//     loader: 'ts-loader'
//   });
//   config.resolve.extensions.push('.ts', '.tsx');
//   return config;
//   };

const topLevelWebpack = require('../webpack.config.js');

module.exports = ({ config }) => {
  topLevelWebpack.module.rules.forEach(r => {
    // if (r.loader && r.loader === 'ts-loader') {
    //   config.module.rules.push({
    //     test: r.text,
    //     use: [
    //       require.resolve("ts-loader"),
    //       require.resolve("react-docgen-typescript-loader"),
    //     ]
    //   })
    // } else {
      config.module.rules.push(r);
    // }
  });

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
