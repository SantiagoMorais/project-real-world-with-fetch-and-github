const user = {
    name: "",
    bio: "",
    avatarUrl: "",
    login: "",
    followers: "",
    following: "",
    repoForks: "",
    repoStars: "",
    repoWatchers: "",
    repoLanguage: "",
    repositories: [],
    events: [],
    setInfo(gitHubUserData){
        this.name = gitHubUserData.name;
        this.bio = gitHubUserData.bio;
        this.avatarUrl = gitHubUserData.avatar_url;
        this.login = gitHubUserData.login;
        this.followers = gitHubUserData.followers;
        this.following = gitHubUserData.following;
    },
    setRepositories(gitHubUserRepos){
        this.repositories = gitHubUserRepos;
        this.repoForks = gitHubUserRepos.forks;
        this.repoStars= gitHubUserRepos.stargazers_count;
        this.repoWatchers = gitHubUserRepos.watchers;
        this.repoLanguage = gitHubUserRepos.language
    },
    setEvents(gitHubUserEvents) {
        this.events = gitHubUserEvents;
    }
}

export { user }