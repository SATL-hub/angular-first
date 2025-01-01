import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  getMessage(): string {
    return "hello from myservice";
  }
  constructor() { }
}
