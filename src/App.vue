<template>
  <navbar @click:sidebar="onClickSidebar" />
  <Sidebar v-model:visible="visibleLeft">
    <div class="p-grid p-mt-3">
      <div class="p-col-12 p-mt-6">
        <h4>Navigation</h4>
        <hr />
        <br />
        <div class="p-col-12">
          <router-link to="/docs"
            ><Button label="Documentation" class="p-col-12 p-button-text p-text-left"></Button
          ></router-link>
        </div>
        <div class="p-col-12">
          <router-link to="/about"
            ><Button label="About" class="p-col-12 p-button-text p-text-left"></Button
          ></router-link>
        </div>
      </div>
      <div class="p-col-12">
        <h4>Documentation</h4>
        <hr />
        <br />
        <sidebar-docs :models="documents.sidebar" />
      </div>
    </div>
  </Sidebar>
  <div class="layout-body">
    <router-view />
  </div>
  <cFooter />
</template>

<script>
import { provide, reactive, ref, watch } from "vue";
import Navbar from "./components/Navbar.vue";
import { useRoute } from "vue-router";
import SidebarDocs from "./components/SidebarDocs.vue";
import Document from "./data/data.js";
import CFooter from './components/Footer.vue';

export default {
  components: { Navbar, SidebarDocs, CFooter },
  setup() {
    const visibleLeft = ref(false);
    const selectedDocs = ref("");
    const documents = reactive(Document);

    const route = useRoute("init");

    watch(
      () => route.params,
      async (newParams) => {
        console.log("New parameter:", newParams);
        if (!("category1" in newParams)) {
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
    return { documents, visibleLeft, onClickSidebar };
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
