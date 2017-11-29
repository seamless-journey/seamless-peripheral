import { fork } from 'child_process';
import { setInterval, setTimeout } from 'timers';

const broadcast = fork('build/broadcast/index.js');

broadcast.on('message', ({ err, shortUrl }) => {
  if (!err) { 
    fork('build/store/index.js'); 
  }
});

broadcast.send('https://jvallelunga.github.io/redux-bluetooth/');
