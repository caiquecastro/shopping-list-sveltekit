<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="flex justify-between mb-4">
  <h1 class="text-3xl font-semibold mb-2">Detalhe do Item</h1>
  <a
    href="/items"
    class="rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
  >
    Voltar
  </a>
</div>


<dl>
  <dt>Name</dt>
  <dd>{data.item.name}</dd>

  <dt>Categoria</dt>
  <dd>{data.item.category}</dd>
</dl>
