<template>
  <TabView :activeIndex="indexDocsPlatform">
    <TabPanel v-for="tab in tabs" :header="tab.title" :key="tab.title">
      <p>Editor:</p>
      <Textarea
        :autoResize="true"
        rows="5"
        cols="30"
        v-model="tab.value"
      ></Textarea>
      <p>Overview:</p>
      <vue3-markdown-it :source="tab.value" :plugins="plugins" :html="true" />
    </TabPanel>
  </TabView>
</template>

<script>
import { computed, ref } from "vue";
import MarkdownAttribute from "markdown-it-attrs";
export default {
  props: { modelValue: Array },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const indexDocsPlatform = ref(0);
    const plugins = [{ plugin: MarkdownAttribute }];
    // inject("refIndexDocsPlatform");
    const tabs = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value),
    });
    return { indexDocsPlatform, tabs,plugins };
  },
};
</script>

<style>
</style>