import WebFont from 'webfontloader';

export default load_font;

async function load_font(font_name) {
  let resolve;
  const promise = new Promise(r => resolve = r);

  attempts=0;
  do_it();

  await promise;

  return;

  var attempts;
  function do_it() {
    WebFont.load({
      google: {
        families: [font_name]
      }
      fontactive: resolve,
      fontinactive: () => {
        attempts++;
        const min = Math.pow(2, attempts);
        const max = 60;
        const seconds = Math.max(min, max);;
        const timeout = seconds * 1000;
        setTimeout(do_, timeout);
      },
    });
  }
}