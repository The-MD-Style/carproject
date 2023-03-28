import React from 'react';
import Link from 'next/link';

import { IPath } from 'models/path.model';

import classes from './VHeader.module.scss';

type Props = {
  paths: IPath[];
};

const VHeaderView = (props: Props) => {
  return (
    <React.Fragment>
      {!(props.paths[0].href === '/' || props.paths[0].href === '/_error') && (
        <div className={classes['container']}>
          <div className={classes['paths']}>
            <p className={classes['title']}>{props.paths.at(-1).name}</p>
            <p className={classes['path']}>
              <Link className={classes['link']} href={'/'}>
                Home
              </Link>
              <span className={classes['separator']}>/</span>
              {props.paths.map((path, index, paths) => (
                <React.Fragment key={path.href}>
                  <Link className={classes['link']} href={path.href}>
                    {path.name}
                  </Link>
                  {index !== paths.length - 1 && <span className={classes['separator']}>/</span>}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default VHeaderView;
