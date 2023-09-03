import React from 'react'
import TeamMemberCard from './TeamMemberCard';
import { TeamContainer,TechP, TeamHead, TeamWrapper, TeamListWrapper,TeamListWrapper2,TeamListWrapper3, TeamName} from './TeamElements';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const TeamPage = () => {

  const advisor = [
    {
      name: 'Unnati Chabra',
      role: 'Founding Member',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_12px_solid_rgb:F2AF13,b_rgb:262c35/v1688969490/Asset%20Mantle%20-%20Team%202023/Leads/WhatsApp_Image_2023-07-10_at_11.31.50_pfiaub.jpg', 
      techProfiles: (
        <TechP>
          <a className='linkiden' href="https://www.linkedin.com/in/unnati-chhabra" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a className='twitter' href="https://twitter.com/Unnati_twts" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a className='insta' href="https://www.instagram.com/unnatiisig/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
  ];
  const president = [
    {
      name: 'Geetika Gupta',
      role: 'President',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_12px_solid_rgb:F2AF13/v1688488847/Asset%20Mantle%20-%20Team%202023/Leads/Geetika%20Gupta.jpg', 
      techProfiles : (
        <TechP>
          <a className='linkiden' href="https://www.linkedin.com/in/geetikaguptagg/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className='twitter' href="https://twitter.com/geetikaguptaa" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a className='insta' href="https://www.instagram.com/geetikaagupta/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Astha Bhaskar',
      role: 'President',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_12px_solid_rgb:F2AF13,b_rgb:262c35/v1693722819/Asset%20Mantle%20-%20Team%202023/Leads/Asthaaaa_yab0s9.png', 
      techProfiles : (
        <TechP>
          <a className='linkiden' href="https://www.linkedin.com/in/astha-bhaskar-5a049b233/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className='twitter' href="https://twitter.com/asthabhaskar19" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a className='insta' href="https://www.instagram.com/_.astha30/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
  ];
  const vicePresident = [
    {
      name: 'Kamya Varshney',
      role: 'Vice President',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_12px_solid_rgb:F2AF13,b_rgb:262c35/v1693146880/Asset%20Mantle%20-%20Team%202023/Leads/Screenshot_2023-08-27_200314_xtmash.png', 
      techProfiles : (
        <TechP>
          <a className='linkiden' href="https://www.linkedin.com/in/unnati-chhabra-909bb9196/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                  <a className='twitter' href="https://twitter.com/VarshneyKamya" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                  <a className='insta' href="https://www.instagram.com/kemyav7/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Garima Pahwa',
      role: 'Vice President',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_12px_solid_rgb:F2AF13,b_rgb:262c35/v1693146892/Asset%20Mantle%20-%20Team%202023/Leads/Screenshot_2023-08-27_200325_wnmi0v.png', 
      techProfiles : (
        <TechP>
          <a className='linkiden' href="https://www.linkedin.com/in/garima-pahwa-68416a22a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                  <a className='twitter' href="https://twitter.com/PahwaGinni" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                  <a className='insta' href="https://www.instagram.com/ginniiiipahwa_/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
  ];
  const techTeam = [
    {
      name: 'Harshita Deep',
      role: 'Technical Lead',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_12px_solid_rgb:F2AF13,b_rgb:262c35/v1688488847/Asset%20Mantle%20-%20Team%202023/Leads/Harshita%20Deep.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/harshita-d-8a352722a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a className='twitter' href="https://twitter.com/harshita_7777" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a className='insta' href="https://www.instagram.com/ha_rshita4387/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Mansi',
      role: 'Technical Core',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693146647/Asset%20Mantle%20-%20Team%202023/Technical/mansi_naqlkc.png', 
      techProfiles : (
        <TechP>
          <a className='linkiden' href="https://www.linkedin.com/in/mansi-jangra-33a77622a" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
               <a className='twitter' href="https://twitter.com/_mansiJangra" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Sneha Chauhan',
      role: 'Technical Core',
      imageUrl: 'https://res.cloudinary.com/dx0dgujbj/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688875544/My%20Image/Untitled_design_1_bqfeyo.png', 
      techProfiles : (
        <TechP>
             <a className='linkiden' href="https://www.linkedin.com/in/sneha-chauhan-986a21213/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
               <a className='twitter' href="https://twitter.com/_Sneha_Chauhan" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
               <a className='insta' href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
       </TechP>
      )
    },
    // {
    //   name: 'Manjusha Iyer',
    //   role: 'Co-Ordinator',
    //   imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688527494/Asset%20Mantle%20-%20Team%202023/Technical/Manjusha%20Iyer.jpg', 
    //   techProfiles : (
    //     <TechP>
    //        <a className='linkiden' href="https://www.linkedin.com/in/manjusha-iyer-83b4a01a7/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //            <a className='twitter' href=" https://twitter.com/ManjushaIyer" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
    //            <a className='insta' href="https://www.instagram.com/iyermanjusha/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //     </TechP>
    //   )
    // },
    {
      name: 'Apoorva ',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693146223/Asset%20Mantle%20-%20Team%202023/Technical/apoorva_u2qoq3.png', 
      techProfiles : (
        <TechP>
             <a className='linkiden' href="https://www.linkedin.com/in/apoorva-a65a18256/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
               <a className='twitter' href="https://twitter.com/GilhotraApoorva" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
               <a className='insta' href="https://www.instagram.com/verve_infinite/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
         </TechP>
      )
    },
    // {
    //   name: 'Mehek Prabhakar',
    //   role: 'Co-Ordinator',
    //   imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688491388/Asset%20Mantle%20-%20Team%202023/Technical/Mehek%20Prabhakar.webp', 
    //   techProfiles : (
    //     <TechP>
    //                 <a className='linkiden' href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    //                    <a className='twitter' href="https://twitter.com/mehekprabhakar" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
    //                    <a className='insta' href="https://www.instagram.com/mehekprabhakar/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    //       </TechP>
    //   )
    // },
        
  ];

  const eventsTeam = [
    {
      name: 'Hiteshi Dattatrey',
      role: 'EM Lead',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_12px_solid_rgb:F2AF13,b_rgb:262c35/v1688488848/Asset%20Mantle%20-%20Team%202023/Leads/Hiteshi%20Dattatrey.jpg', 
      techProfiles : (
        <TechP>
              <a className='linkiden' href="https://www.linkedin.com/in/hiteshi-dattatrey-48117422a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/HiteshiD01" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/_hiteshii01/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Disha Verma',
      role: 'EM Lead',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_12px_solid_rgb:F2AF13,b_rgb:262c35/v1688490160/Asset%20Mantle%20-%20Team%202023/EM/Disha%20Verma.jpg', 
      techProfiles : (
        <TechP>
        <a className='linkiden' href="https://www.linkedin.com/in/disha-verma-415435231" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
       <a className='twitter' href="https://twitter.com/theflank08" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
       <a className='insta' href="https://www.instagram.com/the.flank/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
       </TechP> 
      )
    },
    {
      name: 'Devanshi verma',
      role: 'EM Core',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693723630/Asset%20Mantle%20-%20Team%202023/EM/Snapchat-829480123_wrvh6k.jpg', 
      techProfiles : (
        <TechP>
        <a className='linkiden' href="https://www.linkedin.com/in/devanshi-verma-3b3401235" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
       <a className='twitter' href="https://twitter.com/Devansh72995205?t=FIVTNBc0eDBFNFsASxV_fA&s=09" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
       <a className='insta' href="https://instagram.com/devanshi3013?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
       </TechP> 
      )
    },
    {
      name: 'Manasi Duggal ',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688490161/Asset%20Mantle%20-%20Team%202023/EM/Manasi%20Duggal.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/manasi-duggal-7b62911a7" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/DuggalManasi" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/manasiduggal/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Avni Singh',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688490160/Asset%20Mantle%20-%20Team%202023/EM/Avni%20Singh.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/avni-singh-723700259" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="[Twitter Profile URL]" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/avnii.singh_/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Arshita ',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693723631/Asset%20Mantle%20-%20Team%202023/EM/IMG-20230802-WA0008_ulxyfi.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/arshita-%F0%9F%91%A9%F0%9F%8F%BB%E2%80%8D%F0%9F%92%BB-3446aa256" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/Arshita64?t=nS5iEK-qpFkQk6o3-Zz8kA&s=09" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://instagram.com/arshita_k22?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Gunjan Vaishnavi Jangra',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693723634/Asset%20Mantle%20-%20Team%202023/EM/Picture_kcxbsj.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/gunjanvaishnavijangra/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/gunjanvjangra" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/gunjanvjangra/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Riya Gupta ',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693723636/Asset%20Mantle%20-%20Team%202023/EM/Riya_bouigi.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/riya-gupta-79170226b/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/riyaguptaa2004" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/riya09.rg/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
        
  ];

  const researchTeam = [
    {
      name: 'Srimayee Satapathy',
      role: 'Research Lead',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_12px_solid_rgb:F2AF13,b_rgb:262c35/v1693148974/Asset%20Mantle%20-%20Team%202023/Leads/Screenshot_2023-08-27_203811_metg4b.png', 
      techProfiles : (
        <TechP>
              <a className='linkiden' href="https://www.linkedin.com/in/srimayee-satapathy-915bb0227/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/whoiissrii" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/whoiissrii/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Aarna Singhal',
      role: 'Research Core',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688491031/Asset%20Mantle%20-%20Team%202023/Content/Aarna%20Singhal.jpg', 
      techProfiles : (
        <TechP>
               <a className='linkiden' href="https://www.linkedin.com/in/aarnasinghal" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/aarnasinghal09" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/aarnasinghal09/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></TechP>
      )
    },
    {
      name: 'Shreya gupta ',
      role: 'Research Core',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688491042/Asset%20Mantle%20-%20Team%202023/Content/Shreya%20gupta.png', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/shreya-gupta-0b6821255" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/ShreyaG62537332" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/_shreyaguptaa_/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Megha yadav',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688541471/Asset%20Mantle%20-%20Team%202023/Content/Megha%20Yadav.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/megha-yadav-021851245" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/039megha16072" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/meghaa_931/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Sakshi ',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688491032/Asset%20Mantle%20-%20Team%202023/Content/Sakshi.jpg', 
      techProfiles : (
        <TechP>
        <a className='linkiden' href="https://www.linkedin.com/in/sakshi-mishra-86618a24b" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className='twitter' href="https://twitter.com/sakshimiishra" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a className='insta' href="https://www.instagram.com/miishrasakshii9/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Anushree Bondia',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688491031/Asset%20Mantle%20-%20Team%202023/Content/Anushree%20Bondia.jpg', 
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/anushree-bondia-b16139219" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/AnushreeBondia?t=CkeWSHsm_UtVJoEiBZlr-g&s=08" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/seraphic_anushree/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
        
  ];

  const mediaTeam = [
    {
      name: 'Sanya Gupta',
      role: 'Media Lead',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_12px_solid_rgb:F2AF13,b_rgb:262c35/v1693148975/Asset%20Mantle%20-%20Team%202023/Leads/Screenshot_2023-08-27_203657_ozt5kq.png', 
      techProfiles : (
        <TechP>
              <a className='linkiden' href="https://www.linkedin.com/in/sanya-gupta-1a422b24a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/sanya_gupta19" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/_.sanya.__19/?next=%2F" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Deepakshi',
      role: 'Media Core',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693724908/Asset%20Mantle%20-%20Team%202023/Graphics%20and%20Media/IMG-20230211-WA0033_z8eciq.jpg',
      techProfiles : (
        <TechP>
               <a className='linkiden' href="https://www.linkedin.com/in/deepakshi-865b5b227" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/Deeps260503?t=nbgj3m6X46jLCdRjORtYEw&s=09" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/deepakshiii___/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              </TechP>
      )
    },
    {
      name: 'Jiya Malik ',
      role: 'Media Core',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693724868/Asset%20Mantle%20-%20Team%202023/Graphics%20and%20Media/Photo_kgni52.jpg',
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/jiya-malik-689774253" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/Jiyamalik183245" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://www.instagram.com/jiya.malik06/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Pooja',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/ar_1:1,b_rgb:262c35,bo_10px_solid_rgb:F2AF13,c_fill,g_auto,r_max,w_1000,z_1.5/v1693724865/Asset%20Mantle%20-%20Team%202023/Graphics%20and%20Media/IMG-20230423-WA0027_v6gnhk.jpg',
      techProfiles : (
        <TechP>
        <a className='linkiden' href="https://www.linkedin.com/in/pooja-a06537259" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className='twitter' href="https://twitter.com/PoojaKumari890" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a className='insta' href="https://www.instagram.com/poojaa_xix/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Divyansha Agrawal ',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693724912/Asset%20Mantle%20-%20Team%202023/Graphics%20and%20Media/IMG-20230615-WA0043_leplrf.jpg',
      techProfiles : (
        <TechP>
        <a className='linkiden' href="http://linkedin.com/in/divyansha-agrawal-b18b8b247"><FaLinkedin /></a>
          <a className='twitter' href="https://twitter.com/DivyanshaAgraw5?t=kW-J_qHw2moufXeZ_7Ar9g&s=09" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a className='insta' href="https://instagram.com/agrawal_divyansha?igshid=NGExMmI2YTkyZg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Tripti Jaiswal',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688490606/Asset%20Mantle%20-%20Team%202023/Graphics%20and%20Media/Tripti%20Jaiswal.jpg',
      techProfiles : (
        <TechP>
        <a className='linkiden' href="https://www.linkedin.com/in/tripti-jaiswal-898472257/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className='twitter' href="https://twitter.com/triptijaiswall" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a className='insta' href="https://www.instagram.com/triptiijaiswal/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
        
  ];

  const outreachTeam = [
    {
      name: 'Nikhila K S',
      role: 'Outreach Lead',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_12px_solid_rgb:F2AF13,b_rgb:262c35/v1688488845/Asset%20Mantle%20-%20Team%202023/Leads/Nikhila%20K%20S.jpg', 
      techProfiles : (
        <TechP>
        <a className='linkiden' href="https://www.linkedin.com/in/know-nikhila-k-s/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a className='twitter' href="https://twitter.com/Nikhila_KS_" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a className='insta' href="https://www.instagram.com/ks_nikhila_/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </TechP>
      )
    },
    {
      name: 'Tanisha Bansal ',
      role: 'Outreach Core',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1693725362/Asset%20Mantle%20-%20Team%202023/Outreachy/IMG-20230802-WA0023_lkhfkk.jpg',
      techProfiles : (
        <TechP>
               <a className='linkiden' href="https://www.linkedin.com/in/tanisha-bansal-4541a0225" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/Tanisha46394055?t=bGmj2PXgA8wy63RoN1oP0Q&s=09" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://instagram.com/tanis_ha9907?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              </TechP>
      )
    },
    {
      name: 'Aiman ',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688489575/Asset%20Mantle%20-%20Team%202023/Outreachy/Aiman.jpg',
      techProfiles : (
        <TechP>
        <a className='linkiden' href="https://www.linkedin.com/in/aiman-shaikh-1a89b022a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className='twitter' href="https://twitter.com/aimanSHAIK31933" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a className='insta' href="https://www.instagram.com/aiman_._2/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
    {
      name: 'Sripriya Agarwal',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688489578/Asset%20Mantle%20-%20Team%202023/Outreachy/Sripriya%20Agarwal.jpg',
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/sripriya-agarwal-483475261" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/Agarwa1Sripriya?t=m7vwumEP8g3DQWYHN7G3AA&s=09" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://instagram.com/sripriyaagarwal16?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Sneha ',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688489581/Asset%20Mantle%20-%20Team%202023/Outreachy/Sneha.jpg',
      techProfiles : (
        <TechP>
            <a className='linkiden' href="https://www.linkedin.com/in/sneha-10a985261" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a className='twitter' href="https://twitter.com/Sneha2811981358" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a className='insta' href="https://instagram.com/sneha14166?igshid=NGExMmI2YTkyZg==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </TechP>
      )
    },
    {
      name: 'Anshika Aggarwal ',
      role: 'Co-Ordinator',
      imageUrl: 'https://res.cloudinary.com/djv5kc7as/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_rgb:F2AF13,b_rgb:262c35/v1688489576/Asset%20Mantle%20-%20Team%202023/Outreachy/Anshika%20Aggarwal.jpg',
      techProfiles : (
        <TechP>
        <a className='linkiden' href="https://www.linkedin.com/in/anshika-aggarwal-704847249" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className='twitter' href="https://twitter.com/kipupwidanshika?t=yab8J2GRhw87QhZ4nNpJNQ&s=09" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a className='insta' href="https://instagram.com/agg.anshika007?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </TechP>
      )
    },
        
  ];

  return (
    <TeamContainer>
    <TeamHead>MEET THE TEAM</TeamHead>
    <TeamWrapper>
      <TeamName>
        Advisor
      </TeamName>
      <TeamListWrapper3>
          {advisor.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              techProfiles={member.techProfiles}
            />
            
          ))}
          
        </TeamListWrapper3>
      </TeamWrapper>

      <TeamWrapper>
      <TeamName>
        President
      </TeamName>
      <TeamListWrapper2>
          {president.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              techProfiles={member.techProfiles}
            />
          ))}
        </TeamListWrapper2>
      </TeamWrapper>

      <TeamWrapper>
      <TeamName>
        Vice President
      </TeamName>
      <TeamListWrapper2>
          {vicePresident.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              techProfiles={member.techProfiles}
            />
          ))}
        </TeamListWrapper2>
      </TeamWrapper>

      <TeamWrapper>
      <TeamName>
        Event Management Team
      </TeamName>
      <TeamListWrapper>
          {eventsTeam.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              techProfiles={member.techProfiles}
            />
          ))}
        </TeamListWrapper>
      </TeamWrapper>

      <TeamWrapper>
      <TeamName>
        Graphics and Media Team
      </TeamName>
      <TeamListWrapper>
          {mediaTeam.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              techProfiles={member.techProfiles}
            />
          ))}
        </TeamListWrapper>
      </TeamWrapper>

      <TeamWrapper>
      <TeamName>
        Research and Content Team
      </TeamName>
      <TeamListWrapper>
          {researchTeam.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              techProfiles={member.techProfiles}
            />
          ))}
        </TeamListWrapper>
      </TeamWrapper>

      <TeamWrapper>
      <TeamName>
        Outreach Team
      </TeamName>
      <TeamListWrapper>
          {outreachTeam.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              techProfiles={member.techProfiles}
            />
          ))}
        </TeamListWrapper>
      </TeamWrapper>

      <TeamWrapper>
      <TeamName>
        Technical Team
      </TeamName>
      <TeamListWrapper>
          {techTeam.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              techProfiles={member.techProfiles}
            />
          ))}
        </TeamListWrapper>
      </TeamWrapper>

      </TeamContainer>
  )
}

export default TeamPage