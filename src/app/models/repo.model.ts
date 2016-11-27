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
    // TODO: I expect we'll need an Issues type 
    ////public issues: Issues; 
}