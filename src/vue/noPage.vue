<template>
  <div class="glitch">
  	<span>No Signal</span>
  </div>
</template>
<script>
  export default {
  	created: function () {
      // for debug
      global.vm = this;
    },
    components : {
    }
  }
</script>
<style lang="sass">
	@keyframes glitch {
	  0% {
	    transform: skew(-6deg);
	  }
	  5% {
	    transform: skew(-76deg);
	  }
	  10% {
	    transform: skew(-51deg);
	  }
	  15% {
	    transform: skew(-20deg);
	  }
	  20% {
	    transform: skew(1deg);
	  }
	  25% {
	    transform: skew(-79deg);
	  }
	  30% {
	    transform: skew(-33deg);
	  }
	  35% {
	    transform: skew(-66deg);
	  }
	  40% {
	    transform: skew(36deg);
	  }
	  45% {
	    transform: skew(74deg);
	  }
	  50% {
	    transform: skew(63deg);
	  }
	  55% {
	    transform: skew(-66deg);
	  }
	  60% {
	    transform: skew(58deg);
	  }
	  65% {
	    transform: skew(76deg);
	  }
	  70% {
	    transform: skew(87deg);
	  }
	  75% {
	    transform: skew(-36deg);
	  }
	  80% {
	    transform: skew(-86deg);
	  }
	  85% {
	    transform: skew(-61deg);
	  }
	  90% {
	    transform: skew(48deg);
	  }
	  95% {
	    transform: skew(-72deg);
	  }
	}
	@keyframes noise {
	  0% {
	    background-position: 85px -93px;
	  }
	  10% {
	    background-position: -43px 23px;
	  }
	  20% {
	    background-position: -49px 56px;
	  }
	  30% {
	    background-position: -62px 71px;
	  }
	  40% {
	    background-position: -96px -19px;
	  }
	  50% {
	    background-position: 39px -56px;
	  }
	  60% {
	    background-position: -46px 96px;
	  }
	  70% {
	    background-position: 71px -34px;
	  }
	  80% {
	    background-position: 81px -49px;
	  }
	  90% {
	    background-position: -78px 56px;
	  }
	}
	@keyframes bar {
	  0% {
	    height: 159px;
	    top: 75%;
	    opacity: 0.8;
	  }
	  10% {
	    height: 359px;
	    top: 69%;
	    opacity: 0.1;
	  }
	  20% {
	    height: 213px;
	    top: 57%;
	    opacity: 0.62;
	  }
	  30% {
	    height: 47px;
	    top: 99%;
	    opacity: 0.15;
	  }
	  40% {
	    height: 523px;
	    top: 47%;
	    opacity: 0.18;
	  }
	  50% {
	    height: 627px;
	    top: 65%;
	    opacity: 0.03;
	  }
	  60% {
	    height: 624px;
	    top: 72%;
	    opacity: 0.31;
	  }
	  70% {
	    height: 135px;
	    top: 46%;
	    opacity: 0.44;
	  }
	  80% {
	    height: 519px;
	    top: 66%;
	    opacity: 0.39;
	  }
	  90% {
	    height: 260px;
	    top: 92%;
	    opacity: 0.55;
	  }
	}
	.glitch {
	  position: absolute;
	  overflow: hidden;
	  left: 0;
	  top: 0;
	  right: 0;
	  bottom: 0;
	  color: #fff;
	  text-align: center;
	  text-transform: uppercase;
	  font: 15px "Michroma", helvetica, sans-serif;
	  letter-spacing: 0.6em;
	  background-image: url(http://api.thumbr.it/whitenoise-361x370.png?background=000000ff&noise=ffffff&density=61&opacity=20);
	  text-shadow: 2px 0 1px #f6050a, -2px 0 1px #1cf2f2;
	  animation: noise 0.3s infinite;
	}
	.glitch:before {
	  content: "";
	  display: inline-block;
	  vertical-align: middle;
	  height: 100%;
	}
	.glitch:after {
	  content: "";
	  display: block;
	  position: absolute;
	  left: 0;
	  right: 0;
	  background: url(http://api.thumbr.it/whitenoise-361x370.png?background=000000ff&noise=ffffff&density=61&opacity=40);
	  animation: bar 0.5s infinite;
	}
	.glitch span {
	  display: inline-block;
	  vertical-align: middle;
	  position: relative;
	  z-index: 1;
	  font-size: 40px;
	  animation: glitch 3s infinite alternate;
	}
</style>
