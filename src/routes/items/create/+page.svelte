<div class="flex justify-between mb-4">
  <h1 class="text-3xl font-semibold mb-2">Novo Item</h1>
  <a
    href="/items"
    class="rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
  >
    Voltar
  </a>
</div>
<div class="max-w-xl mx-auto">
  <form action="/items" method="post" class="space-y-5">
    <div>
      <label for="name" class="mb-1 block text-sm font-medium text-gray-700">Item</label>
      <input
        type="text"
        id="name"
        name="name"
        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
        placeholder="Arroz"
      />
    </div>
    <div>
      <label for="category" class="mb-1 block text-sm font-medium text-gray-700">Categoria</label>
      <input
        type="text"
        id="category"
        name="category"
        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
        placeholder="Alimentação"
      />
    </div>
    <button
      class="rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
    >
      Salvar
    </button>
  </form>
</div>