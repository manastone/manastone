import Image from 'next/image';
// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
import Link from 'next/link';

import menu from '../content/docs/manakit/menu.json';
import { Fragment } from 'react';

const Sidebar = ({ posts, list }: any) => {
  return (
    <Fragment>
      <div>
        {menu !== null || menu !== undefined
          ? menu.map((el: any, index: any) => {
              return (
                <ul key={el.category}>
                  <span>{el.category}</span>
                  {el.children !== undefined
                    ? el.children.map((item: any) => {
                        return (
                          <li key={el.category + '-' + item.slug}>
                            <Link href={`/manakit/${el.category}/${item.slug}`} passHref>
                              {item.name}
                            </Link>
                          </li>
                        );
                      })
                    : ''}
                </ul>
              );
            })
          : ''}
        {/* {list === null || list === undefined ? (
          <p>No Data</p>
        ) : (
          list.map((el: any, index: any) => {
            return (
              <ul key={el.category}>
                <span>{el.category}</span>
                {el.body !== undefined
                  ? el.body.map((item: any) => {
                      return (
                        <li key={el.category + '-' + item.slug}>
                          <Link href={`/manakit/${el.category}/${item.slug}`} passHref>
                            {item.frontMatter.title}
                          </Link>
                        </li>
                      );
                    })
                  : ''}
              </ul>
            );
          })
        )} */}
      </div>
    </Fragment>
    // <nav className="nav p-3 border-bottom">
    //   <Link href="/" passHref>
    //     <h2 className="pointer">Manastone</h2>
    //   </Link>
    //   <Link href="/bio" passHref>
    //     <p className="ms-5 pointer lead my-auto">Bio</p>
    //   </Link>
    //   <Link href="/manakit" passHref>
    //     <p className="ms-5 pointer lead my-auto">ManaKit</p>
    //   </Link>

    //   <Link href="/community/branding" passHref>
    //     <p className="ms-5 pointer lead my-auto">Branding</p>
    //   </Link>

    //   <Link href="/community/about" passHref>
    //     <p className="ms-5 pointer lead my-auto">About</p>
    //   </Link>
    // </nav>
  );
};
export default Sidebar;

// export const getStaticProps = async () => {
//   const files = fs.readdirSync(path.join('src/content/docs/manakit'));
//   const list: any = [];
//   files.map((type) => {
//     if (!type.includes('.mdx')) {
//       const filesList = fs.readdirSync(path.join('src/content/docs/manakit/' + type));
//       const structural = filesList.map((filename) => {
//         const markdownWithMeta = fs.readFileSync(path.join(`src/content/docs/manakit/${type}`, filename), 'utf-8');
//         const { data: frontMatter } = matter(markdownWithMeta);
//         return {
//           frontMatter,
//           slug: filename.split('.')[0],
//         };
//       });

//       list.push({ category: type, body: structural });
//     }
//   });

//   return {
//     props: {
//       list,
//     },
//   };
// };
