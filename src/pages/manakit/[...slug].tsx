import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Button from '../../components/Button';
import Sidebar from '../../components/Sidebar';
import { MDXRemote } from 'next-mdx-remote';
import { Fragment } from 'react';

const pathFiles = 'src/content/docs/manakit';

const DocumentationManaKit = ({ frontMatter: { title }, mdxSource }: any) => {
  return (
    <Fragment>
      <Sidebar />
      <div className="mt-4">
        <h1>{title}</h1>
        <MDXRemote {...mdxSource} components={{ Button, SyntaxHighlighter }} />
      </div>
    </Fragment>
  );
};

export default DocumentationManaKit;

export const getStaticPaths = async () => {
  const folders = fs.readdirSync(path.join(pathFiles));
  let pathsList: any = [];
  folders.map((folder) => {
    if (!folder.includes('.mdx') && !folder.includes('.json') && !folder.includes('.tsx') && !folder.includes('.ts')) {
      const files = fs.readdirSync(path.join(pathFiles + '/' + folder));

      return files.map((filename) => pathsList.push([folder, filename]));
    }
  });

  const paths = pathsList.map((filename: any) => ({
    params: {
      slug: [filename[0], filename[1].replace('.mdx', '')],
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }: any) => {
  let markdownWithMeta;
  if (slug[0] !== undefined) {
    markdownWithMeta = fs.readFileSync(path.join(pathFiles + '/' + slug[0], slug[1] + '.mdx'), 'utf-8');
  } else {
    markdownWithMeta = fs.readFileSync(path.join(pathFiles, slug[1] + '.mdx'), 'utf-8');
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
