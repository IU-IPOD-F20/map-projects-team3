import { env } from "process";

enum RequestMethod {
    GET = 'GET',
    POST = 'POST'
}

enum RecordType {
    LIABILITY = 'liability',
    ASSET = 'asset'
}

interface Record {
    datetime: Date;
    name: string;
    type: RecordType;
    amount: number;
}

interface TotalInfo {
    asset: number;
    liability: number;
}

interface RequestOptions {
    method?: RequestMethod;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body?: any;
}

export class Api { 
    baseUrl: string = env.BASE_URL || "http://localhost:8000";
    loggedInUser = {};

    fetchApi = async <T>(
        url: string,
        options: RequestOptions
    ): Promise<T> => {
        const {method, body} = options;
        console.log('Settin body', body);
        const result = await fetch(`${this.baseUrl}${url}`, {
            body: JSON.stringify(body),
            method
        });
        if (result.ok) {
            return method === RequestMethod.GET ? await result.json() as T : {} as T;
        }
        throw new Error(await result.text());
    };

    public login = (username: string, password: string): Promise<void> =>
        this.fetchApi('/login/', {
            method: RequestMethod.POST,
            body: {
                username,
                password
            }
        });

    public logout = (): Promise<void> =>
        this.fetchApi('/logout/', {
            method: RequestMethod.GET
        });

    public getTotal = (): Promise<TotalInfo> =>
        this.fetchApi('/api-total/', {
            method: RequestMethod.GET
        });

    public getRecords = (): Promise<Array<Record>>  =>
        this.fetchApi('/api-records/', {
            method: RequestMethod.GET
        })

    public addRecord = (record: Record): Promise<void> => 
        this.fetchApi('/api-records/', {
            method: RequestMethod.POST,
            body: record
        })
}
