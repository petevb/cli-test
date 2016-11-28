/**
 * Models a github reposotitory.
 * 
 * @export
 * @class RepoModel
 */
export class RepoModel {
    public id: string;
    public name: string;
    public owner: { login: string, avatarUrl: string };
    public fullName: string;
    public url?: string | undefined;
    public htmlUrl?: string | undefined;
    public apiUrl?: string | undefined;
    public issuesUrl?: string | undefined;
    public description?: string | undefined;
    public forksCount?: number | undefined;
    public stargazersCount?: number | undefined;
    public openIssuesCount?: number | undefined;

    /**
     * Creates an instance of RepoModel.
     * Maps the github API's snake_case props to JS' camelCase.
     * 
     * @param {({ 
     *         id: string;
     *         name: string;
     *         full_name: string;
     *         owner: string;
     *         url?: string | undefined;
     *         html_url?: string | undefined;
     *         api_url?: string | undefined;
     *         issues_api_url?: string | undefined;
     *         description?: string | undefined;
     *         fork_count?: number | undefined;
     *         stargazer_count?: number | undefined;
     *         open_issue_count?: number | undefined;
     *     })} data
     * 
     * @memberOf RepoModel
     */
    constructor(data: { 
        id: string;
        name: string;
        full_name: string;
        owner: { login: string, avatar_url?: string },
        url?: string | undefined;
        html_url?: string | undefined;
        api_url?: string | undefined;
        issues_url?: string | undefined;
        description?: string | undefined;
        forks_count?: number | undefined;
        stargazers_count?: number | undefined;
        open_issues_count?: number | undefined;
    }) { 
        this.id = data.id;
        this.name = data.name;
        this.fullName = data.full_name;
        this.owner = { login: data.owner.login, avatarUrl: data.owner.avatar_url };
        this.apiUrl = data.url;
        this.htmlUrl = data.html_url;
        // remove the suffix so that url is navigable.
        this.issuesUrl = (data.issues_url || '').replace('{/number}', '');
        this.description = data.description;
        this.forksCount = data.forks_count;
        this.stargazersCount = data.stargazers_count;
        this.openIssuesCount = data.open_issues_count;
    } 
}