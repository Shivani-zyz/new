import React, { useState } from "react"
function Contact(){


  const[name,setname]=useState("")
  const[email,setemail]=useState("") 
  const[needs,setneeds]=useState("")
 



 const inputStyle = {
  width: "100%",
  height: "30px",
  padding: "8px",
  fontSize: "16px",
  marginTop: "5px",
  marginBottom: "15px",
  border:"none",
  borderBottom: "1px solid #aaa"
};

const buttonStyle = {
  marginTop: "25px",
  backgroundColor: "#fcd971",
  border: "none",
  padding: "15px",
  width: "100%",
  fontSize: "18px",
  fontWeight: "bold",
  cursor: "pointer",
  borderRadius: "6px",
  color: " #474747"
};


    return(
        <>
        
        <div className="landing-container">
  <div className="text-section">
    <h1>
      Let's <span className="highlight">Get Started</span>
    </h1>
    <p>We provide enterprise services across diverse industrial sectors.</p>
    <a className="button" href="#">Tell Us About your Project →</a>
  </div>
  <div className="chip-image">
    <svg width="100%" height="auto" viewBox="0 0 690 706" fill="none" xmlns="http://www.w3.org/2000/svg" class="wil-web"><path d="M348.297 325v162.779c0 18.778-15.223 34-34 34H36c-18.778 0-34 15.222-34 34v149.889" stroke="#1D2E88" stroke-width="4" opacity="0" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="0px 1px"></path><path d="M238.937 231.532h-45.115M189.02 227.839a3.697 3.697 0 0 1 3.692 3.703 3.688 3.688 0 0 1-3.692 3.692 3.695 3.695 0 0 1-3.693-3.692 3.704 3.704 0 0 1 3.693-3.703ZM248.013 218.636H144.486l-4.735 5.922H61.603M158.116 270.821a3.695 3.695 0 0 0 3.693-3.693 3.695 3.695 0 0 0-3.693-3.693 3.695 3.695 0 0 0-3.692 3.693 3.695 3.695 0 0 0 3.692 3.693ZM16 246.455a3.695 3.695 0 0 0 3.693-3.692A3.695 3.695 0 0 0 16 239.07a3.695 3.695 0 0 0-3.692 3.693A3.695 3.695 0 0 0 16 246.455Z" stroke="#1D2E88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path><path d="M253.838 257.896h-55.159l-8.725 9.165h-28.249M144.149 238.495a5.931 5.931 0 1 0-10.976-4.501 5.931 5.931 0 0 0 10.976 4.501Z" stroke="#1D2E88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path><path d="M268.199 245.24h-91.693l-9.021-9.021h-22.93M239.816 205.051h-60.88l-4.439-4.439h-24.566M145.844 196.948a3.695 3.695 0 0 1 3.693 3.693 3.695 3.695 0 0 1-3.693 3.692 3.695 3.695 0 0 1-3.693-3.692 3.695 3.695 0 0 1 3.693-3.693ZM110.364 130.214a3.695 3.695 0 0 1 3.692 3.693 3.703 3.703 0 0 1-3.692 3.702 3.697 3.697 0 0 1-3.693-3.702 3.69 3.69 0 0 1 3.693-3.693ZM208.487 268.324a3.695 3.695 0 0 1 3.692 3.693 3.695 3.695 0 0 1-3.692 3.692 3.695 3.695 0 0 1-3.693-3.692 3.695 3.695 0 0 1 3.693-3.693ZM238.784 271.95h-26.623M240.475 285.036h-36.161l-9.643-9.652h-63.119l-9.26 9.26H79.779M155.331 308.684a3.653 3.653 0 1 1 .001 7.307 3.653 3.653 0 0 1-.001-7.307ZM135.409 339.874a3.654 3.654 0 1 0-6.757-2.784 3.654 3.654 0 0 0 6.757 2.784Z" stroke="#1D2E88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path><path d="m199.471 280.224-4.889 4.889h-15.478v21.017l-6.419 6.428-13.144.134M174.438 371.182a5.189 5.189 0 0 1 5.185 5.185 5.19 5.19 0 0 1-5.185 5.185 5.19 5.19 0 0 1-5.185-5.185 5.189 5.189 0 0 1 5.185-5.185ZM74.356 279.278a5.189 5.189 0 0 1 5.185 5.185 5.19 5.19 0 0 1-5.185 5.185 5.19 5.19 0 0 1-5.185-5.185 5.189 5.189 0 0 1 5.185-5.185ZM86.791 354.613a5.189 5.189 0 0 1 5.185 5.185 5.19 5.19 0 0 1-5.185 5.185 5.19 5.19 0 0 1-5.185-5.185 5.189 5.189 0 0 1 5.185-5.185ZM55.864 219.373a5.19 5.19 0 0 1 5.185 5.185 5.19 5.19 0 0 1-5.185 5.185 5.19 5.19 0 0 1-5.185-5.185 5.19 5.19 0 0 1 5.185-5.185ZM106.489 162.693a5.189 5.189 0 0 1 5.185 5.185 5.19 5.19 0 0 1-5.185 5.185 5.189 5.189 0 0 1-5.185-5.185 5.188 5.188 0 0 1 5.185-5.185ZM63.2 111.302a5.19 5.19 0 0 1 5.185 5.185 5.189 5.189 0 0 1-5.184 5.185 5.189 5.189 0 0 1-5.185-5.185 5.19 5.19 0 0 1 5.185-5.185v0ZM207.212 135.362a5.188 5.188 0 0 1 5.185 5.185 5.189 5.189 0 0 1-5.185 5.185 5.19 5.19 0 0 1-5.185-5.185 5.189 5.189 0 0 1 5.185-5.185ZM241.813 297.827h-29.78l-23.648 23.648v42.637l-9.346 9.346M173.56 192.845a3.654 3.654 0 1 0 0-7.308 3.654 3.654 0 0 0 0 7.308v0ZM197.341 205.071v-9.672l-6.419-6.428-13.144-.134" stroke="#1D2E88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path><path d="M241.231 190.865h-29.789l-23.648-23.657v-26.47l13.508-.192M188.31 338.531h-51.667M186.837 167.572H111.99M170.89 167.868v-20.817l-13.068-13.058H113.76M102.099 224.825l-7.328 17.937H19.828M163.01 339.067l-13.393 21.046H92.219M136.864 133.228l-10.045-17.219H68.465M461.769 231.532h45.115M511.686 227.839a3.697 3.697 0 0 0-3.692 3.703 3.688 3.688 0 0 0 3.692 3.692 3.695 3.695 0 0 0 3.693-3.692 3.704 3.704 0 0 0-3.693-3.703ZM452.693 218.636H556.22l4.735 5.922h78.148M542.588 270.821a3.695 3.695 0 0 1-3.693-3.693 3.695 3.695 0 0 1 3.693-3.693 3.695 3.695 0 0 1 3.692 3.693 3.695 3.695 0 0 1-3.692 3.693ZM684.704 246.455a3.695 3.695 0 0 1-3.693-3.692 3.695 3.695 0 0 1 3.693-3.693 3.694 3.694 0 0 1 3.692 3.693 3.694 3.694 0 0 1-3.692 3.692Z" stroke="#1D2E88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path><path d="M446.866 257.896h55.159l8.725 9.165h28.249M556.556 238.495a5.931 5.931 0 1 1 10.975-4.501 5.931 5.931 0 0 1-10.975 4.501Z" stroke="#1D2E88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path><path d="M432.506 245.24h91.693l9.021-9.021h22.93M460.892 205.051h60.88l4.439-4.439h24.566M554.862 196.948a3.695 3.695 0 0 0-3.693 3.693 3.695 3.695 0 0 0 3.693 3.692 3.695 3.695 0 0 0 3.693-3.692 3.695 3.695 0 0 0-3.693-3.693ZM590.343 130.214a3.695 3.695 0 0 0-3.693 3.693 3.703 3.703 0 0 0 3.693 3.702 3.697 3.697 0 0 0 3.692-3.702 3.69 3.69 0 0 0-3.692-3.693ZM492.219 268.324a3.695 3.695 0 0 0-3.692 3.693 3.695 3.695 0 0 0 3.692 3.692 3.695 3.695 0 0 0 3.693-3.692 3.695 3.695 0 0 0-3.693-3.693ZM461.923 271.95h26.623M460.231 285.036h36.16l9.643-9.652h63.119l9.26 9.26h42.513M545.374 308.684a3.653 3.653 0 1 0-.001 7.307 3.653 3.653 0 0 0 .001-7.307ZM565.296 339.874a3.654 3.654 0 1 1 6.757-2.784 3.654 3.654 0 0 1-6.757 2.784Z" stroke="#1D2E88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path><path d="m501.234 280.224 4.889 4.889h15.478v21.017l6.419 6.428 13.144.134M526.267 371.182a5.189 5.189 0 0 0-5.185 5.185 5.19 5.19 0 0 0 5.185 5.185 5.189 5.189 0 0 0 5.185-5.185 5.188 5.188 0 0 0-5.185-5.185ZM626.349 279.278a5.189 5.189 0 0 0-5.185 5.185 5.19 5.19 0 0 0 5.185 5.185 5.189 5.189 0 0 0 5.185-5.185 5.188 5.188 0 0 0-5.185-5.185ZM613.914 354.613a5.188 5.188 0 0 0-5.185 5.185 5.189 5.189 0 0 0 5.185 5.185 5.19 5.19 0 0 0 5.185-5.185 5.189 5.189 0 0 0-5.185-5.185ZM644.841 219.373a5.19 5.19 0 0 0-5.185 5.185 5.19 5.19 0 0 0 5.185 5.185 5.189 5.189 0 0 0 5.185-5.185 5.189 5.189 0 0 0-5.185-5.185ZM594.216 162.693a5.189 5.189 0 0 0-5.185 5.185 5.19 5.19 0 0 0 5.185 5.185 5.189 5.189 0 0 0 5.185-5.185 5.188 5.188 0 0 0-5.185-5.185ZM637.505 111.302a5.189 5.189 0 0 0-5.185 5.185 5.188 5.188 0 0 0 5.185 5.185 5.188 5.188 0 0 0 5.184-5.185 5.189 5.189 0 0 0-5.184-5.185v0ZM493.493 135.362a5.188 5.188 0 0 0-5.185 5.185 5.189 5.189 0 0 0 5.185 5.185 5.19 5.19 0 0 0 5.185-5.185 5.189 5.189 0 0 0-5.185-5.185ZM458.892 297.827h29.78l23.648 23.648v42.637l9.346 9.346M527.146 192.845a3.654 3.654 0 1 1 0-7.308 3.654 3.654 0 0 1 0 7.308v0ZM503.365 205.071v-9.672l6.419-6.428 13.144-.134" stroke="#1D2E88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path><path d="M459.474 190.865h29.789l23.648-23.657v-26.47l-13.508-.192M512.397 338.531h51.667M513.869 167.572h74.847M529.816 167.868v-20.817l13.068-13.058h44.062M598.608 224.825l7.328 17.937h74.943M537.699 339.067l13.393 21.046h57.398M563.843 133.228l10.045-17.219h58.354M359.849 136.659v-43.78M363.433 88.217a3.586 3.586 0 0 1-3.584 3.584 3.586 3.586 0 0 1-3.584-3.584 3.586 3.586 0 0 1 3.584-3.584 3.586 3.586 0 0 1 3.584 3.584ZM372.365 145.471V44.994l-5.738-4.596v-28.71M321.713 58.225a3.586 3.586 0 0 0 3.584 3.584 3.586 3.586 0 0 0 3.584-3.584 3.594 3.594 0 0 0-3.584-3.593 3.588 3.588 0 0 0-3.584 3.593Z" stroke="#1D2E88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path><path d="M334.257 151.134V97.586l-8.896-8.468v-27.41M355.281 45.096a5.757 5.757 0 1 0 0-11.513 5.757 5.757 0 0 0 0 11.513Z" stroke="#1D2E88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path><path d="M346.544 165.072v-89l8.756-8.765V45.059M385.554 137.523V78.431l4.308-4.309V50.278M393.418 46.313a3.586 3.586 0 0 1-3.584 3.584 3.586 3.586 0 0 1-3.584-3.584 3.586 3.586 0 0 1 3.584-3.584 3.586 3.586 0 0 1 3.584 3.584ZM458.193 11.873a3.587 3.587 0 0 1-3.584 3.585 3.587 3.587 0 0 1-3.585-3.585 3.587 3.587 0 0 1 3.585-3.584 3.587 3.587 0 0 1 3.584 3.584ZM324.137 107.103a3.587 3.587 0 0 1-3.584 3.585 3.587 3.587 0 0 1-3.584-3.585 3.586 3.586 0 0 1 3.584-3.584 3.586 3.586 0 0 1 3.584 3.584ZM320.618 136.519v-25.841M307.916 138.163v-35.098l9.369-9.37V32.442l-8.988-8.989V12.18M284.963 55.515a3.547 3.547 0 1 1-7.094 0 3.547 3.547 0 0 1 7.094 0ZM256.03 36.443a3.547 3.547 0 1 0 0-7.094 3.547 3.547 0 0 0 0 7.094Z" stroke="#1D2E88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path><path d="m312.596 98.366-4.754-4.745V78.598h-20.4l-6.24-6.23-.13-12.759M224.311 74.057a5.036 5.036 0 0 1-5.032 5.032 5.037 5.037 0 0 1-5.033-5.032 5.037 5.037 0 0 1 5.033-5.033 5.036 5.036 0 0 1 5.032 5.033ZM313.506 6.033a5.037 5.037 0 0 1-5.033 5.032 5.037 5.037 0 0 1-5.033-5.032A5.037 5.037 0 0 1 308.473 1a5.037 5.037 0 0 1 5.033 5.033ZM371.651 6.144a5.036 5.036 0 0 1-5.032 5.033 5.037 5.037 0 0 1-5.033-5.033 5.037 5.037 0 0 1 5.033-5.032 5.036 5.036 0 0 1 5.032 5.032ZM421.643 44.13a5.033 5.033 0 1 0 0-10.066 5.033 5.033 0 0 0 0 10.066ZM295.502 139.463v-28.905l-22.953-22.963h-41.385l-9.062-9.062M400.944 76.758a3.547 3.547 0 1 0 0-7.093 3.547 3.547 0 0 0 0 7.093ZM385.531 96.295h9.388l6.239-6.24.13-12.758M471.058 72.915a5.036 5.036 0 0 0 5.032 5.033 5.037 5.037 0 0 0 5.033-5.033 5.037 5.037 0 0 0-5.033-5.032 5.036 5.036 0 0 0-5.032 5.032ZM399.328 138.887v-28.905l22.953-22.953h41.376l9.072-9.072M255.993 87.53V37.38M421.931 86.1V43.973M421.644 70.622h20.204l12.675-12.684V15.17M335.521 363.992v43.78M331.937 412.433a3.586 3.586 0 0 1 3.584-3.584 3.586 3.586 0 0 1 3.584 3.584 3.586 3.586 0 0 1-3.584 3.584 3.586 3.586 0 0 1-3.584-3.584ZM322.518 355.342v79.38l-6.015 3.631v22.683M373.655 442.425a3.586 3.586 0 0 0-3.584-3.584 3.586 3.586 0 0 0-3.584 3.584 3.593 3.593 0 0 0 3.584 3.593 3.588 3.588 0 0 0 3.584-3.593Z" stroke="#1D2E88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path><path d="M361.111 349.516v53.548l8.896 8.469v27.41M309.627 363.076v50.052l-4.297 3.65v20.197M301.954 440.56a3.586 3.586 0 0 1 3.584-3.584 3.586 3.586 0 0 1 3.584 3.584 3.586 3.586 0 0 1-3.584 3.584 3.586 3.586 0 0 1-3.584-3.584ZM370.638 393.546a3.587 3.587 0 0 1 3.584-3.584 3.587 3.587 0 0 1 3.585 3.584 3.587 3.587 0 0 1-3.585 3.585 3.587 3.587 0 0 1-3.584-3.585ZM374.158 364.13v25.841M387.144 362.487v35.099l9.368 9.369v61.255l-8.988 8.988v11.273M439.34 464.208a3.547 3.547 0 1 0 0 7.094 3.547 3.547 0 0 0 0-7.094ZM471.06 426.593a5.037 5.037 0 0 1 5.032-5.033 5.037 5.037 0 0 1 5.033 5.033 5.037 5.037 0 0 1-5.033 5.033 5.037 5.037 0 0 1-5.032-5.033ZM392.734 494.617a5.036 5.036 0 0 0-5.032-5.032 5.036 5.036 0 0 0-5.033 5.032 5.036 5.036 0 0 0 5.033 5.033 5.036 5.036 0 0 0 5.032-5.033ZM321.412 466.927a5.036 5.036 0 0 0-5.033-5.032 5.036 5.036 0 0 0-5.032 5.032 5.036 5.036 0 0 0 5.032 5.033 5.036 5.036 0 0 0 5.033-5.033ZM273.728 456.52a5.033 5.033 0 1 0 0 10.066 5.033 5.033 0 0 0 0-10.066ZM399.869 361.187v28.905l22.953 22.963h41.385l9.063 9.062M294.159 414.633a3.438 3.438 0 1 0 0 6.875 3.438 3.438 0 0 0 0-6.875Z" stroke="#1D2E88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path><path d="M309.627 398.307h-9.215l-6.125 5.08-.127 10.387M224.312 427.735a5.037 5.037 0 0 0-5.033-5.032 5.037 5.037 0 0 0-5.033 5.032 5.038 5.038 0 0 0 5.033 5.033 5.038 5.038 0 0 0 5.033-5.033ZM296.041 361.763v28.905l-22.953 22.953h-41.376l-9.072 9.072M439.377 413.12v50.15M273.439 414.55v42.127" stroke="#1D2E88" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path><path d="M305.426 136.317v-10.18h6.447v10.18h-6.447ZM292.742 136.317v-10.18h6.447v10.18h-6.447ZM318.322 136.317v-10.18h6.447v10.18h-6.447ZM331.221 136.317v-10.18h6.447v10.18h-6.447ZM344.118 136.317v-10.18h6.447v10.18h-6.447ZM357.016 136.317v-10.18h6.446v10.18h-6.446ZM369.913 136.317v-10.18h6.447v10.18h-6.447ZM382.811 136.317v-10.18h6.446v10.18h-6.446ZM395.697 136.317v-10.18h6.447v10.18h-6.447ZM389.944 354.333v10.18h-6.446v-10.18h6.446ZM402.627 354.333v10.18h-6.447v-10.18h6.447ZM377.047 354.333v10.18H370.6v-10.18h6.447ZM364.149 354.333v10.18h-6.446v-10.18h6.446ZM351.251 354.333v10.18h-6.447v-10.18h6.447ZM338.354 354.333v10.18h-6.446v-10.18h6.446ZM325.456 354.333v10.18h-6.447v-10.18h6.447ZM312.559 354.333v10.18h-6.447v-10.18h6.447ZM299.673 354.333v10.18h-6.447v-10.18h6.447ZM241.442 288.008h-10.518v-6.672h10.518v6.672ZM241.442 301.076h-10.518v-6.673h10.518v6.673ZM241.442 274.72h-10.518v-6.672h10.518v6.672ZM241.442 261.433h-10.518v-6.672h10.518v6.672ZM241.442 248.145h-10.518v-6.672h10.518v6.672ZM241.442 234.858h-10.518v-6.672h10.518v6.672ZM241.442 221.57h-10.518v-6.673h10.518v6.673ZM241.442 208.282h-10.518v-6.672h10.518v6.672ZM241.442 195.005h-10.518v-6.673h10.518v6.673ZM459.267 288.008h10.518v-6.672h-10.518v6.672ZM459.267 301.075h10.518v-6.672h-10.518v6.672ZM459.267 274.72h10.518v-6.672h-10.518v6.672ZM459.267 261.433h10.518v-6.672h-10.518v6.672ZM459.267 248.145h10.518v-6.672h-10.518v6.672ZM459.267 234.858h10.518v-6.673h-10.518v6.673ZM459.267 221.57h10.518v-6.673h-10.518v6.673ZM459.267 208.282h10.518v-6.672h-10.518v6.672ZM459.267 195.005h10.518v-6.673h-10.518v6.673Z" fill="#1D2E88" stroke="#1D2E88" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path><rect x="241.165" y="139.081" width="215.98" height="215.98" rx="30" fill="#fff" stroke="#1D2E88" stroke-width="4"></rect><rect x="250.335" y="148.251" width="197.638" height="197.638" rx="17" fill="#F9C51C"></rect><rect x="263.225" y="161.141" width="171.859" height="171.859" rx="20" fill="#1D2E88"></rect><path d="m301.21 271.131-13.924-48.121h14.293l6.455 29.605h.369l7.654-29.605h11.25l7.653 29.699h.369l6.455-29.699h14.293l-13.924 48.121h-12.264l-8.023-26.88h-.369l-8.022 26.88H301.21ZM373.045 223.01v48.121h-12.818V223.01h12.818ZM379.119 271.131V223.01h12.818v37.594h19.088v10.527h-31.906Z" fill="#fff" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path><path d="M264.163 158.67a2.475 2.475 0 1 0 0-4.95 2.475 2.475 0 0 0 0 4.95ZM279.998 153.656a1.397 1.397 0 1 0 .001-2.795 1.397 1.397 0 0 0-.001 2.795ZM283.998 153.656a1.397 1.397 0 1 0 .001-2.795 1.397 1.397 0 0 0-.001 2.795ZM288.012 153.656a1.397 1.397 0 1 0 .001-2.795 1.397 1.397 0 0 0-.001 2.795ZM292.027 153.656a1.397 1.397 0 1 0 0-2.794 1.397 1.397 0 0 0 0 2.794ZM296.027 153.656a1.397 1.397 0 1 0 0-2.794 1.397 1.397 0 0 0 0 2.794ZM300.039 153.656a1.397 1.397 0 1 0 .001-2.795 1.397 1.397 0 0 0-.001 2.795ZM304.039 153.656a1.397 1.397 0 1 0 .001-2.795 1.397 1.397 0 0 0-.001 2.795ZM308.053 153.656a1.397 1.397 0 1 0 .001-2.795 1.397 1.397 0 0 0-.001 2.795ZM312.068 153.656a1.397 1.397 0 1 0 0-2.794 1.397 1.397 0 0 0 0 2.794ZM316.067 153.656a1.397 1.397 0 1 0 0-2.794 1.397 1.397 0 0 0 0 2.794ZM283.934 157.593a1.396 1.396 0 1 0 0-2.795 1.398 1.398 0 0 0 0 2.795ZM287.947 157.593a1.397 1.397 0 1 0 .001-2.795 1.397 1.397 0 0 0-.001 2.795ZM291.947 157.593a1.397 1.397 0 1 0 .001-2.795 1.397 1.397 0 0 0-.001 2.795ZM295.961 157.593a1.397 1.397 0 1 0 .001-2.795 1.397 1.397 0 0 0-.001 2.795ZM299.975 157.593a1.396 1.396 0 1 0 0-2.795 1.398 1.398 0 0 0 0 2.795ZM303.976 157.593a1.396 1.396 0 1 0 0-2.795 1.398 1.398 0 0 0 0 2.795ZM307.988 157.593a1.397 1.397 0 1 0 .001-2.795 1.397 1.397 0 0 0-.001 2.795ZM311.988 157.593a1.397 1.397 0 1 0 .001-2.795 1.397 1.397 0 0 0-.001 2.795ZM316.001 157.593a1.397 1.397 0 1 0 .001-2.795 1.397 1.397 0 0 0-.001 2.795ZM320.016 157.593a1.396 1.396 0 1 0 0-2.795 1.398 1.398 0 0 0 0 2.795ZM256.853 337.297a1.397 1.397 0 1 0 0-2.794 1.397 1.397 0 0 0 0 2.794ZM437.109 337.297a1.398 1.398 0 1 0-.001-2.795 1.398 1.398 0 0 0 .001 2.795ZM437.109 158.619a1.398 1.398 0 1 0-.002-2.796 1.398 1.398 0 0 0 .002 2.796Z" fill="#1D1D1B" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path><path d="M428.425 186.909c.043 1.392.06 2.896.094 4.546M411.023 169.766s8.568-.696 13.113 4.374c2.595 2.896 3.592 5.611 4.005 8.842" stroke="#fff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path></svg>
  </div>
</div>


<div style={{fontFamily:'sans-serif',textAlign:"center"}}><header className="header">
        <h1 style={{fontSize:"4.5rem"}}>We Empower</h1>
        <h2>Our Clients To Dream Big With Their Brand</h2>
      </header><br /><br /><br /><br />

      <section className="content">
        <small>Contact Us</small>
        <h2>Tell Us Something About Your <br/> Project Or Goal. We'll Listen.</h2><br />
        <p>You have questions. We have answers.</p><br />

        <div className="buttons">
          <button className="btn-primary">Message Us</button>
          <p><hr style={{height:'2px',width:'40px',backgroundColor:" #282828",position:"relative",top:"20px"}} /></p>
          <button className="btn-outline">Book A Slot</button>
          <p><hr style={{height:'2px',width:'40px',backgroundColor:"#282828",position:"relative",top:"20px"}} /></p>
          <button className="btn-outline">Call Us</button>
        </div>
      </section></div>








      


      <div style={{ display: "flex", maxWidth: "1200px", margin: "50px auto", border: "1px solid #003366", borderRadius: "10px", overflow: "hidden" }}>
      <div style={{ backgroundColor: "#142e8f", color: "white", padding: "40px", width: "40%", fontSize: "24px", fontWeight: "bold", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        Let's get the<br />conversation<br />started.
      </div>
      <form style={{ padding: "40px", width: "50%" }}>
        <label htmlFor="service">I'm interested in....</label>
        <select id="service" name="service" style={{ ...inputStyle, height: "50px" }}>
          <option>All Services</option>
          <option>Service 1</option>
          <option>Service 2</option>
          <option>Service 3</option>
        </select>

        <label htmlFor="name">Your name</label>
        <input className="input" onChange={(e)=>setname(e.target.value)} type="text" id="name" name="name" placeholder="Your name" style={inputStyle} />

        <label htmlFor="email">Your email</label>
        <input className="input" onChange={(e)=>setemail(e.target.value)} type="email" id="name" name="email" placeholder="Your email" style={inputStyle} />

        <label htmlFor="needs">Tell us about your needs</label>
        <input id="needs" onChange={(e)=>setneeds(e.target.value)} name="needs" placeholder="Tell us about your needs" style={inputStyle} />

        <label className="attachment" style={{ marginTop: "15px", fontWeight: "600", display: "inline-block", cursor: "pointer" }}>
          📎 Add Attachment (Optional)
          <input type="file" name="attachment" style={{ display: "none" ,border:"1px solid black"}} />
        </label>

        <button type="submit" style={buttonStyle}>Let's Talk</button>
      </form>
    </div><br /><br /><br /><br />










    <div className="body">
      <p>Visit Us</p>
      <h1 style={{fontSize: "2em"}}>Explore Our Innovation Hubs Worldwide</h1><br /><br /><br />

      <div className="hub-container">
        <div className="hub" style={{position:"relative", left:"-50px",top:"50px"}}>
          <img src="https://thewitslab.com/_next/static/media/california-office.805fedc1.png?imwidth=1080" alt="California" />
          <h2>Delhi, INDIA</h2>
          <div className="weather">Clouds<br />8:27 PM</div>
        </div>

        <div className="hub" style={{position:"relative", top:"320px",right:"100px"}}>
          <img src="https://wallpapercave.com/wp/wp8621025.jpg" alt="Arizona" />
          <h2>Kolkata, INDIA</h2>
          <div className="weather">Clear<br />9:27 PM</div>
        </div>

        <div className="hub" style={{position:"relative", left:"-130px"}}>
          <img src="https://thewitslab.com/_next/static/media/michigan.4008b48a.png?imwidth=640" alt="Ypsilanti" />
          <h2>Rajsthan, INDIA</h2>
          <div className="weather">Clear<br />11:27 PM</div>
        </div>

        <div className="hub" style={{position:"relative", left:"-120px",top:"200px"}}>
          <img src="https://media.istockphoto.com/photos/bangalore-or-bengaluru-picture-id1382384282?b=1&k=20&m=1382384282&s=170667a&w=0&h=hsjsp5jAfD24ucu_BZXw4Oy-K0Eg717xMg0Bl25UW7o=" alt="Manchester" />
          <h2>Bengluru, INDIA</h2>
          <div className="weather">Rain<br />4:27 AM</div>
        </div>

        <div className="hub" style={{position:"relative", left:"-100px", top:"100px"}}>
          <img src="https://thewitslab.com/_next/static/media/mohali-office.dc3ff317.png?imwidth=1080" alt="Mohali" />
          <h2>Mohali, Punjab</h2>
          <div className="weather">Clear<br />8:57 AM</div>
        </div>
      </div>
    </div>

     <div className="how-we-work">
      <div className="content">
        <h1>Get An Understanding Of<br />How We Work</h1>
        <button className="approach-btn">Our Approach</button>
      </div>
    </div>
        

        
        
        
        </>
    )
}export default Contact