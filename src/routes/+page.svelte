<script>
  import { enhance } from '$app/forms';

  export let form;
</script>

<h1>Task Tracker</h1>
<form method="POST" use:enhance>
  <label>
    Username
    <input name="username" type="text" placeholder="Jane Doe">
  </label>
  {#if form?.missing}
    <p>Username is required</p>
  {/if}
  <button type="submit">Login/register</button>
</form>

<style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
</style>
