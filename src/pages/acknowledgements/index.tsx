/* eslint-disable react/no-unescaped-entities */
const Acknowledgements = () => {
  return (
    <div className="mt-3">
      <h1>REMERCIEMENTS</h1>

      <h4>Voici les bibliothèques open source que nous utilisons pour nos projets :</h4>

      <ul>
        {packages.map((item) => (
          <li key={item.lib}>
            <a href={'https://www.npmjs.com/package/' + item.lib} target={'_blank'} rel="noreferrer">
              <span>{item.lib}:</span> <span>{item.author}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Acknowledgements;

const packages = [
  { lib: '@mdi/font', author: '@mdi', link: 'https://www.npmjs.com/package/@mdi/font' },
  { lib: '@mdi/js', author: '@mdi', link: 'https://www.npmjs.com/package/@mdi/js' },
  { lib: '@mdx-js/loader', author: '@mdx-js', link: 'https://www.npmjs.com/package/@mdx-js/loader' },
  { lib: '@mdx-js/react', author: '@mdx-js', link: 'https://www.npmjs.com/package/@mdx-js/react' },
  { lib: '@next/font', author: '@next', link: 'https://www.npmjs.com/package/@next/font' },
  { lib: '@next/mdx', author: '@next', link: 'https://www.npmjs.com/package/@next/mdx' },
  { lib: '@reduxjs/toolkit', author: '@reduxjs', link: 'https://www.npmjs.com/package/@reduxjs/toolkit' },
  { lib: '@types/node', author: '@types', link: 'https://www.npmjs.com/package/@types/node' },
  { lib: '@types/react', author: '@types', link: 'https://www.npmjs.com/package/@types/react' },
  { lib: '@types/react-dom', author: '@types', link: 'https://www.npmjs.com/package/@types/react-dom' },
  {
    lib: '@types/react-syntax-highlighter',
    author: '@types',
    link: 'https://www.npmjs.com/package/@types/react-syntax-highlighter',
  },
  { lib: 'eslint', author: 'eslint', link: 'https://www.npmjs.com/package/eslint' },
  { lib: 'eslint-config-next', author: 'eslint-config-next', link: 'https://www.npmjs.com/package/eslint-config-next' },
  {
    lib: 'eslint-config-prettier',
    author: 'eslint-config-prettier',
    link: 'https://www.npmjs.com/package/eslint-config-prettier',
  },
  {
    lib: 'eslint-plugin-prettier',
    author: 'eslint-plugin-prettier',
    link: 'https://www.npmjs.com/package/eslint-plugin-prettier',
  },
  { lib: 'gray-matter', author: 'gray-matter', link: 'https://www.npmjs.com/package/gray-matter' },
  { lib: 'i18next', author: 'i18next', link: 'https://www.npmjs.com/package/i18next' },
  { lib: 'next', author: 'next', link: 'https://www.npmjs.com/package/next' },
  { lib: 'next-i18next', author: 'next-i18next', link: 'https://www.npmjs.com/package/next-i18next' },
  { lib: 'next-mdx-remote', author: 'next-mdx-remote', link: 'https://www.npmjs.com/package/next-mdx-remote' },
  { lib: 'next-pwa', author: 'next-pwa', link: 'https://www.npmjs.com/package/next-pwa' },
  { lib: 'prettier', author: 'prettier', link: 'https://www.npmjs.com/package/prettier' },
  { lib: 'react', author: 'react', link: 'https://www.npmjs.com/package/react' },
  { lib: 'react-dom', author: 'react', link: 'https://www.npmjs.com/package/react-dom' },

  { lib: 'react-i18next', author: 'react-i18next', link: 'https://www.npmjs.com/package/react-i18next' },
  { lib: 'react-redux', author: 'react-redux', link: 'https://www.npmjs.com/package/react-redux' },
  {
    lib: 'react-syntax-highlighter',
    author: 'react-syntax-highlighter',
    link: 'https://www.npmjs.com/package/react-syntax-highlighter',
  },
  { lib: 'sass', author: 'sass', link: 'https://www.npmjs.com/package/sass' },
  { lib: 'typescript', author: 'typescript', link: 'https://www.npmjs.com/package/typescript' },

  { lib: '@babel/core', author: '@babel', link: 'https://www.npmjs.com/package/@babel/core' },
  { lib: '@babel/preset-env', author: '@babel', link: 'https://www.npmjs.com/package/@babel/preset-env' },
  { lib: '@babel/preset-react', author: '@babel', link: 'https://www.npmjs.com/package/@babel/preset-react' },
  { lib: '@babel/preset-typescript', author: '@babel', link: 'https://www.npmjs.com/package/@babel/preset-typescript' },
  { lib: '@rollup/plugin-commonjs', author: '@rollup', link: 'https://www.npmjs.com/package/@rollup/plugin-commonjs' },
  {
    lib: '@rollup/plugin-node-resolve',
    author: '@rollup',
    link: 'https://www.npmjs.com/package/@rollup/plugin-node-resolve',
  },
  { lib: '@testing-library/jest-dom', author: '@testing-library' },
  { lib: '@testing-library/react', author: '@testing-library' },
  { lib: '@types/jest', author: '@types' },
  { lib: '@types/react-test-renderer', author: '@types' },
  { lib: 'babel-jest', author: 'babel-jest' },
  { lib: 'chalk', author: 'chalk' },
  { lib: 'husky', author: 'husky' },
  { lib: 'identity-obj-proxy', author: 'identity-obj-proxy' },
  { lib: 'jest', author: 'jest' },
  { lib: 'jest-environment-jsdom', author: 'jest-environment-jsdom' },
  { lib: 'postcss', author: 'postcss' },
  { lib: 'react-test-renderer', author: 'react-test-renderer' },
  { lib: 'rollup', author: 'rollup' },
  { lib: 'rollup-plugin-peer-deps-external', author: 'rollup-plugin-peer-deps-external' },
  { lib: 'rollup-plugin-postcss', author: 'rollup-plugin-postcss' },
  { lib: 'rollup-plugin-typescript2', author: 'rollup-plugin-typescript2' },
  { lib: 'rollup-plugin-url', author: 'rollup-plugin-url' },
  { lib: 'sass-loader', author: 'sass-loader' },
  { lib: 'shelljs', author: 'shelljs' },
  { lib: 'ts-jest', author: 'ts-jest' },
];
