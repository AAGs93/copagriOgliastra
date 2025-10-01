<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="h-4 bg-red-600"></div>
    <header
      ref="navbar"
      class="navbar bg-white sticky top-0 z-50 shadow-sm"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <NuxtLink
            to="/"
            class="navbar-logo flex items-center space-x-2"
          >
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
              class="hover:border rounded-sm hover:border-red-600 p-1 hover:bg-red-600 transition-colors"
              :class="{ 'bg-red-600 transition-colors': $route.path === '/' }"
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
              class="hover:border rounded-sm hover:border-red-600 p-1 hover:bg-red-600 transition-colors"
              :class="{
                'bg-red-600 transition-colors': $route.path.includes('/news'),
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
              class="hover:border rounded-sm hover:border-red-600 p-1 hover:bg-red-600 transition-colors"
              :class="{
                'bg-red-600 transition-colors': $route.path === '/contatti',
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
              class="text-gray-600 hover:text-red-600 transition-colors font-medium"
              @click="mobileMenuOpen = false"
            >
              Home
            </NuxtLink>
            <NuxtLink
              to="/news"
              class="text-gray-600 hover:text-red-600 transition-colors font-medium"
              @click="mobileMenuOpen = false"
            >
              News
            </NuxtLink>
            <NuxtLink
              to="/contatti"
              class="text-gray-600 hover:text-red-600 transition-colors font-medium"
              @click="mobileMenuOpen = false"
            >
              Contatti
            </NuxtLink>
          </nav>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <img 
                src="https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                alt="Copagri Ogliastra Logo"
                class="w-10 h-10 rounded-lg object-cover"
              />
              <div>
                <div class="font-bold">Copagri Ogliastra</div>
                <div class="text-sm text-gray-400">
                  Confederazione Produttori Agricoli
                </div>
              </div>
            </div>
            <p class="text-gray-300 text-sm">
              Rappresentiamo e sosteniamo le imprese agricole dell'Ogliastra,
              valorizzando la terra, le persone e i prodotti che la rendono
              unica.
            </p>
          </div>

          <div>
            <h3 class="font-semibold mb-4">Servizi</h3>
            <ul class="space-y-2 text-sm text-gray-300">
              <li>Assistenza amministrativa</li>
              <li>Consulenza fiscale</li>
              <li>Supporto tecnico</li>
              <li>Pratiche PAC e PSR</li>
            </ul>
          </div>

          <div>
            <h3 class="font-semibold mb-4">Contatti</h3>
            <div class="space-y-2 text-sm text-gray-300">
              <div class="flex items-center space-x-2">
                <Icon name="i-heroicons-phone" class="w-4 h-4" />
                <span>[numero telefono]</span>
              </div>
              <div class="flex items-center space-x-2">
                <Icon name="i-heroicons-envelope" class="w-4 h-4" />
                <span>[email]</span>
              </div>
              <div class="flex items-start space-x-2">
                <Icon name="i-heroicons-map-pin" class="w-4 h-4 mt-0.5" />
                <span>[indirizzo sede]</span>
              </div>
            </div>
          </div>
        </div>

        <div
          class="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400"
        >
          <p>
            &copy; {{ new Date().getFullYear() }} Copagri Ogliastra. Tutti i
            diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  </div>
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
