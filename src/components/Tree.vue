<template>
  <div v-if="nodes.length > 0">
    <template v-for="node in nodes" :key="node.id">
      <div class="p-grid">
        <div class="p-col-12">
          <span class="p-buttonset">
            <Button
              icon="pi pi-times"
              class="p-button-danger"
              @click="clickDelete(node)"
            ></Button>
            <Button :label="node.label" @click="clickEdit(node)" />
          </span>
        </div>
      </div>
      <div v-if="node.children.length > 0">
        <template
          v-for="child in node.children"
          :key="node.id + '-' + child.id"
        >
          <div class="p-grid">
            <div class="p-col-1">^</div>
            <div class="p-col-11">
              <span class="p-buttonset">
                <Button
                  icon="pi pi-times"
                  class="p-button-danger"
                  @click="clickDelete(node)"
                ></Button>
                <Button :label="child.label" @click="clickEdit(node)"></Button>
              </span>
            </div>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    nodes: Array,
  },
  emits: ["click:edit", "click:delete"],
  setup(props, { emit }) {
    function clickEdit(node) {
      emit("click:edit", node.id);
    }
    function clickDelete(node) {
      emit("click:delete", node.id);
    }
    return { clickDelete, clickEdit };
  },
};
</script>

<style>
</style>