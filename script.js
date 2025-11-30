let clickCount = 0;

function profileClicked() {
  clickCount++;

  const display = document.getElementById("clickDisplay");
  display.textContent = "クリック回数：" + clickCount;

  // ランダムカラーを作って数字に反映
  const randomColor = getRandomColor();
  display.style.color = randomColor;

  // アニメーション用クラスを付与
  display.classList.add("clicked");
  setTimeout(() => {
    display.classList.remove("clicked");
  }, 200);

  // クリック回数に応じて About セクションの背景色を変化
  const aboutSection = document.getElementById("about");
  const baseColor = 180; // 青系のベース色（HSLのHue値）
  const hue = (baseColor + clickCount * 10) % 360; // クリックごとにHueを増加
  aboutSection.style.backgroundColor = `hsl(${hue}, 50%, 85%)`;
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
