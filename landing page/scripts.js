
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded - callback');
  });
  
 
  window.onload = function() {
      document.querySelector('.hero').classList.add('fade-in');
  };
  
 
  document.addEventListener('DOMContentLoaded', () => {
      document.querySelector('.hero').classList.add('fade-in');
  });
  