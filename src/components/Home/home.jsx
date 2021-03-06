import React from 'react'
import BannerAnim from 'rc-banner-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import image2 from '../../../static/2.jpg';
import image3 from '../../../static/3.jpg';
import image4 from '../../../static/4.jpg';
import 'rc-banner-anim/assets/index.css';
import './home.css';
import dict from "../dictionary/dictionary"
import { I18n } from 'aws-amplify';
import { Button, Layout } from 'antd';
import "../../style/home.css";
import { Link, navigate } from "gatsby";

const { Footer } = Layout;
const { Element, Arrow, Thumb } = BannerAnim;
const BgElement = Element.BgElement;

class Home extends React.Component {
    constructor() {
        super(...arguments);
        this.imgArray = [
            image2, image3, image4
        ];
        this.state = {
            intShow: 0,
            prevEnter: false,
            nextEnter: false,
            thumbEnter: false,
            // lan: window.localStorage.getItem('lan')
        };
        [
            'onChange', //
            'prevEnter', // enter prev button
            'prevLeave', // leave prev button
            'nextEnter',
            'nextLeave',
            'onMouseEnter', // when mouse hoover
            'onMouseLeave', // when mouse leave
        ].forEach((method) => this[method] = this[method].bind(this));
    }

    onChange(type, int) {
        if (type === 'before') {
            this.setState({
                intShow: int,
            });
        }
    }

    getNextPrevNumber() {
        let nextInt = this.state.intShow + 1;
        let prevInt = this.state.intShow - 1;
        if (nextInt >= this.imgArray.length) {
            nextInt = 0;
        }
        if (prevInt < 0) {
            prevInt = this.imgArray.length - 1;
        }

        return [prevInt, nextInt];
    }

    prevEnter() {
        this.setState({
            prevEnter: true,
        });
    }

    prevLeave() {
        this.setState({
            prevEnter: false,
        });
    }

    nextEnter() {
        this.setState({
            nextEnter: true,
        });
    }

    nextLeave() {
        this.setState({
            nextEnter: false,
        });
    }

    onMouseEnter() {
        this.setState({
            thumbEnter: true,
        });
    }

    onMouseLeave() {
        this.setState({
            thumbEnter: false,
        });
    }

    render() {
        I18n.putVocabularies(dict);
        // I18n.setLanguage(this.state.lan);

        const intArray = this.getNextPrevNumber();
        const thumbChildren = this.imgArray.map((img, i) =>
            <span key={i}><i style={{ backgroundImage: `url(${img})` }} /></span>
        );
        return (
            <div className="full">
                <BannerAnim
                    onChange={this.onChange}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    prefixCls="custom-arrow-thumb"
                    autoPlay={true}
                >
                    <Element
                        key="aaa"
                        prefixCls="banner-user-elem"
                    >
                        <BgElement
                            key="bg"
                            className="bg"
                            style={{
                                backgroundImage: `url(${this.imgArray[0]})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                            {I18n.get('JobFirst')}
                        </TweenOne>
                        <TweenOne
                            className="banner-user-text custom-description"
                            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                        >
                            {I18n.get('Where immigrants with degrees find their jobs.')}
                            <div>
                                <Button className="custom-button" ghost onClick={() => navigate('/app/job-list')}>{I18n.get('Click to view jobs')}</Button>
                            </div>

                        </TweenOne>
                    </Element>
                    <Element
                        key="bbb"
                        prefixCls="banner-user-elem"
                    >
                        <BgElement
                            key="bg"
                            className="bg"
                            style={{
                                backgroundImage: `url(${this.imgArray[1]})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                            {I18n.get('JobFirst')}
                        </TweenOne>
                        <TweenOne
                            className="banner-user-text custom-description"
                            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                        >
                            {I18n.get('Where companies find talents.')}
                            <div>
                                <Button className="custom-button" ghost onClick={() => navigate('/app/talent-list')}>{I18n.get('Click to see them')}</Button>
                            </div>
                        </TweenOne>
                    </Element>
                    <Element
                        key="ccc"
                        prefixCls="banner-user-elem"
                    >
                        <BgElement
                            key="bg"
                            className="bg"
                            style={{
                                backgroundImage: `url(${this.imgArray[2]})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                            {I18n.get('JobFirst')}
                        </TweenOne>
                        <TweenOne
                            className="banner-user-text custom-description"
                            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                        >
                            {I18n.get('Get Started Today.')}
                            <div>
                                <Button className="custom-button" ghost onClick={() => navigate('/app/signup')}>{I18n.get('Register now')}</Button>
                            </div>
                        </TweenOne>
                    </Element>
                    <Arrow arrowType="prev" key="prev" prefixCls="user-arrow prev" component={TweenOne}
                        onMouseEnter={this.prevEnter}
                        onMouseLeave={this.prevLeave}
                        animation={{ left: this.state.prevEnter ? 0 : -120 }}
                    >
                        <div className="arrow"></div>
                        <TweenOneGroup
                            enter={{ opacity: 0, type: 'from' }}
                            leave={{ opacity: 0 }}
                            appear={false}
                            className="img-wrapper"
                            component="ul"
                        >
                            <li style={{ backgroundImage: `url(${this.imgArray[intArray[0]]})` }} key={intArray[0]} />
                        </TweenOneGroup>
                    </Arrow>
                    <Arrow arrowType="next" key="next" prefixCls="user-arrow next" component={TweenOne}
                        onMouseEnter={this.nextEnter}
                        onMouseLeave={this.nextLeave}
                        animation={{ right: this.state.nextEnter ? 0 : -120 }}
                    >
                        <div className="arrow"></div>
                        <TweenOneGroup
                            enter={{ opacity: 0, type: 'from' }}
                            leave={{ opacity: 0 }}
                            appear={false}
                            className="img-wrapper"
                            component="ul"
                        >
                            <li style={{ backgroundImage: `url(${this.imgArray[intArray[1]]})` }} key={intArray[1]} />
                        </TweenOneGroup>
                    </Arrow>
                    <Thumb prefixCls="user-thumb" key="thumb" component={TweenOne}
                        animation={{ bottom: this.state.thumbEnter ? 0 : -70 }}
                    >
                        {thumbChildren}
                    </Thumb>
                </BannerAnim>
                <Footer style={{ textAlign: 'center' }}>
                    {I18n.get('JobFirst')} ©2019 {I18n.get('Created by JobFirst Group')}
                </Footer>
            </div>
        );
    }
}

export default Home;
