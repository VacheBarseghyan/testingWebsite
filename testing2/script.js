const firstNavbar = document.getElementById('firstNavbar');
const secondNavbar = document.getElementById('secondNavbar');
const toggleBtn = document.getElementById('toggleBtn');
const toggleBtn2 = document.getElementById('toggleBtn2');

toggleBtn.addEventListener('click', function() {
    firstNavbar.style.display = 'none';
    secondNavbar.style.display = 'show';
});

toggleBtn2.addEventListener('click', function() {
    firstNavbar.style.display = 'show';
    secondNavbar.style.display = 'none';
});

////////////////////////////////////////////// LOGIN AND REGISTRATION WINDOWS, BOTH FOR EMPLOYEE AND EMPLOYER BELOW

// ----------------------------------------------------------------------------------click for Employee login below

document.addEventListener('DOMContentLoaded', function() {
    let loginLink = document.getElementById('loginLink');
    let loginEmployee = document.getElementById('loginEmployee');
  
    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
  
        loginEmployee.classList.remove('hidden');

        document.body.addEventListener('click', closeloginEmployee);
        event.stopPropagation();
    });
    function closeloginEmployee(event) {
        if (!loginEmployee.contains(event.target)) {
            loginEmployee.classList.add('hidden');
          document.body.removeEventListener('click', closeloginEmployee);
        }
      }
});

// ----------------------------------------------------------------------------------click for Employee registration below

document.addEventListener('DOMContentLoaded', function() {
    let registrationLink = document.getElementById('registrationLink');
    let registrationEmployee = document.getElementById('registrationEmployee');
  
    registrationLink.addEventListener('click', function(event) {
        event.preventDefault();
  
        registrationEmployee.classList.remove('hidden');

        document.body.addEventListener('click', closeRegistrationEmployee);
        event.stopPropagation();
    });
    function closeRegistrationEmployee(event) {
        if (!registrationEmployee.contains(event.target)) {
            registrationEmployee.classList.add('hidden');
          document.body.removeEventListener('click', closeRegistrationEmployee);
        }
      }
});


// ----------------------------------------------------------------------------------click for Employer login below

document.addEventListener('DOMContentLoaded', function() {
    let loginWorker = document.getElementById('loginWorker');
    let loginEmployer = document.getElementById('loginEmployer');
  
    loginWorker.addEventListener('click', function(event) {
        event.preventDefault();
  
        loginEmployer.classList.remove('hidden');

        document.body.addEventListener('click', closeloginEmployer);
        event.stopPropagation();
    });
    function closeloginEmployer(event) {
        if (!loginEmployer.contains(event.target)) {
            loginEmployer.classList.add('hidden');
          document.body.removeEventListener('click', closeloginEmployer);
        }
      }
});

// ----------------------------------------------------------------------------------click for Employer registration below

document.addEventListener('DOMContentLoaded', function() {
    let registrationWorker = document.getElementById('registrationWorker');
    let registrationEmployer = document.getElementById('registrationEmployer');
  
    registrationWorker.addEventListener('click', function(event) {
        event.preventDefault();
  
        registrationEmployer.classList.remove('hidden');

        document.body.addEventListener('click', closeRegistrationEmployer);
        event.stopPropagation();
    });
    function closeRegistrationEmployer(event) {
        if (!registrationEmployer.contains(event.target)) {
            registrationEmployer.classList.add('hidden');
          document.body.removeEventListener('click', closeRegistrationEmployer);
        }
      }
});