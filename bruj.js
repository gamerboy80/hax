fetch("https://cdnjs.cloudflare.com/ajax/libs/pako/2.0.3/pako.min.js").then(resp => resp.text()).then(eval); // load pako with hax
let in = "hello this is a test string", out;
const encoder = new TextEncoder();
const deflate = new pako.Deflate();
let array = encoder.encode(in);
deflate.push(array, true);
if (deflate.err) throw deflate.err;
console.log(btoa(String.fromCharCode.apply(null, deflate.result)));
