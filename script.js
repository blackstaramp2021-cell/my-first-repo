// クリック回数を保存する変数
let clickCount = 0;

// プロフィール画像がクリックされたら実行される関数
function profileClicked() {
  clickCount++; // カウントを1増やす
  // HTML上の表示を書き換える
  document.getElementById("clickDisplay").textContent =
    "クリック回数：" + clickCount;
}
