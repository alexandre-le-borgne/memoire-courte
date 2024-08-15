<template>
  <q-page padding>
    <template v-if="!character">
      Personnage inconnu
    </template>
    <template v-else>
      <q-card class="q-pa-md">
        <div class="row">
          <div class="col">
            <q-card-section>
              <div class="text-h4">
                {{ character.name }}
                <q-btn v-if="character.wiki" :href="character.wiki" :title="character.wiki" target="_blank" flat size="sm"
                color="info" class="no-focus">
                  Wiki
                </q-btn>
              </div>
              <div class="text-subtitle2" v-if="character.job">
                {{ character.job }}
              </div>
            </q-card-section>
          </div>

          <div class="col-2">
            <q-img :src="img" height="120px" width="120px"/>
          </div>
        </div>
        <q-timeline>
          <q-timeline-entry v-for="(event, index) in events"
                            :key="index"
                            :title="event.title"
                            color="orange"
                            icon="fa-solid fa-handcuffs"
          >
            <template #subtitle>
              <div class="flex">
                <div class="col q-mb-none">
                  <span>{{ event.date }}</span>
                </div>
                <template v-if="event.source">
                  <div class="col-auto">
                    <q-btn target="_blank" :href="event.source" label="Sources" size="xs" flat
                           :title="event.source"
                    />
                  </div>
                </template>
              </div>
            </template>
            <template v-if="event.text">
              {{ event.text }}
            </template>
          </q-timeline-entry>
        </q-timeline>
      </q-card>
    </template>
  </q-page>
</template>

<script setup>
import {characters} from 'src/data/characters.js'
import {useRoute} from 'vue-router'

const route = useRoute()
const characterSlug = route.params.slug
const character = characterSlug in characters ? characters[characterSlug] : null
const events = character ? character.events.reverse() : []
const img = character ? new URL(`/characters/${characterSlug}.png`, import.meta.url).href : null
</script>

<style scoped>

</style>
