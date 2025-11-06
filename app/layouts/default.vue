<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <!-- <div class="h-8 bg-primary"><CustomUiSocialLinks /></div> -->
    <CustomUiNavBar />
    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-secondary text-white rounded-t-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <img
                src="/images/logo_copagri_og1.PNG"
                alt="Copagri Ogliastra Logo"
                class="h-10 rounded-lg object-cover"
              />
            </div>
            <p class="text-gray-100 text-sm">
              Rappresentiamo e sosteniamo le imprese agricole dell'Ogliastra,
              valorizzando la terra, le persone e i prodotti che la rendono
              unica.
            </p>
          </div>

          <div>
            <h3 class="font-semibold text-white mb-4">Servizi</h3>
            <ul class="space-y-2 text-sm text-gray-100">
              <li>Assistenza amministrativa</li>
              <li>Assistenza fiscale</li>
              <li>Assistenza tecnica</li>
              <li>Assistenza legale</li>
            </ul>
          </div>

          <div>
            <h3 class="font-semibold mb-4 text-white">Contatti</h3>
            <div class="space-y-2 text-sm text-gray-100">
              <div class="flex items-center space-x-2 hover:text-secondary-700">
                <Icon name="i-heroicons-envelope-solid" class="w-4 h-4" />
                <NuxtLink
                  to="mailto:sevizioagrivet@gmail.com"
                  class="hover:text-secondary-700"
                >
                  sevizioagrivet@gmail.com
                </NuxtLink>
              </div>
              <div class="flex items-center space-x-2 hover:text-secondary-700">
                <Icon name="i-heroicons-envelope-solid " class="w-4 h-4" />
                <NuxtLink
                  to="mailto:caacafagri.ogliastra@pec.it"
                  class="hover:text-secondary-700"
                >
                  caacafagri.ogliastra@pec.it
                </NuxtLink>
              </div>
              <div class="flex items-start space-x-2">
                <Icon name="i-heroicons-map-pin-solid" class="w-4 h-4 mt-0.5" />
                <span>Via Roma n.56, Villagrande Strisaili 08049</span>
              </div>
            </div>
          </div>
        </div>

        <div
          class="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400"
        >
          <p class="text-gray-100">
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
