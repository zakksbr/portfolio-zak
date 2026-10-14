// le graphe de mon réseau : tout est calculé à partir de saeProjects, rien n'est écrit en dur
(function () {
    const ME = 'Zakaria Sabri'
    const section = document.getElementById('reseau')
    if (!section || typeof saeProjects === 'undefined') return

    const graphBox = document.getElementById('network-graph')
    const fallback = section.querySelector('.network-fallback')
    const detail = document.getElementById('network-detail')
    const filtersBox = document.getElementById('network-filters')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    // on construit les personnes et les liens à partir de l'équipe de chaque projet
    const people = new Map([[ME, { id: ME, isMe: true, projects: [] }]])
    const edges = new Map()
    const teamProjects = []
    const soloProjects = []

    saeProjects.forEach((project, index) => {
        const team = Array.isArray(project.team) ? [...new Set(project.team)] : []
        if (team.length === 0) {
            soloProjects.push(index)
            return
        }
        teamProjects.push(index)

        // tout le monde est relié à tout le monde dans l'équipe, moi compris
        const members = [ME, ...team]
        members.forEach(name => {
            if (!people.has(name)) people.set(name, { id: name, isMe: false, projects: [] })
            people.get(name).projects.push(index)
        })
        for (let i = 0; i < members.length; i++) {
            for (let j = i + 1; j < members.length; j++) {
                const [a, b] = [members[i], members[j]].sort()
                const key = `${a}|${b}`
                if (!edges.has(key)) edges.set(key, { key, a, b, projects: [] })
                edges.get(key).projects.push(index)
            }
        }
    })

    // plusieurs projets ensemble = une seule arête, avec un poids
    const nodes = [...people.values()].map(p => ({ ...p, shared: p.projects.length }))
    const links = [...edges.values()].map(e => ({ key: e.key, source: e.a, target: e.b, weight: e.projects.length, projects: e.projects }))

    const neighbors = new Map(nodes.map(n => [n.id, new Set()]))
    links.forEach(l => {
        neighbors.get(l.source).add(l.target)
        neighbors.get(l.target).add(l.source)
    })

    const collaborators = nodes
        .filter(n => !n.isMe)
        .sort((x, y) => y.shared - x.shared || x.id.localeCompare(y.id, 'fr'))

    const tier = n => n.isMe ? 'me' : n.shared >= 3 ? 'frequent' : n.shared === 2 ? 'regular' : 'occasional'
    const radius = n => ({ me: 34, frequent: 22, regular: 17, occasional: 12 })[tier(n)]
    const plural = (count, word) => `${count} ${word}${count > 1 ? 's' : ''}`

    // les chiffres clés
    const setStat = (name, value) => {
        const el = section.querySelector(`[data-stat="${name}"]`)
        if (el) el.textContent = value
    }
    setStat('collaborators', collaborators.length)
    setStat('team', teamProjects.length)
    setStat('solo', soloProjects.length)

    // petits outils pour fabriquer la fiche de détail sans innerHTML
    const el = (tag, className, text) => {
        const node = document.createElement(tag)
        if (className) node.className = className
        if (text !== undefined) node.textContent = text
        return node
    }
    const projectTag = index => {
        const btn = el('button', 'network-tag', saeProjects[index].title)
        btn.type = 'button'
        btn.setAttribute('aria-label', `Voir le projet ${saeProjects[index].title}`)
        btn.addEventListener('click', () => window.openModal('sae', index))
        return btn
    }
    const personLink = name => {
        const btn = el('button', 'network-person', name)
        btn.type = 'button'
        btn.addEventListener('click', () => select({ type: 'person', id: name }))
        return btn
    }
    const inlineList = (label, items) => {
        const p = el('p', 'network-related')
        p.appendChild(el('span', 'network-related-label', label))
        items.forEach((item, i) => {
            if (i > 0) p.appendChild(document.createTextNode(', '))
            p.appendChild(item)
        })
        return p
    }

    const renderOverview = () => {
        detail.replaceChildren()
        detail.appendChild(el('h3', 'network-detail-title', "Vue d'ensemble"))
        detail.appendChild(el('p', 'network-detail-sub', 'Mes collaborateurs les plus fréquents :'))
        const list = el('div', 'network-top')
        collaborators.slice(0, 2).forEach(n => {
            const btn = el('button', 'network-top-item')
            btn.type = 'button'
            btn.appendChild(el('span', 'network-top-name', n.id))
            btn.appendChild(el('span', 'network-top-count', plural(n.shared, 'projet')))
            btn.addEventListener('click', () => select({ type: 'person', id: n.id }))
            list.appendChild(btn)
        })
        detail.appendChild(list)
        detail.appendChild(el('p', 'network-detail-hint', 'Clique sur une personne ou sur un projet pour explorer le graphe.'))
    }

    const renderPerson = id => {
        const n = people.get(id)
        detail.replaceChildren()
        detail.appendChild(el('h3', 'network-detail-title', id))
        detail.appendChild(el('p', 'network-detail-sub', `${plural(n.projects.length, 'projet')} en commun`))
        const tags = el('div', 'network-tags')
        n.projects.forEach(index => tags.appendChild(projectTag(index)))
        detail.appendChild(tags)

        const others = [...neighbors.get(id)].filter(name => name !== ME).sort((x, y) => x.localeCompare(y, 'fr'))
        if (others.length) {
            detail.appendChild(inlineList('Aussi lié à : ', others.map(personLink)))
        } else {
            detail.appendChild(el('p', 'network-related', 'Aussi lié à : personne d\'autre dans mon réseau.'))
        }
    }

    const renderProject = index => {
        const team = [...new Set(saeProjects[index].team)]
        detail.replaceChildren()
        detail.appendChild(el('h3', 'network-detail-title', saeProjects[index].title))
        detail.appendChild(el('p', 'network-detail-sub', `${plural(team.length + 1, 'membre')}, moi compris`))
        detail.appendChild(inlineList('Avec : ', team.map(personLink)))
        const tags = el('div', 'network-tags')
        const open = projectTag(index)
        open.textContent = 'Voir la fiche du projet'
        tags.appendChild(open)
        detail.appendChild(tags)
    }

    // les filtres par projet
    const filterButtons = []
    const addFilter = (label, state) => {
        const btn = el('button', 'network-filter', label)
        btn.type = 'button'
        btn.addEventListener('click', () => select(state))
        filtersBox.appendChild(btn)
        filterButtons.push({ btn, state })
    }
    addFilter('Tous', { type: 'all' })
    teamProjects.forEach(index => addFilter(saeProjects[index].title, { type: 'project', index }))

    // le rendu du graphe (si D3 n'a pas pu charger, la fiche et les filtres marchent quand même)
    let nodeSel = null
    let linkSel = null

    if (window.d3 && graphBox) {
        const d3 = window.d3
        let width = graphBox.clientWidth || 640
        const heightFor = w => w < 560 ? Math.round(w * 1.3) : Math.max(420, Math.min(580, Math.round(w * 0.78)))
        let height = heightFor(width)

        const svg = d3.select(graphBox).append('svg')
            .attr('class', 'network-svg')
            .attr('viewBox', `0 0 ${width} ${height}`)
            .attr('role', 'group')
            .attr('aria-label', 'Graphe de mes collaborations sur les projets universitaires')

        linkSel = svg.append('g').attr('class', 'network-links')
            .selectAll('line').data(links).join('line')
            .attr('class', l => `network-link${l.weight > 1 ? ' is-strong' : ''}`)
            .attr('stroke-width', l => 1.5 + (l.weight - 1) * 1.75)

        nodeSel = svg.append('g').attr('class', 'network-nodes')
            .selectAll('g').data(nodes).join('g')
            .attr('class', n => `network-node tier-${tier(n)}`)
            .attr('tabindex', 0)
            .attr('role', 'button')
            .attr('aria-label', n => n.isMe ? `${ME}, vue d'ensemble` : `${n.id}, ${plural(n.shared, 'projet')} en commun`)

        nodeSel.append('circle').attr('r', radius)
        nodeSel.filter(n => n.isMe).append('text')
            .attr('class', 'network-me-text')
            .attr('text-anchor', 'middle')
            .attr('dy', '0.35em')
            .text('ZS.')
        nodeSel.append('text')
            .attr('class', 'network-label')
            .attr('text-anchor', 'middle')
            .attr('dy', n => radius(n) + 15)
            .text(n => n.id)

        // moi au centre, les autres s'organisent autour
        const me = nodes.find(n => n.isMe)
        const pinMe = () => { me.fx = width / 2; me.fy = height / 2 }
        pinMe()

        // la longueur des liens suit la taille du cadre, et plus on a fait de projets ensemble, plus on est proches
        const linkDistance = l => Math.min(width, height) * 0.3 / (1 + (l.weight - 1) * 0.4)

        const simulation = d3.forceSimulation(nodes)
            .force('link', d3.forceLink(links).id(n => n.id).distance(linkDistance))
            .force('charge', d3.forceManyBody().strength(-520))
            .force('collide', d3.forceCollide().radius(n => radius(n) + 26))
            .force('x', d3.forceX(width / 2).strength(0.03))
            .force('y', d3.forceY(height / 2).strength(0.05))

        // on garde les cercles et leurs noms dans le cadre
        const clamp = n => {
            const r = radius(n)
            n.x = Math.max(r + 50, Math.min(width - r - 50, n.x))
            n.y = Math.max(r + 8, Math.min(height - r - 24, n.y))
        }
        const draw = () => {
            nodes.forEach(clamp)
            linkSel
                .attr('x1', l => l.source.x).attr('y1', l => l.source.y)
                .attr('x2', l => l.target.x).attr('y2', l => l.target.y)
            nodeSel.attr('transform', n => `translate(${n.x},${n.y})`)
        }
        simulation.on('tick', draw)

        // si les animations sont désactivées, on calcule la position finale d'un coup
        if (reduceMotion.matches) {
            simulation.stop()
            for (let i = 0; i < 300; i++) simulation.tick()
            draw()
        }

        nodeSel.call(d3.drag()
            .on('start', (event, n) => {
                if (!event.active && !reduceMotion.matches) simulation.alphaTarget(0.3).restart()
                n.fx = n.x
                n.fy = n.y
            })
            .on('drag', (event, n) => {
                n.fx = event.x
                n.fy = event.y
                if (reduceMotion.matches) { n.x = event.x; n.y = event.y; draw() }
            })
            .on('end', (event, n) => {
                if (!event.active) simulation.alphaTarget(0)
                if (n.isMe) pinMe()
                else { n.fx = null; n.fy = null }
            }))

        nodeSel
            .on('click', (event, n) => {
                event.stopPropagation()
                select(n.isMe ? { type: 'all' } : { type: 'person', id: n.id })
            })
            .on('keydown', (event, n) => {
                if (event.key !== 'Enter' && event.key !== ' ') return
                event.preventDefault()
                select(n.isMe ? { type: 'all' } : { type: 'person', id: n.id })
            })

        // un clic dans le vide remet la vue d'ensemble
        svg.on('click', () => select({ type: 'all' }))

        // le graphe suit la taille de sa carte (pratique sur téléphone)
        new ResizeObserver(() => {
            const w = graphBox.clientWidth
            if (!w || w === width) return
            width = w
            height = heightFor(width)
            svg.attr('viewBox', `0 0 ${width} ${height}`)
            simulation.force('x').x(width / 2)
            simulation.force('y').y(height / 2)
            simulation.force('link').distance(linkDistance)
            pinMe()
            if (reduceMotion.matches) {
                for (let i = 0; i < 120; i++) simulation.tick()
                draw()
            } else {
                simulation.alpha(0.5).restart()
            }
        }).observe(graphBox)
    } else if (fallback) {
        fallback.hidden = false
    }

    // la surbrillance : ce qui concerne la sélection reste net, le reste passe en transparence
    const highlight = (keepNode, keepLink) => {
        if (!nodeSel) return
        nodeSel.classed('is-dimmed', n => keepNode && !keepNode(n))
        linkSel.classed('is-dimmed', l => keepLink && !keepLink(l))
    }

    let current = { type: 'all' }
    const sameState = (x, y) => x.type === y.type && x.id === y.id && x.index === y.index

    function select(state) {
        // recliquer sur la sélection en cours revient à la vue d'ensemble
        if (state.type !== 'all' && sameState(state, current)) state = { type: 'all' }
        current = state

        if (state.type === 'person') {
            const keep = new Set([state.id, ...neighbors.get(state.id)])
            highlight(n => keep.has(n.id), l => l.source.id === state.id || l.target.id === state.id)
            renderPerson(state.id)
        } else if (state.type === 'project') {
            const keep = new Set([ME, ...saeProjects[state.index].team])
            highlight(n => keep.has(n.id), l => l.projects.includes(state.index))
            renderProject(state.index)
        } else {
            highlight(null, null)
            renderOverview()
        }

        filterButtons.forEach(({ btn, state: s }) => btn.setAttribute('aria-pressed', String(sameState(s, current))))
        if (nodeSel) nodeSel.attr('aria-pressed', n => String(current.type === 'person' && current.id === n.id))
    }

    select({ type: 'all' })
})()
