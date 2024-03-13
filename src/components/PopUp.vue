<template>
    <div class="popup">
        <div class="popup__inner" ref="popup">
            <div class="popup__header">
                <h2 class="popup__title popup__title--black">{{ props.user?.name }}</h2>
                <button @click="closePopup" class="popup__close">
                    <CloseIcon />
                </button>
            </div>
            <div class="popup__content">
                <div class="popup__grid">
                    <p class="popup__pre-title popup__pre-title--black">Телефон:</p>
                    <p class="popup__text popup__text--gray">{{ props.user?.phone }}</p>
                    <p class="popup__pre-title popup__pre-title--black">Почта:</p>
                    <p class="popup__text popup__text--gray">{{ props.user?.email }}</p>

                    <p class="popup__pre-title popup__pre-title--black">Дата приема:</p>
                    <p class="popup__text popup__text--gray">{{ formattedHireDate }}</p>
                    <p class="popup__pre-title popup__pre-title--black">Должность:</p>
                    <p class="popup__text popup__text--gray">{{ props.user?.position_name }}</p>
                    <p class="popup__pre-title popup__pre-title--black">Подразделение:</p>
                    <p class="popup__text popup__text--gray">{{ props.user?.department }}</p>
                </div>
            </div>
            <div class="popup__footer">
                <h3 class="popup__pre-title popup__pre-title--black">
                    Дополнительная информация:
                </h3>
                <p class="popup__text popup__text--gray">Разработчики используют текст в качестве заполнителя макта
                    страницы. Разработчики используют текст в качестве заполнителя макта страницы.</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps, ref } from 'vue';
import CloseIcon from './icons/CloseIcon.vue';
import { onClickOutside } from '@vueuse/core';

const popup = ref(null);
const emit = defineEmits(['close']);

const closePopup = () => {
    emit('close');
};

onClickOutside(
    popup,
    () => {
        closePopup();
    }
);

const props = defineProps({
    user: {
        type: Object
    }
});

const formattedHireDate = computed(() => {
    return new Date(props.user?.hire_date).toLocaleDateString('Ru-ru');
});
</script>


<style scoped lang="scss">
.popup {

    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #bcc3d07a;
    height: 100vh;

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 14px;
    }

    &__inner {

        display: flex;
        flex-direction: column;
        gap: 40px;
        max-width: 500px;
        background-color: var(--white-bg);
        padding: var(--box-padding);
        border-radius: var(--border-radius);
        background-color: var(--white-bg);
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
    }

    &__footer {
        & h3 {
            margin-bottom: 12px;
        }
    }

    &__close {
        display: flex;
        justify-content: center;
        align-content: center;
        padding: 0;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    &__pre-title {
        font-weight: 400;
        font-size: 18px;
        line-height: 133%;


        &--black {
            color: var(--black-text);
        }
    }

    &__text {
        font-weight: 400;
        font-size: 16px;
        line-height: 112%;

        &--gray {
            color: var(--gray-text);
        }
    }

    &__title {
        font-weight: 700;
        font-size: 24px;
        line-height: 125%;

        &--black {
            color: var(--black-text);
        }
    }
}
</style>