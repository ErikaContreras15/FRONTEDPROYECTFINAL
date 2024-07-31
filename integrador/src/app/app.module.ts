import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { AppRoutingModule } from './app-routing.module'; // Importa el módulo de enrutamiento
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';  // Importar RouterModule
import { RegistroComponent } from './componente/Registro/registro.component';
import { LoginComponent } from './componente/login/login.component';
import { ActualizarClienteComponent } from './componente/actualizar-cliente/actualizar-cliente.component';
import { LibroComponent } from './componente/libro/libro.component';
import { PrestamoComponent } from './componente/prestamo/prestamo.component';
import { ListarPrestamosComponent } from './componente/lista-prestamo/lista-prestamo.component';
import { HistorialComponent } from './componente/historial/historial.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    ActualizarClienteComponent,
    LibroComponent,
    PrestamoComponent,
    ListarPrestamosComponent,
    HistorialComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule // Agrega el módulo de enrutamiento
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"erika-edb98","appId":"1:553012790337:web:4468eed904b96119ceb2c0","storageBucket":"erika-edb98.appspot.com","apiKey":"AIzaSyDtj9uXvAigw3atxjtixd4MMRJtu6wX1v4","authDomain":"erika-edb98.firebaseapp.com","messagingSenderId":"553012790337"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp({"projectId":"erika-edb98","appId":"1:553012790337:web:b8c5503b2e3a1d62ceb2c0","storageBucket":"erika-edb98.appspot.com","apiKey":"AIzaSyDtj9uXvAigw3atxjtixd4MMRJtu6wX1v4","authDomain":"erika-edb98.firebaseapp.com","messagingSenderId":"553012790337"}))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
