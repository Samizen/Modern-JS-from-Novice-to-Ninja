// Reference to the whole form:
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    const html =`
    <li class="list-group-item d-flex justify-content-between aligh-items-center text-light">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>`
    // Now we nee to add this template into the ul, which we will reference above
    list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const userInputTodo = addForm.add.value.trim(); //.add is the name of the form in html and .value is its value
    if(userInputTodo.length){
        generateTemplate(userInputTodo);
        addForm.reset();
    }    
});

// We now use event delegation to delete items in to=do when the trashcan icon is clicked.
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

const filterTodos = searchTerm => {
    
    Array.from(list.children)
    .filter((search) => !search.textContent.toLowerCase().includes(searchTerm)).forEach((search) => search.classList.add('filtered'));

    Array.from(list.children)
    .filter((search) => search.textContent.toLowerCase().includes(searchTerm)).forEach((search) => search.classList.remove('filtered'));

    // Now the filtered class rule is added to style.css
}

// Search to-do
search.addEventListener('keyup', () =>{
    const searchTerm = search.value.trim().toLowerCase();
    filterTodos(searchTerm);
});