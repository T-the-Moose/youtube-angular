import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RechercheComponent } from './pages/recherche/recherche.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfilComponent } from './pages/profil/profil.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "profil", component: ProfilComponent},
    {path: "recherche", component: RechercheComponent},
    {path: "**", redirectTo: "", pathMatch: "full" }
];

