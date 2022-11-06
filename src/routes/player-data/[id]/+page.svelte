<script lang="ts">
  import { debug } from 'svelte/internal';
  import type { PageData } from './$types';

  export let data: PageData;
  console.log(data);
</script>

<h1>{data.id}</h1>