import Menu from "../Menu/Menu";
import Navbar from "./Navbar";
import React from "react";

export default {
    title: "Navbar",
    component: Navbar
};

const handleNavigate = () => {
    console.log('click')
}

export const Default = () => <Navbar onNavigate={handleNavigate} logo={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 133.64 183.7"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Group_7952" data-name="Group 7952"><g id="Group_7945" data-name="Group 7945"><g id="Group_7938" data-name="Group 7938"><g id="Group_7937" data-name="Group 7937"><path id="Path_30314" data-name="Path 30314" className="cls-1" d="M19,131.77A18.71,18.71,0,0,1,.35,113.08V19.37a18.7,18.7,0,0,1,37.39,0v93.71A18.72,18.72,0,0,1,19,131.77ZM19,5.09A14.3,14.3,0,0,0,4.76,19.37v93.71a14.28,14.28,0,0,0,28.56.23V19.37A14.3,14.3,0,0,0,19,5.09Z" /><path id="Path_30315" data-name="Path 30315" className="cls-1" d="M19,1A18.36,18.36,0,0,1,37.38,19.37v93.71a18.34,18.34,0,1,1-36.68.27v-94A18.37,18.37,0,0,1,19,1m0,126.68a14.66,14.66,0,0,0,14.64-14.63V19.37a14.64,14.64,0,0,0-29.27,0v93.71a14.66,14.66,0,0,0,14.64,14.63M19.05.33a19.06,19.06,0,0,0-19,19v93.71a19,19,0,0,0,38.09.28v-94a19.06,19.06,0,0,0-19-19Zm0,126.67A13.94,13.94,0,0,1,5.12,113.08V19.37a13.93,13.93,0,0,1,27.85,0v93.71A13.94,13.94,0,0,1,19.05,127Z" /></g></g><g id="Group_7940" data-name="Group 7940"><g id="Group_7939" data-name="Group 7939"><path id="Path_30316" data-name="Path 30316" className="cls-1" d="M114.32,131.77a18.71,18.71,0,0,1-18.69-18.69V19.37a18.69,18.69,0,0,1,37.38,0v93.71A18.71,18.71,0,0,1,114.32,131.77Zm0-126.68A14.3,14.3,0,0,0,100,19.37v93.71a14.38,14.38,0,0,0,14.43,14.28,14.23,14.23,0,0,0,14.13-14.28V19.37A14.3,14.3,0,0,0,114.32,5.09Z" /><path id="Path_30317" data-name="Path 30317" className="cls-1" d="M114.32,1a18.36,18.36,0,0,1,18.34,18.34v93.71a18.34,18.34,0,0,1-36.68,0V19.37A18.36,18.36,0,0,1,114.32,1m.15,126.68A14.52,14.52,0,0,0,129,113.15V19.37a14.63,14.63,0,0,0-29.26,0v93.71a14.78,14.78,0,0,0,14.78,14.63M114.32.33a19.07,19.07,0,0,0-19,19v93.71a19.05,19.05,0,0,0,38.1,0V19.37a19.07,19.07,0,0,0-19.05-19ZM114.47,127a14,14,0,0,1-9.92-4.08,13.78,13.78,0,0,1-4.16-9.84V19.37a13.93,13.93,0,0,1,27.85,0v93.71a13.89,13.89,0,0,1-4,9.84A13.54,13.54,0,0,1,114.47,127Z" /></g></g><g id="Group_7942" data-name="Group 7942"><g id="Group_7941" data-name="Group 7941"><path id="Path_30318" data-name="Path 30318" className="cls-1" d="M67.11,85.54A18.69,18.69,0,0,1,53.9,53.63L101.37,6.15a18.7,18.7,0,0,1,26.44,26.44L80.33,80.07A18.62,18.62,0,0,1,67.11,85.54ZM114.59,5.1a14.22,14.22,0,0,0-10.1,4.17L57,56.75A14.28,14.28,0,0,0,77.21,76.94l47.47-47.47A14.27,14.27,0,0,0,114.58,5.1Z" /><path id="Path_30319" data-name="Path 30319" className="cls-1" d="M114.59,1a18.34,18.34,0,0,1,13,31.3L80.08,79.82A18.34,18.34,0,0,1,54.15,53.88L101.62,6.41a18.26,18.26,0,0,1,13-5.37M56.77,77.19h0a14.62,14.62,0,0,0,20.69,0l47.48-47.47A14.63,14.63,0,1,0,104.24,9L56.77,56.5a14.65,14.65,0,0,0,0,20.69M114.59.34h0a18.88,18.88,0,0,0-13.47,5.57L53.65,53.38A19,19,0,0,0,80.58,80.31h0l47.48-47.47A19,19,0,0,0,114.59.34ZM57.2,76.62A13.94,13.94,0,0,1,57.27,57L104.74,9.53a13.93,13.93,0,1,1,19.7,19.69h0L77,76.69a13.92,13.92,0,0,1-19.69,0h0l-.07-.07Z" /></g></g><g id="Group_7944" data-name="Group 7944"><g id="Group_7943" data-name="Group 7943"><path id="Path_30320" data-name="Path 30320" className="cls-1" d="M66.52,85.2A18.54,18.54,0,0,1,53.3,79.73L5.82,32.26A18.7,18.7,0,0,1,32.26,5.82h0L79.73,53.3A18.68,18.68,0,0,1,66.52,85.2ZM19,4.77A14.28,14.28,0,0,0,8.94,29.14L56.42,76.61A14.28,14.28,0,0,0,76.61,56.42L29.14,9A14.17,14.17,0,0,0,19,4.77Z" /><path id="Path_30321" data-name="Path 30321" className="cls-1" d="M19,.71A18.28,18.28,0,0,1,32,6.07L79.49,53.55A18.34,18.34,0,0,1,53.55,79.49h0L6.07,32A18.33,18.33,0,0,1,19,.71M66.52,81.14a14.63,14.63,0,0,0,10.35-25L29.39,8.7A14.63,14.63,0,0,0,8.7,29.39L56.17,76.86a14.56,14.56,0,0,0,10.35,4.28M19,0A19,19,0,0,0,5.58,32.5L53.05,80A19,19,0,0,0,80,53.05L32.51,5.57A18.89,18.89,0,0,0,19,0ZM66.52,80.43a13.81,13.81,0,0,1-9.85-4.07L9.2,28.89A13.92,13.92,0,0,1,28.89,9.2L76.37,56.67a13.92,13.92,0,0,1-9.85,23.76Z" /></g></g></g><g id="Group_7951" data-name="Group 7951"><g id="Group_7946" data-name="Group 7946"><path id="Path_30322" data-name="Path 30322" className="cls-2" d="M.47,145.19h5l9.85,22,9.81-22H30v28.06h-4.6V154l-8.56,19.21H13.67L5.07,154v19.21H.47Z" /></g><g id="Group_7947" data-name="Group 7947"><path id="Path_30323" data-name="Path 30323" className="cls-2" d="M45.76,150.64a9.47,9.47,0,0,1,7.71,3.59V151h4.64v22.25H53.47v-3.32a9.58,9.58,0,0,1-7.79,3.68c-5.78,0-10.42-4.72-10.42-11.59S39.9,150.64,45.76,150.64Zm1,4c-3.44,0-6.75,2.58-6.75,7.39s3.31,7.59,6.75,7.59,6.74-2.7,6.74-7.51-3.27-7.47-6.74-7.47Z" /></g><g id="Group_7948" data-name="Group 7948"><path id="Path_30324" data-name="Path 30324" className="cls-2" d="M64.89,143.37h4.6v17.36L77.56,151h6.38L73.69,162.14l10.25,11.1H77.73l-8.24-9.56v9.56h-4.6Z" /></g><g id="Group_7949" data-name="Group 7949"><path id="Path_30325" data-name="Path 30325" className="cls-2" d="M97.55,173.61c-6.38,0-11.1-4.52-11.1-11.5s4.52-11.47,11.1-11.47c6.34,0,10.82,4.4,10.82,10.94a15.42,15.42,0,0,1-.16,2.26h-17a6.12,6.12,0,0,0,6.33,5.9h0a5.4,5.4,0,0,0,5.25-3.11h5C106.51,170.5,103,173.61,97.55,173.61Zm-6.3-13.48h12.31c-.08-3.44-2.79-5.62-6.22-5.62a6.07,6.07,0,0,0-6.09,5.62Z" /></g><g id="Group_7950" data-name="Group 7950"><path id="Path_30326" data-name="Path 30326" className="cls-2" d="M128.87,151h4.77L120,183.7h-4.76l4.52-10.81L111,151h5.13l6.25,17Z" /></g></g></g></g></g></svg>} logoLink="/" mobileLogo={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 357.28 123.47"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" d="M119.83,5.38A17.29,17.29,0,0,0,107.43.31h-.11A17.27,17.27,0,0,0,93.54,7.17L62.6,38.11l-33-33A17.31,17.31,0,0,0,0,17.5c0,.05,0,.09,0,.13v88.51a17.33,17.33,0,0,0,34.65,0v-47L49.92,74.42a17.47,17.47,0,0,0,4.2,3.08A17.31,17.31,0,0,0,75,74.73l15-15v46.43a17.33,17.33,0,1,0,34.65,0V20.5A17.32,17.32,0,0,0,119.83,5.38ZM96.19,9.47,97.8,7.86a13.65,13.65,0,0,1,23.34,9.77v2.66a13.73,13.73,0,0,1-3.79,7.12L93.5,51.25V17.63A13.81,13.81,0,0,1,96.19,9.47Zm-65,41.21L7.55,27.09a13.83,13.83,0,0,1-4-9.62A13.83,13.83,0,0,1,17.32,3.81h0A13.83,13.83,0,0,1,31.14,17.63Zm0,55.46a13.82,13.82,0,0,1-27.64,0V27.74a16,16,0,0,0,1.57,1.83L31.14,55.64ZM34.4,14.85,60.13,40.58l-9.65,9.65h0a17.28,17.28,0,0,0-4.84,15l-11-11V17.63A17,17,0,0,0,34.4,14.85ZM71.94,71.94a13.82,13.82,0,0,1-16.08,2.51,13.54,13.54,0,0,1-2.9-2.2,13.83,13.83,0,0,1,0-19.54l9.65-9.65,9.33,9.33h0A13.82,13.82,0,0,1,71.94,71.94Zm7.2-6.33a17.3,17.3,0,0,0-4.72-15.69l-9.34-9.34L90.14,15.52A18.53,18.53,0,0,0,90,17.63V54.76Zm42,40.6A13.71,13.71,0,0,1,107.47,120a14,14,0,0,1-14-13.83V56.21l26.33-26.33a16.82,16.82,0,0,0,1.31-1.49v77.82Z" /><polygon className="cls-2" points="183.52 72.45 168.88 39.76 161.5 39.76 161.5 81.45 168.34 81.45 168.34 52.9 181.12 81.45 185.86 81.45 198.58 52.9 198.58 81.45 205.42 81.45 205.42 39.76 198.1 39.76 183.52 72.45" /><path className="cls-2" d="M239.74,53.2a14.07,14.07,0,0,0-11.46-5.34c-8.7,0-15.6,6.72-15.6,16.91S219.58,82,228.16,82a14.23,14.23,0,0,0,11.58-5.46v4.92h6.9V48.4h-6.9Zm-10,22.85c-5.1,0-10-4.14-10-11.28s4.92-11,10-11,10,4,10,11.09S234.88,76.05,229.72,76.05Z" /><polygon className="cls-2" points="275.02 48.4 263.02 62.85 263.02 37.06 256.18 37.06 256.18 81.45 263.02 81.45 263.02 67.23 275.26 81.45 284.5 81.45 269.26 64.95 284.5 48.4 275.02 48.4" /><path className="cls-2" d="M304.18,47.86c-9.78,0-16.5,6.66-16.5,17s7,17.1,16.5,17.1c8.1,0,13.32-4.62,15.18-10.38H312c-1.26,2.58-3.6,4.62-7.8,4.62a9.09,9.09,0,0,1-9.42-8.76H320a20.89,20.89,0,0,0,.24-3.35C320.26,54.4,313.6,47.86,304.18,47.86ZM294.82,62c.72-5.22,4.44-8.34,9.06-8.34,5.1,0,9.12,3.24,9.24,8.34Z" /><polygon className="cls-2" points="350.19 48.4 340.54 73.59 331.24 48.4 323.62 48.4 336.64 80.91 329.92 96.99 337 96.99 357.27 48.4 350.19 48.4" /></g></g></svg>} collapsedAt={[2, 3]} menu={
    [
        {
            title: 'home',
            icon: 'home',
            link: '/',
            nextWrapper: children => {
                return <div className="link wrapper">{children}</div>
            }
        },
        {
            title: 'discover',
            icon: 'discover',
            link: '/discover'
        },
        {
            title: 'categories',
            icon: 'categories',
            link: '/categories'
        }
    ]} />;
