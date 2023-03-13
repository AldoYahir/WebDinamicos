//Apuntamos al menú donde uno se puede logear y dependiendo si existe un logeo ocultará
//algunos incisos de lo contrario permitirá logearte.
const loggedOutMenu = document.querySelectorAll('.logged-out');
const loggedInMenu = document.querySelectorAll('.logged-in');
console.log(loggedOutMenu);
console.log(loggedInMenu);

export const loginCheck = user => {

    if (user) {
        loggedOutMenu.forEach(link => link.style.display = 'none');
        loggedInMenu.forEach(link => link.style.display = 'block')
    } else {
        loggedOutMenu.forEach(link => link.style.display = 'block');
        loggedInMenu.forEach(link => link.style.display = 'none')

    }
}