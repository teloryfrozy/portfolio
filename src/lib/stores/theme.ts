import { writable } from "svelte/store";
import { browser } from "$app/environment";

const defaultTheme = browser ? localStorage.getItem("theme") || "light" : "light";
export const theme = writable<"light" | "dark">(defaultTheme as "light" | "dark");

theme.subscribe((value) => {
    if (browser) {
        localStorage.setItem("theme", value);
        document.documentElement.classList.toggle("dark", value === "dark");
    }
});
