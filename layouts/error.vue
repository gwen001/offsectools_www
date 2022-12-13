<template>
    <div id="error">
        <div class="content h-100">
            <div class="title">
                <h1>An error occurred</h1>
            </div>
            <div class="mt-5">
                <h2>{{ error.message }}</h2>
            </div>
            <div class="mt-5">
                <a href="/" class="btn btn-outline-custom2">Go back home</a>
            </div>
            <div class="mt-5">
                If the error persist, feel free to <nuxt-link to="/about" class="highlight1">reach us</nuxt-link>.
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'error',
    props: ['error']
}
</script>


<style scoped>
h1 {
    font-size: 4em;
}
#error {
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 50rem;
    text-align: center;
}
#error .btn {
    padding: 0.8rem 4rem;
}
</style>
