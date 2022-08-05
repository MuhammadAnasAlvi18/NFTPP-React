import React from 'react';
import ReactDOM from 'react-dom/client';
import './Assets/Styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createServer } from "miragejs"


createServer({
  routes() {
    this.namespace = "api"

    this.get("/faqs", ()=> {
      return(
        [
        {
        question:"What is NFTPP?",
        answer:"At NFTPP we are on a mission to build customer-centric tools to help our members unlock the benefits of NFTs. The common thread behind all NFTPP members is the love of the NFT space and the need to push the boundaries for how NFTs can change society for the better.NFT public profile (NFTPP) is a site where people can show off thier art, experiences and highlight NFTs. The site is designed so that is connects to your NFT wallet, finds all the NFTs you currently own and lets you choose which ones you want to display. Our goal is to make it easier for a user to explore their friends and other peoples NFT collections."
        },
        {
          question:"What wallets does NFTPP support?",
          answer:"At NFTPP we are on a mission to build customer-centric tools to help our members unlock the benefits of NFTs. The common thread behind all NFTPP members is the love of the NFT space and the need to push the boundaries for how NFTs can change society for the better.NFT public profile (NFTPP) is a site where people can show off thier art, experiences and highlight NFTs. The site is designed so that is connects to your NFT wallet, finds all the NFTs you currently own and lets you choose which ones you want to display. Our goal is to make it easier for a user to explore their friends and other peoples NFT collections."
        },
        {
          question:"What NFT blockchains does NFTPP support?",
          answer:"At NFTPP we are on a mission to build customer-centric tools to help our members unlock the benefits of NFTs. The common thread behind all NFTPP members is the love of the NFT space and the need to push the boundaries for how NFTs can change society for the better.NFT public profile (NFTPP) is a site where people can show off thier art, experiences and highlight NFTs. The site is designed so that is connects to your NFT wallet, finds all the NFTs you currently own and lets you choose which ones you want to display. Our goal is to make it easier for a user to explore their friends and other peoples NFT collections."
        },
        {
          question:"How do I create an NFTPP profile?",
          answer:"At NFTPP we are on a mission to build customer-centric tools to help our members unlock the benefits of NFTs. The common thread behind all NFTPP members is the love of the NFT space and the need to push the boundaries for how NFTs can change society for the better.NFT public profile (NFTPP) is a site where people can show off thier art, experiences and highlight NFTs. The site is designed so that is connects to your NFT wallet, finds all the NFTs you currently own and lets you choose which ones you want to display. Our goal is to make it easier for a user to explore their friends and other peoples NFT collections."
        },
        {
          question:"I bought a new NFT, how do I add it to my profile?",
          answer:"At NFTPP we are on a mission to build customer-centric tools to help our members unlock the benefits of NFTs. The common thread behind all NFTPP members is the love of the NFT space and the need to push the boundaries for how NFTs can change society for the better.NFT public profile (NFTPP) is a site where people can show off thier art, experiences and highlight NFTs. The site is designed so that is connects to your NFT wallet, finds all the NFTs you currently own and lets you choose which ones you want to display. Our goal is to make it easier for a user to explore their friends and other peoples NFT collections."
        },
        {
          question:"I have a question, product suggestion or need support,  where should I request help?",
          answer:"At NFTPP we are on a mission to build customer-centric tools to help our members unlock the benefits of NFTs. The common thread behind all NFTPP members is the love of the NFT space and the need to push the boundaries for how NFTs can change society for the better.NFT public profile (NFTPP) is a site where people can show off thier art, experiences and highlight NFTs. The site is designed so that is connects to your NFT wallet, finds all the NFTs you currently own and lets you choose which ones you want to display. Our goal is to make it easier for a user to explore their friends and other peoples NFT collections."
        },
        {
          question:"I am interested in working for NFTPP and contributing  to the growth, where should I submit my resume?",
          answer:"At NFTPP we are on a mission to build customer-centric tools to help our members unlock the benefits of NFTs. The common thread behind all NFTPP members is the love of the NFT space and the need to push the boundaries for how NFTs can change society for the better.NFT public profile (NFTPP) is a site where people can show off thier art, experiences and highlight NFTs. The site is designed so that is connects to your NFT wallet, finds all the NFTs you currently own and lets you choose which ones you want to display. Our goal is to make it easier for a user to explore their friends and other peoples NFT collections."
        },
        {
          question:"How do I stay up to date with the latest development  of NFTPP?",
          answer:"At NFTPP we are on a mission to build customer-centric tools to help our members unlock the benefits of NFTs. The common thread behind all NFTPP members is the love of the NFT space and the need to push the boundaries for how NFTs can change society for the better.NFT public profile (NFTPP) is a site where people can show off thier art, experiences and highlight NFTs. The site is designed so that is connects to your NFT wallet, finds all the NFTs you currently own and lets you choose which ones you want to display. Our goal is to make it easier for a user to explore their friends and other peoples NFT collections."
        },
       ])
    })
  },
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
