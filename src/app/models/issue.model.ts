/**
 * Models a github issue.
 * 
 * @export
 * @class IssueModel
 */
export class IssueModel {
    public title: string;
    public state: string;
    public number: number;
    public createdAt: Date;
    public user: { login: string, avatarUrl: string };
    public assignee: { login: string, avatarUrl: string };
    public labels: { name: string, color: string }[];
    public url: string;

    /**
     * Creates an instance of IssueModel.
     * Maps the github API's snake_case props to JS' camelCase.
     */
    constructor(data: {
        title: string;
        state: string;
        number: number;
        created_at: Date;
        user: { login: string, avatar_url: string };
        assignee: { login: string, avatar_url: string };
        openIssuesCount?: number | undefined;
        labels: [{ name: string, color: string }];
        html_url: string;
    }) {
        this.title = data.title;
        this.state = data.state;
        this.number = data.number;
        this.createdAt = data.created_at;
        this.user = { login: data.user.login, avatarUrl: data.user.avatar_url };
        if (data.assignee) {
            this.assignee = { login: data.assignee.login, avatarUrl: data.assignee.avatar_url };
        }
        this.labels = data.labels.map(item => {
            let label: { name: string, color: string } = {
                name: item.name,
                color: `#${item.color}`
            };
            return label;
        });
        this.url = data.html_url;
    }
}