import { Fragment } from 'react';

const Sample = ({ children, code }: any) => {
  return (
    <div className="sample">
      {children ? (
        <div className="sample-render d-flex flex-column">
          <div className="pa-4">
            <Fragment>{children}</Fragment>
          </div>
        </div>
      ) : (
        ''
      )}
      {code ? (
        <div className="sample-ide">
          <Fragment>{code}</Fragment>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
export default Sample;
