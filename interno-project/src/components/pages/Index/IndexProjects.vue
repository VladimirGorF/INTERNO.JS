<template>
    <div>
        <div class="box__projects">
        <div class="projects__Heading">
          <h2 class="projects__Title">Follow Our Projects</h2>
          <p class="projects__Text">
            It is a long established fact that a reader will be distracted by
            the of readable content of page lookings at its layouts points.
          </p>
        </div>
        <img src="../../../../public/indexImages/Item1.svg" alt="">
        <div class="projects__items">
          <div class="item" v-for="item in itemsList" :key="item.id">
            <img class="itemImage" :src="item.url" alt="itemImage" />
            <router-link to="/project">
              <div class="itemInform" @click="makeSound()">
              <div class="itemInfom__left">
                <h6 class="leftSubtitle">{{item.title}}</h6>
                <p class="leftText">{{item.text}}</p>
              </div>
              <a class="projectArrowImage" href="#"
                ><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                  <circle cx="35" cy="35.0001" r="35" fill="#F4F0EC"/>
                  <path d="M32 44.0001L40 35.0001L32 26.0001" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg></a>
            </div>
            </router-link>

          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'IndexProjects',

  methods: {
    ...mapMutations(['SET_projectItemsList']),
    ...mapActions(['fetchData']),
    ...mapGetters(['getProjectItemsList']),

    makeSound () {
      const audio = new Audio(
        require('../../../assets/sounds/knopka-klik-korotkii-odinochnyii-shumnyii.mp3')
      )
      audio.play()
    }
  },
  computed: {
    itemsList () {
      return this.$store.getters.getProjectItemsList
    }
  },
  created () {
    // при создании вызывается мутация SET_projectItemsList и в нее передаются из коммита в actions данные из fetchData
    this.SET_projectItemsList(this.fetchData())
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 1440px) and (min-width: 1024px)  {
  .projects__items {
    grid-template-columns: repeat(2, 400px);
    gap: 24px;
    margin-bottom: 96px;
  }
  .item {
    max-width: 400px;
  }
  .itemImage {
    max-width: 400px;
  }
}
@media (max-width: 1023px) and (min-width: 768px)  {
  .projects__items {
    grid-template-columns: repeat(2, 347px);
    gap: 56px;
    margin-bottom: 96px;
  }
  .item {
    max-width: 347px;
  }
  .itemImage {
    max-width: 347px;
  }
}

@media (max-width: 767px){
  .box__projects .projects__Heading .projects__Title {
    font-size: 26px;
  }
  .box__projects .projects__Heading .projects__Text {
    display: none;
  }
  .box__bannerMain .banner {
    margin-bottom: 25px;
}
.box__projects .projects__Heading {
    margin-bottom: 19px;
}

.projects__items {
    grid-template-columns: repeat(2, 45%);
    gap: 16px;
    margin-bottom: 96px;
  }
  .item {
    max-width: 100%;
  }
  .itemImage {
    max-width: 100%;
  }
  .leftSubtitle {
    font-size: 16px !important;
}
 .itemInfom__left .leftText {
    font-size: 10px !important;
}
svg{
  width: 35px;
  height: 35px;
}

}

</style>
