const loadNews = () => {
    url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
        .then(res => res.json())
        .then(data => loadData(data.data.news_category))
}

const loadData = news => {
    // console.log(news);
    const allNewsCategories = document.getElementById('news-list');
    news.forEach(allNews => {
        // console.log(allNews);
        const li = document.createElement('li');
        li.innerHTML = `
                <li onclick="newsCard('${allNews.category_id}')">
                ${allNews.category_name}</li>
        `
        allNewsCategories.appendChild(li);

    });
}
const newsCard = (id) => {
    // console.log(id);

    const url = `https://openapi.programming-hero.com/api/news/category/${id}`
    // console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => loadCards(data.data))
}
const loadCards = (cardList) => {
    // console.log(cardList);
    const allNewsCards = document.getElementById('news-card');
    cardList.forEach(allCards => {

        console.log(allCards);
        allNewsCards.innerHTML = `
     <div class="card card-compact w-96 bg-base-100 shadow-xl">
         <figure><img src="${allCards.thumbnail_url}" alt="" /></figure>
         <div class="card-body">
         <h2 class="card-title">${allCards.title}</h2>
         <p>If a dog chews shoes whose shoes does he choose?</p>
         <div class="card-actions justify-end"></div>

         <div>
            <div>
                <img class="img" src="${allCards.author.img}"  alt="">

                <p>${allCards.author ? allCards.author.name : 'no name  found'} <br> ${allCards.author.published_date}</p>
                 <p></p>
                </div>

                <div class="display">
                <p><i class="fa-solid fa-eye"></i> ${allCards.total_view} </p>
                </div>
                </div>
      </div>
   </div>
        `
    });

}

loadNews();