<template>
    <div>
        <article class="hotelCard">
            <div class="hotelCard_imageWrapper">
                <img :src=image alt="Hotel image"></img>
            </div>
            <div class="hotelCard_body">
                <h3 class="hotelCard_name">{{name}}</h3>
                <p class="hotelCard_location">{{location}}</p>
                <p class="hotelCard_price">starts with {{price}}€</p>
                <p class="hotelCard_rating">{{rating}} Stars</p>
            </div>

            <div class="btnContainer">
                <button @click="onAddFavorite" class="addFavBtn">
                    {{isFavorite? 'Remove from ': 'Add to '}} Favorites
                </button>
                <button class="bookBtn" @click="onBook">Book this option</button>
            </div>
        </article>
    </div>
</template>
<script setup>
    import "./hotelCard.css";

    const props = defineProps({
        id: [String, Number],
        name: String,
        image: String,
        location: String,
        price: Number,
        rating: Number,
        isFavorite: Boolean
    })

    const emit = defineEmits(['add-favorite', 'book'])

    function onAddFavorite(){
        emit('add-favorite', props.location);
    }

    function onBook(){
        emit('book', {
            name: props.name,
            location: props.location
        })
    }

</script>