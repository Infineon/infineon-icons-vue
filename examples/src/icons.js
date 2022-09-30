import * as icons from '@infineon/infineon-icons';
import library from '@infineon/infineon-icons/library';

library.add(...Object.values(icons));

// normally you would never import all icons because it just increases your bundle size
// and leads to slower page loading

// you want to load each icon seperately to enable tree shaking

// import { cCheck12, cart12 } from '@infineon/infineon-icons';
// library.add(cCheck12, cart12);
