<template>
    <div class="container">
        <div class="grid">
            <div class="row">
                <div class="col">
                    <li class="list-name">
                        <ul class="list-lastName">
                            firstName: {{name}}
                        </ul>
                    </li>
                </div>
            </div>
        </div>
        <Customer firstName="Abbi" />
    </div>
</template>

<script>
    export default {
        name: "Team",
        props: {
            name: {type: String, required: true}
        }
    }
</script>


<style>

</style>