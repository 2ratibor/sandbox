import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


const APP_SUPPORT_MODULES = [
    MatFormFieldModule,
    MatInputModule
];

@NgModule({
    imports: [...APP_SUPPORT_MODULES],
    exports: [...APP_SUPPORT_MODULES]
})
export class AppSupportModule { }
