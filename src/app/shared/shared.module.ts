import { NgModule } from '@angular/core';
import { MaterialUI } from './material-ui-lib';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    exports: [
        MaterialUI,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
    ]
})
export class SharedModule { }


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */