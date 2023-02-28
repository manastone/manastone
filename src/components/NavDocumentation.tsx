import { Btn, NavigationDrawer } from 'manakit';
import Link from 'next/link';
import { Fragment, useState } from 'react';

import menu from '../content/docs/manakit/menu.json';

const NavDoc = () => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Btn onClick={() => setOpen(true)}>Button</Btn>
      <NavigationDrawer open={open} forceOpenMd handleOpen={() => setOpen(false)} absolute>
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
      </NavigationDrawer>
    </Fragment>
  );
};
export default NavDoc;
