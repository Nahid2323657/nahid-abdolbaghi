import React, { useEffect } from "react";
import axios from "axios";
import SiteInformation from './SiteInformation'
import Headings from './Headings'
import ContentKeyWords from './ContentKeyWords'
import { technicalAnalysis } from "../../../../../constants/NavItemsConstants";

export default function Index() {

  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   axios.get().then((response) => {
  //     setData([response.data]);
  //   });
  // }, []);

const data = technicalAnalysis

  return (
    <div className="border border-border rounded-lg overflow-hidden transition-all">
      <p className=" text-right text-title py-3 pr-5 bg-white">تحلیل تکنیکال</p>
      <div className="flex flex-col">
        <SiteInformation content={data.title_tag} />
        <SiteInformation content={data.meta_description} />
        <Headings content={data.headings}/>
        <ContentKeyWords content = {data.content_keywords}/>
      </div>
    </div>
  );
}
