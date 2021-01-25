<template>
  <div class="p-grid p-mt-5">
    <div class="p-col-2 ">
      <sidebar-docs :models="documents.sidebar" />
    </div>
    <div class="p-col-8 p-offset-1 layout-documentation-body">
      <vue3-markdown-it :source="source" />
    </div>
  </div>
</template>

<script>
import { computed, inject, reactive } from "vue";
import Document from "../data/data.js";
// import { useRoute } from "vue-router";
import SidebarDocs from "../components/SidebarDocs.vue";

export default {
  components: { SidebarDocs },
  setup() {
    // const router = useRouter();
    // const route = useRoute();
    console.log("JSON:", Document);
    const selected = inject("selectedDocs");
    const documents = reactive(Document);
    const source = computed(() => {
      if (selected.value.includes(".")) {
        let a = selected.value.split(".", 2);
        return documents.key[a[0]][a[1]].docs;
      } else {
        console.log(documents.key[selected.value].docs);
        return documents.key[selected.value].docs;
      }
    });

    // import(
    //   "../data/" + documents.key[selected.value].docs + ".md"
    // ).then((data) => console.log(data.default));
    return { documents, source };
  },
};
</script>

<style scoped>
 .layout-documentation-body{
     color: var(--text-color)
 }
</style>