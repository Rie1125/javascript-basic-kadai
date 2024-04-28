/*const Date = () => {
  new Date();
}


const monthIndex  = new Date(' 4 ');
// Sun Dec 17 1995 03:24:00 GMT...

const Date = new Date(' 28 ');
// Sun Dec 17 1995 03:24:00 GMT...

//console.log(date);
console.log(Date);
// Expected output: false

//console.log(date1 - date2);
// Expected output: 0
*/

const date = new Date();

const formattedDate = 
  date.getFullYear() + '年' +
  (date.getMonth() + 1 ) + '月' +
  date.getDate() + '日' ; 

console.log(formattedDate);

//月のみ０から開始