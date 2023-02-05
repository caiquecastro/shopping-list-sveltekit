<script lang="ts">
  import '../app.css';
  import type { LayoutServerLoad } from './$types';

  export let data: LayoutServerLoad;
</script>

<nav class="relative flex flex-wrap items-center justify-between px-4 py-3 bg-primary-900 mb-4">
  <div class="container mx-auto flex flex-wrap items-center justify-between">
    <div class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
      <a
        class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
        href="/"
      >
        Shopping List
      </a>
    </div>
    <div class="lg:flex flex-grow items-center" id="example-navbar-warning">
      <ul class="flex flex-col lg:flex-row list-none ml-auto">
        {#if data.session}
          <li class="nav-item">
            <a
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href="/inventory"
            >
              Inventário
            </a>
          </li>
          <li class="nav-item">
            <a
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href="/items"
            >
              Todos itens
            </a>
          </li>
          <li class="nav-item">
            <form action="/auth/logout" method="post">
              <button
                class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              >
                Sair
              </button>
            </form>
          </li>
        {/if}
      </ul>
    </div>
  </div>
</nav>
<div class="container mx-auto px-4 flex-1 flex flex-col">
  <slot />
</div>
