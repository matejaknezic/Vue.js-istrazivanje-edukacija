<template>
	<div class="aw aw-logedin" :class="{ active: hover }" @mouseover="hover = true" @mouseleave="hover = false">
		<a href="#" class="aw-btn"></a>
		<div class="aw-dropdown-list">
			<a href="#" class="aw-orders selected"><span>Moje narudžbe</span></a>
			<a href="#" class="aw-coupons"><span>Moji kuponi</span></a>
			<a href="#" class="aw-my-data"><span>Uredi podatke</span></a>
			<a href="#" class="aw-new-password"><span>Nova lozinka</span></a>
			<a href="#" class="btn btn-white aw-logout"><span>Odjavi se</span></a>
		</div>
	</div>
</template>

<script>
	export default {
		name: "UserBox",
		data(){
			return{
				hover: false
			}
		},
	}
	/*var winWidth = window.parent.innerWidth;
	if (winWidth > 1320 && $('.aw').hasClass('aw-logedin')) {
		$('.aw').mouseenter(function() {
			$(this).addClass('active');
		}).mouseleave(function(){
			$('.aw').removeClass('active');
		});
	} else {
		$('.aw-btn').on('click', function(e) {
			e.preventDefault();
			$(this).toggleClass('active');
			$(this).parent().toggleClass('active');
		});
	}*/
</script>