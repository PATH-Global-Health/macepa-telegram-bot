import axios from "axios";

const getData = (orgUnit: String) => {
  const url = `${process.env.DHIS2_ANALYTICS_API_URL}?dimension=dx:SyQlNwchFeS&dimension=pe:LAST_12_MONTHS;THIS_MONTH;&dimension=ou:${orgUnit}&dimension=co:u1uT2mTdt6Q`;
  const token = `${process.env.DHIS2_USERNAME}:${process.env.DHIS2_PASSWORD}`;
  const encodedToken = Buffer.from(token).toString("base64");
  const headers = { Authorization: "Basic " + encodedToken };
  return axios.get(url, { headers });
};

export default getData;
