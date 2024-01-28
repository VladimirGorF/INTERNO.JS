<template>
  <div class="box">
    <div class="box__lineMainBox">
      <div class="lineBox">
        <div class="box blogDetails"></div>
        <div class="box blogDetails"></div>
        <div class="box blogDetails"></div>
      </div>
    </div>
    <div class="box__blogDetailsPage">
      <div class="articleBlogBanner"></div>
      <div id="app" class="articlesBox">
        <div class="articles">
          <div class="left">
            <article class="article" v-if="Tag === 'kitchen' || Tag === ''">
              <h2 class="title">
                Let’s Get Solution for Building Construction Work: KITCHEN
              </h2>
              <img
                class="articleImage"
                src="../../../public/blogDetailsImages/kitchen.svg"
                alt="articleImage"
              />
              <div class="dateInformation">
                <div class="left">26 December,2022</div>
                <div class="right">Interior / Home / Decore</div>
              </div>
              <p class="text">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form, by injecthumour,
                or randomised words which don't look even slightly believable.
                <br /><br />Embarrassing hidden in the middle of text. All the
                Lorem Ipsum generators on the Internet tend to repeat predefined
                chunks as necessary.
              </p>
              <div class="sloganBox">
                <div class="commas">,,</div>
                <div class="subtitle">
                  The details are not the details. They make the design.
                </div>
              </div>
            </article>
            <article class="article" v-if="Tag === 'kitchen' || Tag === ''">
              <h2 class="title">Design sprints are great: KITCHEN</h2>
              <p class="text">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but the
                majority have suffered.
              </p>
              <p class="text">
                <span class="numbers">1</span>
                Contrary to popular belief.There are many variations of passages
                of Lorem Ipsum available, but the majority have suffered.
              </p>
              <p class="text">
                <span class="numbers">2</span>
                Contrary to popular belief.There are many variations of passages
                of Lorem Ipsum available, but the majority have suffered.
              </p>
              <p class="text">
                <span class="numbers">3</span>
                Contrary to popular belief.There are many variations of passages
                of Lorem Ipsum available, but the majority have suffered.
              </p>
              <img
                src="../../../public/blogDetailsImages/kitchen2.svg"
                alt="articleImage"
                class="articleImage"
              />
              <p class="text">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but the
                majority have suffered.
              </p>
            </article>
            <article class="article" v-if="Tag === 'mobi' || Tag === ''">
              <h2 class="title">
                Let’s Get Solution for Building Construction Work: MOBI
              </h2>
              <img
                class="articleImage"
                src="../../../public/blogDetailsImages/kitchen2.svg"
                alt="articleImage"
              />
              <div class="dateInformation">
                <div class="left">26 December,2022</div>
                <div class="right">Interior / Home / Decore</div>
              </div>
              <p class="text">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form, by injecthumour,
                or randomised words which don't look even slightly believable.
                <br /><br />Embarrassing hidden in the middle of text. All the
                Lorem Ipsum generators on the Internet tend to repeat predefined
                chunks as necessary.
              </p>
              <div class="sloganBox">
                <div class="commas">,,</div>
                <div class="subtitle">
                  The details are not the details. They make the design.
                </div>
              </div>
            </article>
            <article class="article" v-if="Tag === 'gor' || Tag === ''">
              <h2 class="title">Design sprints are great: GOR</h2>
              <p class="text">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but the
                majority have suffered.
              </p>
              <p class="text">
                <span class="numbers">1</span>
                Contrary to popular belief.There are many variations of passages
                of Lorem Ipsum available, but the majority have suffered.
              </p>
              <p class="text">
                <span class="numbers">2</span>
                Contrary to popular belief.There are many variations of passages
                of Lorem Ipsum available, but the majority have suffered.
              </p>
              <p class="text">
                <span class="numbers">3</span>
                Contrary to popular belief.There are many variations of passages
                of Lorem Ipsum available, but the majority have suffered.
              </p>
              <img
                src="../../../public/blogDetailsImages/kitchen2.svg"
                alt="articleImage"
                class="articleImage"
              />
              <p class="text">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but the
                majority have suffered.
              </p>
            </article>
            <article class="article" v-if="Tag === 'burgerlist' || Tag === ''">
              <h2 class="title">Design sprints are great: BURGERLIST</h2>
              <p class="text">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but the
                majority have suffered.
              </p>
              <p class="text">
                <span class="numbers">1</span>
                Contrary to popular belief.There are many variations of passages
                of Lorem Ipsum available, but the majority have suffered.
              </p>
              <p class="text">
                <span class="numbers">2</span>
                Contrary to popular belief.There are many variations of passages
                of Lorem Ipsum available, but the majority have suffered.
              </p>
              <p class="text">
                <span class="numbers">3</span>
                Contrary to popular belief.There are many variations of passages
                of Lorem Ipsum available, but the majority have suffered.
              </p>
              <img
                src="../../../public/blogDetailsImages/kitchen2.svg"
                alt="articleImage"
                class="articleImage"
              />
              <p class="text">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but the
                majority have suffered.
              </p>
            </article>
            <article
              class="article"
              v-if="Tag === 'kitchenNurgen' || Tag === ''"
            >
              <h2 class="title">Design sprints are great: KITCHENNURGEN</h2>
              <p class="text">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but the
                majority have suffered.
              </p>
              <p class="text">
                <span class="numbers">1</span>
                Contrary to popular belief.There are many variations of passages
                of Lorem Ipsum available, but the majority have suffered.
              </p>
              <p class="text">
                <span class="numbers">2</span>
                Contrary to popular belief.There are many variations of passages
                of Lorem Ipsum available, but the majority have suffered.
              </p>
              <p class="text">
                <span class="numbers">3</span>
                Contrary to popular belief.There are many variations of passages
                of Lorem Ipsum available, but the majority have suffered.
              </p>
              <img
                src="../../../public/blogDetailsImages/kitchen2.svg"
                alt="articleImage"
                class="articleImage"
              />
              <p class="text">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but the
                majority have suffered.
              </p>
            </article>
          </div>
          <div class="right">
            <div class="title">Tags</div>
            <div class="tagsBox">
              <a
                href="#app"
                class="button"
                v-for="tag in tags"
                :key="tag.id"
                :class="[tag.id === activeTagId && Tag ? 'buttonVisited' : '']"
                @click="
                  activeTagId = tag.id;
                  showArticles(tag.name);
                "
              >
                {{ tag.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'MyBlogDetails',
  data () {
    return {
      activeTagId: '0',
      Tag: '',
      tags: [
        { id: 0, name: 'kitchen' },
        { id: 1, name: 'mobi' },
        { id: 2, name: 'burgerlist' },
        { id: 3, name: 'gor' },
        { id: 4, name: 'kitchenNurgen' }
      ]
    }
  },
  created () {
    this.SET_NotFoundFlag(false) // переход на страницу main, передаем true во флаг старницы NotFound
  },
  methods: {
    ...mapMutations(['SET_NotFoundFlag']),
    showArticles (nameOfTag) {
      this.Tag === nameOfTag ? (this.Tag = '') : (this.Tag = nameOfTag)
      // если придет клик с уже кликнутого Тега, то обнуляем фильтр, а если фильтр обнулен, то устанавливаем по клику новый
    }
  }
}
</script>
