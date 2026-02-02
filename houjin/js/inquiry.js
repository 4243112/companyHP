// ===============================
// inquiry.js（お問い合わせページ & 確認ページ 共通）
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // ----------------------------------------------------
    // ① お問い合わせページ（inquiry.html）側の処理
    // ----------------------------------------------------
    const confirmBtn = document.getElementById("confirmBtn");

    if (confirmBtn) {
        confirmBtn.addEventListener("click", () => {
            const name = document.getElementById("name").value.trim();
            const furigana = document.getElementById("furigana").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            const error = document.getElementById("formError");

            // 必須チェック
            if (!name || !furigana || !phone || !email || !message) {
                if (error) {
                    error.textContent = "未入力の項目があります。";
                }
                return;
            }

            // localStorage に保存
            localStorage.setItem("name", name);
            localStorage.setItem("furigana", furigana);
            localStorage.setItem("phone", phone);
            localStorage.setItem("email", email);
            localStorage.setItem("message", message);

            // 確認ページへ遷移
            window.location.href = "check-inquiry.html";
        });
    }

    // ----------------------------------------------------
    // ② 確認ページ（inquiry_confirm.html）側の処理
    // ----------------------------------------------------
    const confirmName = document.getElementById("confirm-name");

    if (confirmName) {
        const name = localStorage.getItem("name") || "";
        const furigana = localStorage.getItem("furigana") || "";
        const phone = localStorage.getItem("phone") || "";
        const email = localStorage.getItem("email") || "";
        const message = localStorage.getItem("message") || "";

        // 表示用
        document.getElementById("confirm-name").textContent = name;
        document.getElementById("confirm-furigana").textContent = furigana;
        document.getElementById("confirm-phone").textContent = phone;
        document.getElementById("confirm-email").textContent = email;
        document.getElementById("confirm-message").textContent = message;

        // hidden にセット（送信用）
        document.getElementById("hidden-name").value = name;
        document.getElementById("hidden-furigana").value = furigana;
        document.getElementById("hidden-phone").value = phone;
        document.getElementById("hidden-email").value = email;
        document.getElementById("hidden-message").value = message;
    }
});