// クリック回数を保存する変数
let clickCount = 0;

// プロフィール画像がクリックされたら実行される関数
function profileClicked() {
  clickCount++; // カウントを1増やす
  alert("プロフィール画像が " + clickCount + " 回クリックされました！");
}
