<script>
      /** @type {import('./$types').PageData} */
    export let data;
</script>

<div class="flex justify-between mb-4">
  <h1 class="text-3xl font-semibold mb-2">Items</h1>
  <a
    href="/items/create"
    class="rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
  >
    Novo Item
  </a>
</div>
<table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
  <thead class="bg-gray-50">
    <tr>
      <th scope="col" class="px-6 py-4 font-medium text-gray-900">Item</th>
      <th scope="col" class="px-6 py-4 font-medium text-gray-900">Categoria</th>
      <th scope="col" class="px-6 py-4 font-medium text-gray-900 text-right">Ações</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-gray-100 border-t border-gray-100">
    {#each data.items as item}
      <tr>
        <th class="px-6 py-4 font-medium text-gray-900">
          {item.name}
        </th>
        <td class="px-6 py-4">
          {item.category}
        </td>
        <td class="flex justify-end gap-4 px-6 py-4 font-medium">
          <a href="/">Delete</a>
          <a href="/" class="text-primary-700">Edit</a>
        </td>
      </tr>
    {/each}
  </tbody>
</table>