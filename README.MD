# ngx-placeholder-auto-hide
[![npm version](https://badge.fury.io/js/ngx-placeholder-auto-hide.svg)](https://www.npmjs.com/package/ngx-placeholder-auto-hide) [![Build Status](https://travis-ci.org/HaithemMosbahi/angular-placeholder-auto-hide.svg?branch=master)](https://travis-ci.org/HaithemMosbahi/angular-placeholder-auto-hide)

Angular directive to automatically hide / show input's placeholder when focusin / focusout events are detected.

## Installation

To install ngx-placeholder-auto-hide, run:

```bash
$ npm install ngx-placeholder-auto-hide --save
```

## Demo
A live [demo](https://angular-du26zp.stackblitz.io) of the ngx-placeholder-auto-hide is hosted on stackblitz.

If you would like to play with this directive, you can use this [online editor](https://stackblitz.com/edit/angular-du26zp).

## Usage

1. Import PlaceholderAutoHideModule :

Once you have installed ngx-placeholder-auto-hide, you can import it in your `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import  PlaceholderAutoHideModule
import { PlaceholderAutoHideModule } from "ngx-placeholder-auto-hide";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Specify PlaceholderAutoHideModule as an import
    PlaceholderAutoHideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

The PlaceholderAutoHideModule module has one directive exported which is placeholder-auto-hide. This directive can be applied on input fields and requires one argument which is the placeholder holder attribute

2. Start using it:

Once the PlaceholderAutoHideModule is imported, you can start using the placeholder-auto-hide directive in your Angular application:

```html
<input type="text" placeholder="First name" placeholder-auto-hide >
<input type="text" placeholder="Last name" placeholder-auto-hide >
<input type="tel" placeholder="Phone number" placeholder-auto-hide >


```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Haithem Mosbahi](mailto:elmosbahihaithem@gmail.com)
