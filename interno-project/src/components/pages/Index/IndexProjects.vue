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
        <div class="projects__items">
          <div class="item" v-for="item in itemsList" :key="item.id">
            <img class="itemImage" :src="item.url" alt="itemImage" />
            <div class="itemInform">
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
    ...mapGetters(['getProjectItemsList'])
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

</style>
