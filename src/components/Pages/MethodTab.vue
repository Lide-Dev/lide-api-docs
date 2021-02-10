<template>
  <TabView :activeIndex="indexDocsPlatform">
    <TabPanel v-for="tab in tabs" :header="tab.title" :key="tab.title">
      <div class="p-fluid p-formgrid p-grid">
        <div class="p-field p-col-12">
          <label :for="tab.title + 'Method'">Method</label>
          <InputText
            :id="tab.title + 'Method'"
            type="text"
            v-model="tab.method"
          />
        </div>
        <div class="p-field p-col-12">
          <label :for="tab.title + 'QueryPlugin'">Query Plugin</label>
          <InputText
            :id="tab.title + 'QueryPlugin'"
            type="text"
            v-model="tab.queryPlugin"
          />
        </div>
        <div class="p-field p-col-12">
          <label :for="tab.title + 'Url'">URL</label>
          <InputText :id="tab.title + 'Url'" type="text" v-model="tab.url" />
        </div>
      </div>
    </TabPanel>
  </TabView>
  <div></div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  props: { modelValue: Array },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const indexDocsPlatform = ref(0);
    // inject("refIndexDocsPlatform");
    const tabs = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value),
    });
    return { indexDocsPlatform, tabs };
  },
};
</script>

<style>
</style>