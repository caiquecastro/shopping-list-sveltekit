<script>
    import FormInput from "$lib/components/form-input.svelte";
</script>

<div class="mx-auto max-w-xl">
  <form action="/auth/login" class="space-y-5" method="post">
    <div>
      <FormInput
        type="email"
        id="email"
        label="E-mail"
        placeholder="you@email.com"
      />
    </div>
    <div>
      <FormInput
        id="password"
        type="password"
        label="Password"
        placeholder="Your secret password"
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
    <button type="button" class="button">Entrar</button>
  </form>
</div>
