<template>
  <nav class="layout-navbar">
    <div class="p-grid">
      <div class="p-d-md-none p-ml-5 p-col-1 p-d-flex p-align-center">
        <Button
          icon="pi pi-bars"
          class="p-button-text p-button-lg"
          @click="onClickSidebar"
        ></Button>
      </div>
      <div class="p-md-2 p-col-9 p-jc-center p-d-flex p-align-center">
        <router-link to="/">
          <h2 class="logo p-text-center">Laron</h2>
        </router-link>
      </div>
      <div
        class="p-col-5 p-offset-2 p-d-md-flex p-d-none p-jc-center p-align-center"
      >
        <router-link to="/docs"
          ><Button label="Documentation" class="p-button-text"></Button
        ></router-link>
        <router-link to="/about"
          ><Button label="About" class="p-button-text"></Button
        ></router-link>
      </div>
      <div class="p-col-2 p-d-md-flex p-d-none p-jc-end p-align-center">
        <Dropdown
          class="p-mr-6"
          v-model="selectedVersion"
          :options="version"
          optionLabel="name"
          optionValue="code"
          placeholder="Select a version"
        ></Dropdown>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";
export default {
  emits: ["click:sidebar"],
  // eslint-disable-next-line no-unused-vars
  setup(props, { emit }) {
    const version = ref([
      { name: "Beta-Release", code: "0.5" },
      { name: "1.0", code: "1.0" },
      { name: "1.1", code: "1.1" },
      { name: "2.0", code: "2.0" },
      { name: "2.1 New", code: "2.1" },
    ]);
    const selectedVersion = ref("0.5");

    function onClickSidebar() {
      emit("click:sidebar");
    }
    return { version, selectedVersion, onClickSidebar };
  },
};
</script>

<style scoped>
/* :root {
    --surface-a: #1e1e1e;
    --surface-b: #121212;
    --surface-c: rgba(255, 255, 255, 0.03);
    --surface-d: #383838;
    --surface-e: #1e1e1e;
    --surface-f: #1e1e1e;
    --text-color: rgba(255, 255, 255, 0.87);
    --text-color-secondary: rgba(255, 255, 255, 0.6);
    --primary-color: #81C784;
    --primary-color-text: #212529;
    --font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
} */
.layout-navbar {
  background-color: var(--surface-b);
  margin: -8px;
}

i {
  color: var(--text-color);
}

.logo {
  font-weight: 500;
  color: var(--text-color);
}
a {
  text-decoration: none;
}
</style>