<template>
    <div>
        <div v-for="i in [currentIndex]" :key="i">
            <img :src="currentImg" />
        </div>
    </div>
    </template>
    
    <script>
    
    export default {
      name: 'HomeView',
      data() { 
        return {

          images: [
            require('@/assets/Images/slides/marvel.png'),
            require('@/assets/Images/slides/steampunk.png'),
            require('@/assets/Images/slides/russe.png'),
            require('@/assets/Images/slides/pinky.png'),
          ],
          timer: null,
          currentIndex: 0
        }
      },
      mounted: function() { 
        this.startSlide();
      },
    
      methods: {
        startSlide: function() {
          this.timer = setInterval(this.next, 3000);
        },
    
        next: function() {
          this.currentIndex += 1;
        },
        prev: function() {
          this.currentIndex -= 1;
        }
      },
    
      computed: {
        currentImg: function() {
          return this.images[Math.abs(this.currentIndex) % this.images.length];
        }
      }}
    </script>
    
    <style scoped>
    
    /* .fade-enter-active,
    .fade-leave-active {
      transition: all 0.9s ease;
      overflow: hidden;
      visibility: visible;
      position: absolute;
      width:100%;
      opacity: 1;
      padding-bottom: 20%;
    }
    
    .fade-enter,
    .fade-leave-to {
      visibility: hidden;
      width:100%;
      opacity: 0;
      padding-bottom: 20%;
    } */
    
    template{
      background-color: #f4f4f1;
      text-align : center;
    }
    
    img {
      width:300%;
      height:100%;
      margin-bottom : 100px;
    }
    
    .prev, .next {
      cursor: pointer;
      position: absolute;
      top: 40%;
      width: auto;
      padding: 16px;
      color: white;
      font-weight: bold;
      font-size: 18px;
      transition: 0.7s ease;
      border-radius: 0 4px 4px 0;
      text-decoration: none;
      user-select: none;
    }
    
    .next {
      right: 0;
    }
    
    .prev {
      left: 0;
    }
    
    </style>