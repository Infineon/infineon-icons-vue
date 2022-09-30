<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Best-README-Template</h3>

  <p align="center">
    An awesome README template to jumpstart your projects!
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
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
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<a href="https://github.com/Infineon/infineon-icons-vue">
  <img src="https://github.com/Infineon/infineon-icons-vue/blob/master/images/screenshot.png?raw=true" alt="Screenshot">
</a>

Component to be used with Vue3 to easily include Infineons icon library. This library supports treeshaking out of the box.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With
[![Vue][Vue.js]][Vue-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Access

### Creating GitHub Account
In order to access the npm packages that are available at github you need to create an github account and contact out github admins (Yushev Artem) to be added to the Infineon Company.

### Create + Configure PAT
1. Create PAT
	follow guide at https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
	give token the "read:packages" scope

2. Authorize PAT with Infineon SSO
	Click on Configure SSO
	Click on Authorize

3. Set global npm config for your pc
	npm config set '//npm.pkg.github.com/:_authToken' '<yourPAThere>'

### Project configuration
1. add a file .npmrc to your project root. It should contain 
 ```@infineon:registry=https://npm.pkg.github.com/ ```
  It is considered best practice to keep package configuration on project level (+ check in your source control system).
  Access configuration should never be in your source control system and thus are configured on a global PC level

### Installation
4. install packages
```sh
npm i -S @infineon/infineon-icons
npm i -S @infineon/infineon-icons-vue
```

5. import & register component globally in main.js
```js
import { InfineonIconVue } from '@infineon/infineon-icons-vue';
app.component('InfineonIconVue', InfineonIconVue);
 ```

6. create icon library
create file ./src/plugins/infineonIcons.js
```js
import library from '@infineon/infineon-icons/library';

import {
	cCheck12,
	cart12,
} from '@infineon/infineon-icons';

library.add(
	cCheck12,
	cart12,
);
```
  import this file in your main.js
```js
import './plugins/infineonIcons'
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

Use the icon componen in any template. The icon has to be a string matching the icon name in your library.
The name can be the original file name from figma or camelCase.

```html
<infineon-icon-vue icon="cCheck12" />
<infineon-icon-vue icon="c-check-12" />
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Kai Werther - kai.werther@infineon.com

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
