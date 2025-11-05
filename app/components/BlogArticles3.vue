<template>
  <UPageSection
    class="bg-white"
    title="Ultime notizie dal mondo agricolo"
    description=" Resta aggiornato su bandi, eventi, corsi di formazione e tutte le
          novità che riguardano l'agricoltura dell'Ogliastra."
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="pending || contentStore.loading" class="text-center py-12">
        <Icon
          name="i-heroicons-arrow-path"
          class="w-8 h-8 text-primary mx-auto mb-4 animate-spin"
        />
        <p class="text-gray-600">Caricamento articoli...</p>
      </div>

      <div v-else-if="error || contentStore.error" class="text-center py-12">
        <Icon
          name="i-heroicons-exclamation-triangle"
          class="w-16 h-16 text-primary mx-auto mb-4"
        />
        <h3 class="text-lg font-medium text-gray-900 mb-2">
          Errore nel caricamento
        </h3>
        <p class="text-gray-600">
          {{ error?.message || contentStore.error }}
        </p>
      </div>

      <div v-else-if="contentStore.posts.length > 0">
        <div class="flex justify-center mb-0">
          <UTabs
            color="secondary"
            :items="tagItems"
            v-model="activeTag"
            :by="'value'"
            class="w-full"
            size="xl"
          />
        </div>

        <Transition name="drop-down" mode="out-in">
          <div v-if="filteredArticles.length > 0" :key="activeTag">
            <div class="mb-1">
              <article
                class="bg-white rounded-md shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div
                    class="relative max-h-72 lg:h-auto justify-center items-center"
                  >
                    <img
                      :src="
                        featuredArticle.image ||
                        getDefaultImage(featuredArticle.meta.category)
                      "
                      :alt="featuredArticle.title"
                      class="w-full h-full object-cover rounded-md justify-center items-center"
                    />
                    <div class="absolute top-4 left-4">
                      <UBadge
                        :class="getCategoryColor(featuredArticle.meta.category)"
                        variant="solid"
                        size="lg"
                      >
                        {{ featuredArticle.meta.category }}
                      </UBadge>
                    </div>
                  </div>

                  <div class="p-8 flex flex-col justify-center">
                    <div
                      class="flex items-center space-x-4 text-sm text-gray-500 mb-4"
                    >
                      <div class="flex items-center space-x-1">
                        <Icon name="i-heroicons-calendar" class="w-4 h-4" />
                        <span>{{ formatDate(featuredArticle.meta.date) }}</span>
                      </div>
                      <div class="flex items-center space-x-1">
                        <Icon name="i-heroicons-user" class="w-4 h-4" />
                        <span>{{ featuredArticle.meta.author }}</span>
                      </div>
                    </div>

                    <h3 class="text-2xl font-bold text-gray-900 mb-4">
                      {{ featuredArticle.title }}
                    </h3>

                    <p class="text-gray-600 mb-6 leading-relaxed">
                      {{ featuredArticle.description }}
                    </p>

                    <div class="flex items-center space-x-4">
                      <UButton
                        :to="`/news/${featuredArticle.meta.slug}`"
                        size="lg"
                        color="secondary"
                      >
                        Leggi l'articolo completo
                        <Icon
                          name="i-heroicons-arrow-right"
                          class="w-4 h-4 ml-2"
                        />
                      </UButton>

                      <div class="flex flex-wrap gap-2">
                        <UBadge
                          v-for="tag in featuredArticle.meta.tags?.slice(0, 3)"
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
            <div v-if="otherArticles.length > 0">
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
                <UBlogPost
                  v-for="article in otherArticles"
                  :key="article.id"
                  :to="`/news/${article.meta.slug}`"
                  :title="article.title"
                  :description="article.description"
                  :image="{
                    src:
                      article.image || getDefaultImage(article.meta.category),
                    alt: article.title,
                  }"
                  :date="formatDate(article.meta.date)"
                  :badge="{
                    label: article.meta.category,
                    class: getCategoryColor(article.meta.category),
                    variant: 'solid',
                    size: 'sm',
                  }"
                >
                </UBlogPost>
              </div>
            </div>
          </div>

          <div v-else class="text-center py-12 flex" :key="'no-results'">
            <div class="mx-auto w-full">
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
          </div>
        </Transition>

        <div class="text-center mt-12">
          <UButton
            to="/news"
            size="xl"
            color="primary"
            variant="solid"
            icon="i-heroicons-newspaper"
            label="Vedi tutte le news"
          />
        </div>
      </div>

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
        <UButton to="/admin" variant="soft" color="primary">
          <Icon name="i-heroicons-plus" class="w-4 h-4 mr-2" />
          Aggiungi il primo articolo
        </UButton>
      </div>
    </div>
  </UPageSection>
</template>

<script setup>
// Assumendo che useContentStore e useUtils esistano e siano importabili.

const contentStore = useContentStore();
const { getCategoryColor, getDefaultImage, formatDate } = useUtils();

const { pending, error } = await useAsyncData("blog-posts-fetch", async () => {
  await contentStore.fetchContent();
  return true;
});

// --- LOGICA FILTRI UTabs (Semplificata) ---

// 1. Stato reattivo locale (la stringa del tag)
// const activeTag = ref("Tutti");
const activeTag = ref(contentStore.allTags[0]);

// 2. Getter per tutti i tag disponibili
// const availableTags = computed(() => ["Tutti", ...contentStore.allTags]);
const availableTags = computed(() => [...contentStore.allTags]);

// 3. Formato richiesto da UTabs: DEVE includere 'value' per l'opzione :by="'value'"
const tagItems = computed(
  () => [
    { label: "Sociale", value: "sociale" },
    { label: "Cultura", value: "cultura" },
    { label: "Sostenibilità", value: "sostenibilita" },
    { label: "Economia", value: "economia" },
  ]
  // availableTags.value.map((tag) => ({
  //   label: tag,
  //   value: tag, // Il valore è la stringa del tag
  // }))
);

// --- Logica Articoli ---
// Getter Pinia 'getPostsByTag' è reattivo e dipende da activeTag.value
const filteredArticles = computed(() =>
  contentStore.getPostsByTag(activeTag.value)
);

// Articoli specifici per il layout
const featuredArticle = computed(() => filteredArticles.value[0]);
const otherArticles = computed(() => filteredArticles.value.slice(1, 5));

// Funzioni di utilità
</script>

<style scoped>
/* Transizione per l'animazione di "caduta" (drop-down) */
.drop-down-enter-active,
.drop-down-leave-active {
  transition:
    opacity 0.5s ease-out,
    transform 0.5s ease-out;
}

.drop-down-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.drop-down-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
