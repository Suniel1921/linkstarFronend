import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import WhyUs from './components/whyUs/WhyUs';
import { Toaster } from 'react-hot-toast';
import Vacency from './components/vacency/Vacency';
import AdminDashboard from './components/admin/AdminDashboard';
import CreateVacency from './components/admin/CreateVacency';
import DropdownData from './components/dropdown/DropdownData';
import ApplyNow from './components/applynow/ApplyNow';
import ContactData from './components/admin/ContactData';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import OurBusinessPartner from './components/ourPartner/OurBusinessPartner';

// Data for DropdownData components
const dropdownData = [
  {
    path: '/our-company/chairperson',
    userImg : '/image/wordfromchairperson.jpg',
    heading: 'Word from Chairperson',
    para1: 'Greeting from Nepal',
    para2: 'Link Star Manpower Services Pvt. Ltd. takes pride and pleasure in being the moderating vendor of outsource human labor and wants to humbly thank all its foreign and domestic associates and clients, who trusted us enough to make possible what we are planning and executing.',
    para3: 'Having been in the industry for over several years, we envision global prosperity as well as mutual welfare of both all Nepalese manpower and overseas businesses organization.',
    para4: 'Nepalese professionals are the most pursued in every sector globally, for their intellectual, technical, physical and adaptive abilities. And when it comes to outsourcing manpower',
    para5: 'I would like to assure reliability and accuracy.',
    para6 : 'Thanks and regards,',
    para7: ' Chandra Mani Rai',
    para8: ' Chairperson',
  },
  {
    path: '/our-company/managing-director',
    // userImg : '/image/wordfromchairperson.jpg',
    heading: 'Words from Executive Director',
    para1: `It is our great pleasure to introduce ourselves as one of the fast growing recruitment/manpower agency operating in Nepal.`,
    para2: `We would like to bring it to our valued client's notice that Link Star Manpower Services Pvt. Ltd., with its competent staff member stands for quality services in order to meet required demands of the clients.`,
    para3: `We always consider the fact that the human potential should be utilized to the maximum extent for the betterment of the world. Hence, our priority is always to bridge up the opportunities and the human resources. In short, we undertake the responsibility to provide the right worker for the right job.`,
    para4: `We look forward to working with your esteemed organization in the days to come with mutual benefits.`,
    para5:`Assuring you of quality services.`,
    para6 : 'Thanks and regards,',
    para7 : `Harka Mani Rai`,
    para8: 'Executive Director',
  },
  {
    path: '/our-company/intl-marketing-director',
    userImg : '/image/marketingDirector.jpg',
    heading: `Words from Int'l Marketing Director `,
    para1: 'Dear Clients & Employers',
    para2: 'It is great pleasure to introduce ourselves as a specialist in the field of Manpower Recruiting. we are here for you to give the best of human work force, Whether our candidates with previous overseas employment experience, or those entering into overseas assignments or the first time, we ensure theyre available at the most competitive pay scales, and yet prepared in every which way to deliver maximum efficiency. Even our continual expansion in workforce and client base cannot deter our commitment to you, or compel us to compromise on our quality.',
    para3: 'Having ingenious quality, we built a glorious reputation providing a total co-operations & services to our valued & respected clients promptly, efficiently, and providing more workers as required by the principal. We always keep our clients interest in the highest priority in order to place the workers. We used to recruit manpower as professionals, Highly Skilled, Skilled, Semi-Skilled, Unskilled workers having knowledge of English & Hindi speaking within shortest possible time as required.',
    para4: 'You may contact us on any business day for any inquisition regarding the further information about our organization and services.',
    para5: ``,
    para6: `Thanks and regards,`,
    para7: `Sanju B.K.`,
    para8: `Int'l Marketing Director`
  },
  {
    path : '/our-company/managing-director',
    heading: 'Word from Managing Director',
    para1: `In present, there are hundreds of recruiting companies in Nepal, among which Link Star Manpower is found to be most specific and the reliable as its expert team, its collaboration, its formation, and as a whole, its vision to look after why foreign employment is so vital for today's generation.`,
    para2: `We aim to make the right assimilation of the two parties and have the progressive initiation for the betterment of an individual and company. Hovering to quarries and information may deprive the reality and lacks the reliability, so, Link Star Manpower goes so closely to every intuition and acts accordingly.`,
    para3: `We have established Help Desk, Public Relation Desk, Quarries Desk that address to the people directly. Our Website helps the clients abroad to know about us and Nepalese workers. Likewise, management is always eager to deal on the different issues with clients. As our success is closely related with our well-wisher, clients and the employee candidate we are always ready to co-ordinate with deep respect and responsibility. With experience of many years in the best Manpower from Nepal, I want to assure for quality services.`,
    para4:`Thank you for your business`,
    para5: ``,
    para6: `Thanks and regards,`,
    para7: `Durga Mani Rai`,
    para8: `Managing Director`,
    
  },
 {
  path : '/our-company/marketing-officer',
  heading: 'Word form Marketing Officer',
  para1 : `Greetings Employers,`,
  para2: `It gives us great pleasure to introduce ourselves as a manpower recruiting expert. We are here to provide you with the best human work force. Whether our candidates have had prior overseas employment experience or are taking on their first overseas assignment, we make sure they are readily available at the most competitive pay scales while also being fully prepared to provide the highest level of efficiency. Even the constant growth of our staff and clientele cannot break our commitment to you or force us to lower our standards. Having brilliant quality, we established a prestigious reputation by offering our esteemed and respected clients complete cooperation and services swiftly, effectively and by delivering extra workers as needed by the main. When placing the employees, we always put the needs of our clients first. When needed, we used to quickly hire professionals, highly skilled workers, skilled workers, semi-skilled workers, and unskilled individuals who could speak Hindi and English.`,
  para3: `Any business day, you are welcome to get in touch with us if you have any questions about our company or our services.`,
  para4: ` `,
  para5: ``,
  para6: 'Thanks and regards,',
  para7: `Ratna Bahadur Adhikari`,
  para8: `Marketing Officer`
 },
 {
  path : `/our-company/general-manager`,
  userImg : '/image/generalManager.jpg',
  heading : `Word from General Manager`,
  para1: `Link Star Manpower Services Pvt. Ltd.' takes plume and pride in being the leading company of outsourced manpower and wants to humbly thank all its national and international affiliates and clients, whose hard work, faith & trust makes us potential and capable to deploy finest human force to work all over the world.`,
  para2 : `We are confident and Positive of fulfilling every aspects of recruitment with promising results. We stand by every averment we make in regards to how perfectly Nepalese professionals can enhance your organizations functioning and productivity. Nepalese professionals are the most pursued in every sector globally, for their intellectual, technical, physical and adaptive abilities. And when it comes to outsourcing manpower, we're the first and often the only company, which off-shore employers as well Nepalese professionals find dependable enough.`,
  para3: `I would like to assure on the reliability and accuracy on us.`,
  para4: `Thank You`,
  para5: ``,
  para6: `Thanks and regards,`,
  para7: `Padam Sundar Rai`,
  para8: `General Manager `,
 },
 {
  path : '/our-company/BOD',
  heading : `Word form BOD`,
  para1: ` It is our great pleasure to introduce ourselves as one of the fast growing recruitment/manpower agency operating in Nepal.`,
  para2: `We would like to bring it to our valued client's notice that Link Star Manpower Services Pvt. Ltd., with its competent staff member stands for quality services in order to meet required demands of the clients.`,
  para3 : `We always consider the fact that the human potential should be utilized to the maximum extent for the betterment of the world. Hence, our priority is always to bridge up the opportunities and the human resources. In short, we undertake the responsibility to provide the right worker for the right job.`,
  para4: `We look forward to working with your esteemed organization in the days to come with mutual benefits`,
  para5: `Assuring you of quality services.`,
  para6: `Thanks and regards,`,
  para7 : `ANG DAWA SHERPA`,
  para8: 'Executive Director'
 },








//  ---------drop down procedure data-------------
{
  path : '/procedure/why-nepalese',
  heading : "Why Nepalese",
  para1 : 'The fact that Nepalese people are committed to their duties and responsibilities cannot be denied because of which countries, especially the Middle East and East Asian countries have Sifted their interest toward Nepalese manpower by recruiting them in different categories.',
  para2: `What could be the reason behind recounting Nepalese manpower? The reasons could definitely be the honest, hard- working, loyalty, discipline and above all commitment Nepalese people towards one's duties and responsibilities.`,
  para3: `The other reasons could be the wider choice of Nepalese manpower ranging from skilled, semi-skilled, experienced, trained and professionals, Besides, Nepalese manpower is always readily available from immediate placement.`,
  para4: `Climatic condition plays a great role. Since Nepalese people are accustomed to working in any climate condition, there https://linkstar.com.np/why-nepalese/ uld be no problems for the emplover with Nepalese people regarding climatic conditions.`
},


{
  path : `/procedure/how-its-work`,
  heading : 'How its Work',
  para1 : 'Receipt of complet set of Demand Documents from Employer',
  para2 : `Demand Verification & Pre-Approval (Department of Foreign Employment)`,
  para3 : `* Also release Advertisement in Leading News paper to Source Potential candidate `,
  para4: `Interview Assessment (Screening the Suitable Candidates`,
  para5: `Interview by Experts to Shortlist. Practical Test if Required`,
  para6: `Final Interview by Employers Authorized Representative
  Complete Medical Examinaton
  
  Documentation & Check list (For Visa Procecssing)
  
  Visa Processing
  
  * Receipt of Visa
  
  Orientation Class
  
  Mobilization (Ticketing & Immigration Clearance`

},
{
  path : '/procedure/required-documents',
  heading: 'Required Documents',
  para1 : `1.DEMAND LETTER`,
  para2: `Briefing all details regarding the categories and quantities required. Please prepare this letter in company head with complete seal and signature and attest this document first from the Chamber of Commerce and Ministry of Foreign Affairs or Nepal Embassy.`,
  para3: `2.POWER OF ATTORNEY`,
  para4: `Authorizing the Agent in Nepal to act on the employer's behalf. Please prepare this letter in company head with complete seal and signature and attest this document first from the "Chamber of Commerce and Industry" of the concerned country and the Nepalese Embassy.`,
  para5: `3. COMPANY AGREEMENT`,
  para6: `Briefing the terms and conditions applicable to both the parties. Please prepare this letter in company head with complete seal and signature and attest this document first from the "Chamber of Commerce and Industry" of the concerned country and the Nepalese Embassy.`,
  para7: `4. GUARANTEE LETTER`,
  para8: `Job Offer Agreement for the candidate provided by the company showing salary and other benefits including food, accommodation, transportation, leave facilities, medical facilities, insurance and air passage etc. Please prepare this letter in the company head with complete seal and signature.`,
  para9: `5. EMPLOYMENT AGREEMENT`,
  para10: `Providing guarantee to the Ministry of Labour, Nepal, stating that the stated workers will be working as per the attested documents provided. Please prepare this letter in the company head with complete seal and signature.`
}
  

];



const App = () => {
    //for aos animations
    useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration
      });
    }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='/why-us' element={<WhyUs />} />
          <Route path='/demands' element={<Vacency />} />
          <Route path='/apply-now' element={<ApplyNow />} />
          <Route path='/our-business-partner' element={<OurBusinessPartner/>}/>

          {/* Render DropdownData components */}
          {dropdownData.map(({ path, userImg, heading, para1, para2, para3, para4, para5, para6, para7, para8, para9, para10 }) => (
            <Route key={path} path={path} element={<DropdownData heading={heading} userImg={userImg} para1={para1}  para2={para2} para3={para3} para4={para4} para5={para5} para6={para6} para7={para7} para8={para8} para9={para9} para10={para10}/>} />
          ))}

          <Route path='/dashboard/admin' element={<AdminDashboard />}>
            <Route path='/dashboard/admin/createVacency' element={<CreateVacency/>} />
            <Route path='/dashboard/admin/contactData' element={<ContactData/>} />
        
          </Route>
        </Route>
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
