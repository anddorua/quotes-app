import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Toggle} from 'ionic-angular';
import {SettingsService} from "../../services/settings";

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private settings: SettingsService) {
  }

  onToggle(toggle: Toggle) {
    this.settings.setToggle(toggle.checked);
  }

  checkToggle(): boolean {
    return this.settings.getToggle();
  }

}
