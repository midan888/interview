
// 4 this check, context check, ask about apply and call

`<body>
    <div class="card">
        <div class="title">Terminator 2</div>
        <div class="subtitle">Judgement day</div>
        <div class="description">One of the best movies</div>
    </div>
</body>`

class MovieCard {
    constructor() {
        this.numbers = [0, 1, 2, 3, 4];
        this.titles = ['Titanic', 'Terminator', 'Iron man', 'Die Hard', 'Star wars'];
    }

    listenClick() {
        const el = document.querySelector('.title')
        for (const i of this.numbers) {
            el.addEventListener('click', function(event) {
                event.target.innerHTML = this.titles[i];
            });
        }
    }
}

const movieCard = new MovieCard();

movieCard.listenClick();


// localStorage, indexeddb, async other ways to store data