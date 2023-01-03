import React from "react";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import Movies from "../components/Movies";

const HomePage = () => {

  const imageLink = ["https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICAxNjkuNksgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00037264-njdelwmrpl-portrait.jpg",
                      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC45LzEwICAxLjlLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330396-kzazfmpaqe-portrait.jpg",
                      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni40LzEwICA1LjZLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00345156-pdacdkazal-portrait.jpg",
                      "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny4yLzEwICA5OTcgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00103370-kpbpnpnrtv-portrait.jpg"]  
  return (
    <div>
      <div>
        <Navbar />
        <Navbar2 />
      </div>
      <div className="h-80">

      </div>
      <div className="recommended ml-24 p-7">
        <div className="text-2xl font-bold text-gray-800 mb-3">Recommened Movies</div>
          <div className="flex">
            {
              imageLink.map((images)=>
                <Movies image={images} />
              )
            }
          </div>  
        </div>
    </div>
  );
};

export default HomePage;
