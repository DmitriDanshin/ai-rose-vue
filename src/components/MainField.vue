<template>
  <!-- component -->
  <div class="py-4">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">

      <div class="border-2 border-gray-500 rounded-md h-96 px-4 pt-4 overflow-auto" contenteditable ref="field">

        {{ messages }}

      </div>

      <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">

        <div class=" bg-white border-b border-gray-200 mt-4">
          <div>
            <div class="flex border-2 border-gray-500 h-10 p-2 rounded-md">
              <textarea name="content" rows="1" v-model="input" @keydown.enter.prevent="sendMessage"
                        class="inline w-full resize-none outline-none overflow-hidden"></textarea>
              <a class="cursor-pointer" @click="sendMessage">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane"
                     class="w-9 h-full" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 512 512">
                  <path fill="currentColor"
                        d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import getPredictions from "../API";

export default {
  name: "MainField",
  data() {
    return {
      input: '',
      messages: '',
    }
  },
  methods: {

    async sendMessage() {

      const prediction = await getPredictions(this.getTextFromField() + this.input);

      const output = prediction.predictions + " ";

      this.messages = output;
      this.input = '';

      this.normalizeScrollHeight();


    },

    getTextFromField() {
      return this.$refs.field.innerText ?? '';
    },

    normalizeScrollHeight() {
      this.$refs.field.scrollTop = this.$refs.field.scrollHeight;
    }
  },
}
</script>

<style scoped>

</style>