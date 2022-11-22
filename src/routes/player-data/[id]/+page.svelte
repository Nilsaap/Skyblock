<script lang="ts">
  import { debug } from 'svelte/internal';
  import type { PageData } from './$types';
  
  export let data: PageData;
  const userData = data.profile.members[data.uuid];
  const skillData = data.skillData;
  
  console.log(userData.experience_skill_farming);
  console.log(Math.floor(Math.sqrt(userData.experience_skill_farming/1250 + 12.25) - 3.5) + 1);
</script>