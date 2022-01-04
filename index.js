// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function ts(ticketType) {
  switch (ticketType) {
    case '9':
      return '免息券';
    case '10':
      return '减息券';
    case '11':
      return '利息折扣券';
    default:
      return '';
  }
}

console.log(10, ts('13'));
