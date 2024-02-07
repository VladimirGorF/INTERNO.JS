<template>
  <div class="box">
    <div class="box__lineMainBox">
      <div class="lineBox">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
    </div>
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
              width="32"
              height="23"
              viewBox="0 0 32 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="23" fill="#E5E5E5" />
              <g id="tablet 768_index" clip-path="url(#clip0_188_673)">
                <rect
                  width="768"
                  height="2976"
                  transform="translate(-567 -31)"
                  fill="white"
                />
                <g id="Header">
                  <path
                    id="Rectangle 25"
                    d="M201 -31H-567V43H201V-31Z"
                    fill="#222222"
                  />
                </g>
                <g id="Button copy">
                  <path
                    id="Forma 1"
                    d="M0 23V20.31H32V23H0ZM0 12.76V10.07H32V12.76H0ZM0 2.69V0H32V2.69H0Z"
                    fill="#E8E8E8"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_188_673">
                  <rect
                    width="768"
                    height="2976"
                    fill="white"
                    transform="translate(-567 -31)"
                  />
                </clipPath>
              </defs>
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
        <details class="details" @click="makeSound()">
          <summary class="summary rightPage">Project</summary>
          <ul class="menu">
            <router-link to="/project">
              <h6 class="rightPage">Project</h6>
            </router-link>
            <router-link to="/projectDetails">
              <h6 class="rightPage">ProjectDetails</h6>
            </router-link>
          </ul>
        </details>
        <details class="details" @click="makeSound()">
          <summary class="summary rightPage">Blog</summary>
          <ul class="menu">
            <router-link to="/blog">
              <h6 class="rightPage">Blog</h6></router-link
            >
            <router-link to="/blogDetails">
              <h6 class="rightPage">BlogDetails</h6></router-link
            >
          </ul>
        </details>
        <!-- Несуществующая страница -->
        <!-- <router-link to="/non-existingPage">
          <h6 class="rightPage" @click="makeSound()">NotExistingPage</h6>
        </router-link> -->
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

@media (max-width: 1440px) and (min-width: 1024px) {
  .box__lineMainBox .lineBox {
    position: absolute;
    z-index: -1;
    display: grid;
    grid-template-columns: repeat(3, 285px);
  }
}

@media (max-width: 1023px) and (min-width: 768px) {
  .box__lineMainBox .lineBox {
    grid-template-columns: repeat(3, 250px);
  }
}

@media (max-width: 767px) {
  .box__lineMainBox .lineBox {
    grid-template-columns: repeat(3, 124px);
  }
  .box__header {
    margin-top: 15px;
    margin-bottom: 18px;
    justify-content: space-evenly;
  }
  .menu {
    position: absolute;
    z-index: 1;
    left: 235px;
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
  .menuMobile {
    margin-top: 15px;
  }
}
</style>
