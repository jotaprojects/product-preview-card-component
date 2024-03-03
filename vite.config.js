import { defineConfig } from "vite";
import tailwindcss from 'tailwindcss';

export default defineConfig({
    root: "src",
    base: "./",
    publicDir: "assets/",
    build: {
        outDir: "../dist/"
    },
    css: {
        postcss: {
            plugins: [tailwindcss()]
        }
    }
});
