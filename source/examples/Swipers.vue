<template>
	<div id="example">
		<swiper :options="swipeOptions" class="swiper">
			<swiper-slide class='slide'>
				Slide 1
			</swiper-slide>
			<swiper-slide class='slide'>
				Slide 2
			</swiper-slide>
			<swiper-slide class='slide'>
				Slide 3
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>

export default {
	data() {
		return {
			swipeOptions: {
				pagination: '.swiper-pagination',
				slidesPerView: 'auto',
				centeredSlides: true,
				spaceBetween: 40
			}
		}
	}
}

</script>

<style lang="scss" scoped>
#example {
	.swiper {
		position: absolute;
		height: 100%;
		width: 100%;
		.slide {
			background-color: #EEE;
			top: 20px;
			width: calc(100% - 40px);
			height: calc(100% - 60px);
			border-radius: 10px;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
}
</style>