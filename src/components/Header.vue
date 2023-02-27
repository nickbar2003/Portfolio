<script setup>
</script>

<template>
  <div id="header">
    <h1 id="intro"> Hi, I'm Nick! </h1>
    <img id="photo" src="picture.jpg" alt="photo" />
    <h1 id="welcome"> Welcome To My Portfolio </h1>
  </div>
</template>

<style scoped>
#intro {
  font-size: 50pt;
  text-shadow: .05em .05em .5em #8cb879;
}

#welcome {
  font-size: 35pt;
  text-shadow: .05em .05em .5em #8cb879;
}

#photo {
  max-width: 35em;
  max-height: 35em;
  border-radius: 25%;
  border: .5em solid #8cb879;

}

#header {
  display: flex;
  flex-direction: column;
  align-items: center;

}
</style>
