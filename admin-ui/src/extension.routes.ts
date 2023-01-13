export const extensionRoutes = [  {
    path: 'extensions/greet',
    loadChildren: () => import('./extensions/1aca12a61698ab934370e20824fcb81a0537079bb4b2dc4059a8827c1ba04790/greeter.module').then(m => m.GreeterModule),
  }];
