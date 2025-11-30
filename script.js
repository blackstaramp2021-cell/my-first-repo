let clickCount = 0;

function profileClicked() {
  clickCount++;

  const display = document.getElementById("clickDisplay");
  display.textContent = "クリック回数：" + clickCount;

  // ランダムカラーを生成
  const randomColor = getRandomColor();
  display.style.color = randomColor;

  // アニメーション用のクラスを付与
  display.classList.add("clicked");

  // 0.2秒後にクラスを外す
  setTimeout(() => {
    display.classList.remove("clicked");
  }, 200);
}

// ランダムカラーを作る関数
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
