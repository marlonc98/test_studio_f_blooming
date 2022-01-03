import React from "react";
import SellingItem from "../sellingItem/SellingItem";

export default function GirlWear() {
    return <div>
        <div className="bg-letter">
            <div className="container">
                <div className="row d-flex align-items-center justify-content-center py-3 py-md-0">
                    <div className="col-12 col-md-5 px-5 my-3 my-md-0">
                        <img src="/assets/images/ropa-mujer.jpg" alt="banner" className="bannerImg" />
                    </div>
                    <SellingItem img="/assets/images/combo-pepitas.jpg" url="#" style={{ width: 250, height: 300 }} />
                </div>
            </div>
            <div className="bg-letter py-3">
                <div className="container my-5">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <img src="./assets/images/vestido-mujer.jpg" alt="without-glasses" className="img-fluid" />
                        </div>
                        <div className="col-12 col-md-4 d-flex flex-column justify-content-between my-5 my-md-0">
                            <SellingItem img="/assets/images/glasses.jpg" url="#" style={{ width: '100%', height: '48%', minHeight: 180 }} className={'mb-2'} />
                            <SellingItem img="/assets/images/bolso.jpg" url="#" style={{ width: '100%', height: '48%', minHeight: 180 }} />
                        </div>
                        <div className="col-12 col-md-4">
                            <img src="./assets/images/falda-mujer.jpg" alt="with-glasses" className="img-fluid" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div >
}