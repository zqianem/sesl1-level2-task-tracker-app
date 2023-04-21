<script>
    let username = "";

    const login = async () => {
        let { data: users, error } = await supabase
            .from('users')
            .select('username')
            .eq("username", username)
            .single();

        if(error){
            console.error(error);
            return;
        }

        if (data) {
            localStorage.setItem("user_id", data.id);
        } else {
            const { data, error } = await supabase.from("users").insert({ username });
            if (error) {
                console.error(error);
                return;
            }
            localStorage.setItem("id", data.id);
        }

        window.location.href = "/tasks";
    };

</script>


<main>
    <h1>Get tasks</h1>
    <form action="tasks">
        <input type="text" bind:value={username} placeholder="Enter name" />
        <button onclick="login" type="submit">Submit</button>
    </form>
</main>

<style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
</style>
