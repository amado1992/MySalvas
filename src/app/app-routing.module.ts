import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { RelojComponent } from '../../projects/test-lib/src/lib/reloj/reloj.component';

const routes: Routes = [
 // { path: 'reloj', component: RelojComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
