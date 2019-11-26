<template>
  <div>
    <VideoListItem v-for="(video,index) in videos" :key="index" :video="video" @videoSelect="onVideoSelect"></VideoListItem>
  </div>
 
</template>

<script>
import VideoListItem from './VideoListItem'
export default {
  name:'VideoList',
  props:{
    videos:Array
  },
  components:{
    VideoListItem
  },
  methods:{
    onVideoSelect(video){
      this.$emit('videoSelect',video)
    }
  }
}
</script>

<style>

</style>