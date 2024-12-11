<template>
  <h1>Home</h1>
  <!-- route 是取資訊 -->
  <h2>name: {{ $route.name }}</h2>
  <h2>path: {{ $route.path }}</h2>
  <h2>apple: {{ $route.meta.apple }}</h2>
</template>
