<template>
  <div>
    <Navbar />
    <div class="container">
      <SearchBar @handleSearch="handleSearch" />
      <VideoDetail :video="selectedVideo"></VideoDetail>
      <div v-if="loading">
        <Loader></Loader>
      </div>
      <div v-else>
        <VideoList :videos="videos" @videoSelect="onVideoSelect" />
        <div v-if="videos===[]">
          No matching videos
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar/Navbar";
import Loader from "../components/SearchBar/Loader";
import SearchBar from "../components/SearchBar/SearchBar";
import VideoList from "../components/VideoList/VideoList";
import VideoDetail from "../components/Video/VideoDetail";
const API_KEY = "AIzaSyAn9Q6rPBI5ISzhhUf1Ktrbs6On_bnUJa8";

export default {
  name: "Home",
  data() {
    return {
      videos: [],
      loading: false,
      selectedVideo: null
    };
  },
  components: {
    SearchBar,
    Loader,
    Navbar,
    VideoList,
    VideoDetail
  },
  mounted(){
     this.loading = true;
     this.$http
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            key: API_KEY,
            order: "date",
            type: "video",
            part: "snippet",
            maxResults: 10,
            q: ''
          }
        })
        .then(response => {
          console.log(response.data.items);
          this.videos = response.data.items;
          this.loading = false;
        }).catch(err=>{
          if(err){
            this.video = '请开vpn或者检查网络设置'
          }
        })
  },
  methods: {
    handleSearch(searchValue) {
      this.loading = true;
      console.log(searchValue);
      this.$http
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            key: API_KEY,
            order: "date",
            type: "video",
            part: "snippet",
            maxResults: 50,
            q: searchValue
          }
        })
        .then(response => {
          console.log(response.data.items);
          this.videos = response.data.items;
          this.loading = false;
        }).catch(err=>{
          if(err){
            this.video = '请开vpn或者检查网络设置'
          }
        })
    },
    onVideoSelect(video) {
      this.selectedVideo = video;
    }
  }
};
</script>

<style>
</style>