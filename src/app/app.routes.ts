import { GaleryItemComponent } from "./components/galery-item/galery-item.component";
import { GaleryComponent } from "./components/galery/galery.component";
import { provideRoutes } from "@angular/router";

const APP_ROUTES = [
    { path: 'albums', component: GaleryComponent}
    { path: '', component: GaleryItemComponent}
];

export const APP_ROUTES_PROVIDER = [
    provideRoutes(APP_ROUTES)
]