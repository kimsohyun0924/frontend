import React from 'react';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [  
  {
    title: 'Dashboard',
  },
  {
    title: 'User',
    iconClosed: <RiIcons.RiArrowRightSLine />,
    iconOpened: <RiIcons.RiArrowDownSLine />,

    subNav: [
      {
        title: '내 계정',
        path: 'https://cloud.kt.com/console/g/myaccount',
        cName: 'sub-nav'
      },
      {
        title: '이용 금액',
        path: '/admin/components/item2',
        cName: 'sub-nav'
      },
      {
        title: '결제 정보',
        path: '/admin/components/item3',
        cName: 'sub-nav'
      },
      {
        title: '할인',
        path: '/admin/components/item3',
        cName: 'sub-nav'
      },
      {
        title: '내 문의',
        path: '/admin/components/item3',
        cName: 'sub-nav'
      },
      {
        title: '내 접속 이력',
        path: '/admin/components/item3',
        cName: 'sub-nav'
      },
      {
        title: '그룹 계정',
        path: '/admin/components/item3',
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'IAM',
    iconClosed: <RiIcons.RiArrowRightSLine />,
    iconOpened: <RiIcons.RiArrowDownSLine />,

    subNav: [
      {
        title: 'User',
        path: '/admin/components/item1',
        cName: 'sub-nav'
      },
      {
        title: 'Policy',
        path: '/admin/components/item2',
        cName: 'sub-nav'
      },
      {
        title: 'Policy Group',
        path: '/admin/components/item3',
        cName: 'sub-nav'
      },
      {
        title: 'Audit(user)',
        path: '/admin/components/item3',
        cName: 'sub-nav'
      },
      {
        title: 'Audit(action)',
        path: '/admin/components/item3',
        cName: 'sub-nav'
      },
      {
        title: '내 접속 이력',
        path: '/admin/components/item3',
        cName: 'sub-nav'
      },
      {
        title: '그룹 계정',
        path: '/admin/components/item3',
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'API Gateway',
    iconClosed: <RiIcons.RiArrowRightSLine />,
    iconOpened: <RiIcons.RiArrowDownSLine />,

    subNav: [
      {
        title: 'APIs',
        path: '/apigw-list',
        cName: 'sub-nav'
      },
      {
        title: 'Usage Plans',
        path: '/apigw-usageplans',
        cName: 'sub-nav'
      },
      {
        title: 'API Keys',
        path: '/apigw-apikeys',
        cName: 'sub-nav'
      },
      {
        title: 'Dashboard',
        path: '/dashboard',
        cName: 'sub-nav'
      }
    ]
  }
];