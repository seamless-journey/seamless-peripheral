import { fork } from 'child_process';
import { setInterval, setTimeout } from 'timers';

const broadcast = fork('build/broadcast/index.js');

broadcast.on('message', ({ err, shortUrl }) => {
  if (!err) { 
    const store = fork('build/store/index.js'); 
  }
});

setTimeout(() => { 
  broadcast.send('https://jvallelunga.github.io/redux-bluetooth/');
}, 10000);

broadcast.send('https://www.npmjs.com/package/google-url');
