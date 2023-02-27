<script setup>
</script>

<template>
  <div id="projects">
    <h2 id="header"> Projects </h2>
    <ul id="project-list">
      <li class="project-item"> Portfolio Website </li>
      <p class="project-description"> This webpage stores information about my recent projects, my education information,
        as well as current and past classes. This page also has one version of my to-do list imbedded into it!</p>
      <li class="project-item"> Todo List (Vanilla) </li>
      <p class="project-description">This program allows a user to add and remove items from a to-do list. The items
        persist even after the webpage is closed</p>
      <li class="project-item"> Todo List (vue) </li>
      <p class="project-description">This is just like the Vanilla Todo List, but I used Vue to make this version</p>
      <p class="project-description">
        You can check it out <router-link id="here" to='/todo'>here.</router-link>
      </p>
      <li class="project-item"> Rosary Terminal Application </li>
      <p class="project-description">This is a terminal based application I made using C++ in my
        spare time while taking CS 121. Based on the day of the week and the liturgical season the program will pray the
        correct rosary. I made this to implement some of the concepts I had learned so far</p>
    </ul>
  </div>
</template>


<style scoped>
#projects {
  margin-top: 10em;
  display: flex;
  flex-direction: column;
  border-top: .5em solid #8cb879;
}


#header {
  font-size: 35pt;
}

#here {
  color: #8cb879;
}

#project-list {
  list-style: none;
}

.project-item {
  font-size: 20pt;
  padding: 1em;
}

.project-description {
  padding-left: 5em;
  font-size: 12pt;
  max-width: 60%;
}
</style>
