function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const recaptchaResponse = grecaptcha.getResponse();

    if (!recaptchaResponse) {
        alert("يرجى التحقق من أنك لست روبوتًا!");
        return;
    }

    if (email && password) {
        if (email === "test@gmail.com" && password === "123456") {
            alert("تم تسجيل الدخول بنجاح!");
            window.location.href = "dashboard.html";
        } else {
            alert("البريد الإلكتروني أو كلمة المرور غير صحيحة.");
        }
    } else {
        alert("يرجى إدخال جميع البيانات!");
    }
}