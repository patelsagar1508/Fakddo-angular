import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UsersComponent } from './admin/users/users.component';
import { EditComponent } from './admin/users/edit/edit.component';
import { AddComponent } from './admin/users/add/add.component';
import { StatesComponent } from './admin/states/states.component';
import { StateaddComponent } from './admin/states/stateadd/stateadd.component';
import { StateeditComponent } from './admin/states/stateedit/stateedit.component';
import { CityComponent } from './admin/city/city.component';
import { CityaddComponent } from './admin/city/cityadd/cityadd.component';
import { CityeditComponent } from './admin/city/cityedit/cityedit.component';
import { CategoryComponent } from './admin/category/category.component';
import { CategoryaddComponent } from './admin/category/categoryadd/categoryadd.component';
import { CategoryeditComponent } from './admin/category/categoryedit/categoryedit.component';
import { BannersComponent } from './admin/banners/banners.component';
import { BannersaddComponent } from './admin/banners/bannersadd/bannersadd.component';
import { BannerseditComponent } from './admin/banners/bannersedit/bannersedit.component';
import { BrandsComponent } from './admin/brands/brands.component';
import { BrandmodelsaddComponent } from './admin/brandmodels/brandmodelsadd/brandmodelsadd.component';
import { BrandseditComponent } from './admin/brands/brandsedit/brandsedit.component';
import { BrandmodelsComponent } from './admin/brandmodels/brandmodels.component';
import { BrandmodelseditComponent } from './admin/brandmodels/brandmodelsedit/brandmodelsedit.component';
import { HomeComponent } from './frontend/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: LoginComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/users', component: UsersComponent },
  { path: 'admin/users/add', component: AddComponent },
  { path: 'admin/users/edit/:id', component: EditComponent },
  { path: 'admin/states', component: StatesComponent },
  { path: 'admin/states/add', component: StateaddComponent },
  { path: 'admin/states/edit/:id', component: StateeditComponent },
  { path: 'admin/city', component: CityComponent },
  { path: 'admin/city/add', component: CityaddComponent },
  { path: 'admin/city/edit/:id', component: CityeditComponent },
  { path: 'admin/category', component: CategoryComponent },
  { path: 'admin/category/add', component: CategoryaddComponent },
  { path: 'admin/category/edit/:id', component: CategoryeditComponent },
  { path: 'admin/banners', component: BannersComponent },
  { path: 'admin/banners/add', component: BannersaddComponent },
  { path: 'admin/banners/edit/:id', component: BannerseditComponent },
  { path: 'admin/brands', component: BrandsComponent },
  { path: 'admin/brands/add', component: BrandmodelsaddComponent },
  { path: 'admin/brands/edit/:id', component: BrandseditComponent },
  { path: 'admin/brandmodels', component: BrandmodelsComponent },
  { path: 'admin/brandmodels/add', component: BrandmodelsaddComponent },
  { path: 'admin/brandmodels/edit/:id', component: BrandmodelseditComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
