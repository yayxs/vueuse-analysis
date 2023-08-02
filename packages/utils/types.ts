import { Ref } from 'vue'
/**
 * Any func
 */
export type Fn = () => void

// export type MaybeComputedRef<T> =

export type MaybeRef<T> = T | Ref<T>
