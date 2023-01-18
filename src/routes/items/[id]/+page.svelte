<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="flex justify-between mb-4">
  <h1 class="text-3xl font-semibold mb-2">Detalhe do Item</h1>
  <a href="/items" class="button">Voltar</a>
</div>

<dl>
  <dt>Name</dt>
  <dd>{data.item.name}</dd>

  <dt>Categoria</dt>
  <dd>{data.item.category}</dd>
</dl>
