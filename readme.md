<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/infineon/infineon-icons-vue">
    <img src="https://www.infineon.com/frontend/release_2022-09/dist/resources/img/logo-desktop-en.png" alt="Logo">
  </a>

  <h3 align="center">infineon-icons-vue</h3>

  <p align="center">
    Vue component to easily display Icons from <a href="https://github.com/infineon/infineon-icons">Infineons Icon Library</a>
    <br />
    <a href="https://github.com/infineon/infineon-icons-vue"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://infineon.github.io/infineon-icons-vue">View Demo</a>
    ·
    <a href="https://github.com/infineon/infineon-icons-vue/issues">Report Bug</a>
    ·
    <a href="https://github.com/infineon/infineon-icons-vue/issues">Request Feature</a>
    ·
    <a href="https://github.com/infineon/infineon-icons/issues">Request Icons</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-access-to-infineons-github-repository">Getting Access to Infineons Github Repository</a>
      <ul>
        <li><a href="#creating-github-account">Creating GitHub Account</a></li>
        <li><a href="#create-configure-pat">Create + Configure PAT</a></li>
      </ul>
    </li>
    <li><a href="#project-configuration">Project configuration</a></li>
    <li>
      <a href="#installation">Installation</a>
      <ul>
        <li><a href="#install-packages">Install packages</a></li>
        <li><a href="#import-component">Import Component</a></li>
        <li><a href="#create-icon-library">Create Icon library</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#requesting-new-icons">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

<a href="https://github.com/Infineon/infineon-icons-vue">
  <img src="https://github.com/Infineon/infineon-icons-vue/blob/master/images/screenshot-icons.png?raw=true" alt="Screenshot-Icons">
</a>

Component to be used with Vue3 to easily include Infineons Icon Library. This library supports treeshaking out of the box. Uses <a href="https://github.com/infineon/infineon-icons">Infineons Icon Library</a>.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With
[![Vue][Vue.js]][Vue-url]image.png

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Access to Infineons Github Repository

### Creating GitHub Account
In order to access the npm packages that are available at github you need to create an github account and contact out github admins (Yushev Artem) to be added to the Infineon Company.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Create + Configure PAT
1. Create PAT
	follow guide at https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
	give token the "read:packages" scope

2. Authorize PAT with Infineon SSO
	Click on Configure SSO
	Click on Authorize


3. Set global npm config for your pc
```sh
npm config set '//npm.pkg.github.com/:_authToken' '<yourPAThere>'
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Project configuration
1. add a file .npmrc to your project root. It should contain 
 ```@infineon:registry=https://npm.pkg.github.com/ ```
  It is considered best practice to keep package configuration on project level (+ check in your source control system).
  Access configuration should never be in your source control system and thus are configured on a global PC level

## Installation
### Install Packages
```sh
npm i -S @infineon/infineon-icons
npm i -S @infineon/infineon-icons-vue
```

### Import Component
Either globally for your whole application in your main.js
```js
import { InfineonIconVue } from '@infineon/infineon-icons-vue';
app.component('InfineonIconVue', InfineonIconVue);
 ```
Or individually for each component in your components script tag
```js
<script setup>
import { InfineonIconVue } from '@infineon/infineon-icons-vue';
</script>
```

### Create Icon Library
create file ./src/plugins/infineonIcons.js
```js
import library from '@infineon/infineon-icons/library';

import {
	cCheck16,
	cart16,
} from '@infineon/infineon-icons';

library.add(
	cCheck16,
	cart16,
);
```
  import this file in your main.js
```js
import './plugins/infineonIcons'
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

Use the icon component in any template. The icon has to be a string matching the icon name in your library.
The name can be the original file name from figma or camelCase.

```html
<infineon-icon-vue icon="cCheck16" />
<infineon-icon-vue icon="c-check-16" />
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Requesting new Icons

If you need new icons that are currently not in our icon library please create an issue in our infineon-icons project <a href="https://github.com/infineon/infineon-icons/issues">here</a>.

If you already have an SVG-Icon you can always just place it in the svg folder at <a href="https://github.com/infineon/infineon-icons/issues">our infineon-icons project</a> and create a pull request.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Benedikt Kämmerer - Benedikt.Kaemmerer@infineon.com
Kai Werther - kai.werther@infineon.com
Verena Lechner - verena.lechner@infineon.com

Project Link: [https://github.com/infineon/infineon-icons-vue](https://github.com/infineon/infineon-icons-vue)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/Infineon/infineon-icons-vue.svg?style=for-the-badge
[contributors-url]: https://github.com/Infineon/infineon-icons-vue/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Infineon/infineon-icons-vue.svg?style=for-the-badge
[forks-url]: https://github.com/Infineon/infineon-icons-vue/network/members
[stars-shield]: https://img.shields.io/github/stars/Infineon/infineon-icons-vue.svg?style=for-the-badge
[stars-url]: https://github.com/Infineon/infineon-icons-vue/stargazers
[issues-shield]: https://img.shields.io/github/issues/Infineon/infineon-icons-vue.svg?style=for-the-badge
[issues-url]: https://github.com/Infineon/infineon-icons-vue/issues
[license-shield]: https://img.shields.io/github/license/Infineon/infineon-icons-vue.svg?style=for-the-badge
[license-url]: https://github.com/Infineon/infineon-icons-vue/blob/master/LICENSE.txt
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
