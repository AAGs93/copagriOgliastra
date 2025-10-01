<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          Ultime notizie dal mondo agricolo
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Resta aggiornato su bandi, eventi, corsi di formazione e tutte le novità 
          che riguardano l'agricoltura dell'Ogliastra.
        </p>
      </div>

      <!-- Tabs -->
      <div class="flex flex-wrap justify-center gap-2 mb-8">
        <button
          v-for="tag in availableTags"
          :key="tag"
          @click="activeTag = tag"
          class="px-6 py-3 rounded-full font-medium transition-all duration-300"
          :class="activeTag === tag 
            ? 'bg-primaryRed-600 text-white shadow-lg' 
            : 'bg-gray-100 text-gray-700 hover:bg-primaryRed-50 hover:text-primaryRed-600'"
        >
          {{ tag }}
        </button>
      </div>

      <!-- Articles Content -->
      <div v-if="filteredArticles.length > 0">
        <!-- Featured Article (Latest) -->
        <div class="mb-12">
          <article class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <!-- Image -->
              <div class="relative h-64 lg:h-auto">
                <img 
                  :src="featuredArticle.image || getDefaultImage(featuredArticle.category)"
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
                <div class="flex items-center space-x-4 text-sm text-gray-500 mb-4">
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
                      <Icon name="i-heroicons-arrow-right" class="w-4 h-4 ml-2" />
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
          <h3 class="text-xl font-semibold text-gray-900 mb-6">Altri articoli</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <article 
              v-for="article in otherArticles" 
              :key="article.id"
              class="card-hover"
            >
              <UCard class="h-full">
                <template #header>
                  <div class="relative h-40 overflow-hidden">
                    <img 
                      :src="article.image || getDefaultImage(article.category)"
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
                  <div class="flex items-center space-x-2 text-xs text-gray-500 mb-2">
                    <Icon name="i-heroicons-calendar" class="w-3 h-3" />
                    <span>{{ formatDate(article.date) }}</span>
                  </div>
                  
                  <h4 class="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">
                    {{ article.title }}
                  </h4>
                  
                  <p class="text-xs text-gray-600 mb-3 line-clamp-3">
                    {{ article.excerpt }}
                  </p>
                  
                  <NuxtLink :to="`/news/${article.slug}`">
                    <UButton variant="soft" size="xs" class="w-full">
                      Leggi di più
                      <Icon name="i-heroicons-arrow-right" class="w-3 h-3 ml-1" />
                    </UButton>
                  </NuxtLink>
                </div>
              </UCard>
            </article>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-12">
        <Icon name="i-heroicons-document-text" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h3 class="text-lg font-medium text-gray-900 mb-2">
          Nessun articolo trovato per "{{ activeTag }}"
        </h3>
        <p class="text-gray-600">
          Prova a selezionare un altro tag o torna più tardi per nuovi contenuti.
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
  </section>
</template>

<script setup>
// Mock data per gli articoli (in produzione verrebbe da Decap CMS)
const blogArticles = [
  {
    id: 1,
    title: 'Nuovi bandi PAC 2024: opportunità per le aziende agricole',
    slug: 'nuovi-bandi-pac-2024',
    excerpt: 'Sono stati pubblicati i nuovi bandi della Politica Agricola Comune per il 2024. Scopri le opportunità per la tua azienda agricola e come accedere ai contributi europei.',
    author: 'Staff Copagri',
    date: '2024-01-15',
    category: 'Bandi',
    tags: ['PAC', 'bandi', 'contributi', '2024'],
    image: null
  },
  {
    id: 2,
    title: 'Corso di formazione: tecniche innovative in olivicoltura',
    slug: 'corso-formazione-olivicoltura',
    excerpt: 'Un corso dedicato alle nuove tecniche di coltivazione dell\'olivo, per migliorare la qualità e la sostenibilità della produzione in Ogliastra.',
    author: 'Dott. Mario Rossi',
    date: '2024-01-12',
    category: 'Formazione',
    tags: ['formazione', 'olivicoltura', 'sostenibilità'],
    image: null
  },
  {
    id: 3,
    title: 'Assemblea annuale dei soci: risultati e progetti futuri',
    slug: 'assemblea-annuale-soci-2024',
    excerpt: 'Si è tenuta l\'assemblea annuale di Copagri Ogliastra. Ecco i risultati dell\'anno passato e i progetti per il futuro dell\'agricoltura locale.',
    author: 'Presidente Copagri',
    date: '2024-01-10',
    category: 'Eventi',
    tags: ['eventi', 'assemblea', 'soci'],
    image: null
  },
  {
    id: 4,
    title: 'Nuove normative fitosanitarie: cosa cambia per gli agricoltori',
    slug: 'normative-fitosanitarie-2024',
    excerpt: 'Le nuove normative europee sui fitosanitari entrano in vigore. Ecco cosa devono sapere gli agricoltori per rimanere in regola.',
    author: 'Dott.ssa Anna Verdi',
    date: '2024-01-08',
    category: 'Normative',
    tags: ['normative', 'fitosanitari', 'regolamenti'],
    image: null
  },
  {
    id: 5,
    title: 'Sostegno alle giovani imprese agricole: bando regionale aperto',
    slug: 'sostegno-giovani-imprese-agricole',
    excerpt: 'La Regione Sardegna ha aperto un nuovo bando per sostenere l\'insediamento di giovani imprenditori in agricoltura.',
    author: 'Staff Copagri',
    date: '2024-01-05',
    category: 'Bandi',
    tags: ['bandi', 'giovani', 'imprese'],
    image: null
  },
  {
    id: 6,
    title: 'Workshop su agricoltura biologica e certificazioni',
    slug: 'workshop-agricoltura-biologica',
    excerpt: 'Un workshop pratico dedicato all\'agricoltura biologica e alle procedure per ottenere le certificazioni necessarie.',
    author: 'Dott. Giuseppe Bianchi',
    date: '2024-01-03',
    category: 'Formazione',
    tags: ['formazione', 'biologico', 'certificazioni'],
    image: null
  },
  {
    id: 7,
    title: 'Fiera dell\'agricoltura ogliastrina 2024',
    slug: 'fiera-agricoltura-ogliastrina-2024',
    excerpt: 'Torna la fiera dell\'agricoltura ogliastrina con espositori, degustazioni e incontri tecnici per valorizzare i prodotti locali.',
    author: 'Comitato Organizzatore',
    date: '2024-01-01',
    category: 'Eventi',
    tags: ['eventi', 'fiera', 'prodotti locali'],
    image: null
  }
]

// Stati reattivi
const activeTag = ref('Tutti')

// Computed
const availableTags = computed(() => {
  const tags = new Set(['Tutti'])
  blogArticles.forEach(article => {
    if (article.tags) {
      article.tags.forEach(tag => tags.add(tag))
    }
  })
  return Array.from(tags)
})

const filteredArticles = computed(() => {
  if (activeTag.value === 'Tutti') {
    return [...blogArticles].sort((a, b) => new Date(b.date) - new Date(a.date))
  }
  
  return blogArticles
    .filter(article => article.tags?.includes(activeTag.value))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
})

const featuredArticle = computed(() => {
  return filteredArticles.value[0]
})

const otherArticles = computed(() => {
  return filteredArticles.value.slice(1, 5) // Mostra massimo 4 articoli nella griglia
})

// Metodi
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('it-IT', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}

const getCategoryColor = (category) => {
  const colors = {
    'Bandi': 'primaryRed',
    'Formazione': 'blue',
    'Eventi': 'purple',
    'Normative': 'orange',
    'Notizie': 'gray'
  }
  return colors[category] || 'gray'
}

const getDefaultImage = (category) => {
  const images = {
    'Bandi': 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'Formazione': 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'Eventi': 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'Normative': 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'Notizie': 'https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  }
  return images[category] || images['Notizie']
}
</script>