<template>
  <div>
    <p>
      <a :name="'msg-' + message.id"></a>
      <strong>{{ message.name }}</strong>
      <small class="mx-1 text-muted">{{ message.time | datetime }}</small>
      <br />
      <span v-html="hl(message.msg)"></span>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Message } from "@/models/Message";
import sanitizeHtml from "sanitize-html";

@Component({
  filters: {
    datetime(x: number) {
      return new Date(x).toLocaleString();
    }
  }
})
export default class MessageComponent extends Vue {
  @Prop() private message!: Message;
  @Prop() private highlight!: string;

  hl(x: string) {
    const highlight = sanitizeHtml(this.highlight);
    const msg = sanitizeHtml(x);
    if (highlight != "") {
      return msg
        .split(highlight)
        .join(`<span class="bg-warning">${this.highlight}</span>`);
    }
    return msg;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
