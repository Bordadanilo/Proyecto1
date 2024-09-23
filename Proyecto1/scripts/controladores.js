function handler() {
    const titleInput = document.getElementById('titulo');
    const descriptionInput = document.getElementById('descripcion');
    const imgUrlInput = document.getElementById('imagen');

    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    const imgUrl = imgUrlInput.value.trim();

    if(!title || !description || !imgUrl){
        alert('Todos los campos son obligatorios');
        return;
    }

    
    const id = Date.now(); 
    repo.createActivity(id, title, description, imgUrl);
    renderAllActivities();

    titleInput.value = '';
    descriptionInput.value = '';
    imgUrlInput.value = '';
}

function createActivityCard (activity) {
    const {id, title, description, imgUrl} = activity;

    const titleElement = document.createElement('h3');
    const descriptionElement = document.createElement('p')
    const imageElement = document.createElement('img');
    const deleteButton = document.createElement('button')
    const cardDiv = document.createElement('div')

    titleElement.innerHTML = title;
    descriptionElement.innerHTML = description
    imageElement.src = imgUrl;
    imageElement.alt = title;
    deleteButton.innerHTML = 'Eliminar';

    titleElement.classList.add('activity-title');
    descriptionElement.classList.add('activity-description');
    imageElement.classList.add('activity-image');
    deleteButton.classList.add('delete-button');
    cardDiv.classList.add('activity-card');

    const deleteActivity = () => {
        repo.deleteActivity(id);
        renderAllActivities ();
    }
    deleteButton.addEventListener('click', deleteActivity);

    cardDiv.addEventListener('click', (event) => {
        if(event.target.classList.contains('delete-button')) return;
        deleteActivity ();
    });

    cardDiv.appendChild(titleElement);
    cardDiv.appendChild(descriptionElement);
    cardDiv.appendChild(imageElement);
    cardDiv.appendChild(deleteButton);

    return cardDiv;
}

function renderAllActivities() {
    const actividadesList = document.getElementById('actividades-list');
    actividadesList.innerHTML = '';

    const activities = repo.getAllActivities();
    const activityCards = activities.map(createActivityCard);
    activityCards.forEach(crad => actividadesList.appendChild(crad));
}