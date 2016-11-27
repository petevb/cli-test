import { RepoModel } from '../models/repo.model';

class MockData {
    static readonly REPOS: RepoModel[] = [
        new RepoModel({
            id: "1",
            name: "test1",
            owner: { login: "bob" },
            url: "http://test.github.io/",
            description: "lorem ipsum dolor sit amet",
            full_name: "Test1/Repo1"
        }), 
        new RepoModel({
            id: "2",
            name: "test2",
            owner: { login: "bob" },
            url: "http://test.github.io/",
            description: "lorem ipsum dolor sit amet",
            full_name: "Test1/Repo2"
        }),
        new RepoModel({
            id: "3",
            name: "test3",
            owner: { login: "bob" },
            url: "http://test.github.io/",
            description: "lorem ipsum dolor sit amet",
            full_name: "Test1/Repo3"
        }),
        new RepoModel({
            id: "4",
            name: "test4",
            owner: { login: "bob" },
            url: "http://test.github.io/",
            description: "lorem ipsum dolor sit amet",
            full_name: "Test1/Repo4"
        })
    ];

    public getData(): Promise<RepoModel[]> {
        return new Promise<RepoModel[]>(resolve => setTimeout(resolve, 200)).then(() => MockData.REPOS);
    }
}

export const ReposMock = new MockData();
