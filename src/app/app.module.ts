import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Importando o componente standalone

@NgModule({
  imports: [
    BrowserModule,
    AppComponent, // Importando o AppComponent standalone aqui
  ],
  providers: [],
  bootstrap: [AppComponent], // Especificando o componente principal
})
export class AppModule {}
