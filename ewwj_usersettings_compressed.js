"use strict";let searchBox=document.getElementById("searchID"),searchBoxContainer=document.getElementById("inputboxID"),popup=document.getElementById("popup-element");const messages_msg=document.getElementById("messagesID");let searchForm=document.getElementById("searchFormID1"),isHovering=!1,stopLoading=!0,is_authenticated1=document.getElementById("is_authenticatedID"),server_status4="True",cleared_pages=["terms","notice","2257","dmcaTake","dmca","pp",];function setCookie(e,t,i){let s=new Date;s.setTime(s.getTime()+864e5*i);let o="expires="+s.toUTCString();document.cookie=e+"="+t+";"+o+";path=/"}function getCookie(e){let t=e+"=",i=decodeURIComponent(document.cookie).split(";");for(let s=0;s<i.length;s++){let o=i[s];for(;" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return!1}function updateCookie(e,t){getCookie(e),document.cookie=e+"="+t}function deleteCookie(e){document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"}function savingCookie(){let e=document.getElementById("entryWarningID");e.style.display="none",document.body.removeChild(e);let t=getCookie("hasEntered");!1!=t?(console.log(t),doNothing()):setCookie("hasEntered","True",5)}function create_popup2(e,t,i,s){var o=document.createElement("div");o.className="entryWarning",o.id="entryWarningID";let a=`
    <div class="popup-content">
        <h2>${t}</h2>
        <p>${i}</p>
        <p>This Website hosts <b>Hardcore Adult Content</b>: by entering you agree to accept our <a href="" class="linksBi">Terms of Use</a> & 
        <a href=""  class="linksBi" >Notice of Adult Content</a></p>
        <a onclick="savingCookie()"><button>Enter</button></a>
        <a href="javascript:void(0);" onclick="window.history.back();" ><button>Leave</button></a>

        <div class="button_bit">
            <small>This Website is soley restricted for adults</small>
            <img src="/static/images/rta-logo2.png" alt="restricted to adults logo" style="margin-right: 5px;">
        </div>
    </div>
    `;o.innerHTML=a,document.body.appendChild(o),o.style.display="flex",o.style.flexDirection="column"}function doNothing(){}function closeEntryWarning(e){let t=document.getElementById("entryWarningID");"enter"==e?t.style.display="none":window.history.back()}function getUrls(){let e={};return"True"===server_status4?(e.video_url="https://www.xodice.com/users/uploads/",e.likes_url="https://www.xodice.com/users/likes/",e.premium="https://www.xodice.com/premium/",e.pp_page="https://www.xodice.com/privacy_policy/",e.tos="https://www.xodice.com/terms-of-use/",e.notice="https://www.xodice.com/notice/",e.contact="https://www.xodice.com/contact_us/",e.userhome="https://www.xodice.com/users/dashboard/",e.upload="https://www.xodice.com/users/submission/",e.logout="https://www.xodice.com/users/logout_user",e.login="https://www.xodice.com/users/loginUser/",e.join="https://www.xodice.com/users/join/"):(e.video_url="http://127.0.0.1:8000/users/uploads/",e.likes_url="http://127.0.0.1:8000/users/likes/",e.premium="http://127.0.0.1:8000/premium/",e.pp_page="http://127.0.0.1:8000/privacy_policy/",e.tos="http://127.0.0.1:8000/terms-of-use/",e.notice="http://127.0.0.1:8000/notice/",e.contact="http://127.0.0.1:8000/contact_us/",e.userhome="http://127.0.0.1:8000/users/dashboard/",e.upload="http://127.0.0.1:8000/users/submission/",e.logout="http://127.0.0.1:8000/users/logout_user",e.login="http://127.0.0.1:8000/users/loginUser/",e.join="http://127.0.0.1:8000/users/join/"),e}window.addEventListener("load",function(){let e=document.getElementById("page-on").value;(getCookie("orientation")?doNothing():(deleteCookie("orientation"),setCookie("orientation","straight",1e4)),"False"==is_authenticated1)?doNothing():!1!=getCookie("hasEntered")?doNothing():cleared_pages.includes(e)?doNothing():create_popup2("","Adult Only (18+)","This website contains adult content and is intended for individuals <b>(18)</b> or <b>(21)</b> years of age or older.","#")});let main_input="";function open_dropwdown(){console.log("open_dropdown function"),isHovering=!0,popup.style.display="block",popup.style.display="flex",popup.style.flexDirection="column";makeAjexRequest(document.getElementById("searchID").value)}function makeAjexRequest(e){e.toString()}function addElementsToDOM(e,t){var i=document.getElementById("popup-element");let s=e[0].toString(),o=e[1],a=document.getElementById("yourLinkId");if(t)doNothing();else for(;i.firstChild;)i.removeChild(i.firstChild);if(main_input=t,a){if(t){for(;i.firstChild;)i.removeChild(i.firstChild);for(let n of o){var l=document.createElement("a"),r="";r="True"===server_status4?"http://www.xodice.com/search/"+encodeURIComponent(n):"http://127.0.0.1:8000/search/"+encodeURIComponent(n),l.href=r,l.textContent=n,l.id="yourLinkId",i.appendChild(l)}var c=document.createElement("hr"),d=document.createElement("small");d.textContent=s,i.appendChild(d),i.appendChild(c)}else for(;i.firstChild;)i.removeChild(i.firstChild)}else if(t){for(let u of o){var l=document.createElement("a"),r="";r="True"===server_status4?"http://www.xodice.com/search/"+encodeURIComponent(u):"http://127.0.0.1:8000/search/"+encodeURIComponent(u),l.href=r,l.textContent=u,l.id="yourLinkId",i.appendChild(l)}var c=document.createElement("hr"),d=document.createElement("small");d.textContent=s,i.appendChild(d),i.appendChild(c)}else for(;i.firstChild;)i.removeChild(i.firstChild)}function keep_open(){isHovering=!0,popup.style.display="block",popup.style.display="flex",popup.style.flexDirection="column"}function hidePopup(){!1==isHovering&&(popup.style.display="none")}function open_search(){searchBox.style.display="block",searchBoxContainer.style.display="block"}searchForm.addEventListener("submit",function(e){e.preventDefault();let t=document.getElementById("searchID").value,i="";i="True"===server_status4?`https://www.xodice.com/search/${t}`:`http://127.0.0.1:8000/search/${t}`,window.location.href=i;let s=getCookie("searchValue");""!=s?updateCookie("searchValue",`${s};${t}`):setCookie("searchValue",t,1)}),popup.addEventListener("mouseover",function(){keep_open()}),popup.addEventListener("mouseout",function(){isHovering=!1,hidePopup()});let overly=document.getElementById("overlyID");function show_message(e){messages_msg.style.display="block",messages_msg.innerHTML=`<div style="
    color: white; 
    font-size: 18px; 
    padding: 10px; 
    font-family:Arial, Helvetica, sans-serif;
    ">${e}</div>`,setTimeout(function(){messages_msg.style.display="none"},3e3)}overly.addEventListener("mouseover",function(){popup.style.display="none"}),setTimeout(function(){var e=document.getElementById("autoDismissAlert");e&&e.remove()},3e3);let is_popup=!1,authenticatedElement=document.getElementById("is_authenticatedID"),authenticated=authenticatedElement.value;function openMobilePopup(){var e=document.createElement("div");e.className="popup2",e.id="myPopup";let t="",i="",s="",o="",a="";"True"===server_status4?(t="https://www.xodice.com/posts",i="https://www.xodice.com/users/join/",s="https://www.xodice.com/users/dashboard/",o="https://www.xodice.com/submission/",a="https://www.xodice.com/premium/"):(t="http://127.0.0.1:8000/posts",i="http://127.0.0.1:8000/users/join/",s="http://127.0.0.1:8000/users/dashboard/",o="http://127.0.0.1:8000/submission/",a="http://127.0.0.1:8000/premium/");let n="";n="False"==authenticated?`
            <h2></h2>
            <a href="${t}">Posts</a>
            <a href="${i}">Join</a>
            <a href="${o}">Submit</a>
            <a href="${a}" id="popupPremium" >Premium</a>
            <a href="${s}">Account</a>
        `:`
        <h2></h2>
            <a href="${t}">Posts</a>
            <a href="${o}">Submit</a>
            <a href="${a}" id="popupPremium" >Premium</a>
            <a href="${s}">Account</a>
            <a href="/users/logout_user/">Log Out</a>
            
        `,e.innerHTML=n,document.body.appendChild(e),e.style.display="flex",e.style.flexDirection="column"}function closePopup2(){let e=document.getElementById("myPopup");e.style.display="none",document.body.removeChild(e)}function mobileHamburger(){is_popup?(closePopup2(),is_popup=!1):(openMobilePopup(),is_popup=!0)}let nameOfSite=document.getElementById("nameOfSite"),nameOfSiteValue=nameOfSite.value,tagsData=[];function yesSIr(e){tagsData.push(e)}function close_menuTags(){document.getElementById("mobileMenuDropdownTAGSOID").style.display="none"}let isTagsMobile_open=!1;function showMenuTags(){if(!1===isTagsMobile_open)close_menuTags(),isTagsMobile_open=!0;else{let e=document.getElementById("mobileMenuDropdownTAGSOID");e.style.display="block";let t=`
            ${tagsData[0]}
        `;e.innerHTML=t,isTagsMobile_open=!1}}function open_mobile_menu1(){var e=document.createElement("div");e.className="mobile_menu111",e.id="mobile_menu111ID";let t=getUrls();console.log(t.video_url);let i=`
    <div class="nav_bar">
        <p>${nameOfSiteValue}</p>
        <i class="fa-solid fa-xmark" onclick="closeMobileMenu101()"></i>
    </div>
    

    <div class="clickable_things">
        <a href="${t.video_url}" ><div><i class="fa-solid fa-video"></i> Videos </div></a>
        <a href="${t.likes_url}" ><div><i class="fa-solid fa-thumbs-up"></i> Likes </div></a>
        <a href="#" ><div><i class="fa-brands fa-discord"></i> Join Us</div></a>
        <a href="${t.premium}" id="PremiumID" >Wait list for Premium</a>
    </div>


    <div class="otherOptions">

        <a href="${t.pp_page}"><i class="fa-solid fa-shield-halved"></i>Privacy Policy</a>

        <a href="${t.tos}"><i class="fa-solid fa-book"></i>Terms of Use</a>

        <a href="${t.contact}"><i class="fa-regular fa-paper-plane"></i>Contact Us</a>

        <a href="${t.notice}"><i class="fa-solid fa-circle-exclamation"></i>NOTICE</a>

    </div>
    `;e.innerHTML=i,document.body.appendChild(e),e.style.display="flex",e.style.flexDirection="column",isTagsMobile_open=!0}function closeMobileMenu101(){let e=document.getElementById("mobile_menu111ID");e.style.display="none",document.body.removeChild(e)}function open_mobileMenu(){open_mobile_menu1()}let is_dorpDown_Open=!1;function openFooterOption(e){let t=`dropeurID${e}`,i=document.getElementById(t);is_dorpDown_Open?(i.style.display="none",is_dorpDown_Open=!1):(i.style.display="flex",i.style.flexDirection="column",is_dorpDown_Open=!0)}function searchInputUpdate(){document.getElementById("mobileSearchBarID").value}function close_mobileSearchBar(){let e=document.getElementById("mobile_search_barID");e.style.display="none",document.body.removeChild(e)}function open_mobileSearch(){var e=document.createElement("div");e.className="mobile_search_bar",e.id="mobile_search_barID";let t=`

        <div class="mobile_searchBar">

            <form action="/search_results/" method="POST">
                <input type="hidden" name="csrfmiddlewaretoken" value="${document.getElementById("csrfTok").value}">
                <input type="search" name="mobileSearchBar" id="mobileSearchBarID"  oninput="searchInputUpdate()" placeholder="Search. ">
            </form>

            <div> 
                <button type="button" onclick="close_mobileSearchBar()" >Cancel</button>
            </div>
        
        </div>

    `;e.innerHTML=t,document.body.appendChild(e),e.style.display="flex",e.style.flexDirection="column"}function close_mobileUser(){let e=document.getElementById("mobile_userSettingID");document.body.removeChild(e),e.style.display="none"}function cap_ori(e){let t=e.toString();return t.charAt(0).toUpperCase()+t.slice(1)}let orientation_icons1={Straight:"fa-venus-mars",Gay:"fa-mars-double",Lesbian:"fa-venus-double",Trans:"fa-transgender"};function open_mobileUser(){var e=document.createElement("div");e.className="mobile_userSetting",e.id="mobile_userSettingID";let t=getCookie("orientation"),i=cap_ori(t),s=orientation_icons1[i],o=getUrls(),a="",n=`
        <div class="section1" onclick="close_mobileUser()">
            <i class="fa-solid fa-xmark" id="lol222" ></i>
        </div>

        <div class="section2">


        ${a="True"==is_authenticated1.value?`
            <div class="login_section">
                <a href="${o.userhome}">
                    <i class="fa-solid fa-house-user"></i>
                    Home
                </a>
                <a href="${o.upload}">
                    <i class="fa-solid fa-cloud-arrow-up"></i>
                    Upload
                </a>
                <a href="${o.logout}">
                    <i class="fa-solid fa-sign-out-alt"></i>
                    Logout
                </a>
            </div>
            `:`
        <div class="login_section">
            <a href="${o.join}">
                <i class="fa-solid fa-user-plus"></i>
                Join Now
            </a>
            <a href="${o.login}" >
                <i class="fa-solid fa-right-to-bracket"></i>
                Login
            </a>
            <a href="${o.upload}" >
                <i class="fa-solid fa-cloud-arrow-up"></i>
                Upload
            </a>
        </div>
        `}


        <div class="later_section">
            <a>
               <i class="fa-solid fa-star"></i>
                X Videos
            </a>
        </div>


        <div class="later_section">
            <a>
                <i class="fa-solid fa-list"></i>
                Categories
            </a>
        </div>

        <div class="later_section">
            <a>
                <i class="fa-solid fa-chart-simple"></i>
                Channels
            </a>
        </div>

        <div class="later_section">
            <a href="${o.premium}">
                <i class="fa-solid fa-heart"></i>
                Premium
            </a>
        </div>



        <div class="later_section">
            <a onclick="open_orientation_chooser()">
                <i class="fa-solid ${s}"></i>
                ${i}
            </a>
        </div>

    

    </div>



    `;e.innerHTML=n,document.body.appendChild(e),e.style.display="flex",e.style.flexDirection="column"}function change_orientation(e){""!=getCookie("orientation")&&deleteCookie("orientation"),setCookie("orientation",e,1e4)}function close_orientation_chooser(){let e=document.getElementById("orientation_chooserID");document.body.removeChild(e),e.style.display="none"}function open_orientation_chooser(){close_mobileUser();var e=document.createElement("div");e.className="orientation_chooser",e.id="orientation_chooserID";let t=`

        <div class="mobile_orientation_chooser">
            
            <div class="orientation_chooser">

                <div class="orientation_options">
                    <div class="selections">
                        <a onclick="changing_straight_orientation()" id="straight_o_id" >Straight <i class="fa-solid fa-venus-mars"></i></a>

                        <a onclick="changing_gay_orientation()" id="gay_o_id">Gay <i class="fa-solid fa-mars-double"></i></a>

                        <a onclick="changing_lesbo_orientation()" id="lesbian_o_id">Lesbian <i class="fa-solid fa-venus-double"></i></a>

                        <a onclick="changing_trans_orientation()" id="trans_o_id">Trans <i class="fa-solid fa-transgender"></i></a>
                    </div>

                </div>

            </div>
        
        
        </div>

    `;e.innerHTML=t,document.body.appendChild(e),e.style.display="flex",e.style.flexDirection="column"}function changing_straight_orientation(){changeOrientation("straight","straight_o_id")}function changing_gay_orientation(){changeOrientation("gay","gay_o_id")}function changeOrientation(e,t){let i=document.getElementById(t);if(i){i.style.backgroundColor="#333",i.style.color="white",i.style.border="1px solid white",close_orientation_chooser();""!=getCookie("orientation")&&deleteCookie("orientation"),setCookie("orientation",e,1e4),window.location.reload()}}function changing_lesbo_orientation(){changeOrientation("lesbian","lesbian_o_id")}function changing_trans_orientation(){changeOrientation("trans","trans_o_id")}function makeBackendRequest(e,t){let i=document.querySelector("[name=csrfmiddlewaretoken]").value,s=new FormData;s.append("values",t),fetch(`/${e}/`,{method:"POST",headers:{"X-CSRFToken":i},body:s})}function getting_premium_email(){makeBackendRequest("my_view",document.getElementById("email_premium").value);let e=document.getElementById("first_element"),t=document.getElementById("second_element");e.style.display="none",t.style.display="block"}let account_userButton=document.getElementById("userBtn1"),isUser=document.getElementById("is_authenticatedID"),isUserAuth=isUser.value,server_status_="True",isAccountSettingOpen=!1;function closeAccountSetting(){let e=document.getElementById("account_settingID");e.style.display="none",document.body.removeChild(e),isAccountSettingOpen=!1}function create_user_setting(){var e=document.createElement("div");e.className="account_setting_popup",e.id="account_settingID";let t="",i="",s="",o="",a="https://discord.gg/kkddTJHQuF",n="",l="",r="";if("True"===server_status_?(i="https://www.xodice.com/users/loginUser/",s="https://www.xodice.com/users/join/",o="https://www.xodice.com/notice/",n="https://www.xodice.com/faq/",l="https://www.xodice.com/contact_us/",r="https://www.xodice.com/parental_controls/"):(i="http://127.0.0.1:8000/users/loginUser/",s="http://127.0.0.1:8000/users/join/",o="http://127.0.0.1:8000/notice/",n="http://127.0.0.1:8000/faq/",l="http://127.0.0.1:8000/contact_us/",r="http://127.0.0.1:8000/parental_controls/"),"False"===isUserAuth)t=`
        <div class="account_selection" >

                <div class="bubblepop">
                    <a href=${s} ><i class="fa-solid fa-user-plus"></i></a>
                    <a class="underling userJoin" href="${s}" >Sign Up</a>
                </div>

                <div class="bubblepop">
                    <a href="${i}" ><i class="fa-solid fa-user"></i></a>
                    <a class="underling" href="${i}" >Sign In</a>
                </div>

                <div class="bubblepop">
                    <a id="userSubmit" href="${s}" ><i class="fa-solid fa-upload"></i></a>
                    <a class="underling" href="${s}" >Upload</a>
                </div>
        </div>



            <div class="other" >

                <div class="area_select">
                    <i class="fa-solid fa-circle-exclamation"></i>
                    <a href="${o}" >Notice</a>
                </div>

                <div class="area_select">
                    <i class="fa-solid fa-message"></i>
                    <a href="${n}" >FAQ</a>
                </div>

                <div class="area_select"  style='cursor:pointer;'>
                    <i class="fa-regular fa-envelope-open" style='cursor:pointer;'></i>
                    <a href="${l}" style='cursor:pointer;'>Contact</a>
                </div>

                <div class="area_select">
                <i class="fa-solid fa-person-breastfeeding"></i>
                <a href="${r}" >Parietal Controls</a>
            </div>


                <div class="area_select">
                    <i class="fa-brands fa-discord"></i>
                    <a href="${a}" >Discord</a>
                </div>

            </div>
        
        `;else{let c="",d="",u="",p="",h="",m="",f="";"True"===server_status_?(c="https://www.xodice.com/users/dashboard/",d="https://www.xodice.com/users/submission/",u="https://www.xodice.com/users/likes/",p="https://www.xodice.com/users/logout_user",h="https://www.xodice.com/faq/",m="https://www.xodice.com/contact_us/",f="https://www.xodice.com/parental_controls/"):(c="http://127.0.0.1:8000/users/dashboard/",d="http://127.0.0.1:8000/users/submission/",u="http://127.0.0.1:8000/users/likes/",p="http://127.0.0.1:8000/users/logout_user",h="http://127.0.0.1:8000/faq/",m="http://127.0.0.1:8000/contact_us/",f="http://127.0.0.1:8000/parental_controls/"),t=`
        <div class="account_selection" >

                <div class="bubblepop">
                    <a href=${c} ><i class="fa-solid fa-house-user"></i></a>
                    <a class="underling userJoin" href="${c}" style="margin:auto;">Home</a>
                </div>

                <div class="bubblepop">
                    <a href="${d}" ><i class="fa-solid fa-cloud-arrow-up"></i></a>
                    <a class="underling" href="${d}" style="margin:auto;">Upload</a>
                </div>

                <div class="bubblepop">
                    <a id="userSubmit" href="${u}" ><i class="fa-solid fa-heart"></i></a>
                    <a class="underling" href="${u}" style="margin:auto;">Likes</a>
                </div>
        </div>



            <div class="other" >
                <div class="area_select">
                    <i class="fa-solid fa-user"></i>
                    <a href="${c}" >Profile</a>
                </div>

                <div class="area_select">
                    <i class="fa-solid fa-circle-exclamation"></i>
                    <a href="${o}" >Notice</a>
                </div>

                <div class="area_select">
                    <i class="fa-solid fa-message"></i>
                    <a href="${h}" >FAQ</a>
                </div>

                <div class="area_select" style='cursor:pointer;'>
                    <i class="fa-regular fa-envelope-open" style='cursor:pointer;'></i>
                    <a href="${m}" style='cursor:pointer;'  >Contact</a>
                </div>


                <div class="area_select">
                    <i class="fa-brands fa-discord"></i>
                    <a href="${a}" >Discord</a>
                </div>

                <div class="area_select">
                    <i class="fa-solid fa-person-breastfeeding"></i>
                    <a href="${f}" >Parietal Controls</a>
                </div>

                <div class="area_select">
                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                    <a href="${p}" >Log Out</a>
                </div>

            </div>
        
        `}e.innerHTML=t,document.body.appendChild(e),e.style.display="flex",e.style.flexDirection="column",isAccountSettingOpen=!0}account_userButton.addEventListener("click",function(){!1===isAccountSettingOpen?create_user_setting():closeAccountSetting()});let signUp_form=document.getElementById("userRegistrationFormID");function addErrorWarning(){let e=document.getElementById("error-warningID");document.getElementById("userRegistrationFormID").style.border="2px solid red",e.style.display="block"}if(signUp_form){let e=document.getElementById("agree2");signUp_form.addEventListener("submit",function(t){e.checked||(t.preventDefault(),addErrorWarning())})}