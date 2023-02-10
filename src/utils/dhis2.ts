import axios from "axios";

const getData = (orgUnit: String) => {
  const url = `${process.env.DHIS2_ANALYTICS_API_URL}?dimension=dx:SyQlNwchFeS&dimension=pe:202302;202303;202304;202305;202306;202307;202308;202309;202310;202311;202312;&dimension=ou:${orgUnit}&dimension=co:u1uT2mTdt6Q`;
  const token = `${process.env.DHIS2_USERNAME}:${process.env.DHIS2_PASSWORD}`;
  const encodedToken = Buffer.from(token).toString("base64");
  const headers = { Authorization: "Basic " + encodedToken };
  return axios.get(url, { headers });
};

export default getData;
