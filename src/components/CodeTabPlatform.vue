<template>
  <TabView v-model:activeIndex="indexDocsPlatform">
    <TabPanel header="Mobile">
      <vue3-markdown-it :source="tabs[0]" />
    </TabPanel>
    <TabPanel header="Web">
      <vue3-markdown-it :source="tabs[1]" />
    </TabPanel>
  </TabView>
  <div></div>
</template>

<script>
import { inject } from 'vue';

export default {
  props: { tabs: Array },
  setup() {
    const indexDocsPlatform = inject("refIndexDocsPlatform");

    return { indexDocsPlatform };
  },
};
</script>

<style>
</style>