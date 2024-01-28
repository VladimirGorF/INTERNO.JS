<template>
  <div>
    <div class="content">
      <div class="leftSide">
        <h1 class="title404">404</h1>
        <h5 class="text">
          We are sorry, but the page you requested was not found
        </h5>
        <router-link to="/project">
          <div class="button">
            <p class="buttonText">Back To Home</p>
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
        </router-link>
      </div>
      <div class="rightImage">
        <img src="/notFoundImage/notFound.svg" alt="image" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'PageNotFound',
  created () {
    this.SET_Visibility(false) // переход на страницу NotFound, по умлочанию true, но  в момент создания NotFound, то передаем false
  },
  methods: {
    ...mapMutations(['SET_Visibility'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.content {
  display: flex;
  justify-content: center;
  gap: 81px;
}

.leftSide {
  max-width: 585px;
}
.title404 {
  margin-top: 100px;
  margin-bottom: 15px;
  color: #cda274;
  font-family: "DM Serif Display";
  font-size: 250px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}

.text {
  color: #292f36;
  font-family: "DM Serif Display";
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.35px;
  margin-bottom: 23px;
}

.button {
  width: 253px;
  height: 75px;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  border-radius: 18px;
  background: #292f36;
  box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
  transition: 0.3s ease-in-out;
}
.buttonText {
  color: #fff;
  text-align: center;
  font-family: "Jost";
  font-size: 18px;
  transition: 0.3s ease-in-out;
}
.ArrowButton {
  width: 15.141px;
  height: 13.177px;
}
.button:hover {
  background-color: #cda274;
  transform: scale(1.05);
  color: #302e2c;
}
.button:hover svg path {
  stroke: #292f36;
}

img {
  border-radius: 0px 0px 0px 250px;
  max-width: 700px;
}
</style>
