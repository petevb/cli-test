export class Repo {
    public name: string;
    public url?: string | undefined;
    public description?: string | undefined;
    public forkCount?: number | undefined;
    public stargazerCount?: number | undefined;
    public openIssueCount?: number | undefined;
    // TODO: I expect we'll need an Issues type 
    ////public issues: Issues; 
}