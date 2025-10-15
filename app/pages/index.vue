<template>
  <div>
    <!-- Hero Section -->
    <UPageHero
      title="Copagri Ogliastra"
      description="Rappresentiamo e sosteniamo le imprese agricole dell'Ogliastra, valorizzando la terra, le persone e i prodotti che la rendono unica."
      headline="Confederazione Produttori Agricoli"
      orientation="horizontal"
    >
      <img
        src="/images/home_foto1.jpg"
        alt="App screenshot"
        class="rounded-md shadow-2xl ring ring-default"
      />
    </UPageHero>

    <!-- Introduction -->
    <div class="max-w-4xl mx-auto">
      <UPageCTA
        variant="naked"
        title="L'agricoltura in Ogliastra è più di un mestiere: è identità,
          tradizione, futuro."
        description=" Copagri Ogliastra nasce per dare supporto concreto agli agricoltori e
          alle loro famiglie, offrendo servizi, assistenza e rappresentanza
          istituzionale. Siamo parte di Copagri, la Confederazione Produttori
          Agricoli: una rete nazionale che porta la voce del mondo agricolo ai
          tavoli regionali ed europei, tutelando chi lavora ogni giorno la
          terra."
      />
    </div>

    <div class="section-divider"></div>

    <!-- Chi Siamo -->
    <UPageSection
      class="bg-gray-50"
      orientation="horizontal"
      title="Una presenza vicina agli agricoltori dell'Ogliastra"
    >
      <template #description>
        <div class="space-y-2 font-light text-md mb-6">
          <p>
            Siamo l'organizzazione di rappresentanza degli agricoltori
            dell'Ogliastra. Il nostro compito è tutelare chi lavora la terra e
            dare supporto concreto alle imprese agricole della zona, in un
            territorio che ha peculiarità e sfide tutte sue.
          </p>
          <p>
            L'Ogliastra è una terra forte e orgogliosa: uliveti, vigne, pascoli
            e coltivazioni che raccontano una tradizione agricola radicata da
            generazioni. L'agricoltura non è solo produzione: è identità,
            comunità e futuro.
          </p>
        </div>
      </template>
      <template #features>
        <div class="space-y-3">
          <h3 class="font-semibold text-gray-700 mb-4">
            Copagri Ogliastra lavora ogni giorno per:
          </h3>
          <div class="flex items-start space-x-3">
            <Icon
              name="i-heroicons-check-circle"
              class="w-5 h-5 text-secondary mt-0.5 flex-shrink-0"
            />
            <span class="text-gray-600"
              >rappresentare le aziende agricole presso le istituzioni</span
            >
          </div>
          <div class="flex items-start space-x-3">
            <Icon
              name="i-heroicons-check-circle"
              class="w-5 h-5 text-secondary mt-0.5 flex-shrink-0"
            />
            <span class="text-gray-600"
              >offrire assistenza tecnica, fiscale e amministrativa</span
            >
          </div>
          <div class="flex items-start space-x-3">
            <Icon
              name="i-heroicons-check-circle"
              class="w-5 h-5 text-secondary mt-0.5 flex-shrink-0"
            />
            <span class="text-gray-600"
              >promuovere progetti che valorizzino i prodotti locali e le
              filiere</span
            >
          </div>
          <div class="flex items-start space-x-3">
            <Icon
              name="i-heroicons-check-circle"
              class="w-5 h-5 text-secondary mt-0.5 flex-shrink-0"
            />
            <span class="text-gray-600"
              >creare occasioni di formazione e innovazione</span
            >
          </div>
          <div class="space-y-2 font-light text-lg text-muted mt-6">
            <p>
              Con la forza di Copagri e lo sguardo sempre rivolto al territorio,
              siamo accanto agli agricoltori per dare valore al lavoro
              quotidiano e costruire nuove opportunità.
            </p>
          </div>
        </div>
      </template>
      <div class="relative px-10 lg:px-0">
        <div
          class="absolute inset-0 bg-primary-500 rounded-2xl transform rotate-5 m-5 lg:m-0"
        ></div>

        <img
          src="/images/chisiamo_1.jpg"
          alt="Agricoltori in Ogliastra"
          class="relative rounded-2xl shadow-lg w-full h-auto"
        />
      </div>
      <!-- <div class="bg-primary rounded-2xl p-8 text-white text-center">
        <Icon name="i-heroicons-users" class="w-16 h-16 mx-auto mb-4" />
        <h3 class="text-2xl font-bold mb-4">La nostra missione</h3>
        <p class="text-red-100">
          Essere il punto di riferimento per gli agricoltori dell'Ogliastra,
          offrendo supporto concreto e rappresentanza efficace per valorizzare
          il lavoro della terra e costruire un futuro sostenibile.
        </p>
      </div> -->
    </UPageSection>

    <div class="section-divider"></div>

    <!-- I Nostri Servizi -->
    <UPageSection
      class="bg-primary-50"
      title="Assistenza tecnica, fiscale e amministrativa"
      description="Offriamo una gamma completa di servizi per supportare le aziende
            agricole in ogni aspetto della loro attività."
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Assistenza Amministrativa -->
          <UCard class="card-hover">
            <div class="space-y-6">
              <!-- Header -->
              <div class="flex items-center gap-2">
                <div class="h-12 rounded-lg flex items-center">
                  <UIcon
                    name="i-heroicons-document-text"
                    class="w-6 h-6 text-blue-600"
                  />
                </div>
                <h3 class="text-xl font-semibold text-start">
                  Assistenza amministrativa
                </h3>
              </div>

              <!-- Testimonial Text -->
              <div class="space-y-2">
                <div class="flex items-center space-x-2">
                  <Icon
                    name="i-heroicons-check"
                    class="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                  />
                  <span class="text-sm text-gray-600"
                    >Gestione fascicolo aziendale</span
                  >
                </div>
                <div class="flex items-center space-x-2">
                  <Icon
                    name="i-heroicons-check"
                    class="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                  />
                  <span class="text-sm text-gray-600">Domande PAC e PSR</span>
                </div>
                <div class="flex items-center space-x-2">
                  <Icon
                    name="i-heroicons-check"
                    class="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                  />
                  <span class="text-sm text-gray-600"
                    >Accesso a bandi e contributi regionali, nazionali ed
                    europei</span
                  >
                </div>
                <div class="flex items-center space-x-2">
                  <Icon
                    name="i-heroicons-check"
                    class="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                  />
                  <span class="text-sm text-gray-600"
                    >Pratiche previdenziali e assicurative (INPS, INAIL)</span
                  >
                </div>
              </div>
            </div>
          </UCard>

          <UCard class="card-hover">
            <div class="space-y-6">
              <!-- Header -->
              <div class="flex items-center gap-2">
                <div class="h-12 rounded-lg flex items-center">
                  <UIcon
                    name="i-heroicons-calculator"
                    class="w-6 h-6 text-yellow-600"
                  />
                </div>
                <h3 class="text-xl font-semibold">Consulenza fiscale</h3>
              </div>

              <!-- Testimonial Text -->
              <div class="space-y-2">
                <div class="flex items-start space-x-2">
                  <Icon
                    name="i-heroicons-check"
                    class="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                  />
                  <span class="text-sm text-gray-600"
                    >Contabilità e dichiarazioni fiscali</span
                  >
                </div>
                <div class="flex items-start space-x-2">
                  <Icon
                    name="i-heroicons-check"
                    class="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                  />
                  <span class="text-sm text-gray-600"
                    >Contratti di lavoro agricolo</span
                  >
                </div>
                <div class="flex items-start space-x-2">
                  <Icon
                    name="i-heroicons-check"
                    class="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                  />
                  <span class="text-sm text-gray-600"
                    >Buste paga e gestione dipendenti</span
                  >
                </div>
                <div class="flex items-start space-x-2">
                  <Icon
                    name="i-heroicons-check"
                    class="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                  />
                  <span class="text-sm text-gray-600"
                    >Supporto per previdenza e pensioni</span
                  >
                </div>
              </div>
            </div>
          </UCard>

          <!-- Supporto Tecnico -->
          <UCard class="card-hover">
            <div class="space-y-6">
              <!-- Header -->
              <div class="flex items-center gap-2">
                <div class="h-12 rounded-lg flex items-center">
                  <UIcon
                    name="i-heroicons-beaker"
                    class="w-6 h-6 text-green-600"
                  />
                </div>
                <h3 class="text-xl font-semibold">Supporto tecnico</h3>
              </div>

              <!-- Testimonial Text -->
              <div class="space-y-2">
                <div class="flex items-start space-x-2">
                  <Icon
                    name="i-heroicons-check"
                    class="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                  />
                  <span class="text-sm text-gray-600"
                    >Consulenza sulle colture tipiche locali</span
                  >
                </div>
                <div class="flex items-start space-x-2">
                  <Icon
                    name="i-heroicons-check"
                    class="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                  />
                  <span class="text-sm text-gray-600"
                    >Piani di concimazione e difesa fitosanitaria</span
                  >
                </div>
                <div class="flex items-start space-x-2">
                  <Icon
                    name="i-heroicons-check"
                    class="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                  />
                  <span class="text-sm text-gray-600"
                    >Assistenza per innovazioni tecnologiche</span
                  >
                </div>
                <div class="flex items-start space-x-2">
                  <Icon
                    name="i-heroicons-check"
                    class="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                  />
                  <span class="text-sm text-gray-600"
                    >Pratiche sostenibili</span
                  >
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </UPageSection>

    <div class="section-divider"></div>

    <!-- Blog Articles Component -->
    <BlogArticles3 />
    <div class="section-divider"></div>

    <!-- CTA Section -->

    <UPageSection
      class="bg-primary-50"
      title="Hai bisogno di assistenza per la tua azienda agricola?"
      description="Contattaci per scoprire come possiamo aiutarti a crescere e
          prosperare."
      :links="[
        {
          label: 'Contattaci ora',
          icon: 'i-heroicons-phone',
          color: 'secondary',
          to: '/contatti',
          variant: 'solid',
          size: 'xl',
        },
        {
          label: 'Scopri le news',
          icon: 'i-heroicons-newspaper',
          color: 'secondary',
          to: '/news',
          variant: 'outline',
          size: 'xl',
        },
      ]"
    >
    </UPageSection>
  </div>
</template>

<script setup>
useHead({
  title: "Home - Copagri Ogliastra",
  meta: [
    {
      name: "description",
      content:
        "Copagri Ogliastra rappresenta e sostiene le imprese agricole dell'Ogliastra con servizi di assistenza tecnica, fiscale e amministrativa.",
    },
  ],
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
});
</script>
