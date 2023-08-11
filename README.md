# Taildashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.7.

This project demonstrates the integration of TailwindCSS, responsive design, and API integration. It involves creating a dashboard interface with fake data (except for the user account) and fetching random user information from the [RandomUser API](https://randomuser.me/) at specified intervals.


## Instructions

1. **Create an Angular Project**: Start by creating a new Angular project using the latest version of Angular.
   
2. **Add TailwindCSS with Play CDN**: Integrate TailwindCSS into the project by following the installation guide provided on the [TailwindCSS Documentation](https://tailwindcss.com/docs/installation/play-cdn).

3. **Design Dashboard Layout**: Implement the design of one of the four dashboard templates. Ensure that the design is responsive and adapts well to mobile and tablet screens. Use fictitious data for all components except for the user account.

4. **Retrieve User Information from API**: Make an API call to the [RandomUser API](https://randomuser.me/) to fetch information about a random user. Display this user's information in your dashboard.

5. **Update User Information Every 10 Seconds**: Set up a timer to fetch a new random user's information from the API every 10 seconds. This will simulate real-time data updates.

## Acknowledgments

- The dashboard templates and design inspiration are based on various sources.
- The user data is fetched from the [RandomUser API](https://randomuser.me/).

## License

This project is licensed under the [MIT License](LICENSE).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
