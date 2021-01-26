<template>
  <div class="p-grid p-mt-5">
    <div class="p-md-2 p-d-md-flex p-d-none">
      <div class="layout-documentation-sidebar">
        <sidebar-docs :models="documents.sidebar" />
      </div>
    </div>
    <div
      class="p-col-10 p-md-offset-2 p-lg-offset-1 p-offset-1 p-md-7 p-lg-8 layout-documentation-body"
    >
      <vue3-markdown-it
        class="layout-documentation-content"
        :source="source"
        :plugins="plugins"
        :html="true"
      />
      <div v-if="selected === 'init'">
        <Card class="layout-server-1 p-col-12 p-md-6 p-shadow-6">
          <template #title> Status Server API Response </template>
          <template #content>
            Server yang mengontrol request API. URL yang digunakan adalah
            https://laron-server-side.sharedwithexpose.com/api.
            <p><b>Status :</b> {{ serverStatus }}</p>
          </template>
          <template #footer>
            <Button label="Refresh" :disabled="onRequest" @click="refresh" />
          </template>
        </Card>
        <blockquote class="quote-info">
          <p>
            <em
              >Ketika ingin mengecek status server dan response balasannya ditolak oleh
              CORS, itu wajar karena sisi klien merequest ke server layanan tunneling
              bukan server lokal, yang berarti server lokal tidak aktif.</em
            >
          </p>
        </blockquote>
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script>
import { computed, inject, onMounted, reactive, ref } from "vue";
import MarkdownAttribute from "markdown-it-attrs";
import Document from "../data/data.js";
// import { useRoute } from "vue-router";
import SidebarDocs from "../components/SidebarDocs.vue";
import axios from "axios";

export default {
  components: { SidebarDocs },
  setup() {
    // const router = useRouter();
    // const route = useRoute();
    console.log("JSON:", Document);
    const selected = inject("selectedDocs");
    const documents = reactive(Document);
    const serverStatus = ref("Tidak Aktif.");
    const onRequest = ref(false);
    const plugins = [{ plugin: MarkdownAttribute }];
    const source = computed(() => {
      if (selected.value.includes(".")) {
        let a = selected.value.split(".", 2);
        return documents.key[a[0]][a[1]].docs;
      } else {
        // console.log(documents.key[selected.value].docs);
        return documents.key[selected.value].docs;
      }
    });

    onMounted(() => {
      refresh();
    });

    async function refresh() {
      if (onRequest.value) return;
      onRequest.value = true;
      serverStatus.value = "Sedang Request API...";

      await axios
        .get("https://laron-server-side.sharedwithexpose.com/api/active")
        .then(() => {
          serverStatus.value = "Aktif.";
        })
        .catch((error) => {
          if (error.response) {
            switch (error.response.status) {
              case 429:
                serverStatus.value = "Terkena Limit namun Server Aktif.";
                break;

              default:
                serverStatus.value = "Tidak Aktif.";
                break;
            }
          } else {
            serverStatus.value = "Tidak Aktif.";
          }

          // 429
        });
      onRequest.value = false;
    }

    // import(
    //   "../data/" + documents.key[selected.value].docs + ".md"
    // ).then((data) => console.log(data.default));
    return {
      documents,
      source,
      plugins,
      selected,
      serverStatus,
      onRequest,
      refresh,
    };
  },
};
</script>

<style>
.layout-server-1 {
  background-color: var(--surface-b) !important;
}
.layout-documentation-sidebar {
  position: fixed;
  left: 30px;
}
.layout-documentation-body {
  color: var(--text-color);
  min-height: 75vh;
}
.layout-documentation-content {
  line-height: 1.6;
}

.table-documentation {
  border-collapse: collapse;
  width: 100%;
}
.table-documentation tbody tr td,
.table-documentation thead tr th {
  border: 2px solid var(--text-color);
  border-left: 2px solid var(--text-color);
  /* border-radius: 5px; */
  padding: 10px;
}
/* .table-documentation thead tr th {
  border-top: 2px solid var(--text-color);
  border-bottom: 2px solid var(--text-color);

} */
.quote-warning {
  background: var(--surface-b);
  border-left: 10px solid yellow;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
}

.quote-info {
  background: var(--surface-b);
  border-left: 10px solid turquoise;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
}
@media only screen and (max-width: 768px) {
  .table-responsive {
    overflow-x: auto;
  }
}
</style>