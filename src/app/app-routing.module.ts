import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { DrawingsComponent } from './pages/drawings/drawings.component';
import { GlassComponent } from './pages/glass/glass.component';
import { PrintsComponent } from './pages/prints/prints.component';
import { SculptureComponent } from './pages/sculpture/sculpture.component';

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
    {path: 'home', component: HomePageComponent},
    {path: 'contact', component: ContactMeComponent},
    {path: 'drawings', component: DrawingsComponent},
    {path: 'glass', component: GlassComponent},
    {path: 'prints', component: PrintsComponent},
    {path: 'sculpture', component: SculptureComponent},
    

  ]}
//use example below
];


//
// const routes: Routes = [
//   {path: '', component: MainLayoutComponent, children: [
//     {path: '', component: NotesListComponent},
//     {path: 'new', component: NoteDetailsComponent},
//     {path: ':id', component: NoteDetailsComponent},
//   ] }

// ];
//
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
