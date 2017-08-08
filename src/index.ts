import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceholderAutoHideDirective } from './placeholder-auto-hide.directive';

export * from './placeholder-auto-hide.directive'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PlaceholderAutoHideDirective
  ],
  exports: [
    PlaceholderAutoHideDirective
  ]
})
export class SampleModule { }
