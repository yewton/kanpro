<template>
  <div class="slidev-layout default">
    <div class="absolute inset-0 -z-1">
      <img :src="$frontmatter.background" class="absolute object-cover w-full h-full filter blur-sm" />
    </div>
    <slot />
  </div>
</template>