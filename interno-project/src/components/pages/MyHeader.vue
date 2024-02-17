<template>
  <div>
    <div class="box__header">
      <router-link to="/index"
        ><h6 class="">
          <div class="left" @click="makeSound()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                fill="#CDA274"
              />
            </svg>
            <h3 class="headerLeft">Interno</h3>
          </div>
        </h6></router-link
      >

      <div class="rightMobile">
        <details class="details" @click="makeSound()">
          <summary class="summary">
            <svg
              class="menuMobile"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="50px"
              height="50px"
            >
              <path
                d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"
              />
            </svg>
          </summary>
          <ul class="menu">
            <router-link to="/index"
              ><h6 class="rightPage">Home</h6></router-link
            >
            <router-link to="/project">
              <h6 class="rightPage">Project</h6>
            </router-link>
            <router-link to="/projectDetails">
              <h6 class="rightPage">ProjectDetails</h6>
            </router-link>
            <router-link to="/blog">
              <h6 class="rightPage">Blog</h6></router-link
            >
            <router-link to="/blogDetails">
              <h6 class="rightPage">BlogDetails</h6></router-link
            >
          </ul>
        </details>
      </div>
      <nav class="right">
        <!-- маршурты прописаны в index.js в роутере  -->
        <router-link to="/index"
          ><h6 class="rightPage" @click="makeSound()">Home</h6></router-link
        >
        <details class="details">
          <summary class="summary rightPage" @click="makeSoundShort()">Project</summary>
          <ul class="menu">
            <router-link to="/project">
              <h6 class="rightPage" @click="makeSound()">Project</h6>
            </router-link>
            <router-link to="/projectDetails">
              <h6 class="rightPage" @click="makeSound()">ProjectDetails</h6>
            </router-link>
          </ul>
        </details>
        <details class="details">
          <summary class="summary rightPage" @click="makeSoundShort()">Blog</summary>
          <ul class="menu">
            <router-link to="/blog">
              <h6 class="rightPage" @click="makeSound()">Blog</h6></router-link
            >
            <router-link to="/blogDetails">
              <h6 class="rightPage" @click="makeSound()">
                BlogDetails
              </h6></router-link
            >
          </ul>
        </details>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',

  methods: {
    makeSound () {
      const audio = new Audio(
        require('../../assets/sounds/knopka-v-prostranstve-priglushennyii-blizkii.mp3')
      )
      audio.play()
    },
    makeSoundShort () {
      const audio = new Audio(
        require('../../assets/sounds/knopka-klik-korotkii-odinochnyii-shumnyii.mp3')
      )
      audio.play()
    }
  }
}
</script>

<style scoped>
summary {
  list-style: none; /* Removes the disclosure triangle. */
}
.summary {
  width: 150px;
}

@media (max-width: 767px) {
  .box__header {
    gap: 50px;
    margin-top: 15px;
    margin-bottom: 18px;
    justify-content: space-evenly;
  }
  .menu {
    position: absolute;
    z-index: 1;
    left: 64%;
  }
  .rightPage {
    color: black;
    border: 1px dotted black;
    text-align: center;
    font-family: "Jost";
    font-size: 16px;
    font-weight: 400;
    line-height: 125%;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    margin-bottom: 12px;
    background-color: #fff;
    padding: 5px;
    border-radius: 10px;
  }
  .rightPage:hover {
    color: #e18709;
  }

  .rightPage:visited {
    color: green;
  }

  .box__header .right {
    display: none;
  }
  .rightMobile {
    display: block !important;
    text-align: center;
  }
}
</style>
