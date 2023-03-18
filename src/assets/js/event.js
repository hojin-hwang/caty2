import { onMounted, onUnmounted} from "vue";

export function useEventLisener(target, event, callback)
{
    onMounted(()=>target.addEventListener(event, callback))
    onUnmounted(()=>target.removeEventListener(event,callback))
}