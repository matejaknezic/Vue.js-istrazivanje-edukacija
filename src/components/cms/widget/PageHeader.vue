<template>
	<div class="title-container">
		<div class="tc-wrapper">
			<slot></slot>
		</div>
	</div>
</template>

<style lang="less">
	.title-container{
		position: relative; display: block; padding: 18px 0 8px; background-repeat: no-repeat; background-size: cover;
		&.image{
			display: block; position: relative; padding: 390px 37px 30px; margin-bottom: 35px;
			h1{color: @white; padding-bottom: 0; font-size: 54px; line-height: 60px;}
			.cms-short-description{color: @white; padding-bottom: 0; margin-top: 10px;}
		}
		h1{display: block; font-size: 42px; line-height: 48px; font-family: @font2; font-weight: bold;}
	}
	.tc-wrapper{position: relative; z-index: 1;}
</style>