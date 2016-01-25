//Google-Spreadsheets 
var GoogleSS = require("google-spreadsheet"); 
var sheet = new GoogleSS('1wgdA1ZMnbOgjorTLAKci-JYsNlP_ke9B7f7vWZSWetE');

var cred = {
    client_email: "ftl-249@followtl-1195.iam.gserviceaccount.com" ,
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCOTkJC3gluWcJa\nJA6bLT6f+S6+/XgyNTcU4T/qbkDlsT35Gidv62imOnEqX1Sh+SDGXqoYlH5VZkyl\nn6TsRgBX/bcSz6r60p/OqrHpLuiA5AUnHW2EVBz0IF5aTfa50uFWHWdKsZQLgLQH\nu4a9Z/ISLjkFO0xe3DWze8f9L2Iro5PF1mEp3c8YfZuRbMDrhCo2/NoIfTF5SgaH\nZ5qYY+R5uUcdt/DNQzF1QgH2s08NEK8GTTEf+ktQU00hGg8OXR/H24/nRQHy9O2T\nmpSER2z1utx+02rOdzDWL/eVLC4dURIkVytjsDOL529fVNf9OkKF6jf2TE5IxvGs\nfwrjlhgbAgMBAAECggEAAMyPsrBsfSIj5T2ul1B5uYw8pvXlZuLFnGhnY3mbA68r\nGer7rbU0sTpCyGogn4g2luaRLfIng3M/mu56jpkWB2h1TrW70Ay+uPpcZWLOC2s8\nXCveIZAXWYeVAAzQBdsZSNKBcfntSuM+H4z+BLJAublouI7MrvutkYRwawuJEZWn\nYkEI3rZ/4Ljf8siVVbodaB39/SgiGN3rEy5cW8Pzi0CpjR6mzlYvNKyT1ILMwUrc\nGjvfJYt95kV1PKAp68Y3HBD/moUgjoG9beHGOeaAMxLqoIS5GyxrZbd9GibHRYxg\nFoce4PbX2leMzEIIz/uOxQXHhu5LHjimWD/P1OtNgQKBgQDhzyWdTwVEB+euid+h\nrWdj6Yp59QVokS0KVCDMhWMUDCKTMltLDTX5NsPThwdJpFx1EahC/dAirEbxGLxF\nQb7NsKenGdM61fi0sAjWonsNPQXQh9Nfmc5sLVnRHxfOFaxW3XdsxCf0NYk1Wt6J\n479BSUQGk1GGhw88QZ0auuIA1wKBgQChVQIR8YucTUeL4DmPuO4SqbDpBBQhQSVf\nnARXub6DEZ59z2UMBO2Ju9xwdjC0pjB5MeEv7j4GBeL2aMiJ16dx5QpmWtlgaUz2\nXo7iSD/IXX7+ceMWaHes6ZyJfoKwf4qMvEtJsdAG3FlCf7WPep1DnaiX2V2HZg2T\nZpmIsadGXQKBgFPvtTKxUerE6Xj2pRsrIvh/skq9KoKBHHXvabW8i2TDUgLXQBo4\n0exOUCKL2cilAP0/UAV+5WROF5y9LhasZql81gUGU39WVDmOCesGwKjeGxA1vPuX\nZ6TMgst6PFYNtl8fuanDjHp5gARGP9yPvOMewduT3UUdZStn1GdAOoxHAoGAO6Y5\nkLbVHqI4DNCHl8sRQxc4kL7wTmdO0S3XMTQ86ysNhYiz3KDJzr4FwBMC6Rf1HipC\nDz2v8vwkMWUGmGiCwYqksLlwW8QzL3hArgt2gbeH573l73gKn4T0WqXK3kUZzfUk\nhQfYWWEJI5wiXf1AvipBlntIqHIkHNa3d6HvrgUCgYEA3TiupDy+1Kli/ESLnm4e\nwwlCuXdlYW1u3jKYpI1xp4bGl4w/Urql0z5lqc2pR1Or3nTc/YPRLrYOutdXv2XA\noNIHf55zLC5ZpTAI4ZVlFNCwqk67yJY3ycSsB5fNUn2m4hD110barXm7HjVWAO6G\n/9KIFQh6V22SbGofEm7kn54=\n-----END PRIVATE KEY-----\n"
}

exports.getMessage = function() {sheet.useServiceAccountAuth(cred, function(err){
    sheet.getRows(1,{start: 1, num: 5,}, function(err, row_data){
            console.log(row_data); 
        }); 
    });
};