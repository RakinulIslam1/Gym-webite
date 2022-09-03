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
                <li onclick="newsCard('${allNews.category_id}')">
                ${allNews.category_name}</li>
        `
        allNewsCategories.appendChild(li);

    });    
}
const newsCard = (id) =>{
    // console.log(id);

  const url = `https://openapi.programming-hero.com/api/news/category/${id}`
// console.log(url);

    fetch(url)
    .then(res => res.json())
        .then(data => loadCards(data.data))
}
const loadCards = (cardList) =>{
    // console.log(cardList);
    const allNewsCards = document.getElementById('news-card');
    allNewsCards.textContent = '';
    cardList.forEach( allCards => {
        const div =document.createElement('div');
        console.log(allCards);
        div.innerHTML = `
        <div class="card lg:card-side bg-base-100 shadow-xl w-2/3 m-auto mb-7">
                <figure><img src="${allCards.thumbnail_url}" alt="Album"></figure>
                <div class="card-body text-white">
                    <h2 class="card-title text-2xl">${allCards.title}</h2>
                    <p>${allCards.details.slice(0, 200)}...see more</p>            
                    <div class="display">             
                        <img class="img" src="${allCards.author.img}" alt="">
                        <p>${allCards.author.name ? allCards.author.name : 'no name found'} <br> ${allCards.author.published_date ? allCards.author.published_date : 'no publish date found'}</p>
                        <p></p>
                        <div class="view">
                            <p><i class="fa-solid fa-eye"></i> ${allCards.total_view ? allCards.total_view : 'no views' } 
                            </p>                                     
                        </div>
                        <i class="fa-solid fa-arrow-right mt-5"></i>
                    </div>
                    <label onclick="openModal()" for="my-modal-3" class="btn modal-button text-white">Show detais</label>
                </div>
                
            </div> 
        `  
        allNewsCards.appendChild(div);
    });
}

    const openModal = ()=>{
        console.log('done');
        
        
    }



loadNews();