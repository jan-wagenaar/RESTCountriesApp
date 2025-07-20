import { goto } from '$app/navigation';
import { page } from '$app/state';

let debounceTimeout: ReturnType<typeof setTimeout>;

export function setUrlParamDebounced(
    param: string,
    value: string | null | undefined,
    delay: number = 300
): void {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        const params = new URLSearchParams(page.url.search);
        if (value && value.trim() !== "") {
            params.set(param, value.trim());
        } else {
            params.delete(param);
        }
        goto(`?${params.toString()}`, { replaceState: true, noScroll: true, keepFocus: true });
    }, delay);
}
