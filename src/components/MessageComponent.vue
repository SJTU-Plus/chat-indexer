<template>
  <div>
    <p>
      <strong>{{ message.name }}</strong> <small class="text-muted">{{ message.time | datetime }} </small>
      <br>
      {{ message.msg }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Message } from "@/models/Message";

@Component({
  filters: { datetime(x: number) { return (new Date(x)).toLocaleString() } }
})
export default class MessageComponent extends Vue {
  @Prop() private message!: Message;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
