// ici je gère toutes les fenêtres (projets, rapports d'arbitrage) avec les <dialog> natifs du navigateur
export function openDialog(id) {
    const dialog = document.getElementById(id)
    if (!dialog || dialog.open) return
    dialog.showModal()
    dialog.scrollTop = 0
}

// la mini fenêtre qui affiche l'ancienne version du site
// on charge la vraie page dans une iframe, et on la réduit pour qu'elle tienne dans la fiche
function initArchive(section) {
    const viewport = section.querySelector('[data-archive-viewport]')
    const frame = section.querySelector('[data-archive-frame]')
    const buttons = [...section.querySelectorAll('[data-archive-mode]')]
    if (!viewport || !frame) return

    const sizes = { desktop: 1280, mobile: 390 }
    let mode = 'desktop'

    const fit = () => {
        const width = sizes[mode]
        const available = viewport.clientWidth
        if (!available) return
        // en mode mobile on garde la vraie taille si ça rentre, sinon on réduit
        const scale = Math.min(1, available / width)
        frame.style.width = `${width}px`
        frame.style.height = `${Math.ceil(viewport.clientHeight / scale)}px`
        frame.style.transform = `scale(${scale})`
        frame.style.left = mode === 'mobile' ? `${Math.max(0, (available - width * scale) / 2)}px` : '0px'
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            mode = btn.dataset.archiveMode
            section.dataset.mode = mode
            buttons.forEach(b => b.setAttribute('aria-pressed', String(b === btn)))
            fit()
        })
    })

    new ResizeObserver(fit).observe(viewport)
    fit()
}

export function initDialogs() {
    document.querySelectorAll('[data-archive]').forEach(initArchive)

    document.addEventListener('click', event => {
        const trigger = event.target.closest('[data-open-dialog]')
        if (trigger) {
            event.preventDefault()
            openDialog(trigger.dataset.openDialog)
        }
    })

    document.querySelectorAll('dialog.quicklook').forEach(dialog => {
        // un clic dans le vide autour de la fenêtre la ferme (le fond appartient au dialog lui-même)
        dialog.addEventListener('click', event => {
            if (event.target === dialog) dialog.close()
        })

        // la galerie : on clique sur une miniature, elle passe en grand
        const main = dialog.querySelector('[data-ql-main]')
        const thumbs = [...dialog.querySelectorAll('[data-ql-thumb]')]
        thumbs.forEach(thumb => {
            thumb.addEventListener('click', () => {
                if (!main) return
                main.src = thumb.dataset.src
                main.width = Number(thumb.dataset.width)
                main.height = Number(thumb.dataset.height)
                thumbs.forEach(t => t.setAttribute('aria-pressed', String(t === thumb)))
            })
        })

        // quand on referme, on remet la première image pour la prochaine ouverture
        dialog.addEventListener('close', () => {
            if (main && thumbs[0]) thumbs[0].click()
        })
    })
}
