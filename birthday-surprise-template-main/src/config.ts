/* ==========================================
   Birthday Surprise Website Configuration

   Edit this file to customize the website
   for your loved one!
   ========================================== */

export const config = {
  /* Name Verification Gate */
  recipientName: "Sevgilim", // required name to enter
  nameHint: '8 letters, starts with "S"', // hint on wrong name

  /* Section Headings */
  soloGalleryTitle: "✨ Doğum Günü Kızım ✨", // solo gallery title
  messageTitle: "Favori Kişime", // letter section title
  footerText: "Sadece Senin İçin", // footer text

  /* Button Labels */
  buttons: {
    hero: "Küçük bir süpriz için hazırmısın?", // hero/landing button
    soloGallery: "Daha fazlasını görmek ister misin?", // solo gallery button
  },

  /* Together Gallery (Optional) */
  togetherGallery: {
    enabled: true, // toggle together gallery
    title: "💕 Anılarımız 💕", // together gallery title
    buttonText: "Son bir şey...", // together gallery button
  },

  /* Birthday Message: Each string is a paragraph */
  message: [
    "Doğum günün kutlu olsun, sevgilim! Bugün senin günün ve ben bu özel günü seninle paylaşmaktan çok mutluyum. Sen benim hayatımın en parlak yıldızısın ve her an seninle olmak benim için büyük bir mutluluk kaynağı.",
    "",
    "umarım bu yeni yaşın sana sağlık, mutluluk ve başarı getirir. Seninle geçirdiğimiz her an benim için çok değerli ve seninle daha nice güzel anılar biriktirmeyi dört gözle bekliyorum.",
    "",
    "kendine iyi bak, hayallerinin peşinden git ve her zaman gülümsemeyi unutma. Seninle olmak benim için bir ayrıcalık ve seni çok seviyorum.",
    "",
    "güzel bir doğum günü dilerim kendine çok iyi bak.",
    "",
    "- Sevgiler,",
  ],

  /* Theme Colors - Change these to customize the entire website theme! */
  colors: {
    primary: "#ec4899", // main color (buttons, accents)
    light: "#fdf2f8", // lightest shade (backgrounds)
    medium: "#f9a8d4", // medium shade (decorations)
    dark: "#db2777", // darkest shade (hover states)
  },

  /* Typing Animation Text (shown on the start screen) */
  typingText: {
    first: "Hey, bir sanşye bekle!",
    second: "bu  site sadece senin için!",
  },
};

export type Config = typeof config;
