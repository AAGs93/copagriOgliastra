<template>
  <header ref="navbar" class="navbar bg-white sticky top-0 z-50 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <NuxtLink to="/" class="navbar-logo flex items-center space-x-2">
          <img
            src="https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
            alt="Copagri Ogliastra Logo"
            class="navbar-logo-img rounded-lg object-cover"
          />
          <div class="navbar-logo-text">
            <div class="font-bold text-gray-900">Copagri Ogliastra</div>
            <div class="text-xs text-gray-600">
              Confederazione Produttori Agricoli
            </div>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <div
            class="hover:border rounded-sm hover:border-primary p-1 hover:bg-primary transition-colors"
            :class="{ 'bg-primary transition-colors': $route.path === '/' }"
          >
            <NuxtLink
              to="/"
              class="text-gray-700 hover:text-white transition-colors font-semibold p-2"
              :class="{ 'text-white': $route.path === '/' }"
            >
              Home
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
              class="text-gray-700 hover:text-white transition-colors font-semibold p-2"
              :class="{ 'text-white': $route.path.includes('/news') }"
            >
              News
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
              class="text-gray-700 hover:text-white transition-colors font-semibold p-2"
              :class="{ 'text-white': $route.path === '/contatti' }"
            >
              Contatti
            </NuxtLink>
          </div>
        </nav>

        <!-- Mobile menu button -->
        <UButton
          icon="i-heroicons-bars-3"
          variant="ghost"
          class="md:hidden"
          @click="mobileMenuOpen = !mobileMenuOpen"
        />
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t">
        <nav class="flex flex-col space-y-4">
          <NuxtLink
            to="/"
            class="text-gray-600 hover:text-primary transition-colors font-medium"
            @click="mobileMenuOpen = false"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/news"
            class="text-gray-600 hover:text-primary transition-colors font-medium"
            @click="mobileMenuOpen = false"
          >
            News
          </NuxtLink>
          <NuxtLink
            to="/contatti"
            class="text-gray-600 hover:text-primary transition-colors font-medium"
            @click="mobileMenuOpen = false"
          >
            Contatti
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false);
const navbar = ref(null);

onMounted(() => {
  const handleScroll = () => {
    if (navbar.value) {
      if (window.scrollY > 20) {
        navbar.value.classList.add("scrolled");
      } else {
        navbar.value.classList.remove("scrolled");
      }
    }
  };

  window.addEventListener("scroll", handleScroll);

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
});
</script>

<style></style>
