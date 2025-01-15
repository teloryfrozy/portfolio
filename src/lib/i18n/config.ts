import { init, getLocaleFromNavigator, locale, addMessages } from "svelte-i18n";
import en from "./en.json";
import fr from "./fr.json";

addMessages("en", en);
addMessages("fr", fr);

let initialLocale: string;

if (typeof localStorage !== "undefined") {
    initialLocale = localStorage.getItem("language") || getLocaleFromNavigator() || "en";
} else {
    initialLocale = "en";
}

init({
    fallbackLocale: "en",
    initialLocale,
});

export { locale };
