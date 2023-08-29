import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
	'use strict'

	swiperInit()
})

const swiperInit = () => {
	const swiper = new Swiper('.swiper', {
		modules: [Navigation, Autoplay],
		loop: true,

		navigation: {
			nextEl: '.swiper__next',
			prevEl: '.swiper__prev',
		},

		grabCursor: true,
		speed: 1000,

		autoplay: {
			delay: 2000,
		},

		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			570: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 4,
			}
		}
	})

	if (!swiper) return
}