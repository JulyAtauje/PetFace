import {  NgModule } from '@angular/core';
import {  MatListModule, MatButtonModule,
          MatInputModule, MatGridListModule,
          MatMenuModule, MatDialogModule,
          MatStepperModule, MatCheckboxModule,
          MatCardModule, MatToolbarModule } from '@angular/material';

@NgModule({
    imports: [
      MatListModule,
      MatButtonModule,
      MatInputModule,
      MatGridListModule,
      MatMenuModule,
      MatDialogModule,
      MatStepperModule,
      MatCheckboxModule,
      MatCardModule,
      MatToolbarModule
    ],
    exports: [
      MatListModule,
      MatButtonModule,
      MatInputModule,
      MatGridListModule,
      MatMenuModule,
      MatDialogModule,
      MatStepperModule,
      MatCheckboxModule,
      MatCardModule,
      MatToolbarModule
    ],
})
export class SharedModule { }


