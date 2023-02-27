<script setup>
const emits = defineEmits(['remove-clicked']);
// This is the same as const title = "..."
// Where "..." is provided by the parent
const props = defineProps({
  title: String,
});

function removeTodo() {
  console.log(props.title);
  emits('remove-clicked', props.title)
}
</script>


<template>
  <div>
    <h3 id="list-item">{{ title }}
      <button id="remove-btn" type="button" @click="removeTodo">X</button>
    </h3>
  </div>
</template>


<style scoped>
#remove-btn {
  margin-left: 1em;
  color: white;
  background-color: #222222;
  border: solid .1em white;
}


#list-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
