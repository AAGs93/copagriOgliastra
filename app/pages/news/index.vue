<template>
  <div>
    <!-- Page Header -->
    <section class="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold mb-4">News e Aggiornamenti</h1>
        <p class="text-xl text-blue-100 max-w-3xl">
          Rimani sempre aggiornato su bandi, eventi, corsi di formazione e tutte le novità 
          che riguardano il mondo agricolo dell'Ogliastra.
        </p>
      </div>
    </section>

    <!-- Filtri -->
    <section class="py-8 bg-white border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div class="flex flex-col sm:flex-row gap-4">
            <USelect 
              v-model="selectedCategory" 
              :options="categories"
              placeholder="Tutte le categorie"
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
            {{ filteredPosts.length }} articolo{{ filteredPosts.length !== 1 ? 'i' : '' }} trovato{{ filteredPosts.length !== 1 ? 'i' : '' }}
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Posts -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div v-if="filteredPosts.length === 0" class="text-center py-12">
          <Icon name="i-heroicons-document-text" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 class="text-lg font-medium text-gray-900 mb-2">Nessun articolo trovato</h3>
          <p class="text-gray-600">Prova a modificare i filtri di ricerca</p>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="post in filteredPosts" 
            :key="post.id"
            class="card-hover"
          >
            <UCard>
              <template #header>
                <div class="h-48 bg-gradient-to-br from-red-400 to-orange-500 rounded-t-lg relative overflow-hidden">
                  <img 
                    v-if="post.image" 
                    :src="post.image" 
                    :alt="post.title"
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute top-4 left-4">
                    <UBadge 
                      :color="getCategoryColor(post.category)" 
                      variant="solid" 
                      size="sm"
                    >
                      {{ post.category }}
                    </UBadge>
                  </div>
                </div>
              </template>
              
              <div class="p-6">
                <div class="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div class="flex items-center space-x-1">
                    <Icon name="i-heroicons-calendar" class="w-4 h-4" />
                    <span>{{ formatDate(post.date) }}</span>
                  </div>
                  <div class="flex items-center space-x-1">
                    <Icon name="i-heroicons-user" class="w-4 h-4" />
                    <span>{{ post.author }}</span>
                  </div>
                </div>
                
                <h3 class="text-lg font-semibold mb-3 line-clamp-2">
                  {{ post.title }}
                </h3>
                
                <p class="text-gray-600 text-sm mb-4 line-clamp-3">
                  {{ post.excerpt }}
                </p>
                
                <NuxtLink :to="`/news/${post.slug}`">
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

    <!-- Newsletter Signup -->
    <section class="py-16 bg-red-600">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">
          Resta sempre aggiornato
        </h2>
        <p class="text-xl text-red-100 mb-8">
          Iscriviti alla nostra newsletter per ricevere le ultime notizie direttamente nella tua email.
        </p>
        
        <div class="max-w-md mx-auto">
          <div class="flex gap-4">
            <UInput
              v-model="newsletterEmail"
              placeholder="La tua email"
              type="email"
              icon="i-heroicons-envelope"
              class="flex-1"
            />
            <UButton 
              @click="subscribeNewsletter"
              :loading="newsletterLoading"
              color="white"
            >
              Iscriviti
            </UButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'News - Copagri Ogliastra',
  meta: [
    {
      name: 'description',
      content: 'Scopri le ultime notizie, bandi e aggiornamenti dal mondo agricolo dell\'Ogliastra. News, eventi e opportunità per le aziende agricole.'
    }
  ]
})

// Dati mock per il blog
const blogPosts = [
  {
    id: 1,
    title: 'Nuovi bandi PAC 2024: opportunità per le aziende agricole',
    slug: 'nuovi-bandi-pac-2024',
    excerpt: 'Sono stati pubblicati i nuovi bandi della Politica Agricola Comune per il 2024. Scopri le opportunità per la tua azienda agricola e come accedere ai contributi.',
    content: '',
    author: 'Staff Copagri',
    date: '2024-01-15',
    category: 'Bandi',
    image: null
  },
  {
    id: 2,
    title: 'Corso di formazione: tecniche innovative in olivicoltura',
    slug: 'corso-formazione-olivicoltura',
    excerpt: 'Un corso dedicato alle nuove tecniche di coltivazione dell\'olivo, per migliorare la qualità e la sostenibilità della produzione in Ogliastra.',
    content: '',
    author: 'Dott. Mario Rossi',
    date: '2024-01-12',
    category: 'Formazione',
    image: null
  },
  {
    id: 3,
    title: 'Assemblea annuale dei soci: risultati e progetti futuri',
    slug: 'assemblea-annuale-soci-2024',
    excerpt: 'Si è tenuta l\'assemblea annuale di Copagri Ogliastra. Ecco i risultati dell\'anno passato e i progetti per il futuro dell\'agricoltura locale.',
    content: '',
    author: 'Presidente Copagri',
    date: '2024-01-10',
    category: 'Eventi',
    image: null
  },
  {
    id: 4,
    title: 'Nuove normative fitosanitarie: cosa cambia per gli agricoltori',
    slug: 'normative-fitosanitarie-2024',
    excerpt: 'Le nuove normative europee sui fitosanitari entrano in vigore. Ecco cosa devono sapere gli agricoltori per rimanere in regola.',
    content: '',
    author: 'Dott.ssa Anna Verdi',
    date: '2024-01-08',
    category: 'Normative',
    image: null
  },
  {
    id: 5,
    title: 'Sostegno alle giovani imprese agricole: bando regionale aperto',
    slug: 'sostegno-giovani-imprese-agricole',
    excerpt: 'La Regione Sardegna ha aperto un nuovo bando per sostenere l\'insediamento di giovani imprenditori in agricoltura. Scadenza 28 febbraio 2024.',
    content: '',
    author: 'Staff Copagri',
    date: '2024-01-05',
    category: 'Bandi',
    image: null
  }
]

const categories = [
  'Tutte le categorie',
  'Bandi',
  'Formazione',
  'Eventi',
  'Normative',
  'Notizie'
]

// Stati reattivi
const selectedCategory = ref('Tutte le categorie')
const searchQuery = ref('')
const currentPage = ref(1)
const pageSize = 6
const newsletterEmail = ref('')
const newsletterLoading = ref(false)

// Computed
const filteredPosts = computed(() => {
  let filtered = [...blogPosts]
  
  // Filtro per categoria
  if (selectedCategory.value && selectedCategory.value !== 'Tutte le categorie') {
    filtered = filtered.filter(post => post.category === selectedCategory.value)
  }
  
  // Filtro per ricerca
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(post => 
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.author.toLowerCase().includes(query)
    )
  }
  
  return filtered
})

const totalPages = computed(() => {
  return Math.ceil(filteredPosts.value.length / pageSize)
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
    'Bandi': 'red',
    'Formazione': 'blue',
    'Eventi': 'purple',
    'Normative': 'orange',
    'Notizie': 'gray'
  }
  return colors[category] || 'gray'
}

const subscribeNewsletter = async () => {
  if (!newsletterEmail.value) return
  
  newsletterLoading.value = true
  
  try {
    // Qui implementeresti l'iscrizione alla newsletter
    await new Promise(resolve => setTimeout(resolve, 1000))
    newsletterEmail.value = ''
    console.log('Iscrizione alla newsletter completata!')
  } catch (error) {
    console.error('Errore nell\'iscrizione:', error)
  } finally {
    newsletterLoading.value = false
  }
}
</script>