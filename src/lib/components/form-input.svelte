<script lang="ts">
  export let id: string;
  export let label: string;
  export let type = 'text';
  export let value = '';
  export let placeholder: string | undefined;
</script>

<label for={id} class="mb-1 block text-sm font-medium text-gray-700">
  {label}
</label>
<input {type} {id} name={id} class="input" {placeholder} {value} />
