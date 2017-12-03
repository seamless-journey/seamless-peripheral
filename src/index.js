import { fork } from 'child_process';
import { setInterval, setTimeout } from 'timers';
import qrcode from 'qrcode-terminal';

const broadcast = fork('build/broadcast/index.js');

function handleStoreMessage({ key }) { 
  qrcode.generate(key);
}

function handleBroadcastMessage({ err, shortUrl }) { 
  if (!err) { 
    const store = fork('build/store/index.js'); 
    store.on('message', handleStoreMessage);
  }  
}

broadcast.on('message', handleBroadcastMessage);
broadcast.send('https://seamless-journey.github.io/seamless-client/');


