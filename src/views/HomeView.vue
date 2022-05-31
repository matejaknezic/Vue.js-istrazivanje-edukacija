<template>
	<div class="page-wrapper">
		<UiHeader/>
		<component :is="component" :data="item"/>
		<UiFooter/>
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
