// toutes les images de src/assets/img, retrouvées par leur nom de fichier
// (les données gardent leurs chemins "assets/img/..." comme sur l'ancien site)
const files = import.meta.glob('../assets/img/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' })

const byName = Object.fromEntries(
    Object.entries(files).map(([path, image]) => [path.split('/').pop(), image])
)

const fileName = path => String(path).split('/').pop()

export const isSvg = path => fileName(path).toLowerCase().endsWith('.svg')

// les svg restent dans public/, les autres passent par l'optimisation d'Astro
export function img(path) {
    const name = fileName(path)
    if (isSvg(name)) return `/assets/img/${name}`
    const found = byName[name]
    if (!found) throw new Error(`Image introuvable dans src/assets/img : ${name}`)
    return found
}
