import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { DrawingsComponent } from './pages/drawings/drawings.component';
import { GlassComponent } from './pages/glass/glass.component';
import { PrintsComponent } from './pages/prints/prints.component';
import { SculptureComponent } from './pages/sculpture/sculpture.component';
import { CeramicsComponent } from './pages/ceramics/ceramics.component';
import { DigitalArtComponent } from './digital-art/digital-art.component';

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
    {path: '', component: ContactMeComponent},
    {path: 'ceramics', component: CeramicsComponent},
    {path: 'drawings', component: DrawingsComponent},
    {path: 'glass', component: GlassComponent},
    {path: 'prints', component: PrintsComponent},
    {path: 'sculpture', component: SculptureComponent},
    {path: 'digital', component: DigitalArtComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
