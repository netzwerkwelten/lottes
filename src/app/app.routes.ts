import {Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {RootComponent} from "./root/root.component";
import {ImprintComponent} from "./imprint/imprint.component";
import {HomeComponent} from "./home/home.component";
import {PhotosComponent} from "./photos/photos.component";
import {CodeComponent} from "./code/code.component";
import {WoodComponent} from "./wood/wood.component";
// import {AuthGuard} from "./auth/services/auth-guard.service";
// import {LoginComponent} from "./auth/login/login.component";


export const appRoutes: Routes = [
    {
        path: '',
        component: RootComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'imprint',
                component: ImprintComponent
            },
            {
                path: 'photos',
                component: PhotosComponent
            },
            {
                path: 'code',
                component: CodeComponent
            },
            {
                path: 'wood',
                component: WoodComponent
            }
        ]
    }
];
