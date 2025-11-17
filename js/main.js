import { initializeRouter } from './router.js';
import { setupFormValidation } from './formValidation.js';

document.addEventListener("DOMContentLoaded", () =>{
    initializeRouter();
    
    setupFormValidation();
});