import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/service/dark-mode.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private darkModeService: DarkModeService) {}

  /**
   * Toggle the dark mode using the darkModeService 
   */

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  /**
   * Check if the dark mode is currently active using the darkModeService
   */
  isDarkMode(): boolean {
    return this.darkModeService.isDarkMode();
  }
}
