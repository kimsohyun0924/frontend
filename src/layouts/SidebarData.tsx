import React from 'react';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [  
  {
    title: 'DBaaS for PostgreSQL',
    iconClosed: <RiIcons.RiArrowRightSLine />,
    iconOpened: <RiIcons.RiArrowDownSLine />,

    subNav: [
      {
        title: 'DB Instance',
        path: '/dbinstance-list',
        cName: 'sub-nav'
      },
      {
        title: 'Backup',
        path: '/backup',
        cName: 'sub-nav'
      },
      {
        title: 'Parameter Group',
        path: '/parameter-group',
        cName: 'sub-nav'
      },
      {
        title: 'Scheduling',
        path: '/scheduling',
        cName: 'sub-nav'
      },
      {
        title: 'Event',
        path: '/event',
        cName: 'sub-nav'
      },
      {
        title: 'Monitoring',
        path: '/monitoring',
        cName: 'sub-nav'
      },
      {
        title: 'Alarm',
        path: '/alarm',
        cName: 'sub-nav'
      }
    ]
  }
];