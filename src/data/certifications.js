import placeholderCert from '../assets/law3.png';
import hciaEulerCert from '../assets/hcia.pdf';
import jsEssentialsCert from '../assets/Javascript Essentials.pdf';
import flux from '../assets/flux.pdf'
import dataAnalyticsCert from '../assets/Data Analytics.pdf';
import hccdaAiImg from '../assets/HWENDCAIDA739896.png';
import hccdaTechImg from '../assets/HWENDCTEDA067609.png';
import llm from '../assets/certified_llm_certificate.pdf';
import tefl from '../assets/TR1271347426-certificate.pdf'
import tefl_img from '../assets/tefl_img.jpeg'
import openeuler from '../assets/openeuler_img.jpeg'
import javascript_img from '../assets/javascript_img.jpeg'
import flux_img from '../assets/flux_img.jpeg'
import data_img from '../assets/data_img.jpeg'
import ai_img from '../assets/ai_img.jpeg'
import tech_img from '../assets/tech_essential_img.jpeg'
import llm_img from '../assets/llm_img.jpeg'
export const certifications = [
  {
    id: 'huawei-openeuler',
    title: 'openEuler Certificate',
    issuer: 'Huawei',
    description:
      'Certification covering networking fundamentals, routing, switching, and enterprise network technologies.',
    image: openeuler,
    credentialUrl: hciaEulerCert,
  },
  {
    id: 'javascript',
    title: 'JavaScript Certification',
    issuer: 'Cisco Networking Academy',
    description:
      'Validated proficiency in JavaScript fundamentals, ES6+ features, DOM manipulation, and asynchronous programming.',
    image: javascript_img,
    credentialUrl: jsEssentialsCert,
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    issuer: 'Flux Creative Technologies',
    description:
      'Covers modern frontend development including HTML, CSS, responsive design, and React-based application building.',
    image: flux_img,
    credentialUrl: flux,
  },
  {
    id: 'azure-data-analytics',
    title: 'Data Analytics',
    issuer: 'Data and AI Developer Initiative',
    description:
      'Foundational knowledge of cloud concepts, Azure services, security, privacy, compliance, and pricing models.',
    image: data_img,
    credentialUrl: dataAnalyticsCert,
  },
  {
    id: 'hccda-ai',
    title: 'HCCDA AI',
    issuer: 'Huawei Cloud',
    description:
      'Linux operating system certification covering openEuler administration, system management, and open-source ecosystem.',
    image: ai_img,
    credentialUrl: hccdaAiImg,
  },
  {
    id: 'hccda-tech-essentials',
    title: 'HCCDA Tech-Essentials',
    issuer: 'Huawei Cloud',
    description:
      'Linux operating system certification covering openEuler administration, system management, and open-source ecosystem.',
    image: tech_img,
    credentialUrl: hccdaTechImg,
  },
  {
    id: 'llm-security',
    title: 'LLM Security',
    issuer: 'Red Team Leaders',
    description:
      'Understanding of large language model security principles, prompt safety, and responsible AI deployment practices.',
    image: llm_img,
    credentialUrl: llm,
  },
  {
    id: 'llm-security',
    title: 'TEFL',
    issuer: 'TEFL Professional Institute',
    description:
      'TEFL Certified, demonstrating communication, adapability, and global collolaboration proficiency.',
    image: tefl_img,
    credentialUrl: tefl,
  },
];
