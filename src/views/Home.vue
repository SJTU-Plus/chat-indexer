<template>
  <div class="container-fluid h-100">
    <div class="row h-100">
      <div class="col-md-3">
        <div class="row">
          <div class="col my-3">
            <input class="form-control" type="date" v-model="date">
          </div>
        </div>
        <div class="row">
          <div class="col my-3">
            <input class="form-control" v-model="search">
          </div>
        </div>
      </div>
      <div class="col-md-9 h-100">
        <div class="h-100 overflow-auto">
          <MessageComponent v-for="item in messages" v-bind:key="item.id" :message="item"></MessageComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import MessageComponent from "@/components/MessageComponent.vue";
import { generateChatData, searchChatData, Message } from "@/models/Message";

@Component({
  components: {
    MessageComponent
  }
})
export default class Home extends Vue {
  messages: Message[] = []
  date = "2019-01-11"
  search = ""

  @Watch('date')
  onDateChange(val: string) {
    this.updateMessage(val)
  }

  @Watch('search')
  onSearchChange(val: string) {
    this.updateSearch(val)
  }

  mounted() {
    this.updateMessage(this.date)
  }

  updateSearch(val: string) {
    this.messages = searchChatData(val)
  }

  updateMessage(val: string) {
    const date = new Date(val)
    console.log(date.getTime(), date.getTime() + 86400 * 1000)
    this.messages = generateChatData(date.getTime(), date.getTime() + 86400 * 1000)
  }
}
</script>

<style scoped>
.scroller {
  height: 100%;
}
</style>
