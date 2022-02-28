import "./Product.css";

function Product() {
    return (
        <div>

            <div className='Container'>
                <h1 className='col'>Product Page</h1>
                <div className='row'>
                    <img className='col-sm-6' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.dczKYPyvxiqGz4Ar5_Zr4AHaHS%26pid%3DApi&f=1' alt='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UHId2ZmOCtgYmSro7uZksQHaEK%26pid%3DApi&f=1' />
                    <p className='col-sm-6'>
                        <h3>Samsung</h3>
                        <h1 className="product-h1">Galaxy A32 5G</h1>
                        <br />
                        <div>
                            <button className='button' type="button" class="btn btn-dark btn-lg">64GB</button>
                            <button className='button' type="button" class="btn btn-dark btn-lg">128GB</button>
                        </div>
                        <br />
                        <div>
                            <span className="badge1 btn rounded-btn-lg">Green</span>
                            <span className="badge2 btn rounded-btn-lg">Red</span>
                            <span className="badge3 btn rounded-btn-lg">Black</span>

                        </div>
                    </p>
                    <br />

                </div>
                <div className='row'>

                    <section className='col-md-4'>
                        <ul>
                            <li>Color: Black</li>
                            <li>Android version 11</li>
                            <li>6.5" HD+ Infinity V 60Hz</li>
                            <li>RAM/ROM: 4GB / 64GB0</li>
                            <li>Processor: Mediatek Dimensity MT6853 8x 2.0GHz</li>
                            <li>Camera Rear: 48/8/5/2MP Quad Cam</li>
                            <li>Camera Front: 13MP Selfie Camera</li>
                            <li>Network: 5GTDD mmWave, 5G FDD Sub6, 4G TDD LTE, 4G FDD LTE 5G Ready</li>
                            <li>Wi-Fi: 802.11 a/b/g/n/ac 2.4G+5GHz, VHT80</li>
                            <li>Connectivity: Bluetooth v5.0, USB Type-C</li>
                            <li>Sensor Type: Accelerometer, Barometer, Fingerprint Sensor, Gyro Sensor, Geomagnetic Sensor, Hall Sensor, Virtual Light Sensing, Virtual Proximity Sensing. -Li-Ion 5000 mAh, non-removable</li>
                            <li>M3/T3 Hearing Aid Compatibility</li>
                            <li>This phone includes a one year manufacturer warranty</li>
                        </ul>
                    </section>
                    <p className='col-md-8'>
                        Galaxy A32 5G pairs awesome core features with our most affordable 5G devices on the market. That means you get a long-lasting battery, expandable storage, multiple cameras, a super-crisp display and blazing-fast 5G speed.
                    </p>


                </div>

            </div>
        </div >
    );
}

export default Product;