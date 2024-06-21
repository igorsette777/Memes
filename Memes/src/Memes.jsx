const valores=fetch('https://api.imgflip.com/get_memes').then(res => res.json().then(dados=> mostraMemes(dados)))

const legn=fetch('https://api.quotable.io/random').then(res => res.json().then(dados=> mostraLegendaMemes(dados)))

function mostraMemes(dados){

    const posicao = Math.floor(Math.random()*100)

    const nomeMeme = document.querySelector('#nome');
    nomeMeme.textContent = dados.data.memes[posicao].name;

    const imgMeme = document.querySelector('#img');
    imgMeme.src = dados.data.memes[posicao].url;
}

function mostraLegendaMemes(dados){

    const nomeLegendMeme = document.querySelector('#leg');
    nomeLegendMeme.textContent = dados.content;

}


function Memes(){
    return(
        <>

            <div id="usuario">
           
                <h1 id="nome"></h1>
                <img id="img" src="" alt=""/>
                <figcaption id="leg"></figcaption>
           
            </div>  
       
       
        </>
    )
}
export default Memes


