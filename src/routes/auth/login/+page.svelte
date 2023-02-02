<script lang="ts">
  import { supabase } from '$lib/db';
  import { goto } from '$app/navigation';
  import FormInput from '$lib/components/form-input.svelte';

  let loading = false;
  let error = '';
  let email = '';
  let password = '';

  const handleLogin = async () => {
    try {
      loading = true;
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        throw error;
      }

      await goto('/');
    } catch (err) {
      if (err instanceof Error) {
        error = err.message;
      }
    } finally {
      loading = false;
    }
  };
</script>

<div class="m-auto max-w-xl py-4 w-full">
  <h1 class="text-3xl mb-4">Login</h1>
  {#if error}
    <div class="rounded-md bg-red-50 p-4 text-sm text-red-500 mb-3"><b>Error alert</b> {error}</div>
  {/if}
  <form action="/auth/login" class="space-y-5" method="post" on:submit|preventDefault={handleLogin}>
    <div>
      <FormInput
        type="email"
        id="email"
        label="E-mail"
        placeholder="you@email.com"
        bind:value={email}
      />
    </div>
    <div>
      <FormInput
        id="password"
        type="password"
        label="Password"
        placeholder="Your secret password"
        bind:value={password}
      />
    </div>
    <div class="flex items-center space-x-2">
      <input
        type="checkbox"
        id="remember"
        class="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
      />
      <label for="remember" class="text-sm font-medium text-gray-700">Remember me</label>
    </div>
    <button class="button" disabled={loading}>Entrar</button>
  </form>
</div>
