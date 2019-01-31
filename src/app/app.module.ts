import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatNativeDateModule,MatSnackBarModule,MatIconModule,MatDialogModule, MatButtonModule, MatTableModule, MatPaginatorModule , MatSortModule,MatTabsModule, MatCheckboxModule, MatToolbarModule, MatCard, MatCardModule, MatFormField, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule,MatGridListModule } from  '@angular/material';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import {MatRadioModule} from  '@angular/material/radio';
import {MatSelectModule} from  '@angular/material/select';
import {MatSliderModule} from  '@angular/material/slider';
import {MatDividerModule} from  '@angular/material/divider';


import * as http from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';
import { UsersComponent } from './admin/users/users.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginService } from './services/admin/login.service';
import { TopbarComponent } from './admin/topbar/topbar.component';
import { LeftnavComponent } from './admin/leftnav/leftnav.component';
import { RightnavComponent } from './admin/rightnav/rightnav.component';
import { FooterComponent } from './admin/footer/footer.component';
import { EditComponent } from './admin/users/edit/edit.component';
import { AddComponent } from './admin/users/add/add.component';
import { StatesComponent } from './admin/states/states.component';
import { StateeditComponent } from './admin/states/stateedit/stateedit.component';
import { StateaddComponent } from './admin/states/stateadd/stateadd.component';
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
import { BrandsaddComponent } from './admin/brands/brandsadd/brandsadd.component';
import { BrandseditComponent } from './admin/brands/brandsedit/brandsedit.component';
import { BrandmodelsComponent } from './admin/brandmodels/brandmodels.component';
import { BrandmodelsaddComponent } from './admin/brandmodels/brandmodelsadd/brandmodelsadd.component';
import { BrandmodelseditComponent } from './admin/brandmodels/brandmodelsedit/brandmodelsedit.component';
import { HomeComponent } from './frontend/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    DashboardComponent,
    TopbarComponent,
    LeftnavComponent,
    RightnavComponent,
    FooterComponent,
    EditComponent,
    AddComponent,
    StatesComponent,
    StateeditComponent,
    StateaddComponent,
    CityComponent,
    CityaddComponent,
    CityeditComponent,
    CategoryComponent,
    CategoryaddComponent,
    CategoryeditComponent,
    BannersComponent,
    BannersaddComponent,
    BannerseditComponent,
    BrandsComponent,
    BrandsaddComponent,
    BrandseditComponent,
    BrandmodelsComponent,
    BrandmodelsaddComponent,
    BrandmodelseditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    http.HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,MatTabsModule,MatDividerModule,MatSliderModule,MatSelectModule,MatRadioModule,MatNativeDateModule,MatDatepickerModule,MatSnackBarModule,MatIconModule,MatDialogModule,MatProgressSpinnerModule,MatButtonModule,MatSortModule,MatTableModule,MatTabsModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatPaginatorModule,MatGridListModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
