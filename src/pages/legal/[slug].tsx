import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Button from '../../components/Button';
import { Container } from 'manakit';

const pathFiles = 'src/content/legal';

const LegalPage = ({ frontMatter: { title }, mdxSource }: any) => {
  return (
    <Container>
      <h1>{title}</h1>
      <MDXRemote {...mdxSource} components={{ Button, SyntaxHighlighter }} />
    </Container>
  );
};

export default LegalPage;

export const getStaticPaths = async ({ locales, defaultLocale }: any) => {
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
  pathFile = path.join(pathFiles + '/' + locale, slug + '.mdx');
  try {
    fs.accessSync(pathFile, fs.constants.R_OK);
    markdownWithMeta = fs.readFileSync(pathFile, 'utf-8');
  } catch (err) {
    markdownWithMeta = fs.readFileSync(path.join(pathFiles + '/en', slug + '.mdx'), 'utf-8');
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
