import { Main, Toolbar } from 'manakit';
import { Fragment } from 'react';

const Sanbdox = ({ toolbar, children, code }: any) => {
  return (
    <div className="sandbox">
      {toolbar ? (
        <Toolbar dense>
          <Fragment>{toolbar}</Fragment>
        </Toolbar>
      ) : (
        ''
      )}
      {children ? (
        <Main className={'sandbox-render'}>
          <Fragment>{children}</Fragment>
        </Main>
      ) : (
        ''
      )}
      {code ? (
        <div className="sandbox-ide">
          <Fragment>{code}</Fragment>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
export default Sanbdox;
