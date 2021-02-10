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
      <content-docs :source="source" />
    </div>
  </div>
</template>

<script>
import { computed, inject, provide, reactive, ref } from "vue";
import Versioning from "../data/versioning.js";
import SidebarDocs from "../components/SidebarDocs.vue";
import ContentDocs from "../components/Content.vue";

export default {
  components: { SidebarDocs, ContentDocs },
  setup() {
    // const router = useRouter();
    // const route = useRoute();
    console.log("JSON:", Document);
    const version = inject("versionSelected");
    const selected = inject("selectedDocs");
    const documents = reactive(Versioning[version.value]());
    const onRequest = ref(false);

    const indexDocsPlatform = ref(0); //0 pc 1 mobile
    const source = computed(() => {
      if (selected.value.includes(".")) {
        let a = selected.value.split(".", 2);
        return documents.key[a[0]][a[1]];
      } else {
        // console.log(documents.key[selected.value].docs);
        return documents.key[selected.value];
      }
    });

    provide("refOnRequest", onRequest);
    provide("refIndexDocsPlatform", indexDocsPlatform);

    // import(
    //   "../data/" + documents.key[selected.value].docs + ".md"
    // ).then((data) => console.log(data.default));
    return {
      documents,
      source,
      selected,
      onRequest,
      indexDocsPlatform,
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