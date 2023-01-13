import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from '@vendure/admin-ui/core';
import { GreeterComponent } from './greeter.component';
import { GreeterService } from './greeter.service';
import { GreeterCreateComponent } from './greeter.create.component';
import { GreeterUpdateComponent } from './greeter-update.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      component: GreeterComponent,
      data: { breadcrumb: 'Greeter' },
    }, {
      path: 'create',
      pathMatch: 'full',
      component: GreeterCreateComponent,
      data: { breadcrumb: 'Greeter' },
    },
      {
        path: 'update/:id',
        pathMatch: 'full',
        component: GreeterUpdateComponent,
        data: { breadcrumb: 'Greeter' },
      }]),
    ReactiveFormsModule,
  ],
  declarations: [GreeterComponent, GreeterCreateComponent, GreeterUpdateComponent],
  providers: [GreeterService],
})
export class GreeterModule {}
