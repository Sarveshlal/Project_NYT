window.onload = () => {
    let a = fetch(`https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=NXDnlLc3qTYNcQ2irMu5CzE1UOUqDDH4`)
        .then((a) => {
            return a.json()
        }).then((b) => {
            let data = b.results
            console.log(b.num_results)
            var heads = document.getElementById('heads')
            var row1 = card('div', 'row')
            for (var j = 0; j < 2; j++) {
                var cols = card('div', 'col-6')
                if(j==0){
                    var k = 0
                    v = b.num_results/2
                }
                else{
                    var k=10
                    v = b.num_results
                }
                for (i = k; i < v; i++) {
                    var cards = card('div', 'card mb-3')
                    cards.setAttribute('style', 'max-width: 540px;')
                    cards.setAttribute('id','card')
                    var row = card('div', "row no-gutters")
                    var col12 = card('div', 'col-md-12')
                    var cardbody = card('div', 'card-body')
                    var cardtitle = card('h5', 'card-title')
                    cardtitle.innerHTML = data[i].title
                    var p1 = card('p', 'card-text')
                    p1.innerHTML = data[i].abstract
                    var p2 = card('p', 'card-text')
                    p2.innerHTML = 'Section : ' + data[i].section + ' <i>Updated : ' + data[i].updated + '</i>'
                    var p3 = card('p','card-text')
                    p3.innerHTML = 'visit : '+'<a href='+data[i].url+' >'+data[i].url+'</a>'
                    cardbody.append(cardtitle, p1, p2,p3)
                    col12.append(cardbody);
                    row.append(col12)
                    cards.append(row)
                    cols.append(cards)
                    row1.append(cols)
                }
                heads.append(row1)
            }
            function card(tg, cls) {
                var val = document.createElement(tg)
                val.setAttribute('class', cls)
                return val
            }
        })
}