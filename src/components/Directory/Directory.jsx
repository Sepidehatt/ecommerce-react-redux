import React from 'react';
import './styles.scss';
import shopMen from './../../assets/images/m-5.jpg';
import shopWomen from './../../assets/images/w-1.jpg';

const Directory = () => {
    return (
        <div className="directory">
            <div className="wrap">
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${shopWomen})`,
                    }}
                >
                    <a>Womens</a>
                </div>
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${shopMen})`,
                    }}
                >
                    <a>Mens</a>
                </div>
            </div>
        </div>
    );
};

export default Directory;
