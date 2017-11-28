const VERSION = 'v1';

function log(messages) {
  console.log(VERSION, messages);
}

// log("Installing Service Worker");

//life cycle events

self.addEventListener('install', () => {
  log('installed');
  onServiceWorkerInstalled();
});

self.addEventListener('activate', () => {
  log('activated')
});

async function onServiceWorkerInstalled() {

  heroesUrl = "https://jsonplaceholder.typicode.com/users";

  // const request = new Request('https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png');
  // const request = new Request('https://jsonplaceholder.typicode.com/todos/1');
  const request = new Request(heroesUrl);
  const response = await fetch(request);
  log("Response received", response);
  if(response.status !== 200) {
    throw new Error("Could not load offline content");
  }

  const cache = await caches.open('app-cache');
  cache.put(request, response);
  log("Cached offline content")
}
