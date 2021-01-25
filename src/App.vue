<template>
  <navbar @click:sidebar="onClickSidebar" />
  <Sidebar v-model:visible="visibleLeft"> Content </Sidebar>
  <div class="layout-body">
    <router-view />
  </div>
</template>

<script>
import { provide, ref, watch } from "vue";
import Navbar from "./components/Navbar.vue";
import { useRoute } from "vue-router";

export default {
  components: { Navbar },
  setup() {
    const visibleLeft = ref(false);
    const selectedDocs = ref("");

    const route = useRoute("init");

    watch(
      () => route.params,
      async (newParams) => {
        console.log("New parameter:" ,newParams);
        if ( !("category1" in newParams) ) {
          selectedDocs.value = "init";
          return;
        }
        let cat1 = newParams.category1;
        if ("category2" in newParams) {
          selectedDocs.value = `${cat1}.${newParams.category2}`;
        } else {
          selectedDocs.value = `${cat1}`;
        }
      }
    );


    provide("selectedDocs", selectedDocs);
    // provide("setSelectedDocs", setSelectedDocs);

    function onClickSidebar() {
      visibleLeft.value = !visibleLeft.value;
    }
    return { visibleLeft, onClickSidebar };
  },
};
</script>

<style>
/* .layout-body {
} */
body {
  /* margin: 0; */
  overflow-x: hidden;
  background-color: var(--surface-a);
}

html * :not(.pi) {
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol !important;
}
</style>
