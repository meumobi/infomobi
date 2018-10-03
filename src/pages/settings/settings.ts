import { Component } from '@angular/core';
import { 
  IonicPage, 
} from 'ionic-angular';

@IonicPage({
  segment: 'settings',
  defaultHistory: ['HomePage'],
})
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {  
}
