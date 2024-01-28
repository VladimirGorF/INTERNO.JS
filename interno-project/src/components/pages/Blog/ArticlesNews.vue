<template>
  <div>
    <div class="box__Post">
      <div class="postMain">
        <div class="title">Latest Post</div>
        <div class="contentPost">
          <img
            :src="lastArticleFromProducts.url"
            alt="imagePost"
            class="imagePost"
          />
          <div class="informPost">
            <div class="titleInformPost">
              {{ lastArticleFromProducts.title }}
            </div>
            <div class="textPost">
              {{ lastArticleFromProducts.text }}
            </div>
            <div class="dateBox">
              <p class="dateBoxText">
                {{ lastArticleFromProducts.dateBoxText }}
              </p>
              <a href="#">
                <svg
                  class="dateBoxImage"
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="53"
                  viewBox="0 0 52 53"
                  fill="none"
                >
                  <circle
                    class="circle"
                    cx="26"
                    cy="26.2671"
                    r="26"
                    fill="#F4F0EC"
                  />
                  <path
                    d="M23.7714 32.9529L29.7142 26.2672L23.7714 19.5815"
                    stroke="#292F36"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="app" class="box__blogPage">
      <div class="blogPageContent">
        <div class="titleBlogPage">Articles & News</div>

        <!-- это под VUE раздел -->
        <div id="chen" class="examples">
          <div
            class="examples__Item"
            v-for="item in sliceProducts"
            :key="item.id"
          >
            <img
              :src="item.url"
              alt="examples__image"
              class="examples__image"
            />
            <h2 class="title">{{ item.title }}:{{ item.id }}</h2>
            <div class="dateBox">
              <p class="dateBoxText">{{ item.dateBoxText }}</p>
              <a href="#">
                <svg
                  class="dateBoxImage"
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="53"
                  viewBox="0 0 52 53"
                  fill="none"
                >
                  <circle
                    class="circle"
                    cx="26"
                    cy="26.2671"
                    r="26"
                    fill="#F4F0EC"
                  />
                  <path
                    d="M23.7714 32.9529L29.7142 26.2672L23.7714 19.5815"
                    stroke="#292F36"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="pagination">
          <div class="pagBox">
            <a
              href="#chen"
              class="page"
              @click="
                backPage();
                makeSound();
                getProducts(activePageId, 6);
              "
              >&lt;</a
            >
            <a
              href="#chen"
              class="page"
              v-for="page in slicePages"
              :key="page.id"
              :class="{ active: page.id === activePageId }"
              @click="
                activePageId = page.id;
                getProducts(page.id, 6);
                makeSound();
                movePage(page.id);
              "
              >0{{ page.id }}</a
            >
            <a
              href="#chen"
              class="page"
              @click="
                forwardPage();
                makeSound();
                getProducts(activePageId, 6);
              "
              >&gt;</a
            >
          </div>
          <a hidden>Кол-во страниц: 0{{ pagesCounter }} страниц</a>
          <a hidden>Кол-во страниц: 0{{ lastArticle }} страниц</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>

<script>
// import { mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: "ArticlesNews",
  data() {
    return {
      pageStart: 1, // начало отображения страниц
      pageEnd: 4,
      pagesQuantity: 1,
      activePageId: 1, // активная подсвечиваемая страница по умолчанию
      pages: [],
      productStart: 0,
      productEnd: 6,
      productsQuantity: 0,
      products: [
        {
          id: 0,
          url: "/blogImages/Blog1.svg",
          title: "Let's Get Solution For Building Construction Work",
          dateBoxText: "26 December,2022",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
        },
        {
          id: 1,
          url: "/blogImages/Blog1.svg",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          dateBoxText: "26 December,2022",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
        },
        {
          id: 2,
          url: "/blogImages/Blog2.svg",
          title: "Best For Any Office & Business Interior Solution",
          dateBoxText: "26 December,2022",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
        },
        {
          id: 3,
          url: "/blogImages/Blog3.svg",
          title: "Let's Get Solution For Building Construction Work",
          dateBoxText: "26 December,2022",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
        },
        {
          id: 4,
          url: "/blogImages/Blog5.svg",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          dateBoxText: "26 December,2022",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
        },
        {
          id: 5,
          url: "/blogImages/Blog6.svg",
          title: "Best For Any Office & Business Interior Solution",
          dateBoxText: "26 December,2022",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
        },
        {
          id: 6,
          url: "/blogImages/Blog1.svg",
          title: "Let's Get Solution For Building Construction Work",
          dateBoxText: "26 December,2022",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
        },
        {
          id: 7,
          url: "/blogImages/Blog2.svg",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          dateBoxText: "26 December,2022",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
        },
        {
          id: 8,
          url: "/blogImages/Blog3.svg",
          title: "Best For Any Office & Business Interior Solution",
          dateBoxText: "26 December,2022",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
        },
        {
          id: 9,
          url: "/blogImages/Blog4.svg",
          title: "Let's Get Solution For Building Construction Work",
          dateBoxText: "26 December,2022",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
        },
        {
          id: 10,
          url: "/blogImages/Blog5.svg",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          dateBoxText: "26 December,2022",
        },
        {
          id: 11,
          url: "/blogImages/Blog6.svg",
          title: "Best For Any Office & Business Interior Solution",
          dateBoxText: "26 December,2022",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
        },
        {
          id: 12,
          url: "/blogImages/Blog1.svg",
          title: "Let's Get Solution For Building Construction Work",
          dateBoxText: "26 December,2022",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
        },
        {
          id: 13,
          url: "/blogImages/Blog2.svg",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          dateBoxText: "26 December,2022",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
        },
        {
          id: 14,
          url: "/blogImages/Blog3.svg",
          title: "Best For Any Office & Business Interior Solution",
          dateBoxText: "26 December,2022",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
        },
        {
          id: 15,
          url: "/blogImages/Blog4.svg",
          title: "Let's Get Solution For Building Construction Work",
          dateBoxText: "26 December,2022",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
        },
        {
          id: 16,
          url: "/blogImages/Blog5.svg",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          dateBoxText: "26 December,2022",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
        },
        {
          id: 17,
          url: "/blogImages/Blog6.svg",
          title: "Best For Any Office & Business Interior Solution",
          dateBoxText: "26 December,2022",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
        },
        {
          id: 18,
          url: "/blogImages/Blog1.svg",
          title: "Let's Get Solution For Building Construction Work",
          dateBoxText: "26 December,2022",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
        },
        {
          id: 19,
          url: "/blogImages/Blog2.svg",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          dateBoxText: "26 December,2022",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
        },
        {
          id: 20,
          url: "/blogImages/Blog3.svg",
          title: "Best For Any Office & Business Interior Solution",
          dateBoxText: "26 December,2022",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
        },
        {
          id: 21,
          url: "/blogImages/Blog4.svg",
          title: "Let's Get Solution For Building Construction Work",
          dateBoxText: "26 December,2022",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belie Lorem Ipsum is not simply random text. It has roots in a piece of classica.",
        },
        {
          id: 22,
          url: "/blogImages/BannerPostPhoto.svg",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          dateBoxText: "26 January,2023",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica",
        },
      ],
      lastArticleFromProducts: {}, // последняя статья в массиве products
    };
  },
  methods: {
    makeSound() {
      const audio = new Audio(
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/clickUp.mp3"
      );
      audio.play();
    },
    movePage(page) {
      if (
        this.pageEnd > this.pagesQuantity + 1 ||
        page === this.pagesQuantity
      ) {
      } else if (page + 1 === this.pageEnd) {
        this.pageStart += 1;
        this.pageEnd += 1;
      } else if (page === this.pageStart && this.pageStart !== 1) {
        this.pageStart -= 1;
        this.pageEnd -= 1;
      }
    },
    forwardPage() {
      if (this.activePageId === this.pagesQuantity) {
        return;
      } else if (this.pageEnd === this.pagesQuantity + 1) {
        this.activePageId += 1;
        return;
      } else if (this.activePageId === 1) {
        this.activePageId += 1;
        return;
      }
      this.pageStart += 1;
      this.pageEnd += 1;
      this.activePageId += 1;
      this.slicePages; // computed вызывается
    },
    backPage() {
      if (this.activePageId === 1) {
        return;
      } else if (this.pageStart - 1 <= 1) {
        this.pageStart = 1;
        this.pageEnd = 4;
        this.activePageId -= 1;
        return;
      } else if (this.activePageId === this.pagesQuantity) {
        this.activePageId -= 1;
        return;
      }
      this.activePageId -= 1;
      this.pageStart -= 1;
      this.pageEnd -= 1;
    },
    getProducts(page, step) {
      if (this.activePageId === 1) {
        this.productStart = 0;
        this.productEnd = 6;
      } else {
        this.productEnd = step * page + 1;
        this.productStart = this.productEnd - 6;
      }
    },
  },
  computed: {
    sliceProducts() {
      return this.products.slice(this.productStart, this.productEnd); // срез продуктов на вывод по 6 штук на странице
    },
    slicePages() {
      return this.products.slice(this.pageStart, this.pageEnd); // срез страниц
    },
    pagesCounter() {
      const pagesQuantity = Math.ceil(this.products.length / 6); // определяем количество страниц
      for (let i = 2; i < pagesQuantity + 2; i++) {
        this.pages.push({
          id: i,
          class: "",
        });
      }
      return (this.pagesQuantity = pagesQuantity);
    },
    lastArticle() {
      this.lastArticleFromProducts = this.products.slice(-1)[0];
    },
  },
};
</script>

<style lang="scss" scoped></style>
