export const messageAlert = (icon, title, text, showConfirmButton, timer) => {
    Swal.fire({
        icon,
        title,
        text,
        showConfirmButton,
        allowOutsideClick: false,
        timer
    })
}