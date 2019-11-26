<template>
  <div>
  <!-- Card -->
<div class="card promoting-card my-4">

  <!-- Card content -->
  <div class="card-body d-flex flex-row">

    <!-- Avatar -->
    <img :src="thumbnails" class="rounded-circle mr-3" height="50px" width="50px" alt="avatar">

    <!-- Content -->
    <div>

      <!-- Title -->
      <h4 class="card-title font-weight-bold mb-2">{{video.snippet.title}}</h4>
      <!-- Subtitle -->
      <p class="card-text"><i class="far fa-clock pr-2"></i>{{video.snippet.publishedAt}}</p>

    </div>

  </div>

  <!-- Card image -->

    <iframe class="card-img-top rounded-0" width="100%" @click="onVideoSelect" height="100%" :src="videoURL"  alt="Card image cap" fullscreen="true" />


  <!-- Card content -->
  <div class="card-body">

    

      <!-- Text -->
      <h3 class="card-text">{{video.snippet.description}}</h3>
      <!-- Button -->
      
      <i class="fas fa-share-alt text-muted float-right p-1 my-1" data-toggle="tooltip" data-placement="top" title="Share this post"></i>
      <i class="fas fa-heart text-muted float-right p-1 my-1 mr-3" data-toggle="tooltip" data-placement="top" title="I like it"></i>

    </div>

  </div>

</div>
<!-- Card -->

</template>

<script>

export default {
  name:'VideoListItem',
  props:['video'],
  methods:{
    onVideoSelect(){
      this.$emit('videoSelect',this.video)
    }
  },
  computed:{
    thumbnails(){
      return this.video.snippet.thumbnails.high.url
    },
    videoURL(){
      const {videoId}= this.video.id
      return `https://www.youtube.com/embed/${videoId}`
    }
  }
}
</script>

<style>
.promoting-card{
  width: 100%;
  height: 700px;
}
</style>