import { ref } from 'vue';

export function useToast(){
    const toast = ref({
        open: false,
        message: ""
    })

    let timer = null;

    function showToast(message, duration = 3500){
        if(timer) clearTimeout(timer);

        toast.value.open = true;
        toast.value.message = message;

        timer = setTimeout(() => {
            toast.value.open = false;
            toast.value.message = ""
            timer = null
        }, duration)
    }
    return {toast, showToast};
}
