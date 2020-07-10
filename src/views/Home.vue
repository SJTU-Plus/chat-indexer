<template>
  <div class="home">
    <MessageComponent v-for="message in messages" v-bind:key="message.id" :message="message"></MessageComponent>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import MessageComponent from "@/components/MessageComponent";
import { AllMessages } from "@/Chat";
import { Message } from "@/models/Message";

@Component({
  components: {
    MessageComponent
  }
})
export default class Home extends Vue {
  private messages: Message[] = AllMessages;
}
</script>
