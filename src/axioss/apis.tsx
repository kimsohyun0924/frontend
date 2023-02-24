import index from "./index";

const api = {
  // async getApiList() {
  //   let endpoint = `/admin/service`;
  //   return await index.axiosCall(endpoint, null, 'get')
  //     .then((res: any) => {
  //       return res;
  //     })
  //     .catch((err: any) => {
  //       return err;
  //     });
  //   },

  async getDbaaSData(endpoint: any, token: any) {
    return await index.axiosCall(endpoint, { headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": token
    }}, null, 'get')
      .then((res: any) => {
        return res;
      })
      .catch((err: any) => {
        return err;
      });
    },

    //   getDbaaSData(url: any, token: any) {
    //     return createAxios({
    //       url: url,
    //       headers: {
    //         "Content-Type": "application/json",
    //         "X-Auth-Token": token
    //       }
    //     });
    // }
}
export default api;