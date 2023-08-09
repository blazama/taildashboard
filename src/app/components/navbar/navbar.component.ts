import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  darkMode: boolean = false;

  @HostBinding('class') get themeMode() {
    return this.darkMode ? 'dark' : 'light';
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }
}
