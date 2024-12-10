
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert(`تم تسجيل الدخول للبريد: ${email}`);
    } else {
        alert('يرجى إدخال البيانات كاملة!');
    }
}
