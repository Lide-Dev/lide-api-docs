<template>
  <TabView :activeIndex="indexDocsPlatform">
    <TabPanel v-for="tab in tabs" :header="tab.title" :key="tab.title">
      <vue3-markdown-it :source="tab.value" :plugins="plugins" :html="true" />
    </TabPanel>
  </TabView>
</template>

<script>
import { ref } from "vue";
import MarkdownAttribute from "markdown-it-attrs";
export default {
  props: { tabs: Array },
  setup() {
    const indexDocsPlatform = ref(0);
    // inject("refIndexDocsPlatform");
    const plugins = [{ plugin: MarkdownAttribute }];

    return { indexDocsPlatform ,plugins};
  },
};
</script>

<style>
</style>