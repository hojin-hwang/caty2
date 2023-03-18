import { ref } from 'vue';
import { useEventLisener } from './event.js';
export function useMouse()
{
    const x = ref(0);
    const y = ref(0);

    useEventLisener(window,'mousemove', (event)=>{
        x.value = event.pageX;
        y.value = event.pageY;
    })

    // 관리 상태를 반환 값으로 노출
    return { x, y }
}