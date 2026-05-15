// This file shows how to use (import) logic from another file.
// We are grabbing the 'data' array that was exported from 'module.js'.

import { data } from './module.js';

// Now we can use that data right here as if it were defined in this file.
console.log("Data imported from module.js:", data);