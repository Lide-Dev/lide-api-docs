<template>
  <div class="layout-pages" v-if="isLocal">
    <div class="p-grid">
      <div class="p-offset-1 p-col-3">
        <h5 class="p-text-center">Status: {{ status }}</h5>
        <Tree
          @click:edit="showEdit"
          @click:delete="deletePage"
          v-if="nodes.length > 0"
          :nodes="nodes"
        ></Tree>
        <h5 v-else class="p-text-center">None Pages on Here...</h5>
        <span class="p-buttonset">
          <Button label="New Page" @click="statusPage('new')" />
          <Button label="Send Page" @click="sendPage()" />
          <Button label="Reset" @click="refreshTree()" />
        </span>
        <pre class="p-text-center">Log: {{ log }}</pre>
      </div>
      <div class="p-col-7">
        <ScrollPanel style="width: 100%; height: 600px">
          <div class="p-fluid p-formgrid p-grid">
            <div class="p-field p-col-12">
              <label for="key">Key</label>
              <InputText id="key" type="text" v-model="key" />
            </div>
            <div class="p-field p-col-12">
              <label for="label">Label</label>
              <InputText id="label" type="text" v-model="label" />
            </div>
            <div class="p-field p-col-12">
              <p><label class="" for="child">Has Child?</label></p>
              <InputSwitch id="child" v-model="child" />
            </div>
          </div>
          <template v-if="child">
            <span class="p-buttonset">
              <Button label="Add Child" @click="addChild" />
              <Button label="Delete Child" @click="deleteChild" />
            </span>
            <TabView v-model:activeIndex="selectedChild">
              <TabPanel
                v-for="(item, keys) in children"
                :key="item.id"
                :header="key + '\'s Child -' + (keys + 1)"
              >
                <h4 class=""></h4>
                <div class="p-fluid p-formgrid p-grid">
                  <div class="p-field p-col-12">
                    <label :for="item.id + 'Key'">Key</label>
                    <InputText
                      :id="item.id + 'Key'"
                      type="text"
                      v-model="item.key"
                    />
                  </div>
                  <div class="p-field p-col-12">
                    <label :for="item.id + 'Label'">Label</label>
                    <InputText
                      :id="item.id + 'Label'"
                      type="text"
                      v-model="item.label"
                    />
                  </div>
                </div>
                <h4>Content - {{ item.key }}</h4>
                <div class="p-col-12">
                  <Button
                    label="Add Content Child"
                    @click="addContent(true, item)"
                  />
                </div>
                <!-- START Content -->
                <div
                  v-for="con in item.content"
                  :key="con.id"
                  class="p-fluid p-formgrid p-grid"
                >
                  <div class="p-field p-col-12">
                    <Button
                      icon="pi pi-times"
                      class="p-button-rounded p-button-danger"
                      @click="deleteContent(true, item, con.id)"
                    />
                  </div>
                  <div class="p-field p-col-12">
                    <label :for="con.id + 'Select'">Content Type</label>
                    <Dropdown
                      :id="con.id + 'Select'"
                      v-model="con.type"
                      :options="selectionContentType"
                      @change="changeContentType(con)"
                      optionValue="value"
                      optionLabel="name"
                      placeholder="Select a Type Content"
                    />
                  </div>
                  <div class="p-field p-col-12">
                    <code-tab-platform
                      v-if="con.type === 'codePlatform'"
                      v-model:mobile="con.value[0]"
                      v-model:web="con.value[1]"
                    ></code-tab-platform>
                    <md
                      v-else-if="con.type === 'docs'"
                      v-model="con.value"
                    ></md>
                    <template v-else-if="con.type === 'components'">
                      <label :for="con.id + 'Component'">Name Component</label>
                      <InputText
                        :id="con.id + 'Component'"
                        type="text"
                        v-model="con.value"
                      />
                      <small
                        >Warn: Component must on a components folder.</small
                      >
                    </template>
                    <method-tab
                      v-else-if="con.type === 'methodTab'"
                      v-model="con.value"
                    />
                    <role-tab
                      v-else-if="con.type === 'responseTab'"
                      v-model="con.value"
                    />
                  </div>
                  <hr class="p-col-12" />
                </div>
                <!-- END Content -->
              </TabPanel>
            </TabView>
          </template>
          <div v-else class="layout-content">
            <h4>Content - {{ key }}</h4>
            <div class="p-col-12">
              <Button label="Add Content Parent" @click="addContent(false)" />
            </div>
            <!-- START Content -->
            <div
              v-for="con in content"
              :key="con.id"
              class="p-fluid p-formgrid p-grid"
            >
              <div class="p-field p-col-12">
                <Button
                  icon="pi pi-times"
                  class="p-button-rounded p-button-danger"
                  @click="deleteContent(false, con)"
                />
              </div>
              <div class="p-field p-col-12">
                <label :for="con.id + 'Select'">Content Type</label>
                <Dropdown
                  :id="con.id + 'Select'"
                  v-model="con.type"
                  :options="selectionContentType"
                  @change="changeContentType(con)"
                  optionValue="value"
                  optionLabel="name"
                  placeholder="Select a Type Content"
                />
              </div>
              <div class="p-field p-col-12">
                <code-tab-platform
                  v-if="con.type === 'codePlatform'"
                  v-model:mobile="con.value[0]"
                  v-model:web="con.value[1]"
                ></code-tab-platform>
                <md v-else-if="con.type === 'docs'" v-model="con.value"></md>
                <template v-else-if="con.type === 'components'">
                  <label :for="con.id + 'Component'">Name Component</label>
                  <InputText
                    :id="con.id + 'Component'"
                    type="text"
                    v-model="con.value"
                  />
                  <small>Warn: Component must on a components folder.</small>
                </template>
                <method-tab
                  v-else-if="con.type === 'methodTab'"
                  v-model="con.value"
                />
                <role-tab
                  v-else-if="con.type === 'responseTab'"
                  v-model="con.value"
                />
              </div>
              <hr class="p-col-12" />
            </div>
            <!-- END Content -->
          </div>
        </ScrollPanel>
      </div>
    </div>
  </div>
  <div class="layout-pages" v-else>
    <h4>Not Available on Production Mode</h4>
  </div>
</template>

<script>
import { onMounted, reactive, ref, toRefs, watch } from "vue";
import axios from "axios";
import CodeTabPlatform from "../components/Pages/CodeTabPlatform.vue";
import Md from "../components/Pages/Md.vue";
import MethodTab from "../components/Pages/MethodTab.vue";
import RoleTab from "../components/Pages/RoleTab.vue";
import Tree from "../components/Tree.vue";
export default {
  components: { CodeTabPlatform, Md, MethodTab, RoleTab, Tree },
  setup() {
    const isLocal = ref(true);
    const status = ref("new");
    const selectedChild = ref(0);
    const log = ref("");
    const nodes = ref([
      //   {
      //     key: 1,
      //     label: "ok",
      //     data: "Auth Code",
      //     children: [{ key: 1, label: "ok", data: "Auth Code" }],
      //   },
    ]);
    const selectionContentType = [
      { name: "Select one type", value: "none" },
      { name: "MD Document", value: "docs" },
      { name: "Component", value: "components" },
      { name: "Method HTTP Tab", value: "methodTab" },
      { name: "Example Code Tab", value: "codePlatform" },
      { name: "Response Role Tab", value: "responseTab" },
    ];

    const form = reactive({
      id: randomID(),
      key: "",
      label: "",
      content: [{ id: randomID(), type: "none", value: "" }],
      child: false,
      children: [],
    });

    function randomID() {
      return Math.random().toString(36).substr(2, 5);
    }

    function statusPage(value) {
      status.value = value;
    }

    function showEdit(id) {
      axios
        .get("http://cms_documentation.test/api/pages/" + id)
        .then((value) => {
          let data = value.data;
          form.key = data.command;
          form.label = data.label;
          form.child = data.children.length > 0;
          if (form.child) {
            form.children = data.children.map((value) => {
              value.key = value.key.split("/")[1];
              // value.content = value.content.map((value2) => {
              //   value2.id = randomID();
              //   return value2;
              // });
              return value;
            });
          } // else {
          //   // form.content = data.content.map((value) => {

          //   //   return value;
          //   // });
          // }
          console.log(form);
        });
      status.value = "edit." + id;
    }

    function deletePage(id) {
      axios
        .delete("http://cms_documentation.test/api/pages/" + id)
        .then((val) => {
          refreshTree();
          log.value = val.data.message;
        })
        .catch((e) => (log.value = e.message));
    }

    function sendPage() {
      if (status.value == "new") {
        axios
          .post("http://cms_documentation.test/api/pages", form)
          .then((val) => {
            refreshTree();
            log.value = val.data.message;
          })
          .catch((e) => (log.value = e.message));
      }
      else {

        axios
          .put("http://cms_documentation.test/api/pages/"+status.value.split(".")[1], form)
          .then((val) => {
            refreshTree();
            log.value = val.data.message;
          })
          .catch((e) => (log.value = e.message));
      }
    }

    function addChild() {
      form.children.push({
        id: randomID(),
        key: "",
        label: "",
        content: [],
      });
    }
    function deleteChild() {
      let arr = form.children.filter(function (value, index) {
        return index != selectedChild.value;
      });
      if (selectedChild.value > 0) selectedChild.value -= 1;
      form.children = arr;
    }

    function addContent(is_child = false, child) {
      if (is_child) {
        console.log("New Content2");
        child.content.push({ id: randomID(), type: "none", value: "" });
      } else {
        form.content.push({ id: randomID(), type: "none", value: "" });

        console.log(form.content);
      }
    }
    function deleteContent(is_child = false, content = {}, child_id = "") {
      if (is_child) {
        let arr = content.content.filter(function (value) {
          return value.id != child_id;
        });

        content.content = arr;
        console.log(arr, content.content);
      } else {
        let arr = form.content.filter(function (value) {
          return value.id != content.id;
        });
        form.content = arr;
        console.log(form.content);
      }
    }

    function changeContentType(content) {
      console.log(content);
      if (content.type === "codePlatform") {
        content.value = ["```java\n\n```", "```javascript\n\n```"];
      } else if (content.type === "methodTab") {
        content.value = [
          {
            title: "Admin",
            method: "",
            queryPlugin: "-",
            url: "https:/laron-server-side.test/api/v1/admins/",
          },
          {
            title: "Pelanggan",
            method: "",
            queryPlugin: "-",
            url: "https:/laron-server-side.test/api/v1/customers/",
          },
          {
            title: "Produsen",
            method: "",
            queryPlugin: "-",
            url: "https:/laron-server-side.test/api/v1/producers/",
          },
        ];
      } else if (content.type === "responseTab") {
        content.value = [
          {
            title: "Admin",
            value: "```json\n\n\n```",
          },
          {
            title: "Pelanggan",
            value: "```json\n\n\n```",
          },
          {
            title: "Produsen",
            value: "```json\n\n\n```",
          },
        ];
      } else {
        content.value = "";
      }
    }

    function refreshTree() {
      axios
        .get("http://cms_documentation.test/api/pages")
        .then((result) => {
          console.log(result.data);
          isLocal.value = true;
          nodes.value = result.data;
        })
        .catch((e) => {
          console.log(e);
          isLocal.value = false;
        });
      status.value = "new";
      form.id = randomID();
      form.key = "";
      form.label = "";
      form.content = [{ id: randomID(), type: "none", value: "" }];
      form.child = false;
      form.children = [];
    }

    watch(
      () => form.child,
      (exchangeChild) => {
        if (status.value != "new" && exchangeChild) {
          form.content = [];
          return;
        }
        if (exchangeChild) {
          form.content = [];
          form.children.push({
            id: randomID(),
            key: "",
            label: "",
            content: [],
          });
          form.children[0].content.push({
            id: randomID(),
            type: "none",
            value: "",
          });
        } else {
          form.children = [];
          form.content = [{ id: randomID(), type: "none", value: "" }];
        }
      }
    );

    onMounted(() => {
      refreshTree();
    });
    return {
      addChild,
      addContent,
      deleteContent,
      changeContentType,
      deleteChild,
      deletePage,
      isLocal,
      log,
      nodes,
      showEdit,
      selectedChild,
      ...toRefs(form),
      status,
      sendPage,
      statusPage,
      selectionContentType,
      refreshTree,
    };
  },
};
</script>

<style scoped>
.layout-pages {
  margin-top: 20px;
  min-height: 95vh;
  color: var(--text-color);
}

.layout-content {
  min-height: 400px;
}
</style>