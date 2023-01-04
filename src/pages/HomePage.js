import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import Movies from "../components/Movies";
import Events from "../components/Events";
import Carousels from "../components/Carousels";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import { RemoveScrollBar } from "rea ct-remove-scroll-bar";

const HomePage = () => {
  const imageLink = [
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICAxNjkuNksgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00037264-njdelwmrpl-portrait.jpg",
      title: "Avatar the way of water",
      content: "Action/Adventure",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC45LzEwICAxLjlLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330396-kzazfmpaqe-portrait.jpg",
      title: "Sembi",
      content: "Drama",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni40LzEwICA1LjZLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00345156-pdacdkazal-portrait.jpg",
      title: "Connect",
      content: "Horror/Thriller",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny4yLzEwICA5OTcgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00103370-kpbpnpnrtv-portrait.jpg",
      title: "Raangi",
      content: "Drama",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny4zLzEwICAyLjhLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330656-vdgxhtzdcf-portrait.jpg",
      title: "Driver Jamuna",
      content: "Crime/Thriller",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEphbg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00346464-fbymwcxsxt-portrait.jpg",
      title: "TrendSetter-Musical",
      content: "Sir Pitty Thyagaraj",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMSBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50:q-80/et00339968-ufqyvagtbe-portrait.jpg",
      title: "Hero ISL 2022/23",
      content: "Multiple Venues",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEphbiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00347640-rvuwabvrzd-portrait.jpg",
      title: "68,85,45 Latcham",
      content: "The Stage Chennai",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCA0IEphbiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00307957-drupfnkgmy-portrait.jpg",
      title: "Snow Kingdom",
      content: "Kingdom:Chennai",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEphbg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343445-ejbqhaugrb-portrait.jpg",
      title: "Jordindian Live",
      content: "Phoenix Chennai",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCA5IEphbiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00348356-uztftqkxzd-portrait.jpg",
      title: "Ara-Gora Comedy",
      content: "BrugerMan: AnnaNagar",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEphbg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00346464-fbymwcxsxt-portrait.jpg",
      title: "TrendSetter-Musical",
      content: "Drama",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA1IEZlYiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00346560-bghvbdrxlb-portrait.jpg",
      title: "Alexperience",
      content: "Sir Mutha Rao",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEphbg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343500-lejnktlctd-portrait.jpg",
      title: "Sundara Kandham",
      content: "YGP Auditorium",
    },
    
  ];

  const preimerLink = [
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00117411-zmudrhhzzz-portrait.jpg",
      title: "Black Adam",
      content: "English",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00076943-smkpwvadsk-portrait.jpg",
      title: "Top Gun: Maverick",
      content: "English",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00119947-ednhelsdft-portrait.jpg",
      title: "English",
      content: "Bengali",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00344471-tyngkydrfd-portrait.jpg",
      title: "The Enforcer (2023)",
      content: "English",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00348488-dhucgrgbks-portrait.jpg",
      title: "Detection Of DI- Renji",
      content: "Mandrian",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICAxNjkuNksgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00037264-njdelwmrpl-portrait.jpg",
      title: "Avatar the way of water",
      content: "Action/Adventure",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC45LzEwICAxLjlLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330396-kzazfmpaqe-portrait.jpg",
      title: "Sembi",
      content: "Drama",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni40LzEwICA1LjZLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00345156-pdacdkazal-portrait.jpg",
      title: "Connect",
      content: "Horror/Thriller",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny4yLzEwICA5OTcgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00103370-kpbpnpnrtv-portrait.jpg",
      title: "Raangi",
      content: "Drama",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny4zLzEwICAyLjhLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00330656-vdgxhtzdcf-portrait.jpg",
      title: "Driver Jamuna",
      content: "Crime/Thriller",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA2IEphbg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00348456-mtlxfxwquv-portrait.jpg",
      title: "Madhubani Art",
      content: "Watch on Zoom",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEphbg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00348467-redrjsplrk-portrait.jpg",
      title: "Kalamkari Painting",
      content: "Watch on Zoom",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCA1IEphbiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00317752-tkmvmszmsg-portrait.jpg",
      title: "Data Science",
      content: "Online Streaming",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCA0IEphbiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00307978-lnyevjrutf-portrait.jpg",
      title: "Smart Photography",
      content: "Watch on Zoom",
    },
  ];

  const eventLink = [
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300:q-80/upskill-collection-202211140440.png",
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/interactive-games-collection-202211140440.png",
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MSBFdmVudA%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/stay-fit-collection-202211140440.png",
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-zone-collection-202211140440.png",
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/comedy-shows-collection-202211140440.png",
  ];

  const eventsHappeningLink = [
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCA5IEphbiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00348356-uztftqkxzd-portrait.jpg",
      title: "Ara-Gora Comedy",
      content: "BrugerMan: AnnaNagar",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEphbg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00346464-fbymwcxsxt-portrait.jpg",
      title: "TrendSetter-Musical",
      content: "Drama",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA1IEZlYiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00346560-bghvbdrxlb-portrait.jpg",
      title: "Alexperience",
      content: "Sir Mutha Rao",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEphbg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343500-lejnktlctd-portrait.jpg",
      title: "Sundara Kandham",
      content: "YGP Auditorium",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNSBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343504-xyablvqdrt-portrait.jpg",
      title: "Classical Concert",
      content: "YGP Auditorium",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEphbg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00346464-fbymwcxsxt-portrait.jpg",
      title: "TrendSetter-Musical",
      content: "Sir Pitty Thyagaraj",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMSBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50:q-80/et00339968-ufqyvagtbe-portrait.jpg",
      title: "Hero ISL 2022/23",
      content: "Multiple Venues",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEphbiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00347640-rvuwabvrzd-portrait.jpg",
      title: "68,85,45 Latcham",
      content: "The Stage Chennai",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCA0IEphbiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00307957-drupfnkgmy-portrait.jpg",
      title: "Snow Kingdom",
      content: "Kingdom:Chennai",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEphbg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343445-ejbqhaugrb-portrait.jpg",
      title: "Jordindian Live",
      content: "Phoenix Chennai",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00076943-smkpwvadsk-portrait.jpg",
      title: "Top Gun: Maverick",
      content: "English",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00119947-ednhelsdft-portrait.jpg",
      title: "English",
      content: "Bengali",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00344471-tyngkydrfd-portrait.jpg",
      title: "The Enforcer (2023)",
      content: "English",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00348488-dhucgrgbks-portrait.jpg",
      title: "Detection Of DI- Renji",
      content: "Mandrian",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICAxNjkuNksgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00037264-njdelwmrpl-portrait.jpg",
      title: "Avatar the way of water",
      content: "Action/Adventure",
    },
    
    
  ];

  const streamingLink = [
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA2IEphbg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00348456-mtlxfxwquv-portrait.jpg",
      title: "Madhubani Art",
      content: "Watch on Zoom",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEphbg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00348467-redrjsplrk-portrait.jpg",
      title: "Kalamkari Painting",
      content: "Watch on Zoom",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCA1IEphbiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00317752-tkmvmszmsg-portrait.jpg",
      title: "Data Science",
      content: "Online Streaming",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCA0IEphbiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00307978-lnyevjrutf-portrait.jpg",
      title: "Smart Photography",
      content: "Watch on Zoom",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAxMCBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00348281-lkcsdnfblz-portrait.jpg",
      title: "The Holy Kamadhenu",
      content: "Watch on Zoom",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEphbg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00346464-fbymwcxsxt-portrait.jpg",
      title: "TrendSetter-Musical",
      content: "Sir Pitty Thyagaraj",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMSBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50:q-80/et00339968-ufqyvagtbe-portrait.jpg",
      title: "Hero ISL 2022/23",
      content: "Multiple Venues",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEphbiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00347640-rvuwabvrzd-portrait.jpg",
      title: "68,85,45 Latcham",
      content: "The Stage Chennai",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCA0IEphbiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00307957-drupfnkgmy-portrait.jpg",
      title: "Snow Kingdom",
      content: "Kingdom:Chennai",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEphbg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343445-ejbqhaugrb-portrait.jpg",
      title: "Jordindian Live",
      content: "Phoenix Chennai",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA2IEphbg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00348456-mtlxfxwquv-portrait.jpg",
      title: "Madhubani Art",
      content: "Watch on Zoom",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEphbg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00348467-redrjsplrk-portrait.jpg",
      title: "Kalamkari Painting",
      content: "Watch on Zoom",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCA1IEphbiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00317752-tkmvmszmsg-portrait.jpg",
      title: "Data Science",
      content: "Online Streaming",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCA0IEphbiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00307978-lnyevjrutf-portrait.jpg",
      title: "Smart Photography",
      content: "Watch on Zoom",
    },
  ];

  const outdoorLink = [
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEphbg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00346464-fbymwcxsxt-portrait.jpg",
      title: "TrendSetter-Musical",
      content: "Sir Pitty Thyagaraj",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMSBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50:q-80/et00339968-ufqyvagtbe-portrait.jpg",
      title: "Hero ISL 2022/23",
      content: "Multiple Venues",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEphbiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00347640-rvuwabvrzd-portrait.jpg",
      title: "68,85,45 Latcham",
      content: "The Stage Chennai",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCA0IEphbiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00307957-drupfnkgmy-portrait.jpg",
      title: "Snow Kingdom",
      content: "Kingdom:Chennai",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEphbg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343445-ejbqhaugrb-portrait.jpg",
      title: "Jordindian Live",
      content: "Phoenix Chennai",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCA0IEphbiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00307957-drupfnkgmy-portrait.jpg",
      title: "Snow Kingdom",
      content: "Kingdom:Chennai",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEphbg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343445-ejbqhaugrb-portrait.jpg",
      title: "Jordindian Live",
      content: "Phoenix Chennai",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00076943-smkpwvadsk-portrait.jpg",
      title: "Top Gun: Maverick",
      content: "English",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00119947-ednhelsdft-portrait.jpg",
      title: "English",
      content: "Bengali",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00344471-tyngkydrfd-portrait.jpg",
      title: "The Enforcer (2023)",
      content: "English",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00348488-dhucgrgbks-portrait.jpg",
      title: "Detection Of DI- Renji",
      content: "Mandrian",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICAxNjkuNksgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00037264-njdelwmrpl-portrait.jpg",
      title: "Avatar the way of water",
      content: "Action/Adventure",
    },
    
  ];

  const laughterLink = [
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyOCBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00329668-mtsdtgjvhx-portrait.jpg",
      title: "Aansplanning",
      content: "The Stage Chennai",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMiBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343031-ukcvxkesuu-portrait.jpg",
      title: "Oh Hello! Rahul Dua",
      content: "Rasika Ranjani Sabha",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA4IEphbg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00321018-kmbtqutgrs-portrait.jpg",
      title: "Death By Laughter",
      content: "Backyard - Chennai",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEphbg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00347228-yagxqtmryf-portrait.jpg",
      title: "Working It Out",
      content: "Backyard Chennai",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyOCBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00346204-nczyaycwnm-portrait.jpg",
      title: "Kunal Kumar Live",
      content: "Venue to be announced",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEphbiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00347640-rvuwabvrzd-portrait.jpg",
      title: "68,85,45 Latcham",
      content: "The Stage Chennai",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCA0IEphbiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00307957-drupfnkgmy-portrait.jpg",
      title: "Snow Kingdom",
      content: "Kingdom:Chennai",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEphbg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343445-ejbqhaugrb-portrait.jpg",
      title: "Jordindian Live",
      content: "Phoenix Chennai",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00076943-smkpwvadsk-portrait.jpg",
      title: "Top Gun: Maverick",
      content: "English",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00119947-ednhelsdft-portrait.jpg",
      title: "English",
      content: "Bengali",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00344471-tyngkydrfd-portrait.jpg",
      title: "The Enforcer (2023)",
      content: "English",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00348488-dhucgrgbks-portrait.jpg",
      title: "Detection Of DI- Renji",
      content: "Mandrian",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICAxNjkuNksgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00037264-njdelwmrpl-portrait.jpg",
      title: "Avatar the way of water",
      content: "Action/Adventure",
    },
  ];

  const popularLink = [
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA2IEphbg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00348456-mtlxfxwquv-portrait.jpg",
      title: "Madhubani Art",
      content: "Watch on Zoom",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEphbg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00348467-redrjsplrk-portrait.jpg",
      title: "Kalamkari Painting",
      content: "Watch on Zoom",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCA1IEphbiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00317752-tkmvmszmsg-portrait.jpg",
      title: "Data Science",
      content: "Online Streaming",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCA0IEphbiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00307978-lnyevjrutf-portrait.jpg",
      title: "Smart Photography",
      content: "Watch on Zoom",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAxMCBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00348281-lkcsdnfblz-portrait.jpg",
      title: "The Holy Kamadhenu",
      content: "Watch on Zoom",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCA0IEphbiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00307957-drupfnkgmy-portrait.jpg",
      title: "Snow Kingdom",
      content: "Kingdom:Chennai",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEphbg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343445-ejbqhaugrb-portrait.jpg",
      title: "Jordindian Live",
      content: "Phoenix Chennai",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00076943-smkpwvadsk-portrait.jpg",
      title: "Top Gun: Maverick",
      content: "English",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00119947-ednhelsdft-portrait.jpg",
      title: "English",
      content: "Bengali",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00344471-tyngkydrfd-portrait.jpg",
      title: "The Enforcer (2023)",
      content: "English",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00348488-dhucgrgbks-portrait.jpg",
      title: "Detection Of DI- Renji",
      content: "Mandrian",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICAxNjkuNksgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00037264-njdelwmrpl-portrait.jpg",
      title: "Avatar the way of water",
      content: "Action/Adventure",
    },
  ];

  const thelatestLink = [
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEphbg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00346464-fbymwcxsxt-portrait.jpg",
      title: "TrendSetter-Musical",
      content: "Sir Pitty Thyagaraj",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMSBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50:q-80/et00339968-ufqyvagtbe-portrait.jpg",
      title: "Hero ISL 2022/23",
      content: "Multiple Venues",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEphbiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00347640-rvuwabvrzd-portrait.jpg",
      title: "68,85,45 Latcham",
      content: "The Stage Chennai",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCA0IEphbiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00307957-drupfnkgmy-portrait.jpg",
      title: "Snow Kingdom",
      content: "Kingdom:Chennai",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEphbg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343445-ejbqhaugrb-portrait.jpg",
      title: "Jordindian Live",
      content: "Phoenix Chennai",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA4IEphbg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00321018-kmbtqutgrs-portrait.jpg",
      title: "Death By Laughter",
      content: "Backyard - Chennai",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEphbg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00347228-yagxqtmryf-portrait.jpg",
      title: "Working It Out",
      content: "Backyard Chennai",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyOCBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00346204-nczyaycwnm-portrait.jpg",
      title: "Kunal Kumar Live",
      content: "Venue to be announced",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEphbiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00347640-rvuwabvrzd-portrait.jpg",
      title: "68,85,45 Latcham",
      content: "The Stage Chennai",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCA0IEphbiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00307957-drupfnkgmy-portrait.jpg",
      title: "Snow Kingdom",
      content: "Kingdom:Chennai",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEphbg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00343445-ejbqhaugrb-portrait.jpg",
      title: "Jordindian Live",
      content: "Phoenix Chennai",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:q-80/et00076943-smkpwvadsk-portrait.jpg",
      title: "Top Gun: Maverick",
      content: "English",
    },
    {
      link: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00119947-ednhelsdft-portrait.jpg",
      title: "English",
      content: "Bengali",
    },
  ];
  const navigate = useNavigate();
  const auth = getAuth();
  const user2 = auth.currentUser;
  const [load, setLoad] = useState(undefined);
  
  return (
    <div>
      {/* <RemoveScrollBar /> */}
      <div>
        <Navbar />
        <Navbar2 />
      </div>
      <div className="bg-[#ebebeb]">
        <Carousels />
      </div>

      <div className="bg-[#f5f5f5] mt-2">
        <div className="recommended ml-24 mr-28 pt-7 pl-10">
          <div className="text-2xl font-bold text-gray-900 mb-3">
            Recommened Movies
          </div>
          <div className="">
            <Movies objects={imageLink} />
          </div>
        </div>

        <div className="ml-36 pt-28 pl-30 pb-14 pr-30 w-[80%]">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png"
            alt=""
            width="100%"
            height="100%"
          />
        </div>

        <div className="recommended ml-24 mr-28 pt-7 pl-10">
          <div className="text-2xl font-bold text-gray-900 mb-3">
            The Best Of Live Events
          </div>
          <div className="">
            <Events objects2={eventLink} />
          </div>
        </div>

        <div className="bg-[#2b3149] mt-24">
          <div className=" ml-24 mr-28 pt-7 pl-10 pb-5">
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
              alt="preimiere-img"
            />
            <div className="text-2xl font-bold text-white">Premieres</div>
            <p className="text-white">Brand new releases every friday </p>
            <div className=" text-white">
              <Movies objects={preimerLink} />
            </div>  
          </div>
        </div>

        <div className="recommended ml-24 mr-28 pt-7 pl-10 mt-3">
          <div className="text-2xl font-bold text-gray-900 mb-3">
            Events Happening Near You
          </div>
          <div className="">
            <Movies objects={eventsHappeningLink} />
          </div>
        </div>

        <div className="recommended ml-24 mr-28 pt-7 pl-10 mt-3">
          <div className="text-2xl font-bold text-gray-900 mb-3">
            Online Streaming Events
          </div>
          <div className="">
            <Movies objects={streamingLink} />
          </div>
        </div>

        <div className="recommended ml-24 mr-28 pt-7 pl-10 mt-3">
          <div className="text-2xl font-bold text-gray-900 mb-3">
            Outdoor Events
          </div>
          <div className="">
            <Movies objects={outdoorLink} />
          </div>
        </div>

        <div className="recommended ml-24 mr-28 pt-7 pl-10 mt-3">
          <div className="text-2xl font-bold text-gray-900 mb-3">
            Laughter Therapy
          </div>
          <div className="">
            <Movies objects={laughterLink} />
          </div>
        </div>

        <div className="recommended ml-24 mr-28 pt-7 pl-10 mt-3">
          <div className="text-2xl font-bold text-gray-900 mb-3">
            Online Streaming Events
          </div>
          <div className="">
            <Movies objects={popularLink} />
          </div>
        </div>

        <div className="recommended ml-24 mr-28 pt-7 pl-10 mt-3">
          <div className="text-2xl font-bold text-gray-900 mb-3">
            The Latest Plays
          </div>
          <div className="">
            <Movies objects={thelatestLink} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
