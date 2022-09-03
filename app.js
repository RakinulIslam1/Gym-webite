const loadNews = () => {
    url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then(res => res.json())
        .then(data => loadData(data.data.news_category))
}

const loadData = news =>{
    // console.log(news);
    const allNewsCategories = document.getElementById('news-list');
    news.forEach( allNews => {
        // console.log(allNews);
        const li = document.createElement('li');
        li.innerHTML = `
                <li onclick="newsCard('${allNews.category_id}')">${allNews.category_name}</li>
        `
        allNewsCategories.appendChild(li);

    });
    
}



const newsCard = (id) =>{
    // console.log(id);

    // const url = `https://openapi.programming-hero.com/api/news/category/01`

    // const url = `https://openapi.programming-hero.com/api/news/${id}`

const url = `https://openapi.programming-hero.com/api/news/category/${id}`
// console.log(url);

    fetch(url)
    .then(res => res.json())
        .then(data => loadCards(data.data))
  
    
}
const loadCards = (cardList) =>{
    // console.log(cardList);
    const allNewsCards = document.getElementById('news-card');
    cardList.forEach( allCards => {
        
        console.log(allCards);
        allNewsCards.innerHTML = `
        <div class="card lg:card-side bg-base-100 shadow-xl w-2/3 m-auto">
                <figure><img src="${allCards.thumbnail_url}" alt="Album"></figure>
                <div class="card-body">
                    <h2 class="card-title text-2xl">${allCards.title}</h2>
                    <p>${allCards.details.slice(0, 600)}...</p>
                    
                </div>
            </div>
        
        `
        
    });


    
}





loadNews();