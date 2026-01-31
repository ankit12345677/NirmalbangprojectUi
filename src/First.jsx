import React, { useState } from "react";
import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AdvantageSection from "./Second";

// Import images (update paths as needed)
import Nirmalbanglogo from "../src/assets/Images/nirmalbanglogo.png";
import Images1 from "../src/assets/Images/images1.png";
import Images2 from "../src/assets/Images/images2.jpg";
import Images3 from "../src/assets/Images/images3.png";
import Map from "../src/assets/Images/Map.png";
import Rokicon from "../src/assets/Svg/Rokicon.svg";
import Crossicon from "../src/assets/Svg/Crossicon.svg";
import AUMicon from "../src/assets/Svg/AUMicon.svg";
import MFDicon from "../src/assets/Svg/MFDicon.svg";
import investorAddicon from "../src/assets/Svg/investorAddicon.svg";
import MFDpersonicon from "../src/assets/Svg/MFDPersonsvg.svg";
import Arrowupicon from "../src/assets/Svg/Arrowupicon.svg";
import Personrupeesicon from "../src/assets/Svg/Personrupeesicon.svg";
import Moneybag from "../src/assets/Svg/moneybag.svg";
import diversion from "../src/assets/Svg/diversion.svg";
import goalbased from "../src/assets/Svg/goalbased.svg";
import Leverage from "../src/assets/Svg/Leverage.svg";
import Capitalize from "../src/assets/Svg/Capitalize.svg";
import Position from "../src/assets/Svg/Position.svg";
import Transparent from "../src/assets/Svg/Transparent.svg";
import Flexibility from "../src/assets/Svg/Flexibility.svg";
import Relationships from "../src/assets/Svg/Relationships.svg";
import SIP from "../src/assets/Svg/SIP.svg";
import Trail from "../src/assets/Svg/Trail.svg";
import Commision from "../src/assets/Svg/Commision.svg";
import Lifetime from "../src/assets/Svg/Lifetime.svg";
import Insurance from "../src/assets/Svg/Insurance.svg";
import Digital from "../src/assets/Svg/Digital.svg";
import download from "../src/assets/Images/download.png";
import imp from "../src/assets/Images/imp.png";
import Mutual from "../src/assets/Svg/Mutual.svg";
import Portfolio from "../src/assets/Svg/Portfolio.svg";
import Income from "../src/assets/Svg/Income.svg";
import Alternative from "../src/assets/Svg/Alternative.svg";
import money from "../src/assets/Images/money.png";

export default function WebsiteNBAI() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="nb-page">
            <div className="nb-gradient">
                {/* ===================== TOP NAV ===================== */}
                <Navbar expand="lg" className="nb-nav py-3">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src={Nirmalbanglogo} alt="Nirmal Bang" height="40" />
                        </Navbar.Brand>

                        <Navbar.Toggle
                            aria-controls="basic-navbar-nav"
                            onClick={() => setMenuOpen(!menuOpen)}
                        />

                        <Navbar.Collapse id="basic-navbar-nav" className={menuOpen ? 'show' : ''}>
                            {/* Main nav on left */}
                            <Nav className="me-auto">
                                <Nav.Link href="#home" className="active">HOME</Nav.Link>
                                <Nav.Link href="#market">MARKET</Nav.Link>
                                <Nav.Link href="#opportunities">OPPORTUNITIES</Nav.Link>
                                <Nav.Link href="#platform">PLATFORM</Nav.Link>
                            </Nav>


                            {/* Items at the end */}
                            <div className="d-flex flex-column flex-lg-row align-items-end align-items-lg-center mt-3 mt-lg-0">
                                <Nav.Link href="#start" className="fw-bold me-lg-3">HOW TO START</Nav.Link>
                                <Button variant="outline-primary" className="nb-login-btn">
                                    LOGIN
                                </Button>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                {/* ===================== HERO SECTION ===================== */}
                <section id="home" className="nb-hero position-relative overflow-hidden">
                    <div className="nb-gradient">
                        <Container className="mt-2">
                            <Row className="align-items-center d-block">
                                <Col lg={6} className="order-lg-1 order-2 mt-2 pt-2">
                                    <div className="nb-hero-badge d-flex align-items-center">
                                        {/* SVG background circle */}
                                        <div className="position-relative me-2">
                                            <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 27 27"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M26.641 13.32C26.641 20.676 20.677 26.64 13.321 26.64C5.964 26.64 0 20.676 0 13.32C0 5.963 5.964 0 13.321 0C20.677 0 26.641 5.963 26.641 13.32Z"
                                                    fill="#C0C5DD"
                                                />
                                            </svg>
                                            {/* Rokicon positioned absolutely inside the circle */}
                                            <img
                                                src={Rokicon}
                                                alt=""
                                                className="position-absolute"
                                                style={{
                                                    top: '24%',
                                                    left: '79%',
                                                    transform: 'translate(-50%, -50%)',
                                                    width: '16px',
                                                    height: '16px'
                                                }}
                                            />
                                        </div>
                                        <span className="bold-colored-text">India's Fastest Growing Distribution Platform</span>
                                    </div>

                                    <h1 className="nb-hero-title">
                                        <span className="d-block fw-bold" style={{
                                            color: '#8390E3',
                                            fontSize: 'clamp(32px, 8vw, 67px)',
                                            whiteSpace: 'nowrap'
                                        }}>
                                            BUILD YOUR
                                        </span>
                                        <span className="d-block fw-bold" style={{
                                            color: '#3A4FD2',
                                            fontSize: 'clamp(28px, 7vw, 67px)',
                                            whiteSpace: 'nowrap'
                                        }}>
                                            MUTUAL FUND DISTRIBUTION BUSINESS
                                        </span>
                                    </h1>

                                    <div className="nb-hero-text mb-4 w-100">
                                        <p className="mb-1">
                                            Backed by professional fund management, financial products - mutual funds, fixed income, PMS & AIFs - open accessible pathways for
                                        </p>
                                        <p className="mb-1">
                                            long-term wealth creation for investors.
                                        </p>
                                        <p className="mb-0">
                                            Become a mutual fund distributor and offer clear guidance, practical insights, and steadfast support to investors while growing your income.
                                        </p>
                                    </div>

                                    <div className="d-flex flex-wrap gap-3 mb-5 nb-button-group">
                                        <button className="nb-btn primary lg">
                                            START YOUR JOURNEY <span className="ms-2">→</span>
                                        </button>
                                        <button className="nb-btn outline lg">
                                            EXPLORE PLATFORM <img src={Crossicon} alt="" className="ms-2" />
                                        </button>
                                    </div>

                                    <Row className="nb-stats-row g-4">
                                        <Col xs={12} md={6}>
                                            <div className="nb-stat-card">
                                                <img src={AUMicon} alt="" className="nb-stat-icon" />
                                                <div className="nb-stat__sep" aria-hidden />
                                                <div className="nb-stat-content">
                                                    <h3 className="nb-stat-number">74 Lakh Cr</h3>
                                                    <p className="nb-stat-label">Total Industry AUM</p>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col xs={12} md={6}>
                                            <div className="nb-stat-card">
                                                <img src={MFDicon} alt="" className="nb-stat-icon" />
                                                <div className="nb-stat__sep" aria-hidden />
                                                <div className="nb-stat-content">
                                                    <h3 className="nb-stat-number">10+ Lakh</h3>
                                                    <p className="nb-stat-label">MFDs Needed by 2030</p>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col xs={12} md={6}>
                                            <div className="nb-stat-card">
                                                <img src={investorAddicon} alt="" className="nb-stat-icon" />
                                                <div className="nb-stat__sep" aria-hidden />
                                                <div className="nb-stat-content">
                                                    <h3 className="nb-stat-number">5.4 Cr</h3>
                                                    <p className="nb-stat-label">New Investors Added</p>
                                                </div>
                                            </div>
                                        </Col>


                                    </Row>

                                </Col>

                                <Col lg={12} className="order-lg-2 order-1 text-center position-relative">
                                    <div className="nb-hero-image-container position-relative">
                                        {/* Animated Rings behind the image */}
                                        <div className="nb-hero-rings position-absolute">
                                            <span className="ring-1 position-absolute"></span>
                                            <span className="ring-2 position-absolute"></span>
                                            <span className="ring-3 position-absolute"></span>
                                        </div>

                                        {/* Main Image - centered */}
                                        <img
                                            src={Images1}
                                            alt="Advisor meeting with family"
                                            className="img-fluid nb-hero-img position-relative z-index-2"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="nb-divider nb-divider--thick" />
                </section>
            </div>

            {/* ===================== MARKET OVERVIEW ===================== */}
            <section id="market" className="nb-market py-5">
                <Container>
                    <div className="mb-5">
                        <span className="nb-pill">MARKET OVERVIEW</span>
                        <h2 className="nb-section-title mt-3">
                            <span className="text-primary">UNPRECEDENTED</span> GROWTH OPPORTUNITY
                        </h2>
                        <p className="nb-section-subtitle">
                            India's mutual fund industry is experiencing unprecedented growth,
                            creating massive opportunities for distributors
                        </p>
                    </div>

                    <Row className="g-4">
                        <Col lg={3} md={6}>
                            <div className="nb-mini-stat">
                                <img src={AUMicon} alt="" className="nb-mini-icon" />
                                <div className="nb-mini-sep"></div>
                                <div>
                                    <h3 className="nb-mini-number">74.1 Lakh Cr</h3>
                                    <p className="nb-mini-label">Industry AUM</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className="nb-mini-stat">
                                <img src={MFDpersonicon} alt="" className="nb-mini-icon" />
                                <div className="nb-mini-sep"></div>
                                <div>
                                    <h3 className="nb-mini-number">8.08 Lakh</h3>
                                    <p className="nb-mini-label">Active MFDs</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className="nb-mini-stat">
                                <img src={Personrupeesicon} alt="" className="nb-mini-icon" />
                                <div className="nb-mini-sep"></div>
                                <div>
                                    <h3 className="nb-mini-number">5.4 Cr</h3>
                                    <p className="nb-mini-label">New Investors</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6}>
                            <div className="nb-mini-stat">
                                <img src={Arrowupicon} alt="" className="nb-mini-icon" />
                                <div className="nb-mini-sep"></div>
                                <div>
                                    <h3 className="nb-mini-number">30%</h3>
                                    <p className="nb-mini-label">Tier 2/3 Growth</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ===================== GROWTH STORY ===================== */}
            <section className="nb-growth py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h3 className="nb-section-title">
                                <span className="text-primary">MUTUAL FUND</span> INDUSTRY GROWTH STORY
                            </h3>
                            <p className="nb-section-subtitle mb-4">
                                The Indian Mutual Fund Industry AUM has grown from ₹1 Lakh Crore
                                in March 2002 to ₹80.80 Lakh Crore in November 2025,<br /> translating
                                into a growth of more than 80 times.
                            </p>

                            <Row className="g-4 mb-4">
                                <Col md={4}>
                                    <div className="nb-growth-stat">
                                        <p className="nb-growth-label">Mutual Fund AUM</p>
                                        <h3 className="nb-growth-number">80.80</h3>
                                        <p className="nb-growth-label">Lakh Crore</p>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="nb-growth-stat">
                                        <p className="nb-growth-label">Mutual Fund Investor Accounts</p>
                                        <h3 className="nb-growth-number">25.86</h3>
                                        <p className="nb-growth-label"> Crore</p>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="nb-growth-stat">
                                        <p className="nb-growth-label">SIP Accounts</p>
                                        <h3 className="nb-growth-number">9.87</h3>
                                        <p className="nb-growth-label">Crore</p>
                                    </div>
                                </Col>
                            </Row>

                            <div className="nb-note-pill">
                                Mutual Fund AUM has Grown 6 Times in 10 Years with 20.00% Annual Growth
                            </div>
                        </Col>
                        <div className="nb-growth__ringsArea" aria-hidden>
                            <div className="circle1"></div>
                            <div className="circle2"></div>
                        </div>
                    </Row>
                </Container>
            </section>

            {/* ===================== YOU ARE THE NEXT ===================== */}

            <section className="nb-next py-5 position-relative">
                <Container>
                    <Row className="align-items-center py-5">
                        <Col lg={6}>
                            <span className="nb-pill">YOU ARE THE NEXT!</span>
                            <h2 className="nb-section-title mt-3 mb-4">
                                India Needs 10+ Lakh MFDs by 2030
                            </h2>
                            <p className="nb-section-subtitle mb-4">
                                To promote financial literacy in tier-2/3 cities, rural areas, and small businesses.
                                <br />
                                The future of wealth creation depends on a well-informed investor base.
                            </p>

                            <Row className="mb-4">
                                <Col xs={12} sm={6} className="mb-3">
                                    <div className="nb-mini-stat">
                                        <img src={investorAddicon} alt="" className="nb-mini-icon" />
                                        <div className="nb-mini-sep"></div>
                                        <div>
                                            <h3 className="nb-mini-number">30%</h3>
                                            <p className="nb-mini-label">Investors in Tier 2/3</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} className="mb-3">
                                    <div className="nb-mini-stat">
                                        <img src={investorAddicon} alt="" className="nb-mini-icon" />
                                        <div className="nb-mini-sep"></div>
                                        <div>
                                            <h3 className="nb-mini-number">5 Cr+</h3>
                                            <p className="nb-mini-label">Micro SIPs</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} className="mb-3">
                                    <div className="nb-mini-stat">
                                        <img src={Digital} alt="" className="nb-mini-icon" />
                                        <div className="nb-mini-sep"></div>
                                        <div>
                                            <h3 className="nb-mini-number">0.6%</h3>
                                            <p className="nb-mini-label">Digital Adoption</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} className="mb-3">
                                    <div className="nb-mini-stat">
                                        <img src={download} alt="" className="nb-mini-icon" />
                                        <div className="nb-mini-sep"></div>
                                        <div>
                                            <h3 className="nb-mini-number">2.78 Cr</h3>
                                            <p className="nb-mini-label">Growing Base</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Button variant="primary" className="nb-btn-primary">
                                START YOUR JOURNEY <span className="ms-2">→</span>
                            </Button>
                        </Col>

                        <Col lg={6} className="text-end position-relative  t-12">
                            <div className="nb-map-container">
                                <img src={Map} alt="Map" className="img-fluid" />
                            </div>
                        </Col>
                    </Row>
                </Container>

                {/* Divider at the bottom - image should touch this */}
                <div className="nb-divider nb-divider--thin" />
            </section>

            {/* ===================== MULTIPLE INCOME OPPORTUNITIES ===================== */}
            <section id="opportunities" className="nb-income py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <h2 className="nb-section-title mb-4">
                                <span className="text-primary">MULTIPLE</span> INCOME OPPORTUNITIES
                            </h2>
                            <p className="nb-section-subtitle mb-5">
                                Build a diversified revenue portfolio with multiple commission structures
                                <br />
                                and income streams
                            </p>

                            <Row className="g-4 mb-4">
                                <Col md={6}>
                                    <div className="nb-income-card">
                                        <div className="nb-income-card-header">
                                            <img src={AUMicon} alt="" className="nb-income-icon" />
                                            <h4 className="nb-income-card-title">Upfront MF Distribution Income</h4>
                                        </div>
                                        <p className="nb-income-card-text">
                                            Earn immediate commissions on client investments with transparent commission structures from day one.
                                        </p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="nb-income-card">
                                        <div className="nb-income-card-header">
                                            <img src={SIP} alt="" className="nb-income-icon" />
                                            <h4 className="nb-income-card-title">Regular SIP Income</h4>
                                        </div>
                                        <p className="nb-income-card-text">
                                            Create recurring revenue through systematic investment plans with predictable monthly income.
                                        </p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="nb-income-card">
                                        <div className="nb-income-card-header">
                                            <img src={Trail} alt="" className="nb-income-icon" />
                                            <h4 className="nb-income-card-title">Trail Commission</h4>
                                        </div>
                                        <p className="nb-income-card-text">
                                            Generate passive income from your existing client base with ongoing trail commissions.
                                        </p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="nb-income-card">
                                        <div className="nb-income-card-header">
                                            <img src={Lifetime} alt="" className="nb-income-icon" />
                                            <h4 className="nb-income-card-title">Lifetime Renewal</h4>
                                        </div>
                                        <p className="nb-income-card-text">
                                            Build sustainable business with lifetime renewal commissions and long-term client relationships.
                                        </p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="nb-income-card">
                                        <div className="nb-income-card-header">
                                            <img src={Commision} alt="" className="nb-income-icon" />
                                            <h4 className="nb-income-card-title">Flexible Commission</h4>
                                        </div>
                                        <p className="nb-income-card-text">
                                            Choose between upfront and brokerage models that best suit your business strategy
                                        </p>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="nb-income-card">
                                        <div className="nb-income-card-header">
                                            <img src={Insurance} alt="" className="nb-income-icon" />
                                            <h4 className="nb-income-card-title">Insurance Brokerage</h4>
                                        </div>
                                        <p className="nb-income-card-text">
                                            Expand offerings with insurance products for comprehensive financial solutions.
                                        </p>
                                    </div>
                                </Col>
                            </Row>

                            <Button variant="primary" className="nb-btn-primary">
                                START YOUR JOURNEY <span className="ms-2">→</span>
                            </Button>
                        </Col>
                        <Col lg={6} className="text-center">
                            <div className="nb-income-image-container">
                                <img src={Images2} alt="Professional celebrating success" className="img-fluid nb-income-img" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ===================== CAPITALIZING ===================== */}
            <section id="platform" className="nb-cap py-5">
                <Container>
                    <div className="mb-5">
                        <div className="nb-cap-badge">CAPITALIZING ON THE DISTRIBUTION OPPORTUNITY</div>
                        <h2 className="nb-section-title mt-3 mb-4">
                            India Needs 10+ Lakh MFDs by 2030
                        </h2>
                        <p className="nb-section-subtitle">
                            To promote financial literacy in tier-2/3 cities, rural areas, and small businesses.
                            <br />
                            The future of wealth creation depends on a well-informed investor base.
                        </p>
                    </div>

                    <Row className="g-4 mb-5">
                        <Col lg={6} md={6}>
                            <div className="nb-cap-card">
                                <img src={Leverage} alt="" className="nb-cap-icon" />
                                <h4 className="nb-cap-card-title">Leverage India's Expanding Financial Products Landscape</h4>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className="nb-cap-card">
                                <img src={Capitalize} alt="" className="nb-cap-icon" />
                                <h4 className="nb-cap-card-title">Capitalize On The Recurring Income Model</h4>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className="nb-cap-card">
                                <img src={goalbased} alt="" className="nb-cap-icon" />
                                <h4 className="nb-cap-card-title">Adopt A Goal-Based Advisory Approach</h4>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className="nb-cap-card">
                                <img src={Position} alt="" className="nb-cap-icon" />
                                <h4 className="nb-cap-card-title">Position Yourself As A Trusted Guide</h4>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className="nb-cap-card">
                                <img src={diversion} alt="" className="nb-cap-icon" />
                                <h4 className="nb-cap-card-title">Diversification Across Asset Classes</h4>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className="nb-cap-card">
                                <img src={Transparent} alt="" className="nb-cap-icon" />
                                <h4 className="nb-cap-card-title">Transparent Structures & Reporting</h4>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className="nb-cap-card">
                                <img src={Moneybag} alt="" className="nb-cap-icon" />
                                <h4 className="nb-cap-card-title">Low Barriers To Entry</h4>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className="nb-cap-card">
                                <img src={Flexibility} alt="" className="nb-cap-icon" />
                                <h4 className="nb-cap-card-title">Flexibility Across Solutions</h4>
                            </div>
                        </Col>

                    </Row>
                    <Row className="justify-content-center">
                        <Col lg={6} md={6}>
                            <div className="nb-cap-card nb-cap-card-wide">
                                <img src={Relationships} alt="" className="nb-cap-icon" />
                                <h4 className="nb-cap-card-title">
                                    Build Long-Term Relationships,<br />Not Momentary Engagements
                                </h4>
                            </div>
                        </Col>
                    </Row>


                    <div className="text-end">
                        <Button variant="primary" className="nb-btn-primary">
                            START YOUR JOURNEY <span className="ms-2">→</span>
                        </Button>
                    </div>
                </Container>
            </section>

            {/* ===================== 3 STEPS ===================== */}
            <section id="start" className="nb-steps py-5">
                <Container>
                    <div className="mb-5">
                        <span className="nb-pill">JUST 3 STEPS!</span>
                        <h2 className="nb-section-title mt-3">
                            Become a Nirmal Bang Mutual Fund Distributor in just 3 steps
                        </h2>
                    </div>

                    {/* Steps Container with Arrows */}
                    <div className="nb-steps__canvas position-relative" style={{ height: "500px" }}>
                        {/* First Dashed Arrow */}
                        <div className="position-absolute" style={{ top: "46px", left: "473px" }}>
                            <svg
                                width="210"
                                height="159"
                                viewBox="0 0 210 159"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.993652 158.194C5.21965 120.805 32.6576 8.72002 209.605 0.999023"
                                    stroke="#6674BC"
                                    strokeWidth="2"
                                    strokeDasharray="8.07 8.07"
                                />
                            </svg>
                        </div>

                        {/* First Arrow Head */}
                        <div className="position-absolute" style={{ bottom: "33px", left: "681px" }}>
                            <svg
                                width="18"
                                height="20"
                                viewBox="0 0 18 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.22778 9.3929C2.55178 9.3479 3.88478 9.3079 5.22578 9.2749"
                                    stroke="#6674BC"
                                    strokeWidth="2"
                                />
                                <path
                                    d="M17.3 9.131C11.668 11.363 4.702 15.113 0.419 19.017L3.649 9.432L0 0C4.451 3.711 11.575 7.151 17.3 9.131Z"
                                    fill="#6674BC"
                                />
                            </svg>
                        </div>

                        {/* Step 1 Card */}
                        <div className="position-absolute" style={{ left: "148px", top: "415px" }}>
                            <div className="nb-step-card">
                                <div className="nb-step-number">1</div>
                                <h4 className="nb-step-title">Register With Nirmal Bang</h4>
                                <p className="nb-step-text">
                                    Post registering access comprehensive learning support and begin your journey as distributors of financial products
                                </p>
                            </div>
                        </div>

                        {/* Second Dashed Arrow */}
                        <div className="position-absolute" style={{ top: "244px", left: "183px" }}>
                            <svg
                                width="210"
                                height="159"
                                viewBox="0 0 210 159"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.993652 158.194C5.21965 120.805 32.6576 8.72002 209.605 0.999023"
                                    stroke="#6674BC"
                                    strokeWidth="2"
                                    strokeDasharray="8.07 8.07"
                                />
                            </svg>
                        </div>

                        {/* Second Arrow Head */}
                        <div className="position-absolute" style={{ bottom: "244px", left: "397px" }}>
                            <svg
                                width="18"
                                height="20"
                                viewBox="0 0 18 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.22778 9.3929C2.55178 9.3479 3.88478 9.3079 5.22578 9.2749"
                                    stroke="#6674BC"
                                    strokeWidth="2"
                                />
                                <path
                                    d="M17.3 9.131C11.668 11.363 4.702 15.113 0.419 19.017L3.649 9.432L0 0C4.451 3.711 11.575 7.151 17.3 9.131Z"
                                    fill="#6674BC"
                                />
                            </svg>
                        </div>

                        {/* Step 2 Card */}
                        <div className="position-absolute" style={{ left: "433px", top: "210px" }}>
                            <div className="nb-step-card">
                                <div className="nb-step-number">2</div>
                                <h4 className="nb-step-title">Get NISM Certified</h4>
                                <p className="nb-step-text">
                                    Appear for the NISM examination with our guidance and study materials to get certified.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 Card */}
                        <div className="position-absolute" style={{ left: "707px", top: "40px" }}>
                            <div className="nb-step-card">
                                <div className="nb-step-number">3</div>
                                <h4 className="nb-step-title">Apply for ARN Code</h4>
                                <p className="nb-step-text">
                                    Submit your application to AMFI for your AMFI Registration Number (ARN) and begin offering your services as distributors of our financial products
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5">
                        <Button variant="primary" className="nb-btn-primary">
                            START YOUR JOURNEY <span className="ms-2">→</span>
                        </Button>
                    </div>
                </Container>
            </section>

            {/* ===================== WEALTH ADVANTAGE ===================== */}
            <section className="nb-adv">
                <Container>
                    <div className="mt-3">
                        <span className="nb-pill nb-pill-wide">The Nirmal Bang Wealth Advantage</span>
                        <p className="nb-section-subtitle mt-3">
                            Build a Business That Scales With strong research, reliable technology,
                            and structured support across multiple financial products
                        </p>
                    </div>
                    <div>
                        <AdvantageSection />
                    </div>

                </Container>
            </section>

            {/* ===================== ABOUT ===================== */}
            <section className="nb-about py-5">
                <Container>
                    <div className="mb-5">
                        <span className="nb-pill nb-pill-wide">ABOUT NIRMAL BANG WEALTH</span>
                    </div>

                    <Row className="align-items-center">
                        <Col lg={12}>
                            <div className="nb-about-content">
                                <Col lg={12}>
                                    <p className="mb-4">
                                        <strong>Nirmal Bang Wealth Pvt Ltd (NBWPL)</strong> provides end-to-end solutions
                                        to financial market intermediaries and distributors of financial products.
                                        Supported by robust technology and a solid commitment to service excellence,
                                        NBWPL empowers Business Associates to focus on their clients while the company
                                        manages operations seamlessly behind the scenes.
                                    </p>

                                    <p className="mb-4">
                                        As part of the Nirmal Bang Group, our Financial Products Distribution arm has
                                        built a large network of distributors of financial products across India,
                                        demonstrating steady and consistent growth. Our partnerships with every Asset
                                        Management Company in the country enable distributors to offer an extensive
                                        range of high-quality investment options.
                                    </p>
                                    <p className="mb-4">
                                        NBWPL delivers a comprehensive suite of investment products including:
                                    </p>


                                </Col>
                            </div>
                        </Col>
                        <Row>
                            <Col>
                                <div className="nb-about-list mb-4">
                                    <div className="nb-about-list-item">
                                        <img src={Mutual} alt="" className="nb-about-icon" />
                                        <span>Mutual Funds</span>
                                    </div>
                                    <div className="nb-about-list-item">
                                        <img src={Portfolio} alt="" className="nb-about-icon" />
                                        <span>Portfolio Management Services (PMS)</span>
                                    </div>
                                    <div className="nb-about-list-item">
                                        <img src={Alternative} alt="" className="nb-about-icon" />
                                        <span>Alternative Investment Funds (AIFs)</span>
                                    </div>
                                    <div className="nb-about-list-item">
                                        <img src={Income} alt="" className="nb-about-icon" />
                                        <span>Fixed Income Products – Government Securities, Primary & Secondary Market Bonds, NCDs, MLDs, Corporate Fixed Deposits</span>
                                    </div>
                                </div>

                                <p className="mb-4">
                                    This breadth ensures distributors can meet the diverse needs of every investor profile.
                                </p>

                                <p>
                                    Nirmal Bang Wealth stands as your trusted partner, helping distributors of
                                    financial products build a strong, future-ready, and client-centered advisory
                                    practice that grows sustainably over time.
                                </p>
                            </Col>
                            <Col>
                                <Col lg={4} className="text-center">
                                    <img src={money} alt="Wealth Illustration" className="img-fluid nb-about-img" />
                                </Col>

                            </Col>
                        </Row>
                    </Row>
                </Container>
            </section>
        </div>
    );
}