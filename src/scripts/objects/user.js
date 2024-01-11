const user = {
    name: "",
    bio: "",
    avatarUrl: "",
    login: "",
    followers: "",
    following: "",
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
    },
    setEvents(gitHubUserEvents) {
        this.events = gitHubUserEvents;
    }
}

export { user }