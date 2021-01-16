/*
 * @Descripttion: 外层页面的展示数据
 * @version: 2021-01-01
 * @Author: will
 * @Date: 2021-01-01 19:55:24
 * @LastEditors: 20023707
 * @LastEditTime: 2021-01-15 11:41:15
 */
import myImport from './myImport'

const routersMap = [
  // {
  //   path: '/0',
  //   pathName: 'nav 0',
  //   exact: true,
  //   component: myImport('Stuff'),
  //   routes: [
  //     {
  //       path: '/0-0',
  //       pathName: 'category 0-0',
  //       exact: true,
  //       component: myImport('Stuff'),
  //       routes: [
  //         {
  //           path: '/0-0-0',
  //           pathName: 'item 0-0-0',
  //           exact: true,
  //           component: myImport('Stuff'),
  //         },
  //         {
  //           path: '/0-0-1',
  //           pathName: 'item 0-0-1',
  //           exact: true,
  //           component: myImport('Stuff'),
  //         },
  //         {
  //           path: '/0-0-2',
  //           pathName: 'item 0-0-2',
  //           exact: true,
  //           component: myImport('Stuff'),
  //         }
  //       ]
  //     },
  //     {
  //       path: '/0-1',
  //       pathName: 'category 0-1',
  //       exact: true,
  //       component: myImport('Stuff'),
  //       routes: [
  //         {
  //           path: '/0-1-0',
  //           pathName: 'item 0-1-0',
  //           exact: true,
  //           component: myImport('Stuff'),
  //         },
  //         {
  //           path: '/0-1-1',
  //           pathName: 'item 0-1-1',
  //           exact: true,
  //           component: myImport('Stuff'),
  //         },
  //         {
  //           path: '/0-1-2',
  //           pathName: 'item 0-1-2',
  //           exact: true,
  //           component: myImport('Stuff'),
  //         }
  //       ]
  //     },
  //     {
  //       path: '/0-2',
  //       pathName: 'category 0-2',
  //       exact: true,
  //       component: myImport('Stuff'),
  //       routes: [
  //         {
  //           path: '/0-2-0',
  //           pathName: 'item 0-2-0',
  //           exact: true,
  //           component: myImport('Stuff'),
  //         },
  //         {
  //           path: '/0-2-1',
  //           pathName: 'item 0-2-1',
  //           exact: true,
  //           component: myImport('Stuff'),
  //         },
  //         {
  //           path: '/0-2-2',
  //           pathName: 'item 0-2-2',
  //           exact: true,
  //           component: myImport('Stuff'),
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   path: '/1',
  //   pathName: 'nav 1',
  //   exact: true,
  //   component: myImport('Stuff'),
  //   routes: [
  //     {
  //       path: '/1-0',
  //       pathName: 'category 1-0',
  //       exact: true,
  //       component: myImport('Stuff'),
  //       routes: [
  //         {
  //           path: '/1-0-0',
  //           pathName: 'item 1-0-0',
  //           exact: true,
  //           component: myImport('Stuff'),
  //         },
  //         {
  //           path: '/1-0-1',
  //           pathName: 'item 1-0-1',
  //           exact: true,
  //           component: myImport('Stuff'),
  //         },
  //         {
  //           path: '/1-0-2',
  //           pathName: 'item 1-0-2',
  //           exact: true,
  //           component: myImport('Stuff'),
  //         }
  //       ]
  //     },
  //     {
  //       path: '/1-1',
  //       pathName: 'category 1-1',
  //       exact: true,
  //       component: myImport('Stuff'),
  //       routes: [
  //         {
  //           path: '/1-1-0',
  //           pathName: 'item 1-1-0',
  //           exact: true,
  //           component: myImport('Stuff'),
  //         },
  //         {
  //           path: '/1-1-1',
  //           pathName: 'item 1-1-1',
  //           exact: true,
  //           component: myImport('Stuff'),
  //         },
  //         {
  //           path: '/1-1-2',
  //           pathName: 'item 1-1-2',
  //           exact: true,
  //           component: myImport('Stuff'),
  //         }
  //       ]
  //     },
  //     {
  //       path: '/1-2',
  //       pathName: 'category 1-2',
  //       exact: true,
  //       component: myImport('Stuff'),
  //       routes: [
  //         {
  //           path: '/1-2-0',
  //           pathName: 'item 1-2-0',
  //           exact: true,
  //           component: myImport('Stuff'),
  //         },
  //         {
  //           path: '/1-2-1',
  //           pathName: 'item 1-2-1',
  //           exact: true,
  //           component: myImport('Stuff'),
  //         },
  //         {
  //           path: '/1-2-2',
  //           pathName: 'item 1-2-2',
  //           exact: true,
  //           component: myImport('Stuff'),
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   path: '/2',
  //   pathName: 'nav 2',
  //   exact: true,
  //   component: myImport('Stuff'),
  //   routes: [
  //     {
  //       path: '/2-0',
  //       pathName: 'category 2-0',
  //       exact: true,
  //       component: myImport('Stuff'),
  //       routes: [
  //         {
  //           path: '/2-0-0',
  //           pathName: 'item 2-0-0',
  //           exact: true,
  //           component: myImport('Stuff'),
  //         },
  //         {
  //           path: '/2-0-1',
  //           pathName: 'item 2-0-1',
  //           exact: true,
  //           component: myImport('Stuff'),
  //         },
  //         {
  //           path: '/2-0-2',
  //           pathName: 'item 2-0-2',
  //           exact: true,
  //           component: myImport('Stuff'),
  //         }
  //       ]
  //     },
  //     {
  //       path: '/2-1',
  //       pathName: 'category 2-1',
  //       exact: true,
  //       component: myImport('Stuff'),
  //       routes: [
  //         {
  //           path: '/2-1-0',
  //           pathName: 'item 2-1-0',
  //           exact: true,
  //           component: myImport('Stuff'),
  //         },
  //         {
  //           path: '/2-1-1',
  //           pathName: 'item 2-1-1',
  //           exact: true,
  //           component: myImport('Stuff'),
  //         },
  //         {
  //           path: '/2-1-2',
  //           pathName: 'item 2-1-2',
  //           exact: true,
  //           component: myImport('Stuff'),
  //         }
  //       ]
  //     },
  //     {
  //       path: '/2-2',
  //       pathName: 'category 2-2',
  //       exact: true,
  //       component: myImport('Stuff'),
  //       routes: [
  //         {
  //           path: '/2-2-0',
  //           pathName: 'item 2-2-0',
  //           exact: true,
  //           component: myImport('Stuff'),
  //         },
  //         {
  //           path: '/2-2-1',
  //           pathName: 'item 2-2-1',
  //           exact: true,
  //           component: myImport('Stuff'),
  //         },
  //         {
  //           path: '/2-2-2',
  //           pathName: 'item 2-2-2',
  //           exact: true,
  //           component: myImport('Stuff'),
  //         }
  //       ]
  //     }
  //   ]
  // },
  {
    path: '/document',
    pathName: 'document',
    exact: false,
    component: myImport('document/Document'),
    routeId: '3',
    routes: [
      {
        path: '/content',
        pathName: 'content',
        exact: false,
        component: myImport('document/Document/content'),
        routeId: '3-0',
      }
    ]
  }
]

export default routersMap
