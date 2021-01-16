window.onload = () => {
    let a = fetch(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=NXDnlLc3qTYNcQ2irMu5CzE1UOUqDDH4`)
    .then((a)=>{
        return a.json()
    }).then((b)=>{
        let data = b.results
        //console.log(data)
        document.getElementById('cardtitle').innerHTML = data[0].title
        document.getElementById('cardtext1').innerHTML = data[0].abstract
        document.getElementById('updated').innerHTML = 'Updated : '+data[0].updated_date
        document.getElementById('image').src = data[0].multimedia[0].url
        var element = document.getElementById('inner')
        for(var i=0;i<10;i++)
        {
            var cor = card('div','carousel-item')
            var cards  = card("div",'bg-dark text-white')
            var img = card('img','card-img d-block w-100')
            img.setAttribute('src',data[i].multimedia[0].url)
            var overlay = card("div",'card-img-overlay')
            var h5 = card('h5','card-title')
            h5.innerHTML = data[i].title
            var p1 = card('p','card-text')
            p1.innerHTML = data[i].abstract
            var p2 = card('p','card-text text-muted')
            p2.innerHTML = '<i>'+data[i].updated_date+'</i>'
            overlay.append(h5,p1,p2)
            cards.append(img,overlay)
            cor.append(cards)
            element.append(cor)
        }
        function card(tg,cls){
            var val = document.createElement(tg)
            val.setAttribute('class',cls)
            return val
        }
    })
}