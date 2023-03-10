import index from "./index";

const api = {

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

  async getDbaaSDetailInfo(endpoint: any, token: any) {
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

    async getBackup(endpoint: any, token: any) {
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

      async getParameterGroupData(endpoint: any, token: any) {
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
}
export default api;