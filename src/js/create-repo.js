import { getFormattedTime } from './time-formatter.js';

export function createRepositoryBody(repo) {
    const repoBody = document.createElement('div');
    repoBody.className = 'repo-body';

    const repoName = document.createElement('div')
    repoName.className = 'repo-body__name';
    repoName.innerHTML = `
        <a class="repo-link" href="${repo.html_url}" target="_blank">
            ${repo.full_name}
        </a>
    `;

    const repoDescription = document.createElement('div');
    repoDescription.className = 'repo-body__description';
    repoDescription.innerHTML = `
        ${repo.description ? repo.description : '<em>No description</em>'}
    `;

    const repoFooter = document.createElement('div');
    repoFooter.className = 'repo-body__footer footer';
    repoFooter.innerHTML = `
        <div class="footer__stars">
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M17.2 20.7501C17.0776 20.7499 16.9573 20.7189 
                    16.85 20.6601L12 18.1101L7.14999 20.6601C7.02675 
                    20.7262 6.88746 20.7566 6.74786 20.7478C6.60825 
                    20.7389 6.47391 20.6912 6.35999 20.6101C6.24625 
                    20.5267 6.15796 20.4133 6.10497 20.2826C6.05199 
                    20.1519 6.03642 20.0091 6.05999 19.8701L6.99999 
                    14.4701L3.05999 10.6501C2.96124 10.5512 2.89207 
                    10.4268 2.86027 10.2907C2.82846 10.1547 2.83529 
                    10.0124 2.87999 9.88005C2.92186 9.74719 3.00038 
                    9.62884 3.10652 9.53862C3.21266 9.4484 3.34211 
                    9.38997 3.47999 9.37005L8.89999 8.58005L11.33 
                    3.67005C11.3991 3.55403 11.4973 3.45795 11.6147 
                    3.39123C11.7322 3.32451 11.8649 3.28943 12 
                    3.28943C12.1351 3.28943 12.2678 3.32451 12.3853 
                    3.39123C12.5027 3.45795 12.6008 3.55403 12.67 
                    3.67005L15.1 8.58005L20.52 9.37005C20.6579 9.38997 
                    20.7873 9.4484 20.8935 9.53862C20.9996 9.62884 
                    21.0781 9.74719 21.12 9.88005C21.1647 10.0124 
                    21.1715 10.1547 21.1397 10.2907C21.1079 10.4268 
                    21.0387 10.5512 20.94 10.6501L17 14.4701L17.93 
                    19.8701C17.9536 20.0091 17.938 20.1519 17.885 
                    20.2826C17.832 20.4133 17.7437 20.5267 17.63 
                    20.6101C17.5034 20.6976 17.3539 20.7463 17.2 20.7501ZM12 
                    16.5201C12.121 16.5215 12.2403 16.5488 12.35 16.6001L16.2 
                    18.6001L15.47 14.3101C15.4502 14.1897 15.4589 14.0664 
                    15.4953 13.9501C15.5318 13.8337 15.595 13.7275 15.68 
                    13.6401L18.8 10.6401L14.49 10.0001C14.3708 9.98109 14.2578 
                    9.93401 14.1605 9.86271C14.0631 9.79141 13.9841 9.69795 
                    13.93 9.59005L12 5.69005L10.07 9.60005C10.0159 9.70795 
                    9.9369 9.80141 9.83952 9.87271C9.74214 9.94401 9.62918 
                    9.99109 9.50999 10.0101L5.19999 10.6401L8.31999 
                    13.6401C8.40493 13.7275 8.46817 13.8337 8.50464 
                    13.9501C8.54111 14.0664 8.54979 14.1897 8.52999 
                    14.3101L7.79999 18.6301L11.65 16.6301C11.7573 16.5683 
                    11.8767 16.5308 12 16.5201Z" 
                    fill="#000000"
                />
            </svg>
            ${repo.stargazers_count}
        </div>
        <div class="footer__created">Создан ${getFormattedTime(repo.created_at)}</div>
        <div class="footer__pushed">Обновлен ${getFormattedTime(repo.pushed_at)}</div>
    `;

    repoBody.append(repoName, repoDescription, repoFooter);
    return repoBody;
}