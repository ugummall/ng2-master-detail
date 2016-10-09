import { Routes, RouterModule } from '@angular/router';

import { DragonsCenterComponent } from './dragons-center/dragons-center.component';
import { DragonsListComponent } from './dragons-list/dragons-list.component';
import { DragonsDetailsComponent } from './dragons-details/dragons-details.component';

import { DragonsListResolveService } from './dragons-list-resolve.service';
import { DragonsDetailsResolveService } from './dragons-details-resolve.service';

const dragonsRoutes: Routes = [
  {
    path: '', component: DragonsCenterComponent,
    children: [
      { path: '', component: DragonsListComponent, resolve: { list: DragonsListResolveService } }
    ]
  },
  {
    path: 'new', component: DragonsCenterComponent,
    children: [
      { path: '', component: DragonsListComponent, resolve: { list: DragonsListResolveService } },
      { path: '', component: DragonsDetailsComponent, outlet: 'details' }
    ]
  },
  {
    path: ':id', component: DragonsCenterComponent,
    children: [
      { path: '', component: DragonsListComponent, resolve: { list: DragonsListResolveService } },
      { path: '', component: DragonsDetailsComponent, outlet: 'details', resolve: { detail: DragonsDetailsResolveService } }
    ]
  }
];

export const dragonsRouting = RouterModule.forChild(dragonsRoutes);
