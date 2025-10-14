<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="h-8 bg-primary"><CustomUiSocialLinks /></div>
    <CustomUiNavBar />
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
