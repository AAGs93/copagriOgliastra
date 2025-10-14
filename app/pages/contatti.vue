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
                <div class="text-center">
                  <Icon
                    name="i-heroicons-map"
                    class="w-12 h-12 text-gray-400 mx-auto mb-2"
                  />
                  <p class="text-gray-500">Mappa Google Maps</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Form di contatto -->
          <div>
            <UCard>
              <template #header>
                <h2 class="text-2xl font-bold text-gray-900">
                  Invia un messaggio
                </h2>
                <p class="text-gray-600 mt-2">
                  Compila il form per inviarci un messaggio. Ti risponderemo al
                  più presto.
                </p>
              </template>

              <UForm
                :schema="schema"
                :state="state"
                class="space-y-6"
                @submit="onSubmit"
              >
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <UFormGroup label="Nome" name="nome">
                    <UInput
                      v-model="state.nome"
                      placeholder="Il tuo nome"
                      icon="i-heroicons-user"
                    />
                  </UFormGroup>

                  <UFormGroup label="Cognome" name="cognome">
                    <UInput
                      v-model="state.cognome"
                      placeholder="Il tuo cognome"
                      icon="i-heroicons-user"
                    />
                  </UFormGroup>
                </div>

                <UFormGroup label="Email" name="email">
                  <UInput
                    v-model="state.email"
                    type="email"
                    placeholder="la.tua@email.it"
                    icon="i-heroicons-envelope"
                  />
                </UFormGroup>

                <UFormGroup label="Telefono" name="telefono">
                  <UInput
                    v-model="state.telefono"
                    placeholder="Il tuo numero di telefono"
                    icon="i-heroicons-phone"
                  />
                </UFormGroup>

                <UFormGroup label="Tipo di richiesta" name="tipo">
                  <USelect
                    v-model="state.tipo"
                    :options="tipiRichiesta"
                    placeholder="Seleziona il tipo di richiesta"
                  />
                </UFormGroup>

                <UFormGroup label="Messaggio" name="messaggio">
                  <UTextarea
                    v-model="state.messaggio"
                    rows="5"
                    placeholder="Scrivi qui il tuo messaggio..."
                  />
                </UFormGroup>

                <div class="flex items-center space-x-2">
                  <UCheckbox v-model="state.privacy" name="privacy" />
                  <label for="privacy" class="text-sm text-gray-600">
                    Accetto il trattamento dei dati personali secondo la privacy
                    policy
                  </label>
                </div>

                <UButton
                  type="submit"
                  size="lg"
                  :loading="loading"
                  :disabled="!state.privacy"
                  class="w-full"
                >
                  <Icon
                    name="i-heroicons-paper-airplane"
                    class="w-5 h-5 mr-2"
                  />
                  Invia messaggio
                </UButton>
              </UForm>
            </UCard>
          </div>
        </div>
      </div>
    </div>

    <!-- Sezione servizi veloci -->
    <section class="py-16 bg-gray-50">
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

// const schema = z.object({
//   nome: z.string().min(2, "Il nome deve avere almeno 2 caratteri"),
//   cognome: z.string().min(2, "Il cognome deve avere almeno 2 caratteri"),
//   email: z.string().email("Email non valida"),
//   telefono: z.string().min(10, "Numero di telefono non valido"),
//   tipo: z.string().min(1, "Seleziona un tipo di richiesta"),
//   messaggio: z.string().min(10, "Il messaggio deve avere almeno 10 caratteri"),
//   privacy: z
//     .boolean()
//     .refine((val) => val === true, "Devi accettare la privacy policy"),
// });
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
