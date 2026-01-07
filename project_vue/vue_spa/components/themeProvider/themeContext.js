import { inject } from "vue"

export const ThemeKey = Symbol("Theme")
export function useTheme(){
    const ctx = inject(ThemeKey);
    return ctx;
}
