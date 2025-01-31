import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  importProvidersFrom(ReactiveFormsModule),
  provideRouter(routes),
  provideFirebaseApp(() => initializeApp({
    apiKey: "AIzaSyDqPRN_okoTwm3h6cxRHr9aQRgKtm8TOgA",
    authDomain: "project-x-b7a54.firebaseapp.com",
    databaseURL: "https://project-x-b7a54-default-rtdb.firebaseio.com",
    projectId: "project-x-b7a54",
    storageBucket: "project-x-b7a54.firebasestorage.app",
    messagingSenderId: "840960512406",
    appId: "1:840960512406:web:7add87048b9f280b230db7",
    measurementId: "G-7W70P9XY41"
  })),
  provideAuth(() => getAuth()),
  provideDatabase(() => getDatabase())
  ]

};
