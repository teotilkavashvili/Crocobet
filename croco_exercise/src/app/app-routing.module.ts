import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BannerContainerComponent } from './slots/bannerContainer/bannerContainer.component';
import { SlotsComponent } from './slots/slots/slots.component';

const routes: Routes = [
  { path: ' ', redirectTo: 'slots', pathMatch: 'full' },
  { path: 'slots', component: BannerContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
