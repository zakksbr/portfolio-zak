// la petite page de chargement avec le logo : on ne la montre qu'une fois par visite
(function () {
    var root = document.documentElement
    var seen = false
    try {
        seen = sessionStorage.getItem('zs-loader') === '1'
        sessionStorage.setItem('zs-loader', '1')
    } catch (e) {}

    // déjà vue pendant cette visite, on passe direct au site
    if (seen) {
        root.classList.add('no-loader')
        return
    }

    root.classList.add('is-loading')
    var start = Date.now()
    var done = false

    function hide() {
        if (done) return
        done = true
        // on la laisse au moins le temps de voir l'animation du logo
        var wait = Math.max(0, 1100 - (Date.now() - start))
        setTimeout(function () {
            root.classList.remove('is-loading')
            root.classList.add('loader-done')
        }, wait)
    }

    if (document.readyState === 'complete') hide()
    else window.addEventListener('load', hide)
    // sécurité : si une ressource traîne, on n'attend pas plus de 2,5 s
    setTimeout(hide, 2500)
})()
