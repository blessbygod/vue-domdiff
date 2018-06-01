<template>
  <div class="hello">
    <div>真实DOM</div>
    <input type="button" value="5,1,2,3,4" @click="insertBeforeOne">
    <input type="button" value="7,8,9" @click="insertAfterOne">
    <input type="button" value="2,5,4" @click="insertAfterTwo">
    <input type="button" value="1,2,3,4,5" @click="insertAfterThree">
    <input type="button" value="3,4,5,6" @click="insertAfterFour">
    <ul>
      <li v-for="num in numbers" class="">{{num}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'domdiff',
  data () {
    return {
      isAddOne: false,
      numbers: [1, 2, 3, 4]
    }
  },
  methods: {
    insertBeforeOne () {
      this.$set(this, 'numbers', [5, 1, 2, 3, 4])
      window.borderColor = 'blue'
      window.index = 0
    },
    insertAfterOne () {
      this.$set(this, 'numbers', [7, 8, 9])
      window.borderColor = 'red'
      window.index = 0
    },
    insertAfterTwo () {
      this.$set(this, 'numbers', [2, 5, 4])
      window.borderColor = 'yellow'
      window.index = 0
    },
    insertAfterThree () {
      this.$set(this, 'numbers', [1, 2, 3, 4, 5])
      window.borderColor = 'green'
      window.index = 0
    },
    insertAfterFour () {
      this.$set(this, 'numbers', [3, 4, 5, 6])
      window.borderColor = 'black'
      window.index = 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #ccc;
  font-size: 32px;
  text-align: center;
  line-height: 100px;
  font-weight: 700;
}
input {
  width: 160px;
  height: 40px;
  background-color: blue;
  color: white;
  font-weight: 700;
}

</style>
