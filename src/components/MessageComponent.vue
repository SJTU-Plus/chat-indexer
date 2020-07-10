<template>
  <div class="hello">{{ msg.name }} {{ msg.time }} {{ msg.message }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Message } from "@/models/Message";

@Component
export default class MessageComponent extends Vue {
  @Prop() private message!: Message;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
