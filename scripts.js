
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "ZYAD" && password === "10102007") {
        document.getElementById('loginPage').classList.remove('active');
        document.getElementById('app').classList.add('active');
    } else {
        alert("اسم المستخدم أو كلمة المرور غير صحيحة.");
    }
}
