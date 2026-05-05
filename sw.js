// অনলাইন-নির্ভর অ্যাপের জন্য Service Worker
// এই ফাইলটি পুশ নোটিফিকেশন গ্রহণ করার জন্য প্রয়োজন।

self.addEventListener('install', () => {
  console.log('Service Worker: I am installed and ready!');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker: I am active and taking control!');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  // অনলাইন-নির্ভর অ্যাপের জন্য আমরা নেটওয়ার্ক অনুরোধে হস্তক্ষেপ করব না।
  // ব্রাউজার সরাসরি ইন্টারনেট থেকে সব আনবে।
  return;
});