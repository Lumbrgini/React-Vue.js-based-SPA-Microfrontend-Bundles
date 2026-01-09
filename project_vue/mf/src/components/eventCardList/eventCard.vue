<template>
    <article class="eventCard">
        <div class="eventCard_imageWrapper">
            <img :src=image alt="Event image"></img>
        </div>
        <div class="eventCard_body">
            <h3 class="eventCard_name">{{name}}</h3>
            <p class="eventCard_date">{{date}}</p>
            <p class="eventCard_location">{{location}}</p>
            <p class="eventCard_price">{{price === 0? 'Free': `starts with ${price}€`}}</p>
        </div>
    </article>
</template>

<script setup>
    import "./eventCard.css"
    const props = defineProps({
        name: String,
        image: String,
        date: String,
        location: String,
        price: Number
    })

</script>