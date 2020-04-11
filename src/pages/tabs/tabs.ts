import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ControlsPage } from '../controls/controls';
import { SettingsPage } from '../settings/settings';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  /*tab2Root = ControlsPage;
  tab3Root = SettingsPage;
  tab4Root = ContactPage;*/

  constructor() {
  }
}
