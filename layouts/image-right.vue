<template>
  <div class="grid grid-cols-2 w-full h-full">
    <div class="slidev-slot">
      <slot />
    </div>
    <div class="relative h-full">
      <img :src="$frontmatter.image" class="absolute object-cover w-full h-full" />
    </div>
  </div>
</template>