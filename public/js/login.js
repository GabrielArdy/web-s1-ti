document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.querySelector(".login-btn");
  const modal = document.getElementById("login-modal");
  const closeBtn = modal.querySelector(".close");
  const loginForm = document.getElementById("login-form");
  const googleLoginBtn = document.getElementById("google-login");

  loginBtn.addEventListener("click", function () {
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Di sini Anda akan menambahkan logika untuk mengirim data login ke server
    console.log("Login dengan:", email, password);

    // Contoh sederhana: tutup modal setelah submit
    modal.style.display = "none";
  });

  googleLoginBtn.addEventListener("click", function () {
    // Di sini Anda akan menambahkan logika untuk login dengan Google
    console.log("Login dengan Google");
  });
});
