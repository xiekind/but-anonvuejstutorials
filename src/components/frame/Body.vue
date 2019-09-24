<template>
    <div class="appBody">
        <transition>
            <router-view>
            </router-view>
        </transition>
    </div>
</template>

<style scoped lang="scss">
@import "../../assets/colors.scss";

.appBody{
    color: $secondary;
}
</style>
<script>

export default {
    
}
</script>