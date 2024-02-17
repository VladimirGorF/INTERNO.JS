<template>
  <div class="left">
    <article class="article" v-for="item in itemsList" :key="item.id">
      <div v-if="Tag === item.tagArticle || Tag === ''">
        <h2 class="title">
          {{ item.title }}
        </h2>
        <p class="text" v-if="item.text">
          {{ item.text }}
        </p>
        <p class="text" v-if="item.text2">
          <span class="numbers">1</span>
          {{ item.text2 }}
        </p>
        <p class="text" v-if="item.text3">
          <span class="numbers">2</span>
          {{ item.text3 }}
        </p>
        <p class="text" v-if="item.text4">
          <span class="numbers">3</span>
          {{ item.text4 }}
        </p>
        <img class="articleImage" :src="item.url" alt="articleImage" />
        <div class="dateInformation">
          <div class="left">{{ item.dateBoxText }}</div>
          <div class="right">{{ item.type }}</div>
        </div>
        <p class="text" v-if="item.text5">
          {{ item.text5 }}
        </p>
        <p class="text" v-if="item.text5">
          {{ item.text6 }}
        </p>
        <div class="sloganBox" v-if="item.sloganCheck">
          <div class="commas">,,</div>
          <div class="subtitle">
            {{ item.subtitle }}
          </div>
        </div>
      </div>
    </article>

    <!-- <article class="article" v-if="Tag === 'Bedroom' || Tag === ''">
      <h2 class="title">Design sprints are great: BEDROOM</h2>
      <p class="text">
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
        turpmaximus.posuere in.Contrary to popular belief.There are many
        variations of passages of Lorem Ipsum available, but the majority have
        suffered.
      </p>
      <p class="text">
        <span class="numbers">1</span>
        Contrary to popular belief.There are many variations of passages of
        Lorem Ipsum available, but the majority have suffered.
      </p>
      <p class="text">
        <span class="numbers">2</span>
        Contrary to popular belief.There are many variations of passages of
        Lorem Ipsum available, but the majority have suffered.
      </p>
      <p class="text">
        <span class="numbers">3</span>
        Contrary to popular belief.There are many variations of passages of
        Lorem Ipsum available, but the majority have suffered.
      </p>
      <img
        src="../../../../public/blogDetailsImages/kitchen2.svg"
        alt="articleImage"
        class="articleImage"
      />
      <p class="text">
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
        turpmaximus.posuere in.Contrary to popular belief.There are many
        variations of passages of Lorem Ipsum available, but the majority have
        suffered.
      </p>
    </article> -->
    <!-- <article class="article" v-if="Tag === 'Building' || Tag === ''">
      <h2 class="title">
        Let’s Get Solution for Building Construction Work: BUILDING
      </h2>
      <img
        class="articleImage"
        src="../../../../public/blogDetailsImages/kitchen2.svg"
        alt="articleImage"
      />
      <div class="dateInformation">
        <div class="left">26 December,2022</div>
        <div class="right">Interior / Home / Decore</div>
      </div>
      <p class="text">
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
        turpmaximus.posuere in.Contrary to popular belief.There are many
        variations of passages of Lorem Ipsum available, but the majority have
        suffered alteration in some form, by injecthumour, or randomised words
        which don't look even slightly believable.
        <br /><br />Embarrassing hidden in the middle of text. All the Lorem
        Ipsum generators on the Internet tend to repeat predefined chunks as
        necessary.
      </p>
      <div class="sloganBox">
        <div class="commas">,,</div>
        <div class="subtitle">
          The details are not the details. They make the design.
        </div>
      </div>
    </article> -->
    <!-- <article class="article" v-if="Tag === 'Architecture' || Tag === ''">
      <h2 class="title">Design sprints are great: Architecture</h2>
      <p class="text">
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
        turpmaximus.posuere in.Contrary to popular belief.There are many
        variations of passages of Lorem Ipsum available, but the majority have
        suffered.
      </p>
      <p class="text">
        <span class="numbers">1</span>
        Contrary to popular belief.There are many variations of passages of
        Lorem Ipsum available, but the majority have suffered.
      </p>
      <p class="text">
        <span class="numbers">2</span>
        Contrary to popular belief.There are many variations of passages of
        Lorem Ipsum available, but the majority have suffered.
      </p>
      <p class="text">
        <span class="numbers">3</span>
        Contrary to popular belief.There are many variations of passages of
        Lorem Ipsum available, but the majority have suffered.
      </p>
      <img
        src="../../../../public/blogDetailsImages/kitchen2.svg"
        alt="articleImage"
        class="articleImage"
      />
      <p class="text">
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
        turpmaximus.posuere in.Contrary to popular belief.There are many
        variations of passages of Lorem Ipsum available, but the majority have
        suffered.
      </p>
    </article> -->
    <!-- <article class="article" v-if="Tag === 'Kitchen Planing' || Tag === ''">
      <h2 class="title">Design sprints are great: Kitchen Planing</h2>
      <p class="text">
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
        turpmaximus.posuere in.Contrary to popular belief.There are many
        variations of passages of Lorem Ipsum available, but the majority have
        suffered.
      </p>
      <p class="text">
        <span class="numbers">1</span>
        Contrary to popular belief.There are many variations of passages of
        Lorem Ipsum available, but the majority have suffered.
      </p>
      <p class="text">
        <span class="numbers">2</span>
        Contrary to popular belief.There are many variations of passages of
        Lorem Ipsum available, but the majority have suffered.
      </p>
      <p class="text">
        <span class="numbers">3</span>
        Contrary to popular belief.There are many variations of passages of
        Lorem Ipsum available, but the majority have suffered.
      </p>
      <img
        src="../../../../public/blogDetailsImages/kitchen2.svg"
        alt="articleImage"
        class="articleImage"
      />
      <p class="text">
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
        turpmaximus.posuere in.Contrary to popular belief.There are many
        variations of passages of Lorem Ipsum available, but the majority have
        suffered.
      </p>
    </article> -->
    <!-- <article class="article" v-if="Tag === 'kitchenNurgen' || Tag === ''">
      <h2 class="title">Design sprints are great: KITCHENNURGEN</h2>
      <p class="text">
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
        turpmaximus.posuere in.Contrary to popular belief.There are many
        variations of passages of Lorem Ipsum available, but the majority have
        suffered.
      </p>
      <p class="text">
        <span class="numbers">1</span>
        Contrary to popular belief.There are many variations of passages of
        Lorem Ipsum available, but the majority have suffered.
      </p>
      <p class="text">
        <span class="numbers">2</span>
        Contrary to popular belief.There are many variations of passages of
        Lorem Ipsum available, but the majority have suffered.
      </p>
      <p class="text">
        <span class="numbers">3</span>
        Contrary to popular belief.There are many variations of passages of
        Lorem Ipsum available, but the majority have suffered.
      </p>
      <img
        src="../../../../public/blogDetailsImages/kitchen2.svg"
        alt="articleImage"
        class="articleImage"
      />
      <p class="text">
        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
        turpmaximus.posuere in.Contrary to popular belief.There are many
        variations of passages of Lorem Ipsum available, but the majority have
        suffered.
      </p>
    </article> -->
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'MyBlogDetails',
  props: ['Tag'],

  created () {
    // при создании вызывается мутация  и в нее передаются из коммита в actions данные из fetch
    this.SET_articlesBlog(this.fetchDataArticlesBlog())
  },

  data () {
    return {}
  },
  methods: {
    ...mapMutations(['SET_articlesBlog']),
    ...mapActions(['fetchDataArticlesBlog']),
    ...mapGetters(['getArticlesBlogList'])
  },
  computed: {
    itemsList () {
      return this.$store.getters.getArticlesBlogList
    }
  }
}
</script>
