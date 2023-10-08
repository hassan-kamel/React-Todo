let cacheName = "appV1";

let assets = [
  'https://taskaat.netlify.app/',
  'https://taskaat.netlify.app/static/js/main.97d79938.js',
  'https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600&display=swap',
  'https://fonts.gstatic.com/s/comfortaa/v45/1PtCg8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMXL830efAesmwYSFoxBEP_I0.woff2',
  'https://taskaat.netlify.app/todolist.svg',
];

 

this.addEventListener("install", (event) => {

  event.waitUntil(

    caches.open(cacheName).then((cache) => {

      cache.addAll(assets);

    })

  );

});

 

//? web-push

this.addEventListener("fetch", (event) => {

  if (!navigator.onLine) {

    //? notification

    event.respondWith(

      caches.match(event.request).then((res) => {

        if (res) {

          return res;

        }

        fetch(event.request);

      })

    );

  }

});
