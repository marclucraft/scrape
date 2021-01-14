const fetch = require("node-fetch");

(async () => {
  try {
    const response = await fetch('https://jgdesignandbuild.co.uk/wp-json/wp/v2/pages/44');
    const data = await response.json()
    console.log(data)
  } catch (err) {
    console.log(err);
  }
})()