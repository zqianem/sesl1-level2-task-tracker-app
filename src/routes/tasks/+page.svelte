<script>
  export let data;

  let id_of_task_being_edited = null;
</script>

<div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
    <form action="?/add" method="POST" class="bg-slate-100 rounded shadow p-6 m-4 w-full">
        <div class="mb-4">
            <h2 class="text-center font-bold p-4">Create Task</h2>
            <div class="grid grid-cols-1 justify-center">
                <div class="p-1">
                    <label for="title">Title</label>
                    <input name="title" id="title">
                </div>
                <div class="p-1">
                    <label for="desc">Description</label>
                    <input name="desc" id="desc">
                </div>
                <div class="p-1">
                    <label for="ddate">Due Date</label>
                    <input name="ddate" id="ddate" type="date">
                </div>
            </div>
            
        </div>
        <button type="submit" class="create">
            Create Task
        </button>
    </form>
</div>
<div class="w-full bg-slate-100 rounded shadow p-6">
    <h2
    class="text-center font-bold"> Tasks List</h2>
    {#if data.tasks.length > 0}
    <ul>
        {#each data.tasks as {title,description,status,due_date,id}}
        <li>
            <div class="rounded shadow m-4 p-6">
              {#if id_of_task_being_edited === id}
                <h2 class="font-bold">Editing Task</h2>
                <form action="?/edit" method="POST">
                  <input type="hidden" name="id" value={id}>
                  <label>
                    Title
                    <input name="title" value={title}>
                  </label>
                  <label>
                    Description
                    <input name="desc" value={description}>
                  </label>
                  <label>
                    Status
                    <select name="stat">
                      <option value="Not Started">not started</option>
                      <option value="In Progress">in progress</option>
                      <option value="Completed">completed</option>
                    </select>
                  </label>
                  <label>
                    Due Date
                    <input name="ddate" type="date" value={due_date}>
                  </label>
                  <button type="submit">
                    Save
                  </button>
                </form>
              {:else}
                <h3 class="font-bold">{title ?? '(no title)'}</h3>
                <p>{description ?? '(no description)'}</p>
                <div>
                    <p class="font-bold text-blue-500 inline-block">Status:</p>
                    <p class="inline-block">{status.toLowerCase()}</p>
                </div>
                
                <div>
                    <p class="font-bold text-red-500 inline-block">Due Date:</p>
                    <p class="inline-block">{due_date ?? 'none'}</p>
                </div>
                <div class="flex">
                  <button on:click={() => id_of_task_being_edited = id}>
                    Edit
                  </button>
                  <form action="?/delete" method="POST">
                    <input type="hidden" name="id" value={id}>
                    <button type="submit" class="red">
                      Delete
                    </button>
                  </form>
                </div>
              {/if}
            </div>
        </li>
        {/each}
    </ul>
    {/if}
</div>

<style lang="postcss">
  input, select {
    @apply shadow border bg-white rounded w-full py-2 px-3 mr-4;
  }

  button {
    @apply bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 mt-2 mr-2 rounded;
  }

  button.create {
    @apply bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-full;
  }

  button.red {
    @apply bg-red-500 hover:bg-red-700
  }
</style>
