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
        src="https://ui.nuxt.com/_ipx/_/blocks/image4.png"
        alt="App screenshot"
        class="rounded-lg shadow-2xl ring ring-default"
      />
    </UPageHero>

    <!-- <section class="relative h-[34rem] bg-cover bg-center hero-gradient">
      <div class="absolute inset-0 bg-black opacity-30"></div>
      <div
        class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center"
      >
        <div class="text-white">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">Copagri Ogliastra</h1>
          <h2 class="text-xl md:text-2xl font-light mb-6 max-w-3xl">
            Confederazione Produttori Agricoli
          </h2>
          <p class="text-lg md:text-xl max-w-4xl leading-relaxed">
            Rappresentiamo e sosteniamo le imprese agricole dell'Ogliastra,
            valorizzando la terra, le persone e i prodotti che la rendono unica.
          </p>
        </div>
      </div>
    </section> -->

    <!-- Introduction -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">
          L'agricoltura in Ogliastra è più di un mestiere: è identità,
          tradizione, futuro.
        </h2>
        <p class="text-lg text-gray-600 leading-relaxed">
          Copagri Ogliastra nasce per dare supporto concreto agli agricoltori e
          alle loro famiglie, offrendo servizi, assistenza e rappresentanza
          istituzionale. Siamo parte di Copagri, la Confederazione Produttori
          Agricoli: una rete nazionale che porta la voce del mondo agricolo ai
          tavoli regionali ed europei, tutelando chi lavora ogni giorno la
          terra.
        </p>
      </div>
    </section>

    <div class="section-divider"></div>

    <!-- Chi Siamo -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">
              Chi siamo – Una presenza vicina agli agricoltori dell'Ogliastra
            </h2>
            <p class="text-gray-600 mb-6">
              Siamo l'organizzazione di rappresentanza degli agricoltori
              dell'Ogliastra. Il nostro compito è tutelare chi lavora la terra e
              dare supporto concreto alle imprese agricole della zona, in un
              territorio che ha peculiarità e sfide tutte sue.
            </p>
            <p class="text-gray-600 mb-6">
              L'Ogliastra è una terra forte e orgogliosa: uliveti, vigne,
              pascoli e coltivazioni che raccontano una tradizione agricola
              radicata da generazioni. L'agricoltura non è solo produzione: è
              identità, comunità e futuro.
            </p>

            <div class="space-y-3">
              <h3 class="font-semibold text-gray-900 mb-4">
                Copagri Ogliastra lavora ogni giorno per:
              </h3>
              <div class="flex items-start space-x-3">
                <Icon
                  name="i-heroicons-check-circle"
                  class="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                />
                <span class="text-gray-600"
                  >rappresentare le aziende agricole presso le istituzioni</span
                >
              </div>
              <div class="flex items-start space-x-3">
                <Icon
                  name="i-heroicons-check-circle"
                  class="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                />
                <span class="text-gray-600"
                  >offrire assistenza tecnica, fiscale e amministrativa</span
                >
              </div>
              <div class="flex items-start space-x-3">
                <Icon
                  name="i-heroicons-check-circle"
                  class="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                />
                <span class="text-gray-600"
                  >promuovere progetti che valorizzino i prodotti locali e le
                  filiere</span
                >
              </div>
              <div class="flex items-start space-x-3">
                <Icon
                  name="i-heroicons-check-circle"
                  class="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                />
                <span class="text-gray-600"
                  >creare occasioni di formazione e innovazione</span
                >
              </div>
            </div>

            <p class="text-gray-600 mt-6">
              Con la forza di Copagri e lo sguardo sempre rivolto al territorio,
              siamo accanto agli agricoltori per dare valore al lavoro
              quotidiano e costruire nuove opportunità.
            </p>
          </div>

          <div class="lg:pl-8">
            <div class="bg-primary rounded-2xl p-8 text-white text-center">
              <Icon name="i-heroicons-users" class="w-16 h-16 mx-auto mb-4" />
              <h3 class="text-2xl font-bold mb-4">La nostra missione</h3>
              <p class="text-red-100">
                Essere il punto di riferimento per gli agricoltori
                dell'Ogliastra, offrendo supporto concreto e rappresentanza
                efficace per valorizzare il lavoro della terra e costruire un
                futuro sostenibile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider"></div>

    <!-- I Nostri Servizi -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            I nostri servizi – Assistenza tecnica, fiscale e amministrativa
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Offriamo una gamma completa di servizi per supportare le aziende
            agricole in ogni aspetto della loro attività.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Assistenza Amministrativa -->
          <UCard class="card-hover">
            <template #header>
              <div class="flex items-center space-x-3">
                <div
                  class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"
                >
                  <Icon
                    name="i-heroicons-document-text"
                    class="w-6 h-6 text-blue-600"
                  />
                </div>
                <h3 class="text-xl font-semibold">Assistenza amministrativa</h3>
              </div>
            </template>

            <div class="space-y-3">
              <div class="flex items-start space-x-2">
                <Icon
                  name="i-heroicons-check"
                  class="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                />
                <span class="text-sm text-gray-600"
                  >Gestione fascicolo aziendale</span
                >
              </div>
              <div class="flex items-start space-x-2">
                <Icon
                  name="i-heroicons-check"
                  class="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                />
                <span class="text-sm text-gray-600">Domande PAC e PSR</span>
              </div>
              <div class="flex items-start space-x-2">
                <Icon
                  name="i-heroicons-check"
                  class="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                />
                <span class="text-sm text-gray-600"
                  >Accesso a bandi e contributi regionali, nazionali ed
                  europei</span
                >
              </div>
              <div class="flex items-start space-x-2">
                <Icon
                  name="i-heroicons-check"
                  class="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                />
                <span class="text-sm text-gray-600"
                  >Pratiche previdenziali e assicurative (INPS, INAIL)</span
                >
              </div>
            </div>
          </UCard>

          <!-- Consulenza Fiscale -->
          <UCard class="card-hover">
            <template #header>
              <div class="flex items-center space-x-3">
                <div
                  class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center"
                >
                  <Icon
                    name="i-heroicons-calculator"
                    class="w-6 h-6 text-yellow-600"
                  />
                </div>
                <h3 class="text-xl font-semibold">Consulenza fiscale</h3>
              </div>
            </template>

            <div class="space-y-3">
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
          </UCard>

          <!-- Supporto Tecnico -->
          <UCard class="card-hover">
            <template #header>
              <div class="flex items-center space-x-3">
                <div
                  class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center"
                >
                  <Icon
                    name="i-heroicons-beaker"
                    class="w-6 h-6 text-green-600"
                  />
                </div>
                <h3 class="text-xl font-semibold">Supporto tecnico</h3>
              </div>
            </template>

            <div class="space-y-3">
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
                <span class="text-sm text-gray-600">Pratiche sostenibili</span>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </section>

    <div class="section-divider"></div>

    <!-- Blog Articles Component -->
    <BlogArticles3 />

    <!-- CTA Section -->
    <section class="py-16 bg-primary">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">
          Hai bisogno di assistenza per la tua azienda agricola?
        </h2>
        <p class="text-xl text-red-100 mb-8">
          Contattaci per scoprire come possiamo aiutarti a crescere e
          prosperare.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contatti">
            <UButton
              size="xl"
              variant="solid"
              color="white"
              class="w-full sm:w-auto"
            >
              Contattaci ora
              <Icon name="i-heroicons-phone" class="w-5 h-5 ml-2" />
            </UButton>
          </NuxtLink>
          <NuxtLink to="/news">
            <UButton
              size="xl"
              variant="outline"
              color="white"
              class="w-full sm:w-auto"
            >
              Scopri le news
              <Icon name="i-heroicons-newspaper" class="w-5 h-5 ml-2" />
            </UButton>
          </NuxtLink>
        </div>
      </div>
    </section>
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
