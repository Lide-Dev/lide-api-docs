<template>
  <div class="p-grid p-d-flex p-align-center p-jc-center layout-introduction">
    <div class="p-col-12 p-md-4 p-d-flex p-jc-center">
      <img class="logo" alt="logo" src="../assets/logo.png" />
    </div>
    <div class="p-col-12 p-md-6 p-d-flex p-flex-column">
      <div class="p-d-md-none p-d-flex p-flex-column p-text-center">
        <h3>Dokumentasi API Laron</h3>
        <p>
          Laron melayani API secara <i>cross-platform</i><br />
          dari mobile hingga ke website.
        </p>
        <div class="p-d-flex p-mt-5 p-jc-center">
          <span class="p-buttonset">
            <Button label="Get Started" />
            <Button label="API Reference" />
          </span>
        </div>
      </div>
      <div class="p-d-none p-d-md-flex p-flex-column">
        <h3>Dokumentasi API Laron</h3>
        <p>
          Laron melayani API secara <i>cross-platform</i><br />
          dari mobile hingga ke website.
        </p>
        <div class="p-d-flex p-mt-5">
          <span class="p-buttonset">
            <Button label="Get Started" />
            <Button label="API Reference" />
          </span>
        </div>
      </div>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// import { ref } from "vue";
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",

};
</script>

<style scoped>
.logo {
  max-width: 60%;
  height: auto;
}

.layout-introduction {
  margin-top: 20px;
  height: 70vh;
  color: var(--text-color);
}
</style>
