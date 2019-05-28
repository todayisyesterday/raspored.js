const readline = require('readline');
const scrape = require('website-scraper');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Unesite link:    ', (answer) => {
  console.log(`Uneli ste:\t${answer}`);
  let dir = './raspored-'+answer.substring('http://raspored.rs/pub/?pid='.length);
  let options = {
      urls: [answer],
      directory: dir,
  };
  scrape(options).then((result) => {
      console.log(`Uspesno! Sacuvano u direktorijumu ${dir}`);
  }).catch((err) => {
      console.log("ups", err);
  });
  rl.close();
});
