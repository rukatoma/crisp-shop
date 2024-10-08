export const showPopup = (popup) => {
    popup.classList.add('show');
}
    
export const hidePopup = (e, popup) => {
    if (e.target === popup) {
        popup.classList.remove('show');
    } else if (Array.from(e.target.classList).includes('close')) {
        popup.classList.remove('show');
    }
}

export default { showPopup, hidePopup }