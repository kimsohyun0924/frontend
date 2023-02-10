import index from "./index";

const api = {
  async getApiList() {
    let endpoint = `/admin/service`;
    return await index.axiosCall(endpoint, null, 'get')
      .then((res: any) => {
        return res;
      })
      .catch((err: any) => {
        return err;
      });
    }
}
export default api;