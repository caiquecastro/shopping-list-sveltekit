<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="flex justify-between mb-4">
  <h1 class="text-3xl font-semibold mb-2">Novo Item</h1>
  <a href="/items" class="button">Voltar</a>
</div>
<div class="w-full max-w-xl mx-auto">
  <form action="/items" method="post" class="space-y-5">
    <div>
      <label for="name" class="mb-1 block text-sm font-medium text-gray-700">Item</label>
      <input type="text" id="name" name="name" class="input" placeholder="Arroz" />
    </div>
    <div>
      <label for="category" class="mb-1 block text-sm font-medium text-gray-700">Categoria</label>
      <select id="category" name="category" class="input">
        {#each data.categories as category}
          <option value={category.id}>{category.name}</option>
        {/each}
      </select>
    </div>
    <button class="button">Salvar</button>
  </form>
</div>
