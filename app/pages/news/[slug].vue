<template>
  <div v-if="post">
    <!-- Article Header -->
    <section class="py-16 bg-gray-900 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-6">
          <UBadge
            :class="getCategoryColor(post.meta.category)"
            variant="solid"
            size="lg"
          >
            {{ post.meta.category }}
          </UBadge>
        </div>

        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          {{ post.title }}
        </h1>

        <div class="flex items-center space-x-6 text-gray-300">
          <div class="flex items-center space-x-2">
            <Icon name="i-heroicons-calendar" class="w-5 h-5" />
            <span>{{ formatDate(post.meta?.date) }}</span>
          </div>
          <div class="flex items-center space-x-2">
            <Icon name="i-heroicons-user" class="w-5 h-5" />
            <span>{{ post.meta?.author || "Redazione Copagri" }}</span>
          </div>
          <div class="flex items-center space-x-2">
            <Icon name="i-heroicons-clock" class="w-5 h-5" />
            <span>{{ readingTime }} min di lettura</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Article Content -->
    <article class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="prose prose-lg max-w-none">
          <p class="text-xl text-gray-600 mb-8 font-medium">
            {{ post.description }}
          </p>

          <!-- Hero Image -->
          <div v-if="post.meta?.image" class="mb-8">
            <img
              :src="post.meta.image"
              :alt="post.title"
              class="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <!-- Article body from Markdown -->
          <ContentRenderer :value="post" />
        </div>

        <!-- Article Actions -->
        <div class="mt-12 pt-8 border-t border-gray-200">
          <div class="flex items-center justify-between">
            <div class="flex space-x-4" v-if="false">
              <UButton variant="soft" icon="i-heroicons-share">
                Condividi
              </UButton>
              <UButton variant="soft" icon="i-heroicons-printer">
                Stampa
              </UButton>
            </div>

            <NuxtLink to="/contatti">
              <UButton color="red">
                <Icon name="i-heroicons-phone" class="w-4 h-4 mr-2" />
                Contattaci per info
              </UButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </article>

    <!-- Related Articles -->
    <section v-if="relatedPosts.length > 0" class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">
          Articoli correlati
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article
            v-for="relatedPost in relatedPosts"
            :key="relatedPost._id"
            class="card-hover"
          >
            <UCard>
              <template #header>
                <div class="h-48 overflow-hidden rounded-t-lg">
                  <img
                    :src="getCleanedImageUrl(relatedPost.meta?.image)"
                    :alt="relatedPost.title"
                    class="w-full h-full object-cover"
                  />
                </div>
              </template>

              <div class="p-6">
                <div
                  class="flex items-center space-x-2 text-sm text-gray-500 mb-3"
                >
                  <Icon name="i-heroicons-calendar" class="w-4 h-4" />
                  <span>{{ formatDate(relatedPost.meta?.date) }}</span>
                </div>

                <h3 class="text-lg font-semibold mb-3 line-clamp-2">
                  {{ relatedPost.title }}
                </h3>

                <p class="text-gray-600 text-sm mb-4 line-clamp-2">
                  {{ relatedPost.description }}
                </p>

                <NuxtLink :to="relatedPost._path">
                  <UButton variant="soft" size="sm">
                    Leggi di più
                    <Icon name="i-heroicons-arrow-right" class="w-3 h-3 ml-1" />
                  </UButton>
                </NuxtLink>
              </div>
            </UCard>
          </article>
        </div>
      </div>
    </section>

    <!-- Back to News -->
    <section class="py-8 bg-white border-t">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <NuxtLink to="/news">
          <UButton variant="soft" icon="i-heroicons-arrow-left">
            Torna alle news
          </UButton>
        </NuxtLink>
      </div>
    </section>
  </div>

  <!-- 404 State -->
  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <Icon
        name="i-heroicons-document-text"
        class="w-16 h-16 text-gray-400 mx-auto mb-4"
      />
      <h1 class="text-2xl font-bold text-gray-900 mb-2">
        Articolo non trovato
      </h1>
      <p class="text-gray-600 mb-6">
        L'articolo che stai cercando non esiste o è stato rimosso.
      </p>
      <NuxtLink to="/news">
        <UButton>
          <Icon name="i-heroicons-arrow-left" class="w-4 h-4 mr-2" />
          Torna alle news
        </UButton>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
const { getCategoryColor, getCleanedImageUrl, getDefaultImage, formatDate } =
  useUtils();

const route = useRoute();
const contentStore = useContentStore();
const { posts } = storeToRefs(contentStore);

// ✅ Carica i contenuti se non sono già in memoria
await useAsyncData("blog-post", async () => {
  if (!posts.value.length) {
    await contentStore.fetchContent();
  }
  return true;
});

// ✅ Trova l’articolo corrente
const post = computed(() => {
  return posts.value.find((p) => p.meta.slug === `${route.params.slug}`);
});

// ✅ Articoli correlati
const relatedPosts = computed(() => {
  if (!post.value) return [];
  return posts.value
    .filter(
      (p) =>
        p._path !== post.value._path &&
        p.meta?.category === post.value.meta?.category
    )
    .slice(0, 3);
});

// ✅ Tempo di lettura stimato
const readingTime = computed(() => {
  if (!post.value) return 0;
  const wordsPerMinute = 200;
  const words = post.value.body?.children?.length || 300;
  return Math.ceil(words / wordsPerMinute);
});

// ✅ SEO dinamico
useHead(() => {
  if (!post.value) {
    return {
      title: "Articolo non trovato - Copagri Ogliastra",
    };
  }

  return {
    title: `${post.value.title} - Copagri Ogliastra`,
    meta: [
      {
        name: "description",
        content: post.value.description,
      },
    ],
  };
});
</script>
