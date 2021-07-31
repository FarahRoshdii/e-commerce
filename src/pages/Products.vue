<template>
  <div class="q-pa-md">
    <div>
      <div style="margin-bottom: 20px; text-align: right">
        <q-btn
          class="bg-accent"
          text-color="black"
          label="Import"
          no-caps
        ></q-btn>
        <q-btn
          class="bg-accent"
          text-color="black"
          label="Export"
          no-caps
        ></q-btn>
        <q-btn
          class="bg-positive"
          text-color="white"
          label="Add a new product"
          no-caps
        ></q-btn>
      </div>
    </div>

    <q-table
      title="Stocks List"
      :rows="tickersList"
      :columns="columns"
      row-key="name"
      selection="multiple"
      v-model:selected="selected"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" color="bg-primary"></q-icon>
          </template>
        </q-input> </template
      >)
    </q-table>
  </div>
</template>

<script>
const columns = [
  {
    name: "Ticker symbols",
    align: "left",
    label: "Tickers",
    field: (row) => row.ticker,
    sortable: true,
  },
  {
    name: "name",
    required: true,
    label: "Stock Name",
    align: "left",
    field: (row) => row.name,

    sortable: true,
  },
  {
    name: "Primary Exchange",
    label: "Primary Exchange",
    align: "left",
    field: (row) => row.primary_exchange,
  },
  {
    name: "Type",
    label: "Type",
    align: "left",
    field: (row) => row.type,
  },
];

const rows = [];

import { mapGetters, mapActions } from "vuex";
import { ref } from "vue";
export default {
  name: "tickers",
  methods: {
    ...mapActions(["fetchTickers"]),
  },
  computed: mapGetters(["tickersList"]),
  created() {
    this.fetchTickers();
  },
  setup() {
    return {
      selected: ref([]),
      rows,
      columns,
    };
  },
};
</script>
