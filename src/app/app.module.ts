import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {ShoppingListComponent} from './components/shopping-list/shopping-list.component';
import {MainComponent} from './components/main/main.component';
import {PageComponent} from './components/page/page.component';
import {ShoppingListsComponent} from "./pages/shopping-lists/shopping-lists.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingListComponent,
    ShoppingListsComponent,
    MainComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
