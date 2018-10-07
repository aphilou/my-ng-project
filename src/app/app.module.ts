import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app.routing.module';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule, MatSidenavModule, MatListModule, MatGridListModule, MatCardModule, MatTableModule, 
         MatPaginatorModule, MatSortModule, MatProgressSpinnerModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { ConfigsService } from './services/configs.service';
import { HttpClientModule } from '@angular/common/http';

// Add an icon to the library for convenient access in other components
library.add(faCoffee);
library.add(faEye);
library.add(faEyeSlash);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    PasswordInputComponent,
    NavigationComponent,
    MenuComponent,
    HomeComponent,
    DashboardComponent,
    TableComponent
  ],
  imports: [
    BrowserModule, FormsModule, FontAwesomeModule, BrowserAnimationsModule, AppRoutingModule, HttpClientModule,
    MatIconModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, LayoutModule, MatButtonModule, MatProgressSpinnerModule,
    MatSidenavModule, MatListModule, MatGridListModule, MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule
  ],
  providers: [ConfigsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
