
// 変数numに０〜100までのランダムな整数を代入する...これで良いのか？
let num =  Math.floor(Math.random() * 101);

//変数numの値を出力する
console.log(num);

// 変数numが3の倍数であれば、「3の倍数です」という文字列を出力する
if ( num % 3 === 0) {
  console.log('3の倍数です');
}

//変数numが5の倍数である場合
if ( num % 5 === 0) {
  console.log('5の倍数です')
}

//変数numが3と5の倍数である場合
if ( num % 15 === 0) {
  console.log('3と5の倍数です')
}

