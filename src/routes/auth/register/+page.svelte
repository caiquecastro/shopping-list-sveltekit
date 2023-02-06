<script lang="ts">
  import { supabase } from '$lib/db';
  import { goto } from '$app/navigation';
  import FormInput from '$lib/components/form-input.svelte';

  let loading = false;
  let error = '';
  let email = '';
  let password = '';

  async function handleSignup() {
    try {
      loading = true;
      const { error } = await supabase.auth.signUp({ email, password });
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
  }
</script>

<div class="m-auto max-w-xl py-4 w-full">
  <h1 class="text-3xl mb-4">Cadastro</h1>
  <form
    action="/auth/login"
    class="space-y-5"
    method="post"
    on:submit|preventDefault={handleSignup}
  >
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
    <button class="button">Cadastre-se</button>
    <a href="/auth/login" class="text-primary-800 text-sm block">Login</a>
  </form>
</div>
