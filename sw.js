// শুধুমাত্র PWA ইনস্টলেশনের জন্য একটি মিনিমাল Service Worker

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// একটি খালি fetch হ্যান্ডলার, যা PWA ইনস্টলেশনের জন্য আবশ্যক
self.addEventListener('fetch', event => {
  // এই হ্যান্ডলারটি খালি থাকলেও ব্রাউজার এটিকে একটি কার্যকর হ্যান্ডলার হিসেবে গণ্য করবে।
});