let input = document.querySelector('.entered_list');
let addBtn = document.querySelector('.add_list');
let tasks = document.querySelector('.tasks');

input.addEventListener('keyup',( )=>{
    if(input.value.trim() != 0){
        addBtn.classList.add('active')
    }else{
        addBtn.classList.remove('active')
    }
});


addBtn.addEventListener('click', ()=>{
    if(input.value.trim() != 0){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p> ${input.value} </p>
                <div class="item_btn">
                    <i class='far fa-edit' style='font-size:22px;'></i>
                    <i class='far fa-trash-alt' style='font-size:22px;'></i>
                </div>
        `
        tasks.appendChild(newItem);
        input.value = "";
    }else{
        alert('Please enter a task')
    }

});

tasks.addEventListener('click', (e)=>{
    if(e.target.classList.contains('fa-trash-alt')){
        e.target.parentElement.parentElement.remove();
    }
})


tasks.addEventListener('click', (e)=>{
    if(e.target.classList.contains('fa-edit'))
    {
        e.target.parentElement.parentElement.classList.toggle('completed')

    }
})