import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatTableModule } from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'

@NgModule({
  imports: [
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule
  ],

  providers: [],
})
export class MaterialModule { }
