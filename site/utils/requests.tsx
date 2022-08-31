
import client from './client'


const getData = (path: string, headers: any) => {
    const status = { no_server: false, no_content: false };
    if (headers) {
        return client
            .get(path, headers)
            .then((res: any) => {
                if (res.data && res.data.count === 0) {
                    status.no_content = true
                }
                return ({ status, data: res.data });
            })
            .catch((err: any) => {
                status.no_server = true;
                return ({ status, data: err });
            });
    }
    return client
        .get(path)
        .then((res: any) => {
            if (res.data && res.data.count === 0) {
                status.no_content = true
            }
            return ({ status, data: res.data });
        })
        .catch((err) => {
            status.no_server = true;
            return ({ status, data: err });
        });
}

export default getData