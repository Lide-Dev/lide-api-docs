<template>
  <div
    :key="item.id"
    class="layout-documentation-content"
    v-for="item in source"
  >
    <vue3-markdown-it
      v-if="item.type === 'docs'"
      :source="item.value"
      :plugins="plugins"
      :html="true"
    />
    <component v-else-if="item.type === 'components'" :is="item.value" />
    <code-tab-platform
      v-else-if="item.type === 'codePlatform'"
      :tabs="item.value"
    />
    <method-tab v-else-if="item.type === 'methodTab'" :tabs="item.value" />
    <role-tab v-else-if="item.type === 'responseTab'" :tabs="item.value" />
  </div>
</template>

<script>
import MarkdownAttribute from "markdown-it-attrs";
import CodeTabPlatform from "./CodeTabPlatform.vue";
import MethodTab from "./MethodTab.vue";
import RoleTab from './RoleTab.vue';

export default {
  components: { CodeTabPlatform, MethodTab, RoleTab },
  props: { source: Array },
  setup(props) {
    console.log(props.source);
    const plugins = [{ plugin: MarkdownAttribute }];
    return { plugins };
  },
};
</script>

<style>
</style>