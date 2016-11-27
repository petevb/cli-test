export class RepoModel {
    public id: string;
    public name: string;
    public full_name: string;
    public url?: string | undefined;
    public description?: string | undefined;
    public fork_count?: number | undefined;
    public stargazer_count?: number | undefined;
    public open_issue_count?: number | undefined;
    // TODO: I expect we'll need an Issues type 
    ////public issues: Issues; 
}