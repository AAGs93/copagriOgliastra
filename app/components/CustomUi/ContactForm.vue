<template>
  <UCard>
    <template #header>
      <h2 class="text-2xl font-bold">Contattaci</h2>
      <p class="text-muted">Compila il form e ti risponderemo al più presto</p>
    </template>

    <UForm :state="state" :schema="schema" @submit="onSubmit" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <UFormField label="Nome" name="name" required>
          <UInput
            v-model="state.name"
            icon="i-lucide-user"
            placeholder="Il tuo nome"
          />
        </UFormField>

        <UFormField label="Email" name="email" required>
          <UInput
            v-model="state.email"
            type="email"
            icon="i-lucide-mail"
            placeholder="tua@email.com"
          />
        </UFormField>
        <UFormField label="Telefono" name="phone">
          <UInput
            v-model="state.phone"
            type="tel"
            icon="i-lucide-phone"
            placeholder="+39 123 456 7890"
          />
        </UFormField>

        <UFormField label="Oggetto" name="subject" required>
          <UInput
            v-model="state.subject"
            icon="i-lucide-message-square"
            placeholder="Come possiamo aiutarti?"
          />
        </UFormField>
      </div>

      <UFormField label="Messaggio" name="message" required>
        <UTextarea
          v-model="state.message"
          placeholder="Scrivi il tuo messaggio..."
          :rows="5"
        />
      </UFormField>

      <UFormField name="privacy" required>
        <UCheckbox v-model="state.privacy">
          <template #label>
            <span class="text-sm">
              Accetto il trattamento dei dati personali secondo la
              <ULink class="text-primary font-medium" target="_blank">
                Privacy Policy
              </ULink>
              *
            </span>
          </template>
        </UCheckbox>
      </UFormField>

      <UButton
        type="submit"
        :loading="loading"
        size="lg"
        block
        icon="i-lucide-send"
      >
        Invia messaggio
      </UButton>
    </UForm>
  </UCard>
</template>

<script setup lang="ts">
import { z } from "zod";

const toast = useToast();

const schema = z.object({
  name: z.string().min(2, "Il nome deve avere almeno 2 caratteri"),
  email: z.string().email("Email non valida"),
  phone: z.string().optional(),
  subject: z.string().min(3, "L'oggetto deve avere almeno 3 caratteri"),
  message: z.string().min(10, "Il messaggio deve avere almeno 10 caratteri"),
  privacy: z.boolean().refine((val) => val === true, {
    message: "Devi accettare il trattamento dei dati personali",
  }),
});

const state = reactive({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  privacy: false,
});

const loading = ref(false);

async function onSubmit() {
  loading.value = true;

  try {
    await $fetch("/api/contact", {
      method: "POST",
      body: state,
    });

    toast.add({
      title: "Messaggio inviato!",
      description: "Ti risponderemo al più presto.",
      color: "success",
    });

    // Reset form
    Object.assign(state, {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      privacy: false,
    });
  } catch (error) {
    toast.add({
      title: "Errore",
      description: "Qualcosa è andato storto. Riprova.",
      color: "error",
    });
  } finally {
    loading.value = false;
  }
}
</script>
