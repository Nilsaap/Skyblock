<script lang="ts">
  import { debug } from 'svelte/internal';
  import type { PageData } from './$types';
  
  export let data: PageData;
  const userData = data.profile.members[data.uuid];
  const skillData = data.skillData;
  console.log(skillData);
</script>
