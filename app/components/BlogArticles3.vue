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
        <div class="flex flex-wrap justify-center gap-2 mb-8">
          <UButton
            v-for="tag in availableTags"
            :key="tag"
            @click="activeTag = tag"
            class="px-6 py-3 rounded-full font-medium transition-all duration-300"
            :class="
              activeTag === tag
                ? 'bg-primary text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-primary hover:text-white'
            "
          >
            {{ tag }}
          </UButton>
        </div>
        <div v-if="filteredArticles.length > 0">
          <div class="mb-1">
            <article
              class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div class="relative h-64 lg:h-auto">
                  <img
                    :src="
                      featuredArticle.image ||
                      getDefaultImage(featuredArticle.meta.category)
                    "
                    :alt="featuredArticle.title"
                    class="w-full h-full object-cover"
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
                      color="primary"
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
                  src: article.image || getDefaultImage(article.meta.category),
                  alt: article.title,
                }"
                :date="formatDate(article.meta.date)"
                :badge="{
                  label: article.meta.category,
                  class: getCategoryColor(article.meta.category),
                  variant: 'solid',
                  size: 'sm',
                }"
                :ui="{
                  ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
                  shadow: 'shadow-md hover:shadow-lg transition duration-200',
                  wrapper: 'h-full',
                  image: {
                    wrapper: 'h-40',
                    img: 'object-cover',
                  },
                  body: {
                    base: 'flex flex-col flex-1',
                  },
                  footer: {
                    base: 'mt-auto pt-3',
                  },
                }"
              >
                <template #footer>
                  <UButton variant="soft" size="xs" class="w-full">
                    Leggi di più
                    <Icon name="i-heroicons-arrow-right" class="w-3 h-3 ml-1" />
                  </UButton>
                </template>
              </UBlogPost>
            </div>
          </div>
        </div>

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
  </section>
</template>

<script setup>
import { storeToRefs } from "pinia";

// Assicurati che useUtils sia accessibile (probabilmente un composable)
const contentStore = useContentStore();
const { getDefaultImage, getCategoryColor } = useUtils();

// SSR-safe: usa useAsyncData per il primo fetch
const { pending, error } = await useAsyncData("blog-posts-fetch", async () => {
  // Esegue l'azione, che popola contentStore.posts (se non è già popolato)
  await contentStore.fetchContent();
  return true;
});

// Stato reattivo locale per il tag selezionato
const activeTag = ref("Tutti");

// Getter Pinia 'allTags' è reattivo. Usiamo un computed per aggiungere "Tutti"
const availableTags = computed(() => ["Tutti", ...contentStore.allTags]);

// Getter Pinia 'getPostsByTag' è reattivo e dipende da activeTag.value
const filteredArticles = computed(() =>
  contentStore.getPostsByTag(activeTag.value)
);

// Articoli specifici per il layout
const featuredArticle = computed(() => filteredArticles.value[0]);
const otherArticles = computed(() => filteredArticles.value.slice(1, 5));

// Funzioni di utilità
const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("it-IT", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
</script>

<style scoped>
/* Stili specifici se necessario */
</style>
