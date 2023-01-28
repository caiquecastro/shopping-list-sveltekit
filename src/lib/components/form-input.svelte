<script lang="ts">
  import FormLabel from './form-label.svelte';

  export let id: string;
  export let label: string;
  export let type = 'text';
  export let value = '';
  export let placeholder: string | undefined;

  function inputType(node: HTMLInputElement) {
    node.type = type;
  }
</script>

<FormLabel {id}>{label}</FormLabel>
<input use:inputType {id} name={id} class="input" {placeholder} bind:value />
