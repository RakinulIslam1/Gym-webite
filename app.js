const loadNews = () => {
    url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then(res => res.json())
        .then(data => loadData(data.data.news_category))
        .catch(error => console.log(error))

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
        .catch(error => console.log(error))
    
}

const loadCards = (cardList) =>{
    
    // console.log(cardList);
    const allNewsCards = document.getElementById('news-card');
    
    const noNews = document.getElementById('no-news-message')
    if (cardList.length === 0) {
        noNews.classList.remove('hidden');
    }
    else {
        noNews.classList.add('hidden');
    }

    
    
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
                        <p>${allCards.author.name ? allCards.author.name : 'No name given'} <br> ${allCards.author.published_date ? allCards.author.published_date : 'No publish date'}</p>
                        <p></p>
                        <div class="view">
                            <p><i class="fa-solid fa-eye"></i> ${allCards.total_view ? allCards.total_view : 'no views' } 
                            </p>                                     
                        </div>
                        <i class="fa-solid fa-arrow-right mt-5"></i>
                    </div>
                    <label onclick="openModal
                    ('${allCards.title}')" 
                    for="my-modal-3" class="btn modal-button text-white">See more detais</label>
                </div>              
            </div> 
        `  
        allNewsCards.appendChild(div);
        
    });
    
    // loader(true);
}
        const openModal =(title)=>{
        // console.log(title);
        
            const modalBody = document.getElementById('modal-body');
            const div = document.createElement('div');
            div.innerHTML = `
                <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div>
                     <h3 class="text-lg font-bold text-white">${title}</h3>
                     <p class="py-4">"Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2.
                     Tucker Carlson has rarely met a dictator's ass he didn't want to kiss, and Vladimir Putin is at the very top of that puckering up list. The Fox News host is something of a folk hero in Russia: Because of the pro-Putin propaganda he so often spews, the Kremlin has encouraged Russia's state TV to air as much of Tucker's face as possible — and they're certain to love his latest rant about how Putin is winning the war in Ukraine, which does not seem to be the case. But on Fox News, what Tucker says goes."</p>               
                     <h1></h1>                  
                    </div>
                </div>
            </div>
            `
            modalBody.appendChild(div);

    }

    // const loader = (isload) =>{
    //     const spinner = document.getElementById('spinner')
    //     if(isload === true){
    //         spinner.classList.remove('hidden');
    //     }
    //     else{
    //         spinner.classList.add('hidden')
    //     }
    // }


loadNews();