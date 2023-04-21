<script>
  export let data;
  let username = "";

  const checkUser = async (event) => {
    let { data: users, error } = await supabase.from('users').select('username')

    if (!users) {
      const { data, error } = await supabase.from('users').insert([{ username: 'username' }])
    }

    window.location.href = "/tasks";
  }
</script>

<h1>Get tasks</h1>
<form action="tasks" on:submit={checkUser}>
  <input type="text" bind:value={username} placeholder="Enter name" />
  <button type="submit">Submit</button>
</form>



<style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
</style>
