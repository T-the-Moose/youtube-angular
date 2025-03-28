import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RechercheComponent } from './pages/recherche/recherche.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { VideoComponent } from './pages/video/video.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent,},
    {path: "recherche", component: RechercheComponent}, // , canActivate: [authGuard]
    {path: "video/:id", component: VideoComponent}, // , canActivate: [authGuard]
    {path: "**", redirectTo: "", pathMatch: "full" }
];

