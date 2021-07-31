<template>
  <q-expansion-item
    dense
    dense-toggle
    expand-separator
    :label="title"
    :icon="icon"
    v-if="expanded"
  >
    <q-item
      clickable
      v-for="item in items"
      :key="item.title"
      tag="a"
      :href="item.link"
      style="margin-left: 20px"
    >
      <q-item-section>
        <q-item-label>{{ item.title }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-expansion-item>

  <q-item clickable :to="link" v-else>
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" style="font-size: 1em"> </q-icon>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";
import "../css/app.scss";
export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
    expanded: {
      type: Boolean,
      default: false,
    },
    items: {
      title: {
        type: String,
        required: true,
      },

      link: {
        type: String,
        default: "#",
      },
    },
  },
});
</script>
