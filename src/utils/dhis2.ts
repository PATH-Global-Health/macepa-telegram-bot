import axios from "axios";

const getData = (orgUnit: String) => {
  const url =
    "https://et.dhis2.net/hrp/api/analytics?dimension=dx:SyQlNwchFeS&dimension=pe:LAST_12_MONTHS;THIS_MONTH;&dimension=ou:${orgUnit}&dimension=co:u1uT2mTdt6Q";
  return axios.get(url);
};

export default getData;
