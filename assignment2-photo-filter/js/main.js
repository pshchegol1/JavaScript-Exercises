window.addEventListener('load',function(e)
{
    const searchFilter = document.querySelector('.frm-control');
    const tagsArray = document.querySelectorAll('.thumb-display');
    const resetButton = document.querySelector('.reset');

    console.log(resetButton);


    searchFilter.addEventListener('input', onFilterImg)

    function onFilterImg(e)
    {
        const searchTerm = e.currentTarget.value.trim().toLowerCase();
        const reset = document.querySelector('.reset');
        if (searchTerm === "")
        {
            resetDisplayImg();
            reset.classList.add('hidden');
        }
        else
        {
            searchMatchingImg(searchTerm);
            reset.classList.remove('hidden');
        }
    }

    function resetDisplayImg()
    {
        tagsArray.forEach(function(img)
        {
            if(img.classList.contains('hidden'))
            {
                img.classList.remove('hidden');
            }
        })
    }


    function searchMatchingImg(searchTerm)
    {
        tagsArray.forEach(function(img)
        {
            const imgName = img.textContent.trim().toLocaleLowerCase();
            
            if(imgName.includes(searchTerm))
            {
                img.classList.add('hidden');
                
                if(img.classList.contains('hidden'))
                {
                    img.classList.remove('hidden');
                }
            }
            else
            {
                img.classList.add('hidden');
            }
        })
    }

    resetButton.addEventListener('click',function(e)
    {
        resetButton.classList.add('hidden');
        resetDisplayImg();
        e.currentTarget = searchFilter.value ="";
       

    })
})