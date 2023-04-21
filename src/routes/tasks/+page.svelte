<script>
    export let data;
</script>

<div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
    <div class="bg-slate-100 rounded shadow p-6 m-4 w-full">
        <div class="mb-4">
            <h2 class="text-center font-bold p-4">Create Task</h2>
            <div class="grid grid-cols-1 justify-center">
                <div class="p-1">
                    <label for="title">Title</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"name="title" id="title">
                </div>
                <div class="p-1">
                    <label for="desc">Description</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"name="desc" id="desc">
                </div>
                <div class="p-1">
                    <label for="ddate">Due Date</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"name="ddate" id="ddate" type="date">
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
            <div class="rounded shadow m-4 p-6">
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

