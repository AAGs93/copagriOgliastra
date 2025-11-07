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
            <span>{{ formatDate(post.date) }}</span>
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

    <!-- ✅ Article Content + TOC sidebar -->
    <article class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-10">
        <!-- ✅ Sticky Sidebar TOC -->
        <aside
          v-if="headings.length"
          class="hidden lg:block w-80 sticky top-10 h-fit bg-gray-50 border border-gray-200 rounded-xl p-5"
        >
          <h3 class="text-lg font-semibold mb-4 text-gray-900">
            In questo articolo
          </h3>

          <nav>
            <ul class="space-y-2">
              <li v-for="heading in headings" :key="heading.id">
                <a
                  :href="`#${heading.id}`"
                  :class="[
                    'block text-sm transition',
                    activeSection === heading.id
                      ? 'text-red-600 font-semibold'
                      : 'text-gray-700 hover:text-red-600',
                  ]"
                >
                  {{ heading.text }}
                </a>

                <ul v-if="heading.children" class="ml-4 mt-2 space-y-1">
                  <li v-for="child in heading.children" :key="child.id">
                    <a
                      :href="`#${child.id}`"
                      :class="[
                        'text-xs transition',
                        activeSection === child.id
                          ? 'text-red-600 font-semibold'
                          : 'text-gray-600 hover:text-red-600',
                      ]"
                    >
                      {{ child.text }}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </aside>

        <!-- ✅ Body -->
        <div class="prose prose-lg max-w-none w-full">
          <p class="text-xl text-gray-600 mb-8 font-medium">
            {{ post.meta?.slug }}
          </p>

          <div v-if="post.meta?.image" class="mb-8">
            <img
              :src="post.meta.image"
              :alt="post.title"
              class="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <ContentRenderer :value="post" />
        </div>
      </div>
    </article>

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
import { onMounted, ref, computed } from "vue";
import { storeToRefs } from "pinia";

const { getCategoryColor, getCleanedImageUrl, getDefaultImage, formatDate } =
  useUtils();

const route = useRoute();
const contentStore = useContentStore();
const { posts } = storeToRefs(contentStore);

// ✅ Carica contenuti se non presenti
await useAsyncData("blog-post", async () => {
  if (!posts.value.length) await contentStore.fetchContent();
  return true;
});

// ✅ Articolo corrente
const post = computed(() =>
  posts.value.find((p) => p.meta.slug === `${route.params.slug}`)
);

// ✅ TOC headings estratti da nuxt content
const headings = computed(() => post.value?.body?.toc?.links || []);

// ✅ Scrollspy
const activeSection = ref(null);

onMounted(() => {
  const allAnchors = document.querySelectorAll("h2[id], h3[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activeSection.value = entry.target.id;
      });
    },
    { rootMargin: "-60% 0px -30% 0px", threshold: 0 }
  );

  allAnchors.forEach((a) => observer.observe(a));
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

// ✅ Reading time
const readingTime = computed(() => {
  if (!post.value) return 0;
  const wordsPerMinute = 200;
  const words = post.value.body?.children?.length || 300;
  return Math.ceil(words / wordsPerMinute);
});

// ✅ SEO dinamico
useHead(() => ({
  title: post.value
    ? `${post.value.title} - Copagri Ogliastra`
    : "Articolo non trovato",
  meta: [{ name: "description", content: post.value?.description || "" }],
}));
</script>
