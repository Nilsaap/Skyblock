<script lang="ts">
	let name: any;

    function updateName(e:any){
        name = e.target.value;
    }
</script>

<input type="text" on:input={updateName}/>
<p>Hello {name}!</p>