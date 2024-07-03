function uiShowMessage() {
    const uiMessageBox = document.getElementById('ui-message-box');
    uiMessageBox.style.display = 'block';
    setTimeout(() => {
        uiMessageBox.style.display = 'none';
    }, 2000);
}
