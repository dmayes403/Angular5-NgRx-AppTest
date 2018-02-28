import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingComponent } from './training.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
    { path: '', component: TrainingComponent, canActivate: [AuthGuard] }
    // ^^ empty string required for lazy loading
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TrainingRoutingModule { }
