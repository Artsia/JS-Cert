



/**convert host name to ip address
 * return ip and IP family
 * family is either ipv4 or ipv6
*/
function createIPv4Adress(hostname) {
    const dns = require('node:dns');

    dns.lookup(`${hostname}`, (err, address, family) => {
        return {
            "Address": address,
            "familyType": family
        }
    });
    // address: "93.184.216.34" family: IPv4

}

export default createIPv4Adress;