const miio = require('miio');
exports.discoverDevices = async function() {
    const browser = miio.browse({
        cacheTime: 300 // 5 minutes. Default is 1800 seconds (30 minutes)
      });
      
      var devices = [];
      var som = await browser.on('available', reg => {
        if(! reg.token) {
          devices.push(reg.id);
          console.log(reg.id, 'hides its token');
        }
      });
      console.log(som);
      return devices;
}
