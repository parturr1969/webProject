import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFeatureStoreModule } from './my-feature-store/my-feature-store.module';
import { MyStandartFeatureStoreModule } from './my-standart-feature-store/my-standart-feature-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyFeatureStoreModule,
    MyStandartFeatureStoreModule
  ]
})
export class RootStoreModule { }
