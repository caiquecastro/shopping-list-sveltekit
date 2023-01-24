<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="flex justify-between mb-4">
  <h1 class="text-3xl font-semibold mb-2">Novo Item do Inventário</h1>
  <a href="/inventory" class="button">Voltar</a>
</div>
<div class="max-w-xl mx-auto">
  <form action="/inventory" method="post" class="space-y-5">
    <div>
      <label for="item" class="mb-1 block text-sm font-medium text-gray-700">Item</label>
      <select id="item" name="item" class="input">
        {#each data.items as item}
          <option value={item.id}>{item.name}</option>
        {/each}
      </select>
    </div>
    <div>
      <label for="quantity" class="mb-1 block text-sm font-medium text-gray-700">Quantidade</label>
      <input type="text" id="quantity" name="quantity" class="input" placeholder="10" />
    </div>
    <button class="button">Salvar</button>
  </form>
</div>
