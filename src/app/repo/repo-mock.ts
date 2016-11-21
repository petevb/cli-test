import { Repo } from './repo';

class MockData {
    static readonly REPOS: Repo[] = [
        { name: "test1", url: "http://test.github.io/", description: "lorem ipsum dolor sit amet", forkCount: 27 },
        { name: "test2", url: "http://test.github.io/", description: "lorem ipsum dolor sit amet", forkCount: 27 },
        { name: "test3", url: "http://test.github.io/", description: "lorem ipsum dolor sit amet", forkCount: 27 },
        { name: "test4", url: "http://test.github.io/", description: "lorem ipsum dolor sit amet", forkCount: 27 },
    ];

    public getData(): Promise<Repo[]> {
        return new Promise<Repo[]>(resolve => setTimeout(resolve, 2000)).then(() => MockData.REPOS);
    }
}

export const ReposMock = new MockData();
//const RepoMock = mock.getData();
