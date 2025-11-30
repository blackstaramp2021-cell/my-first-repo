let clickCount = 0;

function profileClicked() {
    clickCount++;

    const display = document.getElementById("clickDisplay");
    display.textContent = "クリック回数：" + clickCount;

    // アニメーション用のクラスを付与
    display.classList.add("clicked");

    // 0.2秒後にクラスを外す（scale を元に戻す）
    setTimeout(() => {
        display.classList.remove("clicked");
    }, 200);
}
