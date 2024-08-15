<template>
  <q-layout view="lHh Lpr lfr">
    <q-header reveal>
      <q-toolbar style="min-height: 75px;" class="justify-center">

        <q-toolbar-title shrink>
          <q-btn to="/" class="no-focus text-weight-bold" color="secondary" flat>
            Mémoire courte
          </q-btn>
        </q-toolbar-title>

        <q-tabs class="q-mx-lg" mobile-arrows indicator-color="transparent">
          <q-route-tab to="/institutions" label="Les institutions"/>
          <q-route-tab to="/characters/patrick-balkany" label="Au hasard"/>
          <q-route-tab to="/search" label="Rechercher"/>
<!--          <q-route-tab to="/about" icon="help_outline" title="A propos" :ripple="false"-->
<!--                       class="no-focus"/>-->
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer >
      <q-toolbar class="justify-center">
      <q-btn to="/about" size="x-small" flat class="no-focus">A propos</q-btn>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>

</script>
