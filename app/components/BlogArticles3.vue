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
          class="w-8 h-8 text-primaryRed-600 mx-auto mb-4 animate-spin"
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
                      :color="getCategoryColor(featuredArticle.meta.category)"
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
                    <NuxtLink :to="`/news/${featuredArticle.meta.slug}`">
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
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <article
                v-for="article in otherArticles"
                :key="article.id"
                class="card-hover"
              >
                <div class="h-full">
                  <div class="relative h-40 overflow-hidden rounded-2xl">
                    <img
                      :src="
                        article.image || getDefaultImage(article.meta.category)
                      "
                      :alt="article.title"
                      class="w-full h-full object-cover"
                    />
                    <div class="absolute top-2 left-2">
                      <UBadge
                        :color="getCategoryColor(article.meta.category)"
                        variant="solid"
                        size="sm"
                      >
                        {{ article.meta.category }}
                      </UBadge>
                    </div>
                  </div>

                  <div class="p-4">
                    <div
                      class="flex items-center space-x-2 text-xs text-gray-500 mb-2"
                    >
                      <Icon name="i-heroicons-calendar" class="w-3 h-3" />
                      <span>{{ formatDate(article.meta.date) }}</span>
                    </div>

                    <h4
                      class="text-sm font-semibold text-gray-900 mb-2 line-clamp-2"
                    >
                      {{ article.title }}
                    </h4>

                    <p class="text-xs text-gray-600 mb-3 line-clamp-3">
                      {{ article.description }}
                    </p>

                    <NuxtLink :to="`news/${article.meta.slug}`">
                      <UButton variant="soft" size="xs" class="w-full">
                        Leggi di più
                        <Icon
                          name="i-heroicons-arrow-right"
                          class="w-3 h-3 ml-1"
                        />
                      </UButton>
                    </NuxtLink>
                  </div>
                </div>
              </article>
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
          <NuxtLink to="/news">
            <UButton variant="outline" size="xl" color="primaryRed">
              Vedi tutte le news
              <Icon name="i-heroicons-newspaper" class="w-5 h-5 ml-2" />
            </UButton>
          </NuxtLink>
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
import { storeToRefs } from "pinia";
import { useContentStore } from "@/stores/contentStore";

const contentStore = useContentStore();

// SSR-safe: usa useAsyncData per il primo fetch
const { pending, error } = await useAsyncData("blog-posts-fetch", async () => {
  await contentStore.fetchContent();
  return true;
});

const { posts, loading } = storeToRefs(contentStore);
const activeTag = ref("Tutti");

const availableTags = computed(() => ["Tutti", ...contentStore.allTags]);

const filteredArticles = computed(() =>
  contentStore.getPostsByTag(activeTag.value)
);
console.log(filteredArticles.value);

const featuredArticle = computed(() => filteredArticles.value[0]);
const otherArticles = computed(() => filteredArticles.value.slice(1, 5));

const formatDate = (dateString) => {
  if (!dateString) return "";
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
