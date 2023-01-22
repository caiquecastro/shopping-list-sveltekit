<script>
  import FormInput from '$lib/components/form-input.svelte';

  /** @type {import('./$types').PageData} */
  export let data;
</script>
  
<div class="flex justify-between mb-4">
  <h1 class="text-3xl font-semibold mb-2">Editar Item</h1>
  <a href="/items" class="button">Voltar</a>
</div>
<div class="max-w-xl mx-auto">
  <form action="/items/{data.item.id}?/update" method="post" class="space-y-5">
    <div>
      <FormInput
        id="name"
        label="Item"
        placeholder="Arroz"
        value={data.item.name}
      />
    </div>
    <div>
      <label for="category" class="mb-1 block text-sm font-medium text-gray-700">Categoria</label>
      <select
        id="category"
        name="category"
        class="input"
      >
        {#each data.categories as category}
          <option
            value={category.id}
            selected={data.item.category_id === category.id}
          >
            {category.name}
          </option>
        {/each}
      </select>
    </div>
    <button class="button">Salvar</button>
  </form>
</div>
