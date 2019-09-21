import { NbMenuItem } from '@nebular/theme';
// 1 : Alummno
// 2 : Docente
// 3 : Secretaria
// 4 : Administrador
export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Inicio',
    icon: 'nb-home',
    link: '/pages/view-home/',
    home: true,
    hidden: true,
    data: [
      {
        number: 1,
      }, {
        number: 2,
      }, {
        number: 3,
      }, {
        number: 4,
      }],
  },
  /*  {
      title: 'E-commerce',
      icon: 'nb-e-commerce',
      link: '/pages/dashboard',
      home: true,
    },*/
  /* {
      title: 'IoT Dashboard',
      icon: 'nb-home',
      link: '/pages/iot-dashboard',
    },*/
  {
    title: 'Sistema',
    group: true,
    hidden:true,
    data:[
      {
        number:1
      },{
        number:3
      },{
        number:2
      },{
        number:4
      }],
  },
  {
    title: 'Gestionar Alumnos',
    icon: 'nb-compose',
    hidden:true,
    data:[{
      number:3
    },{
      number:4
    }],
    children: [
      {
        title: 'Alumnos',
        link: '/pages/ges-usu/alumno',
      },
      // {
      //   title: 'Roles',
      //   link: '/pages/extra-components/calendar',
      // },
      // {
      //   title: 'Permisos',
      //   link: '/pages/extra-components/stepper',
      // },
    ],
  },
  {
    title: 'Gestionar Docente',
    icon: 'nb-compose',
    hidden:true,
    data:[{
      number:3
    },{
      number:4
    }],
    children: [
      {
        title: 'Docente',
        link: '/pages/ges-docente/docente',
      },
    ],
  },
  {
    title: 'Gestionar Matricula',
    icon: 'nb-star',
    hidden:true,
    data:[{
      number:3
    },{
      number:4
    }],
    children: [
      {
        title: 'Matriculas',
        link: '/pages/ges-matricula/agregarmatricula',
      },
    ],
  },
  {
    title: 'Gestionar Horario',
    icon: 'nb-star',
    hidden:true,
    data:[
    {
      number:1
    }],
    children: [
      {
        title: 'Horario',
        link: '/pages/ges-horario/agregarhorario',
      },
    ],
  },
  {
    title: 'Gestionar Pensiones',
    icon: 'nb-compose',
    hidden:true,
    data:[{
      number:4
    },{
      number:3
    }],
    children: [
      {
        title: 'Pensiones',
        link: '/pages/ges-pension/agregarpension',
      },
    ],
  },
  {
    title: 'Mis Asignaturas',
    icon: 'nb-compose',
    hidden:true,
    data:[{
      number:2
    }
  ],
    children: [
      {
        title: 'Asistencia',
        link: '/pages/ges-asistencia/agregarasistencia',
      },
    ],
  },
  {
    title: 'Gestionar Programa',
    icon: 'nb-locked',
    hidden:true,
    data:[{
      number:3
    },{
      number:4
    }
  ],
    children: [
      {
        title: 'Programa',
        link: '/pages/ges-/agregarcurso',
      },
    ],
  },
  {
    title: 'Gestionar Administrativo',
    icon: 'nb-compose',
    hidden:true,
    data:[{
      number:4
    }
  ],
    children: [
      {
        title: 'Administrativo',
        link: '/pages/ges-administrativo/administrativo',
      },
    ],
  },
  // {
  //   title: 'Extra Components',
  //   icon: 'nb-star',
  //   data:[{
  //     number:1
  //   },{
  //     number:4
  //   }],
  //   children: [
  //     {
  //       title: 'Calendar',
  //       link: '/pages/extra-components/calendar',
  //     },
  //     {
  //       title: 'Stepper',
  //       link: '/pages/extra-components/stepper',
  //     },
  //     {
  //       title: 'List',
  //       link: '/pages/extra-components/list',
  //     },
  //     {
  //       title: 'Infinite List',
  //       link: '/pages/extra-components/infinite-list',
  //     },
  //     {
  //       title: 'Form Inputs',
  //       link: '/pages/extra-components/form-inputs',
  //     },
  //     {
  //       title: 'Accordion',
  //       link: '/pages/extra-components/accordion',
  //     },
  //     {
  //       title: 'Progress Bar',
  //       link: '/pages/extra-components/progress-bar',
  //     },
  //     {
  //       title: 'Spinner',
  //       link: '/pages/extra-components/spinner',
  //     },
  //     {
  //       title: 'Alert',
  //       link: '/pages/extra-components/alert',
  //     },
  //     {
  //       title: 'Tree',
  //       link: '/pages/extra-components/tree',
  //     },
  //     {
  //       title: 'Tabs',
  //       link: '/pages/extra-components/tabs',
  //     },
  //     {
  //       title: 'Calendar Kit',
  //       link: '/pages/extra-components/calendar-kit',
  //     },
  //     {
  //       title: 'Chat',
  //       link: '/pages/extra-components/chat',
  //     },
  //   ],
  // },
  // {
  //   title: 'Gestionar Pensiones',
  //   icon: 'nb-compose',
  //   data:[{
  //     number:1
  //   },{
  //     number:4
  //   }],
  //   children: [
  //     {
  //       title: 'Form Inputs',
  //       link: '/pages/forms/inputs',
  //     },
  //   ],
  // },
  // {
  //   title: 'Gestionar Asistencias',
  //   icon: 'nb-compose',
  //   data:[{
  //     number:1
  //   },{
  //     number:4
  //   }],
  //   children: [
  //     {
  //       title: 'Form Inputs',
  //       link: '/pages/forms/inputs',
  //     },
  //   ],
  // },
  // {
  //   title: 'Forms',
  //   icon: 'nb-compose',
  //   data:[{
  //     number:1
  //   },{
  //     number:4
  //   }],
  //   children: [
  //     {
  //       title: 'Form Inputs',
  //       link: '/pages/forms/inputs',
  //     },
  //     {
  //       title: 'Form Layouts',
  //       link: '/pages/forms/layouts',
  //     },
  //     {
  //       title: 'Buttons',
  //       link: '/pages/forms/buttons',
  //     },
  //     {
  //       title: 'Datepicker',
  //       link: '/pages/forms/datepicker',
  //     },
  //   ],
  // },
  // {
  //   title: 'UI Features',
  //   icon: 'nb-keypad',
  //   link: '/pages/ui-features',
  //   data:[{
  //     number:1
  //   },{
  //     number:4
  //   }],
  //   children: [
  //     {
  //       title: 'Grid',
  //       link: '/pages/ui-features/grid',
  //     },
  //     {
  //       title: 'Icons',
  //       link: '/pages/ui-features/icons',
  //     },
  //     {
  //       title: 'Typography',
  //       link: '/pages/ui-features/typography',
  //     },
  //     {
  //       title: 'Animated Searches',
  //       link: '/pages/ui-features/search-fields',
  //     },
  //   ],
  // },
  // {
  //   title: 'Modal & Overlays',
  //   icon: 'nb-layout-default',
  //   data:[{
  //     number:1
  //   },{
  //     number:4
  //   }],
  //   children: [
  //     {
  //       title: 'Dialog',
  //       link: '/pages/modal-overlays/dialog',
  //     },
  //     {
  //       title: 'Window',
  //       link: '/pages/modal-overlays/window',
  //     },
  //     {
  //       title: 'Popover',
  //       link: '/pages/modal-overlays/popover',
  //     },
  //     {
  //       title: 'Toastr',
  //       link: '/pages/modal-overlays/toastr',
  //     },
  //     {
  //       title: 'Tooltip',
  //       link: '/pages/modal-overlays/tooltip',
  //     },
  //   ],
  // },
  // {
  //   title: 'Bootstrap',
  //   icon: 'nb-gear',
  //   data:[{
  //     number:1
  //   },{
  //     number:4
  //   }],
  //   children: [
  //     {
  //       title: 'Form Inputs',
  //       link: '/pages/bootstrap/inputs',
  //     },
  //     {
  //       title: 'Buttons',
  //       link: '/pages/bootstrap/buttons',
  //     },
  //     {
  //       title: 'Modal',
  //       link: '/pages/bootstrap/modal',
  //     },
  //   ],
  // },
  // {
  //   title: 'Maps',
  //   icon: 'nb-location',
  //   data:[{
  //     number:1
  //   },{
  //     number:4
  //   }],
  //   children: [
  //     {
  //       title: 'Google Maps',
  //       link: '/pages/maps/gmaps',
  //     },
  //     {
  //       title: 'Leaflet Maps',
  //       link: '/pages/maps/leaflet',
  //     },
  //     {
  //       title: 'Bubble Maps',
  //       link: '/pages/maps/bubble',
  //     },
  //     {
  //       title: 'Search Maps',
  //       link: '/pages/maps/searchmap',
  //     },
  //   ],
  // },
  // {
  //   title: 'Charts',
  //   icon: 'nb-bar-chart',
  //   data:[{
  //     number:1
  //   },{
  //     number:4
  //   }],
  //   children: [
  //     {
  //       title: 'Echarts',
  //       link: '/pages/charts/echarts',
  //     },
  //     {
  //       title: 'Charts.js',
  //       link: '/pages/charts/chartjs',
  //     },
  //     {
  //       title: 'D3',
  //       link: '/pages/charts/d3',
  //     },
  //   ],
  // },
  // {
  //   title: 'Editors',
  //   icon: 'nb-title',
  //   data:[{
  //     number:1
  //   },{
  //     number:4
  //   }],
  //   children: [
  //     {
  //       title: 'TinyMCE',
  //       link: '/pages/editors/tinymce',
  //     },
  //     {
  //       title: 'CKEditor',
  //       link: '/pages/editors/ckeditor',
  //     },
  //   ],
  // },
  // {
  //   title: 'Tables',
  //   icon: 'nb-tables',
  //   data:[{
  //     number:1
  //   },{
  //     number:4
  //   }],
  //   children: [
  //     {
  //       title: 'Smart Table',
  //       link: '/pages/tables/smart-table',
  //     },
  //   ],
  // },
  // {
  //   title: 'Miscellaneous',
  //   icon: 'nb-shuffle',
  //   data:[{
  //     number:1
  //   },{
  //     number:4
  //   }],
  //   children: [
  //     {
  //       title: '404',
  //       link: '/pages/miscellaneous/404',
  //     },
  //   ],
  // },
  // {
  //   title: 'Auth',
  //   icon: 'nb-locked',
  //
  //   data:[{
  //     number:1
  //   },{
  //     number:4
  //   }],
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },

];
