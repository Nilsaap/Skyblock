<script lang="ts">
    import { onMount } from 'svelte';
  import { debug } from 'svelte/internal';
	let username: any;
    let playerData: any;
    let playerId: any;
    let time: number;
    let ashconEndpoint: string = "https://api.ashcon.app/mojang/v2/user/";

	onMount(() => {
		time = Date.now();
        console.log(time);
	});
    function updateUsername(e:any){
        username = e.target.value;
        getPlayerData();
        
    }

    async function getPlayerData(){
        if(fetch("https://api.ashcon.app/mojang/v2/user/"+username) != null){
            const apiOutput = await fetch("https://api.ashcon.app/mojang/v2/user/"+username);
            playerData = apiOutput.json();
        }
    }

    function setID(){
        playerId = playerData.value.uuid;
        console.log(playerData.value)
    }
</script>

<div class="grid grid-cols-1 grid-rows-3">
    <input type="text" on:input={updateUsername} on:change={getPlayerData}/>

    <button on:click={setID} class=""></button>

    <h1>{playerId}</h1>
</div>
