<template>
  <div v-if="post && user">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import usePost from "../composables/UsePost.js";
import useUser from "../composables/UseUser.js";

const route = useRoute();
const { post, llegirPost } = usePost();
const { user, llegirUsuari } = useUser();

onMounted(async () => {
  const id = route.params.id;
  await llegirPost(id); 
  if (post.value) await llegirUsuari(post.value.userId);
});
</script>
