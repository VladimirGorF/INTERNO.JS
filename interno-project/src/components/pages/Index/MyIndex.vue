<template>
  <div>
    <MyHeader />
    <div class="box__bannerMain">
      <div class="banner">
        <img
          src="../../../../public/indexImages/bannerImage.svg"
          alt="bannerImage"
          class="bannerImage"
        />
        <div class="informPart">
          <h1 class="title">
            Let Your Home <br />
            Be Unique
          </h1>
          <p class="text">
            There are many variations of the passages of <br />
            lorem Ipsum fromavailable, majority.
          </p>
          <router-link to="/project">
            <h6 class="rightPage">
              <div class="button" @click="makeSound()">
                <p class="buttonText">Get Started</p>
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="Vector"
                    d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                    stroke="#CDA274"
                    stroke-width="2"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </h6>
          </router-link>
        </div>
      </div>
    </div>
    <IndexProjects />
    <div class="box__counter">
      <div class="counter__item">
        <div class="inform">
          <div class="number">12</div>
          <div class="counterText">Years Of Experiance</div>
        </div>
        <img
          class="line"
          src="../../../../public/indexImages/Line.svg"
          alt="line"
        />
      </div>
      <div class="counter__item">
        <div class="inform">
          <div class="number">85</div>
          <div class="counterText">Success Project</div>
        </div>
        <img
          class="line"
          src="../../../../public/indexImages/Line.svg"
          alt="line"
        />
      </div>
      <div class="counter__item">
        <div class="inform">
          <div class="number">15</div>
          <div class="counterText">Active Project</div>
        </div>
        <img
          class="line"
          src="../../../../public/indexImages/Line.svg"
          alt="line"
        />
      </div>
      <div class="counter__item">
        <div class="inform">
          <div class="number">95</div>
          <div class="counterText">Happy CUstomers</div>
        </div>
      </div>
    </div>
    <IndexBlog />
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from '../../pages/MyHeader.vue'
import MyFooter from '../../pages/MyFooter.vue'
import IndexBlog from './IndexBlog.vue'
import IndexProjects from './IndexProjects.vue'

export default {
  name: 'MyIndex',
  components: {
    IndexProjects,
    IndexBlog,
    MyHeader,
    MyFooter
  },
  data () {
    return {}
  },

  methods: {
    makeSound () {
      const audio = new Audio(
        require('../../../assets/sounds/knopka-v-prostranstve-priglushennyii-blizkii.mp3')
      )
      audio.play()
    }
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 1440px) and (min-width: 1024px) {
  .box__bannerMain .banner {
    max-width: 856px;
  }
  .box__counter .counter__item .inform {
    margin-right: 24px;
  }
  .box__counter .counter__item .line {
    margin-right: 38px;
  }
}

@media (max-width: 1023px) and (min-width: 768px) {
  .box__bannerMain .banner .informPart .button {
    width: 160px;
    height: 50px;
  }
  .box__bannerMain .banner .informPart .title {
    font-size: 50px;
  }
  .box__bannerMain .banner {
    max-width: 762px;
  }
  .bannerImage {
    max-width: 99% !important;
  }
  .box__counter .counter__item .line {
    margin-right: 50px;
  }
  .box__counter .counter__item .inform {
    margin-right: 34px;
  }
}

@media (max-width: 767px) {
  .box__bannerMain .banner {
    margin-bottom: 34px;
  }
  .box__bannerMain .banner .informPart {
    margin-top: 18%;
    left: 0%;
    max-width: 87%;
  }

  .bannerImage {
    max-width: 95% !important;
  }
  .box__bannerMain .banner .informPart .title {
    color: #292f36;
    font-family: "DM Serif Display";
    font-size: 31px;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 17px;
  }
  .box__bannerMain .banner .informPart .button {
    width: 149px;
    height: 44px;
  }
  .box__bannerMain .banner .informPart .text {
    display: none;
  }

  .box__counter {
    height: 195px;
    margin-bottom: 20px;
  }
  .box__counter .counter__item .inform .number {
    font-size: 35px;
  }

  .box__counter .counter__item .line {
    font-size: 10px;
  }
  .box__counter .counter__item .inform .counterText {
    font-size: 11px;
  }
  .box__counter .counter__item .inform {
    margin-right: 20px;
  }
  .box__counter .counter__item .line {
    margin-right: 20px;
  }
}

@media (max-width: 767px) and (min-width: 400px) {
  .bannerImage {
    max-width: 95%;
  }
  .box__bannerMain .banner .informPart .title {
    margin-bottom: 34px;
  }
}
</style>
