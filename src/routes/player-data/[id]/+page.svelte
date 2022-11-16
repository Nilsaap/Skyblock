<script lang="ts">
  import { debug } from 'svelte/internal';
  import type { PageData } from './$types';
  
  export let data: PageData;
  const userData = data.profile.members[data.uuid];
  console.log(userData);
</script>

{data.skillData[1]}