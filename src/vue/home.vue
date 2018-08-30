<template>
	<div>
		<div class="banner">
			<p>NOT YET OPEN 2018.8.7
				<span>IN DEVELOPMENT</span>
			&mdash; PLEASE LOOK FORWARD &mdash;</p>
		</div>
	</div>
</template>
<script>
	import nvHeader from '../components/header.vue';
	export default {
		data: function() {
			return {
				_login: true,	
			}
		},
		created: function(){
			// For Debug
			global.vm = this;
		},
		computed: {
			
		},
		methods: {
			
		},
		components : {
			nvHeader,
		}
	}
</script>
<style lang="sass">
	.banner {
		text-align: center;
		padding: 40px 0;
		p {
			width: 80%;
			color: rgba(238, 238, 238, 0.53);
	    text-transform: uppercase;
	    letter-spacing: 1px;
	    display: inline-block;
	    border: 4px double rgba(255,255,255,.25);
	    border-width: 4px 0;
	    padding: 30px 0;
		  span {
		    font: 700 3em "Oswald", sans-serif;
		    letter-spacing: 0;
		    padding: .25em 0 .325em;
		    display: block;
		    margin: 0 auto;
		    text-shadow: 0 0 80px rgba(255,255,255,.5);
				/* Clip Background Image */
		    background: url(http://f.cl.ly/items/010q3E1u3p2Q0j1L1S1o/animated_text_fill.png) repeat-y;
		    -webkit-background-clip: text;
		    background-clip: text;
				/* Animate Background Image */
		    -webkit-text-fill-color: transparent;
		    -webkit-animation: aitf 80s linear infinite;
				/* Activate hardware acceleration for smoother animations */
		    -webkit-transform: translate3d(0,0,0);
		    -webkit-backface-visibility: hidden;
		  }
		}
	}
	/* Animate Background Image */
	@-webkit-keyframes aitf {
    0% { background-position: 0% 50%; }
    100% { background-position: 100% 50%; }
	}
</style>