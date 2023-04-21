<script>
    export let data;
    console.log(data)

  </script>

  <div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
	<div class="bg-slate-100 rounded shadow p-6 m-4 w-full">
        <div class="mb-4">
            <h2 class="text-center font-bold p-4">Create Task</h2>
            <div class="grid grid-cols-1 justify-center">
                <div class="p-1">
                    <p>Title</p>
                    <input class="shadow appearance-none border rounded w-1/2 py-2 px-3 mr-4 text-grey-darker" placeholder="Title">
                </div>
                <div >
                    <p>Description</p>
                    <input class="shadow appearance-none border rounded w-1/2 py-2 px-3 mr-4 text-grey-darker" placeholder="Description">
                </div>
                <div class="p-1">
                    <p>Due Date</p>
                    <input class="shadow appearance-none border rounded w-1/2 py-2 px-3 mr-4 text-grey-darker"  type="date" />
                </div>
            </div>
            
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Create Task
        </button>
    </div>
  </div>
  <div class="w-full bg-slate-100 rounded shadow p-6">
    <h2
    class="text-center font-bold"> Tasks List</h2>
    {#if data.tasks.length > 0}
    <ul>
        {#each data.tasks as {title,description,status,due_date}}
        <li>
            <div class="w-full rounded shadow m-4 p-6">
                <h3 class="font-bold">{title}</h3>
                <p>{description}</p>
                <div>
                    <p class="font-bold text-blue-500 inline-block">Status:</p>
                    <p class="inline-block">{status}</p>
                </div>
                
                <div>
                    <p class="font-bold text-red-500 inline-block">Due Date:</p>
                    <p class="inline-block">{due_date}</p>
                </div>
            </div>
        </li>
        {/each}
    </ul>
    {/if}
  </div>

