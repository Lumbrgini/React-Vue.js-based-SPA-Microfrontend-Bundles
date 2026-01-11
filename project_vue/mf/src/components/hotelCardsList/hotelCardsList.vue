<template>
    <div>
        <div class="hotelCardList">
            <hotelCard
            v-for="hotel in hotels"
            :key="hotel.id"
            :name="hotel.name"
            :image="hotel.image"
            :location="hotel.location"
            :price="hotel.price"
            :rating="hotel.rating"
            :is-favorite="favorites.includes(hotel.location)"
            @add-favorite="handleAddToFavourites"
            @book="openBooking(hotel)"
            />
        </div>

        <modalRequestForm
            v-model="form"
            v-model:open="isModalOpen"
            :hotel="selectedHotel"
            @submitted="onSubmitted"
            @update:open="onOpenChanged"
        />
        <Toast :open="toast.open" :message="toast.message" />
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import hotelCard from "./hotelCard.vue";
    import "./hotelCardList.css";
    import modalRequestForm from "../ModalRequestForm/modalRequestForm.vue";
    import Toast from "../toastComponent/Toast.vue";
    import { useToast } from "../toastComponent/refToast.mjs";

    import inns from "../../pictures/inns.jpg";
    import falken from "../../pictures/falken.jpg";
    import worldhotel from "../../pictures/worldhotel.jpg";
    import boutique from "../../pictures/boutique.jpg";
    import seehotel from "../../pictures/seehotel.jpg";
    import parkhotel from "../../pictures/parkhotel.jpg";

    const hotels = [
        {
            id: 1,
            name: "INNs Holz",
            image: inns,
            location: "4161 Ulrichsberg",
            price: 130,
            rating: 4.9,
        }, 
        {
            id: 2,
            name: "Falkensteiner Hotel",
            image: falken,
            location: "4190 Bad Leonfelden",
            price: 170,
            rating: 4.4,
        },
        {
            id: 3,
            name: "Trans World Hotel Donauwelle",
            image: worldhotel,
            location: "4020 Linz",
            price: 73,
            rating: 4.0,
        },
        {
            id: 4,
            name: "Boutique Hotel Hauser",
            image: boutique,
            location: "4600 Wels",
            price: 111,
            rating: 4.7,
        },
        {
            id: 5,
            name: "Seehotel im Weyer",
            image: seehotel,
            location: "4810 Gmunden",
            price: 142,
            rating: 4.9,
        },
        {
            id: 6,
            name: "Parkhotel Branau",
            image: parkhotel,
            location: "5280 Branau am Inn",
            price: 80,
            rating: 4.0,
        }
    ]

    function loadFavorites() {
        const stored = localStorage.getItem("Hotels");
       try {
            const parsed = stored ? JSON.parse(stored) : [];
            return Array.isArray(parsed) ? parsed : [];
        } catch {
            return [];  
        }
    }

    const favorites = ref(loadFavorites());

    const handleAddToFavourites = (location) => {
        const prev = favorites.value;

        let updatedFav;
        
        if (prev.includes(location)) {
            updatedFav = prev.filter(item => item !== location);
        } else {
            updatedFav = [...prev, location];
        }

        favorites.value = updatedFav;

        localStorage.setItem("Hotels", JSON.stringify(updatedFav));

        const ids = hotels
            .filter(hotel => updatedFav.includes(hotel.location))
            .map(hotel => hotel.id);

        localStorage.setItem("IDs", JSON.stringify(ids));
    }

    const form = ref({
        name: "",
        famName: "",
        nationality: "",
        arrDate: "",
        depDate: "",
        email: "",
    });

    function resetForm() {
	    form.value = {
            name: "",
            famName: "",
            nationality: "",
            arrDate: "",
            depDate: "",
            email: "",
  	    }
    }

    const isModalOpen = ref(false)
    const selectedHotel = ref(null)

    function openBooking(hotel) {
        selectedHotel.value = hotel
        isModalOpen.value = true
    }

    const { toast, showToast } = useToast(3500);

    function onSubmitted() {
        showToast("Your request has been successfully sent!");
        selectedHotel.value = null
    }

    function onOpenChanged(val){
        if(val === false) resetForm();
        selectedHotel.value = null
    }
</script>