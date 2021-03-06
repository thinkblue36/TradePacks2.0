import {Component} from "@angular/core";
import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router";
import {SignupDTO} from './types'
import {SignupService} from '../app/components/signup/signup.service'
import {SignupFactory} from '../app/components/signup/signup.factory'
import {UserFactory} from '../app/factories/user.factory'
import {UserService} from '../app/components/user-info/user.service'

@Component({
  selector: "app",
  directives: [NS_ROUTER_DIRECTIVES],
  template: "<page-router-outlet></page-router-outlet>",
  providers: [SignupDTO, SignupService, SignupFactory, UserFactory, UserService]
})

export class AppComponent {}