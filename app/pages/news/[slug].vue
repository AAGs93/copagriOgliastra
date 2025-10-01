<template>
  <div v-if="post">
    <!-- Article Header -->
    <section class="py-16 bg-gray-900 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-6">
          <UBadge 
            :color="getCategoryColor(post.category)" 
            variant="solid" 
            size="lg"
          >
            {{ post.category }}
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
            <span>{{ post.author }}</span>
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
            {{ post.excerpt }}
          </p>
          
          <!-- Hero Image -->
          <div v-if="post.image" class="mb-8">
            <img 
              :src="post.image" 
              :alt="post.title"
              class="w-full h-96 object-cover rounded-xl"
            />
          </div>
          
          <!-- Article Body (placeholder) -->
          <div class="space-y-6">
            <p>
              Questo è il contenuto dell'articolo. In una implementazione reale, 
              questo contenuto verrebbe caricato dal CMS (Decap CMS) e potrebbe 
              includere testo formattato, immagini, video e altri media.
            </p>
            
            <h2>Dettagli del bando</h2>
            <p>
              Qui vengono forniti i dettagli specifici del bando o dell'argomento trattato,
              con tutte le informazioni necessarie per gli agricoltori interessati.
            </p>
            
            <h3>Come partecipare</h3>
            <ul>
              <li>Requisito 1: esempio di requisito</li>
              <li>Requisito 2: altro esempio</li>
              <li>Requisito 3: ulteriore esempio</li>
            </ul>
            
            <p>
              Per maggiori informazioni e per ricevere assistenza nella compilazione 
              delle domande, contatta gli uffici di Copagri Ogliastra.
            </p>
          </div>
        </div>

        <!-- Article Actions -->
        <div class="mt-12 pt-8 border-t border-gray-200">
          <div class="flex items-center justify-between">
            <div class="flex space-x-4">
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
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">Articoli correlati</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article 
            v-for="relatedPost in relatedPosts" 
            :key="relatedPost.id"
            class="card-hover"
          >
            <UCard>
              <template #header>
                <div class="h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-t-lg"></div>
              </template>
              
              <div class="p-6">
                <div class="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <Icon name="i-heroicons-calendar" class="w-4 h-4" />
                  <span>{{ formatDate(relatedPost.date) }}</span>
                </div>
                
                <h3 class="text-lg font-semibold mb-3 line-clamp-2">
                  {{ relatedPost.title }}
                </h3>
                
                <p class="text-gray-600 text-sm mb-4 line-clamp-2">
                  {{ relatedPost.excerpt }}
                </p>
                
                <NuxtLink :to="`/news/${relatedPost.slug}`">
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
      <Icon name="i-heroicons-document-text" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <h1 class="text-2xl font-bold text-gray-900 mb-2">Articolo non trovato</h1>
      <p class="text-gray-600 mb-6">L'articolo che stai cercando non esiste o è stato rimosso.</p>
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
const route = useRoute()

// Mock data per gli articoli (in una implementazione reale verrebbe da Decap CMS)
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
  }
]

// Trova l'articolo corrente
const post = computed(() => {
  return blogPosts.find(p => p.slug === route.params.slug)
})

// Articoli correlati
const relatedPosts = computed(() => {
  if (!post.value) return []
  
  return blogPosts
    .filter(p => p.id !== post.value.id && p.category === post.value.category)
    .slice(0, 3)
})

// Tempo di lettura stimato
const readingTime = computed(() => {
  if (!post.value) return 0
  const wordsPerMinute = 200
  const words = (post.value.excerpt + ' ' + (post.value.content || '')).split(' ').length
  return Math.ceil(words / wordsPerMinute)
})

// Metodi
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('it-IT', {
    day: '2-digit',
    month: 'long',
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

// SEO dinamico
useHead(() => {
  if (!post.value) {
    return {
      title: 'Articolo non trovato - Copagri Ogliastra'
    }
  }
  
  return {
    title: `${post.value.title} - Copagri Ogliastra`,
    meta: [
      {
        name: 'description',
        content: post.value.excerpt
      }
    ]
  }
})
</script>