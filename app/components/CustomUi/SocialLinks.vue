<!-- components/SocialLinks.vue -->
<template>
  <div class="flex gap-3 justify-end pr-10 py-1">
    <UButton
      v-for="social in socials"
      :key="social.name"
      :to="social.url"
      target="_blank"
      :icon="social.icon"
      :aria-label="social.name"
      color="neutral"
      variant="ghost"
      size="xs"
      square
      class="items-center"
      :class="social.hoverClass"
    />
  </div>
</template>

<script setup lang="ts">
const socials = [
  {
    name: "Facebook",
    url: "https://facebook.com/tuapagina",
    icon: "i-lucide-facebook",
    hoverClass: "hover:bg-[#1877f2] hover:text-white transition-colors",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/tuoaccount",
    icon: "i-lucide-instagram",
    hoverClass:
      "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white transition-colors",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/tuoaccount",
    icon: "i-lucide-twitter",
    hoverClass: "hover:bg-[#1da1f2] hover:text-white transition-colors",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/tuaazienda",
    icon: "i-lucide-linkedin",
    hoverClass: "hover:bg-[#0a66c2] hover:text-white transition-colors",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@tuocanale",
    icon: "i-lucide-youtube",
    hoverClass: "hover:bg-[#ff0000] hover:text-white transition-colors",
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@tuoaccount",
    icon: "i-lucide-music",
    hoverClass: "hover:bg-black hover:text-white transition-colors",
  },
];
</script>
