<template>
    <div class="radio-button">
      <label v-for="option in options" :key="option.value">
        <input type="radio" :value="option.value" v-model="selectedOption">
        {{ option.label }}
      </label>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      options: {
        type: Array,
        required: true
      },
      value: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        selectedOption: this.value
      };
    },
    watch: {
      selectedOption(newVal) {
        this.$emit('input', newVal);
      }
    }
  };
  </script>
  
  <style scoped>
  .radio-button {
    display: flex;
    flex-direction: column;
  }
  
  .radio-button label {
    margin-bottom: 20px;
  }
  </style>
  