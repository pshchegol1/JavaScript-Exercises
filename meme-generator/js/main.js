window.addEventListener('load', function(e)
{
    /* string.replace(/-/g, " "); */
    const selectMeme = document.querySelector('#meme-image');
    const displayMeme = document.querySelector('.meme-display img');
    const error = document.querySelector('.error');
    const formSubmit = document.querySelector('.meme-form');
    const inputTop = document.querySelector('#meme-top-text');
    const inputBottom = document.querySelector('#meme-bottom-text');

    /* =========================p tag====================================*/
    const pToptext = document.querySelector('.top-text');
    const pBottomtext = document.querySelector('.bottom-text');

    /* ================================================================= */

    console.log(pToptext,pBottomtext,displayMeme);

    selectMeme.addEventListener('change', function(e)
    {
        e.currentTarget.value;

        const memePath = 'img/' + e.currentTarget.value + '.png';

        displayMeme.src = memePath;
    })

    formSubmit.addEventListener('submit', function(e)
    {
        let validateDataTop = inputTop.value;
        let validateDataBottom = inputBottom.value;
        let validateSelectData = selectMeme.value;
        
        let top = inputTop.value; 
        let bottom = inputBottom.value; 

        if(validateDataTop !== "" && validateDataBottom !=="" && validateSelectData !=="")
        {
            console.log('Meme Generated');
           
            
             displayMeme.value;
             pToptext.textContent = top;
             pBottomtext.textContent = bottom;
             
             
        }
        else
        {
            console.log('Meme Error');
            error.classList.remove('hide');
        }


        e.preventDefault();
    });

    formSubmit.addEventListener('reset', function(e)
    {
        pToptext.textContent = "";
        pBottomtext.textContent = "";
        let resetImg = "https://via.placeholder.com/550x300?text=Choose+an+image+from+the+dropdown";
        displayMeme.src =  resetImg;
       
    })



    inputTop.addEventListener('focus', function(e)
    {
        console.log(e.target.value);
        error.classList.add('hide');
    })

    inputBottom.addEventListener('focus', function(e)
    {
        console.log(e.target.value);
        error.classList.add('hide');
    })

    selectMeme.addEventListener('focus', function(e)
    {
        console.log(e.target.value);
        error.classList.add('hide');
    })

});