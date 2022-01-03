import React from "react";
import SellingItem from "../sellingItem/SellingItem";

export default function MenWear() {
    return <div>
        <div className="bg-letter">
            <div className="container">
                <div class="row d-flex flex-column flex-md-row justify-content-center">
                    <div class="col-12 col-md-5 my-3 my-md-0 mx-3 d-flex flex-column align-items-center">
                        <SellingItem img="/assets/images/gafas.jpg" url="#" style={{ width: '80%', height: 400 }} className={'my-5'} />
                        <img src="/assets/images/hombre-serio.jpg" alt="banner" className="img-fluid" />
                    </div>
                    <div class="col-12 col-md-5 my-3 my-md-0 mx-3 d-flex flex-column align-items-center">
                        <img src="/assets/images/hombre-jean.jpg" alt="banner" className="img-fluid" />
                        <SellingItem img="/assets/images/zapato-2.jpg" url="#" style={{ width: '80%', height: 400 }} className={'my-5'} />
                    </div>
                </div>
            </div>
        </div>
    </div >
}