<script lang="ts">
  export let id: string;
</script>

<label for={id} class="mb-1 block text-sm font-medium text-gray-700">
  <slot />
</label>
