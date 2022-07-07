import axios from 'axios';

async function userData(user:string) {
    const GITHUB_URL = `https://api.github.com/users/${user}/repos`;

    const { data } = await axios.get(GITHUB_URL);
    if(data.message==='Not Found') {
        throw { type: 'Not Found', message: 'User not found'}
    }
    return data;
};

const githubServices = {
    userData
}

export default githubServices;