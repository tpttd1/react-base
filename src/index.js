import "./assets/css/bootstrap.min.css";
import "./assets/css/bootstrap.rtl.only.min.css";
import "./assets/scss/style.css";

const consoleError = console.error.bind(console);
// eslint-disable-next-line
console.error = (message, ...args) => {
  if (
    typeof message === 'string' && (
    message.startsWith('[React Intl] Missing message:') || message.startsWith('[React Intl] Cannot format message'))
  ) {
    return;
  }
  consoleError(message, ...args);
};

let render = () => {
  // import('./assets/css/sass/themes/gogo.' + color + '.scss').then(x => {
    require('./AppRenderer');
  // });
};
render();