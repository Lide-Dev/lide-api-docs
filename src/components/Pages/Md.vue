<template>
  <p>Editor:</p>
  <Textarea :autoResize="true" rows="5" cols="30" v-model="markup"></Textarea>
  <p>Overview:</p>
  <vue3-markdown-it :source="markup" :plugins="plugins" :html="true" />
</template>

<script>
import { computed } from "vue";
import MarkdownAttribute from "markdown-it-attrs";
export default {
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const markup = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value),
    });
    const plugins = [{ plugin: MarkdownAttribute }];

    return { markup,plugins };
  },
};
</script>

<style>
</style>