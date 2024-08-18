importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

// Public keys
firebase.initializeApp({
  apiKey: "AIzaSyDyNAGAI_ojVWA-HLRxekkD1XepebceKLc",
  authDomain: "festify-10478.firebaseapp.com",
  projectId: "festify-10478",
  storageBucket: "festify-10478.appspot.com",
  messagingSenderId: "959755016971",
  appId: "1:959755016971:web:859ed36a8628d1cf9e200e",
  measurementId: "G-W5K0JGGEFP"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message ", payload);
  // Customize notification here
  const notification = {
    title: payload.notification?.title,
    body: payload.notification?.body,
    icon: payload.data?.icon || "/logo192.png",
  };

  self.registration.showNotification(notification.title, notification);
});
