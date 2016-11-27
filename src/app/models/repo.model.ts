/**
 * Models a github reposotitory.
 * 
 * @export
 * @class RepoModel
 */
export class RepoModel {
    public id: string;
    public name: string;
    public fullName: string;
    public url?: string | undefined;
    public htmlUrl?: string | undefined;
    public apiUrl?: string | undefined;
    public issuesApiUrl?: string | undefined;
    public description?: string | undefined;
    public forkCount?: number | undefined;
    public stargazerCount?: number | undefined;
    public openIssueCount?: number | undefined;

    /**
     * Creates an instance of RepoModel.
     * 
     * @param {string} id
     * @param {string} name
     * @param {string} fullName
     * @param {(string | undefined)} [url]
     * @param {(string | undefined)} [htmlUrl]
     * @param {(string | undefined)} [apiUrl]
     * @param {(string | undefined)} [issuesApiUrl]
     * @param {(string | undefined)} [description]
     * @param {(number | undefined)} [forkCount]
     * @param {(number | undefined)} [stargazerCount]
     * @param {(number | undefined)} [openIssueCount]
     * 
     * @memberOf RepoModel
     */
    constructor(data: { 
        id: string;
        name: string;
        fullName: string;
        url?: string | undefined;
        htmlUrl?: string | undefined;
        apiUrl?: string | undefined;
        issuesApiUrl?: string | undefined;
        description?: string | undefined;
        forkCount?: number | undefined;
        stargazerCount?: number | undefined;
        openIssueCount?: number | undefined;
    }) { } 
}