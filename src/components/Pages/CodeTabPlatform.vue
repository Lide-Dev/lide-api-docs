<template>
  <p>Editor:</p>
  <TabView v-model:activeIndex="indexDocsPlatform">
    <TabPanel header="Mobile">
      <Textarea v-model="codeExampleMobile"></Textarea>
    </TabPanel>
    <TabPanel header="Web">
      <Textarea v-model="codeExampleWeb"></Textarea>
    </TabPanel>
  </TabView>
  <p>Overview:</p>
  <TabView v-model:activeIndex="indexDocsPlatform">
    <TabPanel header="Mobile">
      <vue3-markdown-it :source="codeExampleMobile" />
    </TabPanel>
    <TabPanel header="Web">
      <vue3-markdown-it :source="codeExampleWeb" />
    </TabPanel>
  </TabView>
</template>

<script>
import { computed, ref } from "vue";
export default {
  props: {
    web: {
      type: String,
    },
    mobile: {
      type: String,
    },
  },
  emits: ["update:web","update:mobile"],
  setup(props, { emit }) {
    const indexDocsPlatform = ref(0);
    const codeExampleWeb = computed({
      get: () => props.web,
      set: (value) => emit("update:web", value),
    });
    const codeExampleMobile = computed({
      get: () => props.mobile,
      set: (value) => emit("update:mobile", value),
    });

    return { indexDocsPlatform,codeExampleWeb, codeExampleMobile };
  },
};
</script>

<style>
</style>