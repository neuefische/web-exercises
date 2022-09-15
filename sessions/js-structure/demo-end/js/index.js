import {initializeCard} from './Card.js';
import './Header.js';
import './Authors.js';

// Initialize all cards on the page
document.querySelectorAll('[data-js="card"]').forEach(card => initializeCard(card));
