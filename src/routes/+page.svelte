<script lang="ts">
	let username = "";
    let playerId: string = "";
    let fetchSucsessful = false;
    async function hasNoUsername(){
        const resp = await fetch(`https://api.ashcon.app/mojang/v2/user/${username}`);   
        const json = await resp.json();
        playerId = json.uuid;
        if(resp.ok)
        {                
            fetchSucsessful = true;
        }
        else
        {
            fetchSucsessful = false;
        }
    }
</script>

<header class="flex flex-row justify-center pt-3">
    <h1 class="text-4xl font-bold text-center text-">Hypixel Skyblock Data</h1>
    <p>*</p>
</header>
<body class="flex flex-col justify-center pt-14 items-center">
    <input type="username" 
    bind:value={username} placeholder="Enter your username"
    class=" bg-blue-600 text-white rounded-lg w-auto h-auto p-2 hover:bg-blue-700 focus:outline-none" on:input={hasNoUsername}>
    
    {#if !fetchSucsessful || username == null}
        <a href="playerdata" class="text-center font-bold text-xl mt-4 w-32 bg-slate-300 rounded-lg pointer-events-none">Search</a>
    {:else if fetchSucsessful}
    <a href="Skyblock/player-data/{username}" class="text-center font-bold text-xl mt-4 w-32 bg-slate-400 hover:bg-slate-500 rounded-lg">Search</a>
    {/if}

</body>
<div class="h-32"></div>
<p class="w-1/2">*Disclaimer, some data may not be available if the API Settings in skyblock are disabled.</p>