const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f6ebee82a0msh8f3f073cf6919aep19a727jsn791ff740db8b',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

let userCity = ' '

//api fetch
const api = async ()=>{  
   try{
    const fetchApi =  await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${userCity}`, options)
	const data = await fetchApi.json()
    console.log(data)
    dataFunc(data)
    console.log(data.location.name)
   }catch(err){
	console.error(err)
    }
}


const dataFunc = (dataset)=>{
    //colouring card
    colorCard(dataset)
    //header image
    const headerImg = document.getElementById('header-image')
    headerImg.classList.remove('header-image')
    headerImg.src = dataset.current.condition.icon
    headerImg.classList.add('header-image')
    userCity = dataset.location.name
    
    //header title
    const headerEl = document.getElementById('city-name')
    headerEl.innerHTML = dataset.location.name

    //condition title
    const conditionTitle = document.getElementById('title')
    conditionTitle.innerHTML = dataset.current.condition.text

    // time
    /* const timeSpan = document.getElementById('time')
    timeSpan.classList.remove('timeShow')
    const time = dataset.location.localtime
     const timeArr = time.split(' ')
    timeSpan.innerHTML = timeArr[1]
    timeSpan.classList.add('timeShow') */
    /* setInterval(()=>{
        fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${userCity}`, options)
        .then((value)=>value.json())
        .then((value)=>{
            const time = value.location.localtime
            const timeArr = time.split(' ')
            timeSpan.innerHTML = timeArr[1]
        },1000)
    }) */

    //update temp
    const listCollection = document.getElementsByTagName('li')
    listCollection[0].children[0].innerHTML = dataset.current.temp_c
    listCollection[1].children[0].innerHTML = dataset.current.feelslike_c
    listCollection[2].children[0].innerHTML = dataset.current.humidity
    

}

const overlay = document.getElementById('overlay')
overlay.classList.remove('card-img-overlay')
const imgOver = document.getElementsByClassName('card-img')

//color card
function colorCard(dataset){
    imgOver[0].src = ''
    imgOver[0].style.display = 'none'
    overlay.classList.remove('card-img-overlay')
    let condi = dataset.current.condition.text
    const cardColor = document.getElementById('colour-card')
    cardColor.classList.remove('bg-light','text-white','bg-secondary','text-white','bg-info','text-white','bg-warning','text-dark','text-secondary')
    if(condi.includes('cloud')){
        //overay 
        imgOver[0].src = 'https://i.gifer.com/vF.gif'
        imgOver[0].style.display = 'block'
        overlay.classList.add('card-img-overlay')
        //colour
        cardColor.classList.add('bg-light','text-dark')
    }if(condi.includes('Overcast')){
        //overlay
        imgOver[0].src = 'https://media.tenor.com/4BvWavRPqU8AAAAd/sky-clouds.gif'
        imgOver[0].style.display = 'block'
        overlay.classList.add('card-img-overlay')
        //colour
        cardColor.classList.add('text-white','bg-secondary')
    }if(condi.includes('rain')){
        //overlay
        imgOver[0].src = 'https://thumbs.gfycat.com/AdorableBrownEuropeanfiresalamander-size_restricted.gif'
        imgOver[0].style.display = 'block'
        overlay.classList.add('card-img-overlay')
        //colour
        cardColor.classList.add('text-white','bg-info')
    }if(condi.includes('Sun')){
        //overlay
        imgOver[0].src = 'https://64.media.tumblr.com/0107c41b38b5243a2edcbf763cc53117/tumblr_p6eny44Fxj1sdnqu4o1_500.gifv'
        imgOver[0].style.display = 'block'
        overlay.classList.add('card-img-overlay')

        cardColor.classList.add('text-dark','bg-warning')
        
    }if(condi.includes('snow')){
        //overlay
        imgOver[0].src = 'https://media.tenor.com/JqtKFAzQqoUAAAAM/shibe-snow.gif'
        imgOver[0].style.display = 'block'
        overlay.classList.add('card-img-overlay')

        //color
        
    }
    if(condi.includes('Fog')){
        imgOver[0].src = 'https://media.tenor.com/zRn-Yv1HGvcAAAAC/foggy-scooby.gif'
        imgOver[0].style.display = 'block'
        overlay.classList.add('card-img-overlay')
    }
}

//search button click event
const searchBtn = document.getElementById('search-btn')
searchBtn.addEventListener('click',inputVal)

//input by user 
function inputVal(){
    const input = document.getElementById('city-input')
    
    userCity = (input.value).replace(' ','%20')
    if(userCIty) {
    	input.addEventListener('keydown', function(event) {
  	if (event.keyCode === 13) {
		api()
	}
    }
    api()
   

}
