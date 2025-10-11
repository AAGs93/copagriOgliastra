<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          Ultime notizie dal mondo agricolo
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Resta aggiornato su bandi, eventi, corsi di formazione e tutte le
          novità che riguardano l'agricoltura dell'Ogliastra.
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="pending" class="text-center py-12">
        <Icon
          name="i-heroicons-arrow-path"
          class="w-8 h-8 text-primaryRed-600 mx-auto mb-4 animate-spin"
        />
        <p class="text-gray-600">Caricamento articoli...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12">
        <Icon
          name="i-heroicons-exclamation-triangle"
          class="w-16 h-16 text-red-500 mx-auto mb-4"
        />
        <h3 class="text-lg font-medium text-gray-900 mb-2">
          Errore nel caricamento
        </h3>
        <p class="text-gray-600">{{ error.message }}</p>
      </div>

      <!-- Content -->
      <div v-else-if="articles && articles.length > 0">
        <!-- Tabs -->
        <div class="flex flex-wrap justify-center gap-2 mb-8">
          <button
            v-for="tag in availableTags"
            :key="tag"
            @click="activeTag = tag"
            class="px-6 py-3 rounded-full font-medium transition-all duration-300"
            :class="
              activeTag === tag
                ? 'bg-primaryRed-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-primaryRed-50 hover:text-primaryRed-600'
            "
          >
            {{ tag }}
          </button>
        </div>

        <!-- Articles Content -->
        <div v-if="filteredArticles.length > 0">
          <!-- Featured Article (Latest) -->
          <div class="mb-12">
            <article
              class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <!-- Image -->
                <div class="relative h-64 lg:h-auto">
                  <img
                    :src="
                      featuredArticle.image ||
                      getDefaultImage(featuredArticle.category)
                    "
                    :alt="featuredArticle.title"
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute top-4 left-4">
                    <UBadge
                      :color="getCategoryColor(featuredArticle.category)"
                      variant="solid"
                      size="lg"
                    >
                      {{ featuredArticle.category }}
                    </UBadge>
                  </div>
                </div>

                <!-- Content -->
                <div class="p-8 flex flex-col justify-center">
                  <div
                    class="flex items-center space-x-4 text-sm text-gray-500 mb-4"
                  >
                    <div class="flex items-center space-x-1">
                      <Icon name="i-heroicons-calendar" class="w-4 h-4" />
                      <span>{{ formatDate(featuredArticle.date) }}</span>
                    </div>
                    <div class="flex items-center space-x-1">
                      <Icon name="i-heroicons-user" class="w-4 h-4" />
                      <span>{{ featuredArticle.author }}</span>
                    </div>
                  </div>

                  <h3 class="text-2xl font-bold text-gray-900 mb-4">
                    {{ featuredArticle.title }}
                  </h3>

                  <p class="text-gray-600 mb-6 leading-relaxed">
                    {{ featuredArticle.excerpt }}
                  </p>

                  <div class="flex items-center space-x-4">
                    <NuxtLink :to="`/news/${featuredArticle.slug}`">
                      <UButton size="lg" color="primaryRed">
                        Leggi l'articolo completo
                        <Icon
                          name="i-heroicons-arrow-right"
                          class="w-4 h-4 ml-2"
                        />
                      </UButton>
                    </NuxtLink>

                    <div class="flex flex-wrap gap-2">
                      <UBadge
                        v-for="tag in featuredArticle.tags?.slice(0, 3)"
                        :key="tag"
                        variant="soft"
                        size="sm"
                      >
                        {{ tag }}
                      </UBadge>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <!-- Other Articles Grid -->
          <div v-if="otherArticles.length > 0">
            <h3 class="text-xl font-semibold text-gray-900 mb-6">
              Altri articoli
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <article
                v-for="article in otherArticles"
                :key="article._id"
                class="card-hover"
              >
                <UCard class="h-full">
                  <template #header>
                    <div class="relative h-40 overflow-hidden">
                      <img
                        :src="
                          article.image || getDefaultImage(article.category)
                        "
                        :alt="article.title"
                        class="w-full h-full object-cover"
                      />
                      <div class="absolute top-2 left-2">
                        <UBadge
                          :color="getCategoryColor(article.category)"
                          variant="solid"
                          size="sm"
                        >
                          {{ article.category }}
                        </UBadge>
                      </div>
                    </div>
                  </template>

                  <div class="p-4">
                    <div
                      class="flex items-center space-x-2 text-xs text-gray-500 mb-2"
                    >
                      <Icon name="i-heroicons-calendar" class="w-3 h-3" />
                      <span>{{ formatDate(article.date) }}</span>
                    </div>

                    <h4
                      class="text-sm font-semibold text-gray-900 mb-2 line-clamp-2"
                    >
                      {{ article.title }}
                    </h4>

                    <p class="text-xs text-gray-600 mb-3 line-clamp-3">
                      {{ article.excerpt }}
                    </p>

                    <NuxtLink :to="`/news/${article.slug}`">
                      <UButton variant="soft" size="xs" class="w-full">
                        Leggi di più
                        <Icon
                          name="i-heroicons-arrow-right"
                          class="w-3 h-3 ml-1"
                        />
                      </UButton>
                    </NuxtLink>
                  </div>
                </UCard>
              </article>
            </div>
          </div>
        </div>

        <!-- Empty State for filtered results -->
        <div v-else class="text-center py-12">
          <Icon
            name="i-heroicons-document-text"
            class="w-16 h-16 text-gray-400 mx-auto mb-4"
          />
          <h3 class="text-lg font-medium text-gray-900 mb-2">
            Nessun articolo trovato per "{{ activeTag }}"
          </h3>
          <p class="text-gray-600">
            Prova a selezionare un altro tag o torna più tardi per nuovi
            contenuti.
          </p>
        </div>

        <!-- View All Button -->
        <div class="text-center mt-12">
          <NuxtLink to="/news">
            <UButton variant="outline" size="xl" color="primaryRed">
              Vedi tutte le news
              <Icon name="i-heroicons-newspaper" class="w-5 h-5 ml-2" />
            </UButton>
          </NuxtLink>
        </div>
      </div>

      <!-- No Articles State -->
      <div v-else class="text-center py-12">
        <Icon
          name="i-heroicons-document-plus"
          class="w-16 h-16 text-gray-400 mx-auto mb-4"
        />
        <h3 class="text-lg font-medium text-gray-900 mb-2">
          Nessun articolo disponibile
        </h3>
        <p class="text-gray-600 mb-6">
          Non ci sono ancora articoli pubblicati. Torna più tardi per nuovi
          contenuti.
        </p>
        <NuxtLink to="/admin">
          <UButton variant="soft" color="primaryRed">
            <Icon name="i-heroicons-plus" class="w-4 h-4 mr-2" />
            Aggiungi il primo articolo
          </UButton>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
// Carica gli articoli dal CMS usando Nuxt Content v3
const {
  data: articles,
  pending,
  error,
} = await useAsyncData("blog-articles", () =>
  $fetch("/api/_content/query", {
    method: "GET",
    query: {
      _params: JSON.stringify({
        where: [{ published: { $ne: false } }],
        sort: [{ date: -1 }],
        limit: 20,
      }),
    },
  })
);

// Stati reattivi
const activeTag = ref("Tutti");

// Computed
const availableTags = computed(() => {
  if (!articles.value) return ["Tutti"];

  const tags = new Set(["Tutti"]);
  articles.value.forEach((article) => {
    if (article.tags && Array.isArray(article.tags)) {
      article.tags.forEach((tag) => tags.add(tag));
    }
  });
  return Array.from(tags);
});

const filteredArticles = computed(() => {
  if (!articles.value) return [];

  if (activeTag.value === "Tutti") {
    return articles.value;
  }

  return articles.value.filter(
    (article) => article.tags && article.tags.includes(activeTag.value)
  );
});

const featuredArticle = computed(() => {
  return filteredArticles.value[0];
});

const otherArticles = computed(() => {
  return filteredArticles.value.slice(1, 5); // Mostra massimo 4 articoli nella griglia
});

// Metodi
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("it-IT", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const getCategoryColor = (category) => {
  const colors = {
    Bandi: "primaryRed",
    Formazione: "blue",
    Eventi: "purple",
    Normative: "orange",
    Notizie: "gray",
  };
  return colors[category] || "gray";
};

const getDefaultImage = (category) => {
  const images = {
    Bandi:
      "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    Formazione:
      "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    Eventi:
      "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    Normative:
      "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    Notizie:
      "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  };
  return images[category] || images["Notizie"];
};
</script>
