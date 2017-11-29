import eddystoneBeacon from 'eddystone-beacon';
import GoogleUrl from 'google-url';

const googleUrl = new GoogleUrl({ key: 'AIzaSyDg7l3Gqy1sWxEYjl2-0bR2gfJpEGsEFGA' });
let advertising = false; 

function advertise(url) {
  console.log('advertise:', url);
  googleUrl.shorten( url, function( err, shortUrl ) {
    console.log('shortUrl:', shortUrl);
    if (!err) { 
      if (advertising) { 
        eddystoneBeacon.stop();
      } else { 
        process.send({ err, shortUrl });
        advertising = true;
      }
      eddystoneBeacon.advertiseUrl(shortUrl);
    }
  } ); 

}
process.on('message', advertise);
