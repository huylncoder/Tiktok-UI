// mỗi file sẽ chứa phần gọi API riêng biệt cho từng cái services(chức năng)
import * as httpRequest from '~/utils/httpRequest';

// API search 
export const search = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
