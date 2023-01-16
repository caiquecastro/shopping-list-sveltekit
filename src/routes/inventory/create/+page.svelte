<script>
    /** @type {import('./$types').PageData} */
    export let data;
  </script>
  
  <div class="flex justify-between mb-4">
    <h1 class="text-3xl font-semibold mb-2">Novo Item do Inventário</h1>
    <a
      href="/inventory"
      class="rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
    >
      Voltar
    </a>
  </div>
  <div class="max-w-xl mx-auto">
    <form action="/inventory" method="post" class="space-y-5">
      <div>
        <label for="item" class="mb-1 block text-sm font-medium text-gray-700">Item</label>
        <select
          id="item"
          name="item"
          class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50"
        >
          {#each data.items as item}
            <option value="{item.id}">{item.name}</option>
          {/each}
        </select>
      </div>
      <div>
        <label for="quantity" class="mb-1 block text-sm font-medium text-gray-700">Quantidade</label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
          placeholder="10"
        />
      </div>
      <button
        class="rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
      >
        Salvar
      </button>
    </form>
  </div>