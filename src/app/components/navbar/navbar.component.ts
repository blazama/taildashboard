import { Component, HostBinding } from '@angular/core';
import { DarkModeService } from 'src/app/service/dark-mode.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  // @HostBinding('class') get themeMode() {
  //   return this.darkMode ? 'dark' : 'light';
  // }

  // toggleDarkMode() {
  //   this.darkMode = !this.darkMode;
  // }

  constructor(private darkModeService: DarkModeService) {}

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  isDarkMode() {
    return this.darkModeService.isDarkMode();
  }
}
