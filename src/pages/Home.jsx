import React, {useState, useEffect} from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../assets/data/products";

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";

import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";

import Clock from "../components/UI/Clock";

import counterImg from "../assets/images/counter-timer-img.png";


const Home = () => {

    const [trendingProducts, setTrendingProducts] = useState([]);
    const [bestSalesProducts, setBestSalesProducts] = useState([]);
    const [mobileProducts, setMobileProducts] = useState([]);
    const [wirelessProducts, setWirelessProducts] = useState([]);

    const year = new Date().getFullYear();

    useEffect(()=>{
        const filterdTrendingProducts = products.filter(
            (item) => item.category ==="chair");

        const filterdBestSalesProducts = products.filter(
            (item) => item.category ==="sofa");

        const filterdMobileProducts = products.filter(
            (item) => item.category ==="mobile");

        const filterdWirelessProducts = products.filter(
            (item) => item.category ==="wireless");

        setTrendingProducts(filterdTrendingProducts);
        setBestSalesProducts(filterdBestSalesProducts);
        setMobileProducts(filterdMobileProducts);
        setWirelessProducts(filterdWirelessProducts);
    }, []);

    return (
    <Helmet title={"Home"}>
        <section className="hero__section">
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="hero__content">
                            <p className="hero_subtitle">Trending product in {year}</p>
                            <h2>Make Your Interior More Minimalistic & Modern </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia placeat omnis cum error ipsa id iusto quis voluptate, eos perferendis!</p>
                            
                        </div>
                    </Col>

                    <Col lg="6" md="6">
                        <div className="hero__img">
                            <img src={heroImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <Services/>
        <section className="trending__products">
            <Container>
                <Row>
                    <Col lg="12" className="text-center">
                        <h2 className="section__title">Trending Products</h2>
                    </Col>
                    <ProductsList data={trendingProducts} />
                </Row>
            </Container>
        </section>

        <section className="best__sales">
            <Container>
                <Row>
                    <Col lg="12" className="text-center">
                            <h2 className="section__title">Best Sales</h2>
                    </Col>
                    <ProductsList data={bestSalesProducts} />
                </Row>
            </Container>
        </section>

        <section className="timer__count">
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="clock__top-content">
                            <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                            <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
                        </div>

                        <Clock />
                        <motion.button whileTap={{ scale: 1.2 }} className="buy__btn store__btn">
                            <Link to="/shop">Visit store</Link>
                        </motion.button>
                    </Col>

                    <Col lg="6" md="6" className="text-end">
                        <img src={counterImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>

        <section className="new__arrivals">
            <Container>
                <Row>
                    <Col lg="12" className="text-center mb-5">
                        <h2 className="section__title">New Arrivals</h2>
                    </Col>
                    <ProductsList data={mobileProducts} />
                    <ProductsList data={wirelessProducts} />
                </Row>
            </Container>
        </section>

    </Helmet>
    );
};

export default Home;