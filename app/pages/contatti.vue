<template>
  <div>
    <!-- Page Header -->
    <UPageHero
      title="Copagri Ogliastra"
      description=" Hai bisogno di assistenza, vuoi diventare socio o semplicemente
          chiederci informazioni? Siamo a disposizione: scegli il canale che
          preferisci per parlare con noi."
      headline="Contatta"
    />

    <div class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Informazioni di contatto -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-8">
              Informazioni di contatto
            </h2>

            <div class="space-y-6">
              <!-- Indirizzo -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <Icon
                    name="i-heroicons-map-pin"
                    class="w-6 h-6 text-primary"
                  />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">
                    Indirizzo sede
                  </h3>
                  <p class="text-gray-600">[via, città]</p>
                </div>
              </div>

              <!-- Telefono -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <Icon
                    name="i-heroicons-phone"
                    class="w-6 h-6 text-blue-600"
                  />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">Telefono</h3>
                  <p class="text-gray-600">[numero]</p>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <Icon
                    name="i-heroicons-envelope"
                    class="w-6 h-6 text-purple-600"
                  />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">Email</h3>
                  <p class="text-gray-600">[email]</p>
                </div>
              </div>

              <!-- Orari -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <Icon
                    name="i-heroicons-clock"
                    class="w-6 h-6 text-orange-600"
                  />
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">
                    Orari di apertura
                  </h3>
                  <p class="text-gray-600">[giorni e orari]</p>
                </div>
              </div>
            </div>

            <!-- Mappa Placeholder -->
            <div class="mt-12">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">
                Dove trovarci
              </h3>
              <div
                class="bg-gray-200 rounded-lg h-64 flex items-center justify-center"
              >
                <div class="text-center rounded-md h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.219755467095!2d9.5070377!3d39.9588392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12de6af8a5d8d86d%3A0x7d949d5327479572!2sVillagrande%20S.via%20Roma%20236A!5e0!3m2!1sit!2sit!4v1760542279013!5m2!1sit!2sit"
                    width="590"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    class="rounded-lg h-64"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <!-- Form di contatto -->
          <div class="text-pretty space-y-10">
            <div
              class="space-y-4 p-5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <h4
                class="text-lg font-bold text-gray-900 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700"
              >
                Contatti e Orari
              </h4>

              <div class="flex items-start space-x-3">
                <UIcon
                  name="i-heroicons-clock"
                  class="w-5 h-5 text-primary flex-shrink-0 mt-1"
                />
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  <span class="font-semibold">Orari Ufficio:</span>
                  Aperto dal lunedì al venerdì ore 9:00 - 12:30.
                </p>
              </div>

              <div class="flex items-start space-x-3">
                <UIcon
                  name="i-heroicons-map-pin"
                  class="w-5 h-5 text-primary flex-shrink-0 mt-1"
                />
                <p class="text-sm text-gray-700 dark:text-gray-300">
                  <span class="font-semibold">Sede Legale:</span>
                  Via Roma 56, Villagrande
                </p>
              </div>

              <div class="pt-3 border-t border-gray-200 dark:border-gray-700">
                <div class="flex space-x-3 items-center">
                  <UIcon
                    name="i-heroicons-envelope"
                    class="w-5 h-5 text-primary flex-shrink-0"
                  />
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-white"
                  >
                    Posta Elettronica Certificata (PEC):
                  </p>
                </div>
                <NuxtLink
                  class="text-sm text-secondary hover:underline font-medium ml-9"
                  to="mailto:caacafagri.ogliastra@pec.it"
                >
                  caacafagri.ogliastra@pec.it
                </NuxtLink>
              </div>
              <div>
                <div class="flex space-x-3 items-center pt-2">
                  <UIcon
                    name="i-heroicons-envelope-open"
                    class="w-5 h-5 text-primary flex-shrink-0"
                  />
                  <p
                    class="text-sm font-semibold text-gray-900 dark:text-white"
                  >
                    Email Servizi Generali:
                  </p>
                </div>
                <NuxtLink
                  class="text-sm text-secondary hover:underline font-medium ml-9"
                  to="mailto:servizioagrivet@gmail.com"
                >
                  servizioagrivet@gmail.com
                </NuxtLink>
              </div>

              <div
                v-if="false"
                class="pt-3 border-t border-gray-200 dark:border-gray-700 text-xs italic text-gray-500 dark:text-gray-400"
              >
                Nota: Il numero di telefono non è disponibile.
              </div>
            </div>
            <CustomUiContactForm />
          </div>
        </div>
      </div>
    </div>

    <!-- Sezione servizi veloci -->
    <section class="py-16 bg-gray-50" v-if="false">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Come possiamo aiutarti?
          </h2>
          <p class="text-lg text-gray-600">
            Ecco i servizi più richiesti dai nostri soci
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UCard class="text-center card-hover">
            <template #header>
              <div
                class="w-16 h-16 bg-red-100 rounded-full mx-auto flex items-center justify-center"
              >
                <Icon
                  name="i-heroicons-document-text"
                  class="w-8 h-8 text-primary"
                />
              </div>
            </template>

            <h3 class="text-xl font-semibold mb-3">Pratiche PAC</h3>
            <p class="text-gray-600 mb-6">
              Assistenza per domande PAC, PSR e accesso ai contributi europei
            </p>
            <UButton variant="soft" class="w-full">
              Richiedi assistenza
            </UButton>
          </UCard>

          <UCard class="text-center card-hover">
            <template #header>
              <div
                class="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center"
              >
                <Icon
                  name="i-heroicons-calculator"
                  class="w-8 h-8 text-blue-600"
                />
              </div>
            </template>

            <h3 class="text-xl font-semibold mb-3">Consulenza fiscale</h3>
            <p class="text-gray-600 mb-6">
              Contabilità, dichiarazioni fiscali e gestione del personale
            </p>
            <UButton variant="soft" class="w-full">
              Richiedi consulenza
            </UButton>
          </UCard>

          <UCard class="text-center card-hover">
            <template #header>
              <div
                class="w-16 h-16 bg-purple-100 rounded-full mx-auto flex items-center justify-center"
              >
                <Icon
                  name="i-heroicons-users"
                  class="w-8 h-8 text-purple-600"
                />
              </div>
            </template>

            <h3 class="text-xl font-semibold mb-3">Diventa socio</h3>
            <p class="text-gray-600 mb-6">
              Unisciti alla nostra confederazione e accedi a tutti i servizi
            </p>
            <UButton variant="soft" class="w-full"> Scopri come </UButton>
          </UCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Contatti - Copagri Ogliastra",
  meta: [
    {
      name: "description",
      content:
        "Contatta Copagri Ogliastra per assistenza tecnica, fiscale e amministrativa. Siamo a disposizione per supportare la tua azienda agricola.",
    },
  ],
});

const schema = {};

const state = reactive({
  nome: "",
  cognome: "",
  email: "",
  telefono: "",
  tipo: "",
  messaggio: "",
  privacy: false,
});

const tipiRichiesta = [
  "Informazioni generali",
  "Assistenza pratiche PAC",
  "Consulenza fiscale",
  "Supporto tecnico",
  "Adesione come socio",
  "Altro",
];

const loading = ref(false);

const onSubmit = async () => {
  loading.value = true;

  try {
    // Qui si implementerebbe l'invio del form
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset del form
    Object.keys(state).forEach((key) => {
      if (typeof state[key] === "string") state[key] = "";
      if (typeof state[key] === "boolean") state[key] = false;
    });

    // Notifica di successo (usando NuxtUI toast)
    console.log("Messaggio inviato con successo!");
  } catch (error) {
    console.error("Errore nell'invio del messaggio:", error);
  } finally {
    loading.value = false;
  }
};
</script>
