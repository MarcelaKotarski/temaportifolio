'use strict'

const switcher = document.querySelector('.btn-actions');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Light";
    }

    else{
        this.textContent = "Dark"
    }

    console.log('Current class name: '+ className);

});