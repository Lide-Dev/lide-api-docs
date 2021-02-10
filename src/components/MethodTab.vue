<template>
  <TabView :activeIndex="indexDocsPlatform">
    <TabPanel v-for="tab in tabs" :header="tab.title" :key="tab.title">
      <ul>
        <li><strong>Method</strong> : {{ tab.method }}</li>
        <li><strong>Query Plugin</strong> : {{ tab.queryPlugin }}</li>
        <li>
          <strong>URL</strong> : <i>{{ tab.url }}</i>
        </li>
      </ul>
    </TabPanel>
  </TabView>
  <div></div>
</template>

<script>
import { ref } from "vue";
export default {
  props: { tabs: Array },
  setup() {
    const indexDocsPlatform = ref(0);
    // inject("refIndexDocsPlatform");

    return { indexDocsPlatform };
  },
};
</script>

<style>
</style>