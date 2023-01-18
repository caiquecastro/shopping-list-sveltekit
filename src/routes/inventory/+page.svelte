<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="flex justify-between mb-4">
  <h1 class="text-3xl font-semibold mb-2">Inventory</h1>
  <a href="/inventory/create" class="button">Novo Item do Inventário</a>
</div>

<table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
  <thead class="bg-gray-50">
    <tr>
      <th scope="col" class="px-6 py-4 font-medium text-gray-900">Item</th>
      <th scope="col" class="px-6 py-4 font-medium text-gray-900">Quantidade</th>
      <th scope="col" class="px-6 py-4 font-medium text-gray-900" />
    </tr>
  </thead>
  <tbody class="divide-y divide-gray-100 border-t border-gray-100">
    {#each data.rows as inventory}
      <tr>
        <th class="px-6 py-4 font-medium text-gray-900">{inventory.item?.name}</th>
        <td class="px-6 py-4">{inventory.quantity}</td>
        <td class="flex justify-end gap-4 px-6 py-4 font-medium">
          <form action="/inventory/{inventory.id}?/delete" method="post">
            <button>Delete</button>
          </form>
          <a href="/" class="text-primary-700">Edit</a>
        </td>
      </tr>
    {/each}
  </tbody>
</table>
