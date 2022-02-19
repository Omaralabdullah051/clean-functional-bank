// const players = document.getElementsByClassName('player');
// for (const player of players) {
//     console.log(player);
//     player.style.border = '1px solid red';
//     player.style.borderRadius = '10px';
//     player.style.margin = '10px';
//     player.style.padding = '10px';
// }

document.getElementById('add-player').addEventListener('click', function () {
    const container = document.getElementById('players');
    const div = document.createElement('div');
    div.classList.add('player');
    div.innerHTML = ` <h4 class="player-name">player-4</h4>
    <p>Quas iste distinctio quia illum aut, voluptatum sed eius veniam hic iusto eligendi corporis nulla
        autem quaerat consectetur doloremque quis, facilis ducimus voluptate quidem natus voluptatibus
        doloribus? Obcaecati, magni sed.</p>`
    container.appendChild(div);
})

document.getElementById('players').addEventListener('click', function (event) {
    event.target.parentNode.style.border = '2px solid red';
    event.target.parentNode.style.borderRadius = '10px';
    event.target.parentNode.style.margin = '10px';
    event.target.parentNode.style.padding = '10px';
    event.target.parentNode.style.backgroundColor = 'lightblue';
})