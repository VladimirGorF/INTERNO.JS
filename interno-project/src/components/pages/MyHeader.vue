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
      <router-link to="/index"><h6 class="rightPage">
              <div class="left">
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
      </h6></router-link>

      <nav class="right">
        <!-- маршурты прописаны в index.js в роутере  -->
        <router-link to="/index"><h6 class="rightPage">Home</h6></router-link>
        <details class="details">
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
        <details class="details">
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
        <router-link to="/non-existingPage">
          <h6 class="rightPage">NotExistingPage</h6>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>
const boxlineMainBoxElement = document.querySelector('.box__lineMainBox')
console.log(boxlineMainBoxElement)
</script>

<style scoped>

summary {
  list-style: none; /* Removes the disclosure triangle. */
}
.summary{
width: 150px;
}
</style>
