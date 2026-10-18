import { initDialogs } from './dialogs.js'

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

// l'horloge de la barre de menus, comme sur un vrai mac
function initClock() {
    const clock = document.getElementById('menubar-clock')
    if (!clock) return

    const day = new Intl.DateTimeFormat('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' })
    const time = new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit' })

    const tick = () => {
        const now = new Date()
        clock.textContent = `${day.format(now)} ${time.format(now)}`
        clock.dateTime = now.toISOString()
        // on se recale pile sur la minute suivante
        setTimeout(tick, 60000 - (now.getSeconds() * 1000 + now.getMilliseconds()))
    }
    tick()
}

// chaque bloc apparaît en douceur quand il arrive à l'écran
function initReveal() {
    const items = document.querySelectorAll('.reveal')
    if (!items.length) return
    if (reduceMotion.matches || !('IntersectionObserver' in window)) {
        items.forEach(item => item.classList.add('is-visible'))
        return
    }
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
        })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
    items.forEach(item => observer.observe(item))
}

// le point sous l'icône du dock suit la section qu'on est en train de lire
function initDockTracking() {
    const links = [...document.querySelectorAll('.dock-item[href^="#"]')]
    const sections = links
        .map(link => ({ link, section: document.querySelector(link.getAttribute('href')) }))
        .filter(entry => entry.section)
    if (!sections.length || !('IntersectionObserver' in window)) return

    const visible = new Map()
    const update = () => {
        let best = null
        visible.forEach((ratio, section) => {
            if (!best || ratio > visible.get(best)) best = section
        })
        if (!best) return
        sections.forEach(({ link, section }) => {
            const current = section === best
            link.classList.toggle('is-current', current)
            if (current) link.setAttribute('aria-current', 'location')
            else link.removeAttribute('aria-current')
        })
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) visible.set(entry.target, entry.intersectionRatio)
            else visible.delete(entry.target)
        })
        update()
    }, { threshold: [0, 0.15, 0.3, 0.5, 0.75, 1], rootMargin: '-15% 0px -35% 0px' })
    sections.forEach(({ section }) => observer.observe(section))
}

// les fenêtres finder : recherche, tags et vue galerie / liste
function initFinders() {
    document.querySelectorAll('[data-finder]').forEach(finder => {
        const items = [...finder.querySelectorAll('[data-finder-item]')]
        const search = finder.querySelector('[data-finder-search]')
        const filters = [...finder.querySelectorAll('[data-finder-filter]')]
        const count = finder.querySelector('[data-finder-count]')
        const empty = finder.querySelector('[data-finder-empty]')
        const grid = finder.querySelector('[data-finder-grid]')
        const views = [...finder.querySelectorAll('[data-finder-view]')]

        let activeFilter = 'all'

        // on enlève les accents pour que "reseau" trouve aussi "Réseau"
        const normalize = text => text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')

        const matchesFilter = item => {
            if (activeFilter === 'all') return true
            if (activeFilter === 'fav') return item.dataset.fav === 'true'
            if (activeFilter === 'wip') return item.dataset.wip === 'true'
            return item.dataset.tags.split('|').includes(activeFilter.slice(4))
        }

        const apply = () => {
            const query = search ? normalize(search.value.trim()) : ''
            let shown = 0
            items.forEach(item => {
                const ok = matchesFilter(item) && (!query || normalize(item.dataset.search).includes(query))
                item.hidden = !ok
                if (ok) shown++
            })
            if (count) count.textContent = shown === 0 ? 'Aucun élément' : `${shown} élément${shown > 1 ? 's' : ''}`
            if (empty) empty.hidden = shown !== 0
            filters.forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.finderFilter === activeFilter)))
        }

        filters.forEach(btn => {
            btn.addEventListener('click', () => {
                // recliquer sur le filtre actif le désactive
                activeFilter = activeFilter === btn.dataset.finderFilter ? 'all' : btn.dataset.finderFilter
                apply()
            })
        })
        if (search) search.addEventListener('input', apply)

        views.forEach(btn => {
            btn.addEventListener('click', () => {
                grid.dataset.view = btn.dataset.finderView
                views.forEach(b => b.setAttribute('aria-pressed', String(b === btn)))
            })
        })

        apply()
    })
}

// le carrousel des actualités côté arbitrage
function initCarousel() {
    document.querySelectorAll('[data-carousel]').forEach(carousel => {
        const track = carousel.querySelector('[data-carousel-track]')
        const slides = [...track.children]
        const prev = carousel.querySelector('[data-carousel-prev]')
        const next = carousel.querySelector('[data-carousel-next]')
        const dots = [...carousel.querySelectorAll('[data-carousel-dot]')]
        const counter = carousel.querySelector('[data-carousel-counter]')
        let index = 0

        const goTo = target => {
            index = Math.max(0, Math.min(slides.length - 1, target))
            track.style.transform = `translateX(-${index * 100}%)`
            // les flèches se grisent quand on arrive au bout
            prev.disabled = index === 0
            next.disabled = index === slides.length - 1
            dots.forEach((dot, i) => dot.setAttribute('aria-current', String(i === index)))
            slides.forEach((slide, i) => {
                slide.setAttribute('aria-hidden', String(i !== index))
                slide.inert = i !== index
            })
            if (counter) counter.textContent = `${index + 1} / ${slides.length}`
        }

        prev.addEventListener('click', () => goTo(index - 1))
        next.addEventListener('click', () => goTo(index + 1))
        dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)))

        // pour pouvoir swiper sur téléphone
        let startX = null
        track.addEventListener('touchstart', e => { startX = e.touches[0].clientX }, { passive: true })
        track.addEventListener('touchend', e => {
            if (startX === null) return
            const delta = e.changedTouches[0].clientX - startX
            if (Math.abs(delta) > 50) goTo(index + (delta < 0 ? 1 : -1))
            startX = null
        })

        goTo(0)
    })
}

initClock()
initReveal()
initDockTracking()
initFinders()
initCarousel()
initDialogs()
