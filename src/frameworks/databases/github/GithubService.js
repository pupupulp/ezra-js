const { IDatabaseService } = demand('interfaces');
const { ServiceInitException } = demand('exceptions');
const GithubUserRepository = demand('frameworks/databases/github/GithubUserRepository');
const User = demand('entities/User');

module.exports = class GithubService extends IDatabaseService {

    constructor() {
        super();
        this.userRepository = new GithubUserRepository();
    }

    initialize(dependencies) {
        this.dependencies = dependencies;
        
        return new Promise((resolve, reject) => {
            try {
                this.seed();
                resolve();
            } catch (err) {
                reject(new ServiceInitException());
            }
        });
    }

    async seed() {
        const adapter = this.dependencies.ApiAdapterService.initialize('https://api.github.com');

        const githubUsers = await adapter.get('/users')
			.then(resp => {
                return resp.data;
            });
            
        await githubUsers.map(user => {
            this.userRepository.add(new User({
                id: user.id,
                username: user.login,
                url: user.html_url,
                details: {
                    ...user
                }
            }));
        });
    }
};