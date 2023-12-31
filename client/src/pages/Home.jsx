import React from 'react'
import { iconAutoLoansOrange, iconCheckingOrange, iconCreditCardsOrange, iconHomeOrange, iconRetirementOrange, iconSavingsOrange, pncInsightsPHowToVoidACheck, pncLogoRev } from '../assets'
import Login from './Login'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      
    <header>
        <nav>
            <a href="index.html" id="logo">
                <img src={pncLogoRev} alt="PNC Logo"/>
            </a>
            <ul class="center-navigation">
                <li>
                    <a href="#services">Personal</a>
                </li>
                <li>
                    <a href="#services">Products & services</a>
                </li>
                <li>
                    <a href="#services">corporate & institutional</a>
                </li>
                <li>
                    <a href="#about">about</a>
                </li>
            </ul>

            <ul class="right-navigation">
                <li>
                    <a href="null">
                        <span class="material-symbols-outlined" id="globe">
                            Language
                        </span>
                        <span>English</span>
                    </a>
                </li>
                <li>
                    <a href="null">
                        <span>Customer Service</span>
                    </a>
                </li>
                <li>
                    <a href="null">
                        <span>Locations</span>
                    </a>
                </li>
                <li>
                    <a href="null">
                        <span>Security</span>
                    </a>
                </li>
            </ul>
        </nav>
        <div class="login-signup">
            <Link to="/login">
            <span>LOG IN</span>
                <span class="material-symbols-outlined">
                    Login
                </span>
            </Link>
                
            
            <a href="null">
                <span>CREATE ACCOUNT</span>
                <span class="material-symbols-outlined">
                    account_circle
                </span>
            </a>
        </div>
    </header>


    {/* <!-- LOGIN & SIGN UP -->


    <!--------- HERO SECTION ---------> */}
    <section class="hero">
        <div class="wrapper">
            <h1>Change the way you Bank</h1>
            <p>Take your next step with <b>PNC Virtual Wallet -</b> checking, savings and financial tools designed to go
                wherever you do.</p>
            <a href="#" class="btn">Learn More & Apply</a>
        </div>
    </section>


    {/* <!--------- PRODUCTS AND SERVICES SECTION ---------> */}
    <section class="products-and-services" id="services">
        <h1>Products & Services</h1>
        <h3>Explore and apply online.</h3>
        <div class="service-list">
            <div class="service">
                <img src={iconCheckingOrange} alt=""/>
                <a href="#">
                    <span>Checking</span>
                    <span class="material-symbols-outlined">
                        east
                    </span>
                </a>
            </div>
            <div class="service">
                <img src={iconCreditCardsOrange} alt=""/>
                <a href="#">
                    <span>Credit Cards</span>
                    <span class="material-symbols-outlined">
                        east
                    </span>
                </a>
            </div>
            <div class="service">
                <img src={iconSavingsOrange} alt=""/>
                <a href="#">
                    <span>Savings</span>
                    <span class="material-symbols-outlined">
                        east
                    </span>
                </a>
            </div>
            <div class="service">
                <img src={iconHomeOrange} alt=""/>
                <a href="#">
                    <span>Home Loans</span>
                    <span class="material-symbols-outlined">
                        east
                    </span>
                </a>
            </div>
            <div class="service">
                <img src={iconRetirementOrange} alt=""/>
                <a href="#">
                    <span>Retirement</span>
                    <span class="material-symbols-outlined">
                        east
                    </span>
                </a>
            </div>
            <div class="service">
                <img src={iconAutoLoansOrange} alt=""/>
                <a href="#">
                    <span>Auto Loans</span>
                    <span class="material-symbols-outlined">
                        east
                    </span>
                </a>
            </div>
        </div>
    </section>


    {/* <!---------- FINANCIAL WELLNESS ----------> */}
    <section class="financial-wellness">
        <div>
            <h1>Financial Wellness</h1>
            <p>We can help you get a clear picture of where you are today and help you plan for the future you want.</p>
            <a href="#">
                <span>Learn more and schedule your Financial Wellness conversation today</span>
                <span class="material-symbols-outlined">east</span>
            </a>
        </div>
    </section>


    {/* <!------------ INSIGHTS ------------> */}
    <section class="insight">
        <h1>Insights</h1>
        <p>Make today the day you take the next step toward your financial goals.</p>
        <div class="card-container">
            <a href="#" class="card">
                <div class="card-img">
                    <img src={pncInsightsPHowToVoidACheck} alt=""/>
                </div>
                <i>Spend</i>
                <h2>How to Void a Check</h2>
                <span>It is important to understand how to void a check and how to do it properly. It's a way to ensure
                    your bank account is
                    safe and secure. Here's how.</span>
                <i>4 min read</i>
            </a>

            <a href="#" class="card">
                <div class="card-img">
                    {/* <img src="../images/images/pnc_insights_p_exiting-stock-market-doesnt-mean-exiting-investments.jpg"
                        alt=""> */}
                </div>
                <i>Invest</i>
                <h2>Exiting the Stock Market Doesn’t Have to Mean Exiting Investments</h2>
                <span>Liquid assets may offer steady returns with less fluctuations to your principal investment as you
                    retire</span>
                <i>3 min read</i>
            </a>

            <a href="#" class="card">
                <div class="card-img">
                    {/* <img src="../images/images/pnc_insights_p_how-apply-financial-aid.jpg" alt=""> */}
                </div>
                <i>Borrow</i>
                <h2>How to Apply for Federal Financial Aid</h2>
                <span>Getting federal financial aid for college begins with knowing where and how to apply. Here are
                    some tips to help you
                    navigate the process.</span>
                <i>4 min read</i>
            </a>

        </div>
        <a href="#" class="view-more">View more insights</a>
    </section>



    {/* <!--------------- MOBILE APPS SECTION ---------------> */}
    <section class="mobile-apps">
        <h1>Mobile App</h1>
        <p>Bank anytime, anywhere.</p>
        <div class="wrapper">
            {/* <img src="../images/images/teaser-pnc-apps.svg" alt=""> */}
            <div class="content">
                <span>Open a new account, deposit a check, check balances, make bill payments and more – all from our
                    mobile
                    app on your
                    smartphone or tablet.[1] Available in English and Spanish.</span>
                <a href="#" class="learn-more">Learn More</a>
                <div class="download-links">
                    <a href="#">
                        {/* <img src="../images/images/download-on-app-store-apple.svg" alt=""> */}
                    </a>
                    <a href="#">
                        {/* <img src="../images/images/badge-get-it-on-google.svg" alt=""> */}
                    </a>
                </div>
            </div>
        </div>
    </section>


    {/* <!----------- CONTACT US -----------> */}
    <section class="contact-us">
        <h1>Contact Us</h1>
        <div class="contacts-options">
            <div class="contact">
                {/* <img src="../images/images/icon-calendar-white.svg" alt=""> */}
                <h2>Let's Meet</h2>
                <p>Review your calendar and find a
                    convenient time to meet with us.</p>
                <a href="#">
                    <span>Schedule an Appointnment</span>
                    <span class="material-symbols-outlined">east</span>
                </a>
            </div>
            <div class="contact">
                {/* <img src="../images/images/icon-location-white.svg" alt=""> */}
                <h2>Visit Us</h2>
                <p>Find a PNC location near you
                    and stop by to see us.
                </p>
                    <a href="#">
                        <span>Find a PNC Branch</span>
                        <span class="material-symbols-outlined">east</span>
                    </a>
            </div>
            <div class="contact">
                {/* <img src="../images/images/icon-phone-call-white.svg" alt=""> */}
                <h2>Call Us</h2>
                <p>Mon - Fri: 8 a.m. - 9 p.m. ET
                    <br/>Sat - Sun: 8 a.m. - 5 p.m. ET
                </p>
                <a href="#">
                    <span>Call 1-888-762-2265</span>
                    <span class="material-symbols-outlined">east</span>
                </a>
            </div>
        </div>
    </section>


    <section class="legal-disclosures">
        <button>
            <span>Important Legal Disclosured & Information</span>
            <span class="material-symbols-outlined || add">
                add
            </span>
            {/* <!-- <span class="material-symbols-outlined || remove">
                        remove
                    </span> --> */}
        </button>
        <div class="legal-content">
            <ol>
                <li>PNC does not charge a fee for Mobile Banking. However, third party message and data rates may apply.
                    These include fees
                    your wireless carrier may charge you for data usage and text messaging services. Check with your
                    wireless carrier for
                    details regarding your specific wireless plan and any data usage or text messaging charges that may
                    apply. Also, a
                    supported mobile device is needed to use the Mobile Banking App. Mobile Deposit is a feature of PNC
                    Mobile Banking. Use
                    of the Mobile Deposit feature requires a supported camera-equipped device and you must download a
                    PNC
                    mobile banking
                    app. Eligible PNC Bank account and PNC Bank Online Banking required. Certain other restrictions
                    apply.
                    See the mobile
                    banking terms and conditions in the <a href="#">PNC Online Banking Service Agreement.</a></li>
            </ol>

            <span>The customer videos on this site are non-paid testimonials by real PNC customers.</span>

            {/* <img src="../images/images/logo-equal-housing-lender-white.svg" alt=""> */}

            <span>PNC, PNC HomeHQ, PNC Home Insight, and Home Insight are registered service marks of The PNC Financial
                Services Group,
                Inc. ("PNC"). PNC has pending patent applications directed at various features and functions of Home
                Insight
                Planner and
                Home Insight Tracker. All loans are provided by PNC Bank, National Association, a subsidiary of PNC, and
                are
                subject to
                credit approval and property appraisal.</span>

            <span>The PNC Financial Services Group, Inc. ("PNC") uses the marketing names PNC Private Bank℠ and PNC
                Private
                Bank Hawthorn®
                to provide investment consulting and wealth management, fiduciary services, FDIC-insured banking
                products
                and services,
                and lending of funds to individual clients through PNC Bank, National Association ("PNC Bank"), which is
                a
                Member FDIC,
                and to provide specific fiduciary and agency services through its subsidiary, PNC Delaware Trust Company
                or
                PNC Ohio
                Trust Company. PNC uses the marketing name PNC Institutional Asset Management® for the various
                discretionary
                and
                non-discretionary institutional investment, trustee, custody and related services provided by PNC Bank,
                and
                investment
                management activities conducted by PNC Capital Advisors, LLC, an SEC-registered investment adviser and
                wholly-owned
                subsidiary of PNC Bank (“PNC Capital Advisors”). PNC uses the marketing name PNC Institutional Advisory
                Solutions® for
                discretionary investment management, trustee, and related services conducted by PNC Bank. PNC uses the
                marketing name
                PNC Retirement Solutions® for investment, consulting, trustee, and custody services for
                employer-sponsored
                retirement
                plans provided by PNC Bank. PNC does not provide legal, tax, or accounting advice unless, with respect
                to
                tax advice,
                PNC Bank has entered into a written tax services agreement. PNC Bank is not registered as a municipal
                advisor under the
                Dodd-Frank Wall Street Reform and Consumer Protection Act ("Act"). Investment management and related
                products and
                services provided to a "municipal entity" or "obligated person" regarding "proceeds of municipal
                securities"
                (as such
                terms are defined in the Act) will be provided by PNC Capital Advisors.</span>

            <b>Investments: Not FDIC Insured. No Bank Guarantee. May Lose Value.</b>

            <span>©2023 The PNC Financial Services Group, Inc. All rights reserved. PNC Bank, National Association.
                <b>Member FDIC.</b></span>

            <span><a href="#">Read a summary of privacy rights for California residents</a> which outlines the types of
                information we collect, and how
                and why we use that information.</span>
        </div>
    </section>

    <footer>

    </footer>



    </div>
  )
}

export default Home