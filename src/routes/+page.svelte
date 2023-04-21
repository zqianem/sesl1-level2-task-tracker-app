<script>
    export let data;
    let {users} = data
    let username = "";
    
    async function check() {
        let { data: users, error } = await supabase
            .from('users')
            .select('username')
        
        if(!data){
               const { data, error } = await supabase
                    .from('users')
                    .insert([ ,{ username: 'username'}])
        }
        
        window.location.href = "/tasks";
    }
    
    
</script>


<main>
    <h1>Get tasks</h1>
    <form action="tasks">
        <input type="text" bind:value={username} placeholder="Enter name" />
        <button type="submit">Submit</button>
    </form>
</main>

<style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
</style>
