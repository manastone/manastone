import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Button from '../../components/Button';

const pathFiles = 'src/content/community';

const CommunityPage = ({ frontMatter: { title }, mdxSource }: any) => {
  return (
    <div className="mt-4">
      <h1>{title}</h1>
      <MDXRemote {...mdxSource} components={{ Button, SyntaxHighlighter }} />
    </div>
  );
};

export default CommunityPage;

export const getStaticPaths = async ({ locales, defaultLocale }: any) => {
  console.log('locales, defaultLocale', locales, defaultLocale);

  const files = fs.readdirSync(path.join(pathFiles + '/' + defaultLocale));

  let pathsList: any = [];

  files.map((file) => {
    if (file.includes('.mdx')) {
      locales.map((lang: any) => {
        return pathsList.push([file, lang]);
      });
    }
  });

  const paths = pathsList.map((filename: any) => ({
    params: {
      slug: filename[0].replace('.mdx', ''),
    },
    locale: filename[1],
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ locale, params: { slug } }: any) => {
  let markdownWithMeta, pathFile;

  // control file exist !
  pathFile = path.join(pathFiles + '/' + locale + '/', slug + '.mdx');
  console.log('slug', slug, pathFile);
  try {
    fs.accessSync(pathFile, fs.constants.R_OK);
    console.log('Have file');
    markdownWithMeta = fs.readFileSync(pathFile, 'utf-8');
  } catch (err) {
    console.log('Have no file');
    markdownWithMeta = fs.readFileSync(path.join(pathFiles + '/en/', slug + '.mdx'), 'utf-8');
  }

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};
