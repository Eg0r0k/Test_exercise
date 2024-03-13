
<template>
    <div class="card">
        <div class="card__header">
            <h2 class="card__title ">{{ props.user?.name }}</h2>
        </div>
        <div class="card__content content">
            <div class="content__fild">
                <PhoneIcon />
                <p class="content__text content__text--gray">{{ props.user?.phone }}</p>
            </div>
            <div class="content__fild">
                <MailIcon />
                <p class="content__text content__text--gray">{{ props.user?.email }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import MailIcon from './icons/MailIcon.vue';
import PhoneIcon from './icons/PhoneIcon.vue';
const props = defineProps(
    {
        user: {
            type: Object
        }
    }
)
</script>

<style lang="scss" scoped>
.card {
    cursor: pointer;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
    background-color: var(--white-bg);
    display: flex;
    flex-direction: column;
    padding: var(--box-padding);
    height: 314px;
    border-radius: var(--border-radius);

    &__header {
        padding-bottom: 24px;
    }

    &__title {
        font-weight: 700;
        font-size: 24px;
        color: var(--black-text);
    }
}

.content {
    display: flex;
    flex-direction: column;
    gap: 12px;

    &__fild {
        display: flex;
        gap: 14px;

    }

    &__text {
        font-weight: 400;
        font-size: 14px;
        line-height: 143%;

        &--gray {
            color: var(--gray-text)
        }
    }
}
</style>