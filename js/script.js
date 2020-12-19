const panels = document.querySelectorAll('.panel');
console.log(panels);

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses(panel.id);
        panel.classList.toggle('active');
    })
})

function removeActiveClasses(panelId) {
    panels.forEach(panel => {
        if (panel.id !== panelId) {
            panel.classList.remove('active');
        }
    })

}