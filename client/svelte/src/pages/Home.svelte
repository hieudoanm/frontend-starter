<script>
const tasks = [
  {
    id: "1",
    title: "Title",
    description: "Description",
    completed: false,
  },
  {
    id: "1",
    title: "Title",
    description: "Description",
    completed: false,
  },
];
</script>

<nav class="border-b shadow-md">
  <div class="container mx-auto">
    <div class="px-8 py-4">
      <h1 class="uppercase">Tasks</h1>
    </div>
  </div>
</nav>
<main class="container mx-auto">
  <div class="px-8 py-4">
    <div class="rounded-lg border shadow-md">
      <div class="border-b px-8 py-4">
        <div class="flex items-center justify-between gap-8">
          <h2 class="text-xl">List 1</h2>
          <div>
            <button class="rounded bg-red-500 px-4 py-2 text-white">
              Add
            </button>
          </div>
        </div>
      </div>
      {#each tasks as task, index}
        <div id="{`list-${index}`}" class="border-b px-8 py-4">
          <div class="flex items-center justify-between gap-8">
            <h3>{task.title}</h3>
            <div>
              <button class="rounded bg-red-500 px-4 py-2 text-white">
                Delete
              </button>
            </div>
          </div>
        </div>
      {/each}
      <div class="border-b px-8 py-4">
        <button class="w-full rounded bg-red-500 px-4 py-2 text-white">
          Add Task
        </button>
      </div>
    </div>
  </div>
</main>
