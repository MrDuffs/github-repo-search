import { createRepositoryBody } from './create-repo.js';
import { removeError, validateInput } from './validation.js';

const githubRepoURL = 'https://api.github.com/search/repositories';

const searchForm = document.querySelector('.search-form');
const searchInput = searchForm['search-input'];
const reposContent = document.querySelector('.content');
const emptyList = document.querySelector('.content__empty-list');

const repoNotFound = document.createElement('div');
repoNotFound.className = 'content__no-repos';
repoNotFound.innerHTML = 'Ничего не найдено';

const sendButton = document.querySelector('.button_search');

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
        sendButton.disabled = true;
        const searchValue = searchInput.value;
        if (validateInput(searchInput, searchValue)) {
            const response = await fetch(`
               ${githubRepoURL}?q=${searchValue}&per_page=10
            `);

            sendButton.disabled = false;
            const data = await response.json();

            deleteRepositoryContent();
            addRepository(data);
        }
    } catch (error) {
        sendButton.disabled = false;
        console.log(error.response);
    }
});

searchInput.addEventListener('input', () => {
    removeError(searchInput);
});

function addRepository(reposData) {
    if (reposData.items.length) {
        emptyList.remove();
        repoNotFound.remove();
        for (const repo of reposData.items) {
            reposContent.append(createRepositoryBody(repo));
        }
    } else {
        emptyList.remove();
        reposContent.append(repoNotFound);
    }
}

function deleteRepositoryContent() {
    const allPrevRepos = document.querySelectorAll('.repo-body');
    if (allPrevRepos) {
        for (const repo of allPrevRepos) {
            repo.remove();
        }
    }
}
