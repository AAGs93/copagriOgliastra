<template>
  <div>
    <UHeader
      mode="drawer"
      :toggle="{
        color: 'secondary',
        variant: 'subtle',
        size: 'xl',
        class: 'rounded-md ',
      }"
    >
      <template #title>
        <NuxtLink to="/" class="flex items-center space-x-2">
          <div class="h-20">
            <img
              src="/images/logo_copagri_og1.PNG"
              alt="Copagri Ogliastra Logo"
              class="rounded-lg object-cover h-full w-auto"
            />
          </div>
        </NuxtLink>
      </template>

      <!-- <UNavigationMenu :items="items" /> -->
      <template #right>
        <nav class="hidden md:flex space-x-8">
          <div
            class="hover:border rounded-sm hover:border-primary p-1 hover:bg-primary transition-colors"
            :class="{ 'bg-primary transition-colors': $route.path === '/' }"
          >
            <NuxtLink
              to="/"
              class="text-gray-700 hover:text-white transition-colors font-semibold p-2 flex gap-1 items-center text-center"
              :class="{ 'text-white': $route.path === '/' }"
            >
              <UIcon name="i-heroicons-home" class="w-5 h-5" />
              <p>Home</p>
            </NuxtLink>
          </div>
          <div
            class="hover:border rounded-sm hover:border-primary p-1 hover:bg-primary transition-colors"
            :class="{
              'bg-primary transition-colors': $route.path.includes('/news'),
            }"
          >
            <NuxtLink
              to="/news"
              class="text-gray-700 hover:text-white transition-colors font-semibold p-2 flex gap-1 items-center text-center"
              :class="{ 'text-white': $route.path.includes('/news') }"
            >
              <UIcon name="i-heroicons-newspaper" class="w-5 h-5" />
              <p>News</p>
            </NuxtLink>
          </div>
          <div
            class="hover:border rounded-sm hover:border-primary p-1 hover:bg-primary transition-colors"
            :class="{
              'bg-primary transition-colors': $route.path === '/contatti',
            }"
          >
            <NuxtLink
              to="/contatti"
              class="text-gray-700 hover:text-white transition-colors font-semibold p-2 flex gap-1 items-center text-center"
              :class="{ 'text-white': $route.path === '/contatti' }"
            >
              <UIcon name="i-heroicons-envelope" class="w-5 h-5" />
              <p>Contatti</p>
            </NuxtLink>
          </div>
        </nav>
      </template>

      <template #body>
        <UNavigationMenu
          color="primary"
          variant="pill"
          :items="items"
          orientation="vertical"
          class="pb-10"
          trailing-icon="i-heroicons-arrow-right"
          :ui="{
            // 1. Aumenta la dimensione del testo e centra orizzontalmente TUTTI i link
            link: 'justify-center font-medium  before:absolute before:z-[-1] before:rounded-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2',

            // 2. Aumenta lo spazio verticale (py-3) SOLO per l'orientamento verticale
            orientation: {
              vertical: {
                link: 'flex-row px-2.5 **py-3** before:inset-y-px before:inset-x-0',
              },
            },
          }"
        />
      </template>
    </UHeader>
  </div>
</template>

<script setup>
const route = useRoute();

const items = computed(() => [
  {
    label: "Home",
    to: "/",
    icon: "i-heroicons-home",
    active: route.path === "/",
  },
  {
    label: "News",
    to: "/news",
    icon: "i-heroicons-newspaper",
    active: route.path.startsWith("/news"),
  },
  {
    label: "Contatti",
    icon: "i-heroicons-envelope",
    to: "/contatti",
    active: route.path.startsWith("/contatti"),
  },
]);
</script>
