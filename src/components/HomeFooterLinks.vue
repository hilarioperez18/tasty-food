<template>
    <a :href="url" target="_blank" :style="{ color: textColor }" @mouseover="changeColor(colorHover)"
        @mouseout="changeColor(colorNatural)">
        <slot></slot>
    </a>
</template>
  
<script>
export default {
    props: {
        url: String,
        colorNatural: String,
        colorHover: String,
    },
    data() {
        return {
            textColor: this.colorNatural,
        };
    },
    methods: {
        changeColor(color) {
            this.textColor = color;
        },
    },
};
</script>
  