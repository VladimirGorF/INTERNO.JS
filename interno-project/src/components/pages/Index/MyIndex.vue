<template>
  <div class="box">
    <div class="box__bannerMain">
      <div class="banner">
        <img
          src="../../../../public/indexImages/bannerImage.svg"
          alt="bannerImage"
          class="bannerImage"
        />
        <div class="informPart">
          <h1 class="title">Let Your Home Be Unique</h1>
          <p class="text">
            There are many variations of the passages of lorem Ipsum
            fromavailable, majority.
          </p>
            <router-link to="/project">
              <h6 class="rightPage">
                <div class="button">
                  <p class="buttonText">Get Started</p>
                  <img
                    class="ArrowButton"
                    src="../../../../public/indexImages/ArrowButton.svg"
                    alt="ArrowRight"
                  />
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
  </div>
</template>

<script>
import IndexBlog from './IndexBlog.vue'
import IndexProjects from './IndexProjects.vue'
import { mapMutations } from 'vuex'

export default {
  name: 'MyIndex',
  components: {
    IndexProjects,
    IndexBlog
  },
  created () {
    this.SET_NotFoundFlag(false) // переход на страницу main, передаем true во флаг старницы NotFound
  },
  methods: {
    ...mapMutations(['SET_NotFoundFlag'])
  }
}
</script>

<style></style>
