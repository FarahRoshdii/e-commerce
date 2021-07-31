<template>
  <q-layout view="lHh Lpr lFf" class="bg-accent">
    <q-header bordered class="bg-white text-dark">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title text-bold> All Stocks </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      width="200"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-dark text-white"
    >
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
      <q-img class="absolute-top" style="height: 150px">
        <div class="absolute-top bg-transparent">
          <q-avatar size="40px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">DOTS</div>
          <div>Free in Trial plan</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Home",
    icon: "fas fa-home",
    link: "/",
  },
  {
    title: "Orders",
    icon: "fas fa-scroll",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Products",
    icon: "fas fa-layer-group",
    link: "https://chat.quasar.dev",
    expanded: true,
    items: [
      {
        title: "All Products",
        link: "/products",
      },
      {
        title: "Inventory",
      },
      {
        title: "Collections",
      },
    ],
  },
  {
    title: "Customers",
    icon: "fas fa-users",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Analytics",
    icon: "fas fa-chart-line",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Discounts",
    icon: "fas fa-percentage",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Website Builder",
    icon: "fas fa-paint-brush",
    link: "https://awesome.quasar.dev",
  },
  {
    title: "Marketing",
    icon: "fas fa-bullhorn",
    link: "https://awesome.quasar.dev",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,

      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
