import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { classNames } from '../utils/classNames';
import styles from '../styles/Header.module.css';

const routes = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/query',
    label: 'Query',
  },
  {
    path: '/mutation',
    label: 'Mutation',
  },
  {
    path: '/subscription',
    label: 'Subscription',
  },
  {
    path: '/infinite-scroll',
    label: 'Infinite scroll',
  },
  {
    path: '/pagination',
    label: 'Pagination',
  },
];

const Header = () => {
  const { pathname } = useRouter();

  return (
    <div className={styles.container}>
      {routes.map(({ path, label }) => (
        <Link key={path} href={path}>
          <span
            className={classNames(styles.link, {
              [styles.active]: pathname === path,
            })}
          >
            {label}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Header;
