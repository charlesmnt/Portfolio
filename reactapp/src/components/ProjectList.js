import { SiSocketdotio, SiReact, SiExpress, SiNodedotjs, SiHeroku, SiMongodb, SiJavascript, SiExpo, SiHtml5, SiCss3, SiIcloud } from "react-icons/si";
import {MdTouchApp, MdPhotoCamera} from "react-icons/md";
import {ImNewspaper} from "react-icons/im";
import {IoMdChatboxes} from "react-icons/io";
import {BsShop, BsSpeedometer2} from "react-icons/bs";


let ProjectList = [{
    text: "Application mobile pour faciliter les échanges entres les experts en assurance et les compagnies d'assurance",
    icon: <MdTouchApp style={{fontSize: '250%', color: 'black', opacity: '0.3'}} />,
    title: "EasyExpertise",
    smallIcon: [<SiReact />,<SiNodedotjs />, <SiExpress />, <SiExpo />, <SiMongodb />, <SiHeroku />],
},
{
    text: "Connexion à des API web services et collecte de données",
    icon: <ImNewspaper style={{fontSize: '250%', color: 'black', opacity: '0.3'}} />,
    title: "API News & Movies",
    smallIcon: [<SiReact />,<SiNodedotjs />, <SiExpress />, <SiMongodb />, <SiHeroku />],
},
{
    text: "Application permettant la localisation sur une map et un chat avec les autres utilisateurs",
    icon: <IoMdChatboxes style={{fontSize: '250%', color: 'black', opacity: '0.3'}} />,
    title: "Localisation and Chat",
    smallIcon: [<SiReact />,<SiNodedotjs />, <SiExpress />, <SiExpo />, <SiSocketdotio /> , <SiMongodb />],
},
{

    text: "Application permettant la prise de photo avec stockage sur serveur distant et consultation des bibliothèques",
    icon: <MdPhotoCamera style={{fontSize: '250%', color: 'black', opacity: '0.3'}} />,
    title: "Face App",
    smallIcon: [<SiReact />,<SiNodedotjs />, <SiExpress />, <SiExpo />, <SiIcloud />, <SiMongodb />],
},
{
    text: "Site d'achat d'articles avec intégration d'un module de paiement",
    icon: <BsShop style={{fontSize: '250%', color: 'black', opacity: '0.3'}} />,
    title: "E-Shop",
    smallIcon: [<SiHtml5 />,<SiCss3 />, <SiJavascript />, <SiExpress />, <SiMongodb />],
},
{
    text: "Gestion d'un stock d'articles avec outil reporting intégré",
    icon: <BsSpeedometer2 style={{fontSize: '250%', color: 'black', opacity: '0.3'}} />,
    title: "KPI",
    smallIcon: [<SiHtml5 />,<SiCss3 />, <SiExpress />, <SiMongodb />],
},
]

export {ProjectList};