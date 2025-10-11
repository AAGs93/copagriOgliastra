<template>
  <div>
    <!-- Header -->
    <section
      class="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold mb-4">News e Aggiornamenti</h1>
        <p class="text-xl text-blue-100 max-w-3xl">
          Rimani aggiornato su bandi, eventi, corsi di formazione e tutte le
          novità del mondo agricolo in Ogliastra.
        </p>
      </div>
    </section>

    <!-- Filtri -->
    <section class="py-8 bg-white border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="flex flex-col sm:flex-row gap-4 items-center justify-between"
        >
          <div class="flex flex-col sm:flex-row gap-4">
            <USelect
              v-model="selectedTag"
              :options="['Tutti', ...allTags]"
              placeholder="Tutti"
              class="w-full sm:w-auto"
            />
            <UInput
              v-model="searchQuery"
              placeholder="Cerca negli articoli..."
              icon="i-heroicons-magnifying-glass"
              class="w-full sm:w-64"
            />
          </div>
          <div class="text-sm text-gray-600">
            {{ filteredPosts.length }} articolo{{
              filteredPosts.length !== 1 ? "i" : ""
            }}
            trovato{{ filteredPosts.length !== 1 ? "i" : "" }}
          </div>
        </div>
      </div>
    </section>

    <!-- Lista articoli -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Loading -->
        <div v-if="loading" class="text-center py-12">
          <Icon
            name="i-heroicons-arrow-path"
            class="w-8 h-8 mx-auto mb-4 animate-spin text-primaryRed-600"
          />
          <p class="text-gray-600">Caricamento articoli...</p>
        </div>

        <!-- Error -->
        <div v-else-if="error" class="text-center py-12">
          <Icon
            name="i-heroicons-exclamation-triangle"
            class="w-16 h-16 text-red-500 mx-auto mb-4"
          />
          <h3 class="text-lg font-medium text-gray-900 mb-2">
            Errore nel caricamento
          </h3>
          <p class="text-gray-600">{{ error }}</p>
        </div>

        <!-- Nessun articolo -->
        <div v-else-if="filteredPosts.length === 0" class="text-center py-12">
          <Icon
            name="i-heroicons-document-text"
            class="w-16 h-16 text-gray-400 mx-auto mb-4"
          />
          <h3 class="text-lg font-medium text-gray-900 mb-2">
            Nessun articolo trovato
          </h3>
          <p class="text-gray-600">Prova a modificare i filtri di ricerca</p>
        </div>

        <!-- Griglia articoli -->
        <div
          v-else
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <article
            v-for="post in paginatedPosts"
            :key="post._id"
            class="card-hover"
          >
            <UCard>
              <template #header>
                <div
                  class="h-48 bg-gradient-to-br from-red-400 to-orange-500 rounded-t-lg relative overflow-hidden"
                >
                  <img
                    v-if="post.image"
                    :src="post.image"
                    :alt="post.title"
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute top-4 left-4">
                    <UBadge
                      :class="getCategoryColor(post.meta.category)"
                      variant="solid"
                      size="sm"
                    >
                      {{ post.tags[0] }}
                    </UBadge>
                  </div>
                </div>
              </template>

              <div class="p-6">
                <div
                  class="flex items-center space-x-4 text-sm text-gray-500 mb-3"
                >
                  <div class="flex items-center space-x-1">
                    <Icon name="i-heroicons-calendar" class="w-4 h-4" />
                    <span>{{ formatDate(post.meta.date) }}</span>
                  </div>
                  <div class="flex items-center space-x-1">
                    <Icon name="i-heroicons-user" class="w-4 h-4" />
                    <span>{{ post.meta.author }}</span>
                  </div>
                </div>

                <h3 class="text-lg font-semibold mb-3 line-clamp-2">
                  {{ post.title }}
                </h3>

                <p class="text-gray-600 text-sm mb-4 line-clamp-3">
                  {{ post.meta.excerpt }}
                </p>

                <NuxtLink :to="`/news/${post.meta.slug}`">
                  <UButton variant="soft" size="sm">
                    Leggi di più
                    <Icon name="i-heroicons-arrow-right" class="w-3 h-3 ml-1" />
                  </UButton>
                </NuxtLink>
              </div>
            </UCard>
          </article>
        </div>

        <!-- Paginazione -->
        <div v-if="totalPages > 1" class="flex justify-center mt-12">
          <UPagination
            v-model="currentPage"
            :page-count="pageSize"
            :total="filteredPosts.length"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useContentStore } from "~/stores/contentStore";

const contentStore = useContentStore();

// Filtri e paginazione
const selectedTag = ref("Tutti");
const searchQuery = ref("");
const currentPage = ref(1);
const pageSize = 6;

// Fetch iniziale
onMounted(async () => {
  await contentStore.fetchContent();
});

// Computed
const loading = computed(() => contentStore.loading);
const error = computed(() => contentStore.error);
const allTags = computed(() => contentStore.allTags);

// Filtra articoli
const filteredPosts = computed(() => {
  let posts = contentStore.posts;

  // Filtro per tag
  if (selectedTag.value && selectedTag.value !== "Tutti") {
    posts = contentStore.getPostsByTag(selectedTag.value);
  }

  // Filtro per ricerca
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    posts = posts.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.meta.author.toLowerCase().includes(query)
    );
  }

  return posts;
});

// Paginazione
const totalPages = computed(() =>
  Math.ceil(filteredPosts.value.length / pageSize)
);
const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return filteredPosts.value.slice(start, end);
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
    Bandi: "bg-red-500",
    Formazione: "bg-blue-500",
    Eventi: "bg-purple-500",
    Normative: "bg-orange-500",
    Notizie: "bg-gray-500",
  };
  return colors[category] || "gray";
};
</script>
