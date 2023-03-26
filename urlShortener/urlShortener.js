// mapping object to store short URL and long URL pairs
const urlMap = {};

// function to generate a short URL for a given long URL
function generateShortURL(longURL) {
  const hash = hashCode(longURL);
  const shortURL = `https://example.com/${hash}`;
  urlMap[shortURL] = longURL;
  return shortURL;
}

// function to retrieve the long URL for a given short URL
function getLongURL(shortURL) {
  return urlMap[shortURL];
}

// helper function to generate a hash code for a string
function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0; // convert to 32-bit integer
  }
  return Math.abs(hash).toString(36);
}
