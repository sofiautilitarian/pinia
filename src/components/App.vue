<template>
  <main>

    <!--heading!-->

    <header><img src='../assets/pinia-logo.svg' alt='logo'>
      <h1>{{ taskStore.name }}</h1>
    </header>
    <!-- new task form -->
    <div class="new-task-form">
    <TaskForm />
    </div>
    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>

    <div class='task-list' v-if="filter === 'all'">
      <p>Your have {{ taskStore.totalCount }} tasks left to do</p>
      <div v-for="task in taskStore.tasks">
        <!-- <p>{{ task.title }}</p> -->
        <!-- let's create a new component for the task details -->
        <TaskDetails :task="task" />


      </div>
    </div>
    <div class='task-list' v-if="filter === 'favs'">
      <p>Your have {{ taskStore.totalCount }} tasks left to do</p>
      <div v-for="task in taskStore.favs">
        <!-- <p>{{ task.title }}</p> -->
        <!-- let's create a new component for the task details -->
        <TaskDetails :task="task" />


      </div>
    </div>
  
  </main>
</template>

<script>
import TaskDetails from './TaskDetails.vue'
import { ref } from 'vue'

import { useTaskStore } from './stores/TaskStore'
import TaskForm from './TaskForm.vue'
export default {
  components: { TaskDetails, TaskForm },
  setup() {
    const taskStore = useTaskStore()
    const filter = ref('all')
    return { taskStore, filter }
  }
}
</script>