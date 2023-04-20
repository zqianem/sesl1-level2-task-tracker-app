<script>
    export let data;
    console.log(data)

  </script>

  <div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
	<div class="bg-slate-100 rounded shadow p-6 m-4 w-full">
        <div class="mb-4">
            <h2 class="text-center font-bold p-4">Create Task</h2>
            <div class="flex ">
                <input class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Title">
                <input class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Description">
                <input class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"  type="date" />
                <select class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker">
                    <option value="ns">Not Started</option>
                    <option value="ns">In Progress</option>
                    <option value="ns">Completed</option>
                </select>
            </div>
            
        </div>
        <button class="flex-no-shrink p3 border-2 rounded text-teal border-teal hover:text-gray-200 hover:bg-teal right-full place-items-end">Create Task</button>
    </div>
  </div>
  <div class="w-full bg-slate-100 rounded shadow m-4 p-6">
    <h2
    class="text-center font-bold"> Tasks List</h2>
    {#if data.tasks.length > 0}
    <ul>
        {#each data.tasks as {title,description,status,due_date}}
        <li>
            <div class="w-full rounded shadow m-4 p-6">
                <h3 class="font-bold">{title}</h3>
                <p>Description - {description}</p>
                <p>{status}</p>
                <p>{due_date}</p>
            </div>
        </li>
        {/each}
    </ul>
    {/if}
  </div>

  


<style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
  </style>
