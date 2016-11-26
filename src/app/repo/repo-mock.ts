import { Repo } from './repo';

class MockData {
    static readonly REPOS: Repo[] = [
        {
            id: "1",
            name: "test1",
            url: "http://test.github.io/",
            description: "lorem ipsum dolor sit amet",
            fullName: "Test1/Repo1"
        }, {
            id: "2",
            name: "test2",
            url: "http://test.github.io/",
            description: "lorem ipsum dolor sit amet",
            fullName: "Test1/Repo2"
        }, {
            id: "3",
            name: "test3",
            url: "http://test.github.io/",
            description: "lorem ipsum dolor sit amet",
            fullName: "Test1/Repo3"
        }, {
            id: "4",
            name: "test4",
            url: "http://test.github.io/",
            description: "lorem ipsum dolor sit amet",
            fullName: "Test1/Repo4"
        }
    ];

    public getData(): Promise<Repo[]> {
        return new Promise<Repo[]>(resolve => setTimeout(resolve, 2000)).then(() => MockData.REPOS);
    }
}

export const ReposMock = new MockData();
