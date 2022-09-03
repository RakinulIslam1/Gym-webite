const loadNews = () => {
    url =`https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then(res => res.json())
        .then(data => loadData(data.data.news_category))
}

const loadData = news =>{
    // console.log(news);
    const allNewsCategories = document.getElementById('news-list');
    news.forEach( allNews => {
        console.log(allNews);
        const li = document.createElement('li');
        li.innerHTML = `
                <li>${allNews.category_name}</li>
        `
        allNewsCategories.appendChild(li);

    });
}







loadNews();