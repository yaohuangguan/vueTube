<template>
  <div class="text-center">

  <input class="form-control mt-3" type="text" placeholder="搜索YouTube视频" aria-label="Search" id='search' />
  <button class="btn btn-outline-secondary" type="submit" @click="onInput">搜索</button>


  </div>
</template>

<script>
export default {
  name:'SearchBar',
  methods:{
    onInput(e){
      const search = document.getElementById('search').value
      console.log(search)
      this.$emit('handleSearch',search)
    }
  }
}
</script>

<style>

</style>