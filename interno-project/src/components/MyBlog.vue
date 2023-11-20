<template>
  <div class="box">
    <div class="box__blogBanner">
      <div class="titleBox">
        <div class="title">Articles & News</div>
        <div class="text">Home / Blog</div>
      </div>
    </div>

    <div class="box__Post">
      <div class="postMain">
        <div class="title">Latest Post</div>
        <div class="contentPost">
          <img
            src="../assets/images/blogImages/BannerPostPhoto.svg"
            alt="imagePost"
            class="imagePost"
          />
          <div class="informPost">
            <div class="titleInformPost">
              Low Cost Latest Invented Interior Designing Ideas
            </div>
            <div class="textPost">
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
              dignissim maximus.posuere in.Contrary to popular belief.
              <br />
              <br />
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classica.
            </div>
            <div class="dateBox">
              <p class="dateBoxText">26 December,2022</p>
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
                movePage(page.id);
              "
              >0{{ page.id }}</a
            >
            <a
              href="#chen"
              class="page"
              @click="
                forwardPage();
                getProducts(activePageId, 6);
              "
              >&gt;</a
            >
          </div>
          <a hidden>Кол-во страниц: 0{{ pagesCounter }} страниц</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>

<script>
export default {
  name: "MyBlog",
  data() {
    return {
      pageStart: 1, // начало отображения страниц
      pageEnd: 4,
      pagesQuantity: 1,
      activePageId: 1, // активная подсвечиваемая страница по умолчанию
      pages: [],
      productStart: 1,
      productEnd: 7,
      productsQuantity: 0,
      products: [
        {
          id: 0,
          url: "public/Blog1.svg",
          title: "Let's Get Solution For Building Construction Work",
          dateBoxText: "26 December,2022",
        },
        {
          id: 1,
          url: "public/Blog1.svg",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          dateBoxText: "26 December,2022",
        },
        {
          id: 2,
          url: "public/Blog2.svg",
          title: "Best For Any Office & Business Interior Solution",
          dateBoxText: "26 December,2022",
        },
        {
          id: 3,
          url: "public/Blog3.svg",
          title: "Let's Get Solution For Building Construction Work",
          dateBoxText: "26 December,2022",
        },
        {
          id: 4,
          url: "public/Blog5.svg",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          dateBoxText: "26 December,2022",
        },
        {
          id: 5,
          url: "public/Blog6.svg",
          title: "Best For Any Office & Business Interior Solution",
          dateBoxText: "26 December,2022",
        },
        {
          id: 6,
          url: "public/Blog1.svg",
          title: "Let's Get Solution For Building Construction Work",
          dateBoxText: "26 December,2022",
        },
        {
          id: 7,
          url: "public/Blog2.svg",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          dateBoxText: "26 December,2022",
        },
        {
          id: 8,
          url: "public/Blog3.svg",
          title: "Best For Any Office & Business Interior Solution",
          dateBoxText: "26 December,2022",
        },
        {
          id: 9,
          url: "public/Blog4.svg",
          title: "Let's Get Solution For Building Construction Work",
          dateBoxText: "26 December,2022",
        },
        {
          id: 10,
          url: "public/Blog5.svg",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          dateBoxText: "26 December,2022",
        },
        {
          id: 11,
          url: "public/Blog6.svg",
          title: "Best For Any Office & Business Interior Solution",
          dateBoxText: "26 December,2022",
        },
        {
          id: 12,
          url: "public/Blog1.svg",
          title: "Let's Get Solution For Building Construction Work",
          dateBoxText: "26 December,2022",
        },
        {
          id: 13,
          url: "public/Blog2.svg",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          dateBoxText: "26 December,2022",
        },
        {
          id: 14,
          url: "public/Blog3.svg",
          title: "Best For Any Office & Business Interior Solution",
          dateBoxText: "26 December,2022",
        },
        {
          id: 15,
          url: "public/Blog4.svg",
          title: "Let's Get Solution For Building Construction Work",
          dateBoxText: "26 December,2022",
        },
        {
          id: 16,
          url: "public/Blog5.svg",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          dateBoxText: "26 December,2022",
        },
        {
          id: 17,
          url: "public/Blog6.svg",
          title: "Best For Any Office & Business Interior Solution",
          dateBoxText: "26 December,2022",
        },
        {
          id: 18,
          url: "public/Blog1.svg",
          title: "Let's Get Solution For Building Construction Work",
          dateBoxText: "26 December,2022",
        },
        {
          id: 19,
          url: "public/Blog2.svg",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          dateBoxText: "26 December,2022",
        },
        {
          id: 20,
          url: "public/Blog3.svg",
          title: "Best For Any Office & Business Interior Solution",
          dateBoxText: "26 December,2022",
        },
        {
          id: 21,
          url: "public/Blog4.svg",
          title: "Let's Get Solution For Building Construction Work",
          dateBoxText: "26 December,2022",
        },
        {
          id: 22,
          url: "public/Blog5.svg",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          dateBoxText: "26 December,2022",
        },
        {
          id: 23,
          url: "public/Blog6.svg",
          title: "Best For Any Office & Business Interior Solution",
          dateBoxText: "26 December,2022",
        },
        {
          id: 24,
          url: "public/Blog6.svg",
          title: "Best For Any Office & Business Interior Solution",
          dateBoxText: "26 December,2022",
        },
        {
          id: 25,
          url: "public/Blog1.svg",
          title: "Let's Get Solution For Building Construction Work",
          dateBoxText: "26 December,2022",
        },
        {
          id: 26,
          url: "public/Blog2.svg",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          dateBoxText: "26 December,2022",
        },
        {
          id: 27,
          url: "public/Blog3.svg",
          title: "Best For Any Office & Business Interior Solution",
          dateBoxText: "26 December,2022",
        },
        {
          id: 28,
          url: "public/Blog4.svg",
          title: "Let's Get Solution For Building Construction Work",
          dateBoxText: "26 December,2022",
        },
        {
          id: 29,
          url: "public/Blog5.svg",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          dateBoxText: "26 December,2022",
        },
        {
          id: 30,
          url: "public/Blog6.svg",
          title: "Best For Any Office & Business Interior Solution",
          dateBoxText: "26 December,2022",
        },
        {
          id: 31,
          url: "public/Blog1.svg",
          title: "Let's Get Solution For Building Construction Work",
          dateBoxText: "26 December,2022",
        },
        {
          id: 32,
          url: "public/Blog2.svg",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          dateBoxText: "26 December,2022",
        },
        {
          id: 33,
          url: "public/Blog3.svg",
          title: "Best For Any Office & Business Interior Solution",
          dateBoxText: "26 December,2022",
        },
        {
          id: 34,
          url: "public/Blog4.svg",
          title: "Let's Get Solution For Building Construction Work",
          dateBoxText: "26 December,2022",
        },
        {
          id: 35,
          url: "public/Blog5.svg",
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          dateBoxText: "26 December,2022",
        },
        {
          id: 36,
          url: "public/Blog6.svg",
          title: "Best For Any Office & Business Interior Solution",
          dateBoxText: "26 December,2022",
        },
        {
          id: 37,
          url: "public/Blog1.svg",
          title: "Let's Get Solution For Building Construction Work",
          dateBoxText: "26 December,2022",
        },
      ],
    };
  },
  methods: {
    movePage(page) {
      if (
        this.pageEnd > this.pagesQuantity + 1 ||
        page === this.pagesQuantity
      ) {
        return;
      } else if (page + 1 === this.pageEnd) {
        this.pageStart += 1;
        this.pageEnd += 1;
        return;
      } else if (page === this.pageStart && this.pageStart !== 1) {
        this.pageStart -= 1;
        this.pageEnd -= 1;
        return;
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
      this.slicePages;
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
      this.productEnd = step * page + 1;
      this.productStart = this.productEnd - 6;
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
  },
};
</script>
